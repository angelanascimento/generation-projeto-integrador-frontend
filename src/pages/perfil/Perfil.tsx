import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import defaultProfile from "../../assets/img/perfil/default-img.png";

import { AuthContext } from "../../contexts/AuthContext";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [usuario.token]);

  return (
    <div className="container mx-auto mt-4 rounded-2xl overflow-hidden">
      <img
        className="w-full h-72 object-cover border-b-8 border-white"
        src="https://i.imgur.com/ZZFAmzo.jpg"
        alt="Capa do Perfil"
      />

      <img
        className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10 profileImg"
        src={usuario.url ? usuario.url : defaultProfile}
        alt={`Foto de perfil de ${usuario.name}`}
      />

      <div
        className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-sky-500 text-white text-2xl items-center justify-center"
      >
        <p>Nome: {usuario.name} </p>
        <p>Email: {usuario.email}</p>
      </div>
    </div>
  );
}

export default Perfil;
