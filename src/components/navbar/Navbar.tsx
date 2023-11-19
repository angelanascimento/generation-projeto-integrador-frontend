import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "info");
    navigate("/login");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div
        className="w-full bg-[#385937] text-white
                flex justify-center py-4"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home">Comercio Com Causa</Link>

          <div className="flex gap-4">
            <Link to="/home" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              Sobre nós
            </Link>
            <Link to="/cadastro" className="hover:underline">
              Cadastro
            </Link>
            <Link to="/produtos" className="hover:underline">
              Produtos
            </Link>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastroCategorias" className="hover:underline">
              Cadastrar Categoria
            </Link>
            <Link to="/contatos" className="hover:underline">
              Contatos
            </Link>
            <Link to="/perfil" className="hover:underline">
              Perfil
            </Link>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="" onClick={logout} className="hover:underline">
              Sair{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return <>{component}</>;
}

export default Navbar;
