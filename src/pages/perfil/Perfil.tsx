import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import defaultProfile from "../../assets/img/perfil/default-img.png";

import { AuthContext } from "../../contexts/AuthContext";
import ListaProduto from "../../components/produtos/listaProduto/ListaProduto";
import Seals from "../../components/seals/Seals";
import PaymentMethods from "../../components/payment-methods/PaymentMethods";

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
                    bg-white text-black text-2xl items-center justify-center"
      >
        <p>Nome: {usuario.name} </p>
        <p>Email: {usuario.email}</p>
      </div>
      <div className='border flex flex-col rounded-2xl overflow-hidden justfy-between"'>
        <header className='py-2 px-6 bg-green text-white font-bold text-2xl flex items-center justify-center py-2'>Produtos</header>


        <div className="flex">
          <Link to='/cadastroProduto'
            className='w-full text-slate-100 bg-cor-primaria hover:bg-cor-destaque
                        flex items-center justify-center py-2'>
            <button>Cadastrar Produto</button>
          </Link>


        </div>

      </div>
      <div className='border flex flex-col rounded-2xl overflow-hidden justfy-between'>
        <header className='py-2 px-6 bg-green text-white font-bold text-2xl flex items-center justify-center py-2'>Categorias</header>


        <div className="flex">
          <Link to='/cadastroCategorias'
            className='w-full text-slate-100 bg-cor-primaria hover:bg-cor-destaque
                        flex items-center justify-center py-2'>
            <button>Cadastrar Categoria</button>
          </Link>


        </div>

      </div>
     
      
    </div>
    
  );
}

export default Perfil;