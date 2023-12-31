import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

import UsuarioLogin from "../../models/UsuarioLogin";

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <form
          className="flex justify-center items-center flex-col w-1/2 gap-4"
          onSubmit={login}
        >
          <h2 className="text-slate-900 text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="email"
              placeholder="exemplo@email.com"
              className="appInput border-2 border-cor-primaria rounded p-2"
              value={usuarioLogin.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="password"
              placeholder="Senha"
              className="appInput border-2 border-cor-primaria rounded p-2"
              value={usuarioLogin.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <button
            type="submit"
            className="primaryAppButton bg-green rounded flex justify-center
                                 text-white w-1/2 py-2"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Entrar</span>
            )}
          </button>

          <hr className="border-cor-primaria w-full" />

          <p>
            Ainda não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-green hover:underline hover:text-cor-destaque"
            >
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  );
}

export default Login;
