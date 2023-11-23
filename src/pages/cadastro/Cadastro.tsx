import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import { cadastrarUsuario } from "../../services/Service";
import Usuario from "../../models/Usuario";

import "./Cadastro.scss";
import { toastAlerta } from "../../utils/toastAlerta";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    cpf: "",
    cnpj: "",
    cep: "",
    name: "",
    about: "",
    gender: "",
    ethnicity: "",
    born: "",
    url: "",
    type: "",
    email: "",
    password: "",
    created_at: ""
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  function atualizarEstadoSelect(e: ChangeEvent<HTMLSelectElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  function atualizarEstadoTextArea(e: ChangeEvent<HTMLTextAreaElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.password && usuario.password.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/users/sign-up`, usuario, setUsuario);
        toastAlerta("Usuário cadastrado com sucesso", "sucesso");
      } catch (error) {
        toastAlerta("Erro ao cadastrar o Usuário", "erro");
      }
    } else {
      toastAlerta("Erro ao cadastrar o Usuário", "erro");
      setUsuario({ ...usuario, password: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }

  return (
    <div className="grid grid-cols-1 h-screen lg:grid-cols-5 xl:grid-cols-5 ">
      <div className="hidden lg:flex lg:w-full xl:w-full lg:col-span-2 lg:col-start-1 xl:col-span-2 xl:col-start-1">
        <img src="src/assets/img/photos-about/mikhail-nilov.jpg" className="" />
      </div>
      <div className="w-full h-full flex justify-center lg:col-span-3 lg:col-start-3 xl:col-span-3 xl:col-start-3">
        <form
          className="flex flex-col justify-center w-full p-[2rem] gap-2 items-center font-bold md:w-[90%] lg:w-[90%] xl:w-[80%]  "
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="name"
              required
              className="appInput border-2 border-cor-primaria rounded p-2 "
              value={usuario.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-wrap w-full justify-between xl:flex-nowrap gap-2">
            <div className="flex flex-col w-full xl:w-[65.5%]">
                <label htmlFor="endereco">Endereço</label>
                <input
                  type="text"
                  id="endereco"
                  name="address"
                  className="appInput border-2 border-cor-primaria rounded p-2"
                  //value={usuario.cep}
                  //onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
              <div className="flex flex-col w-full xl:w-[31%]">
                <label htmlFor="cep">CEP</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  required
                  className="appInput border-2 border-cor-primaria rounded p-2"
                  value={usuario.cep}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
          </div>
          
          <div className="flex flex-wrap w-full justify-between xl:flex-nowrap gap-2">
          <div className="flex flex-col w-full xl:w-[31%]">
              <label htmlFor="tipo">Tipo de Perfil</label>
              <select
                id="tipo"
                name="type"
                className="appInput border-2 border-cor-primaria rounded p-2"
                value={usuario.type}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => atualizarEstadoSelect(e)}
              > 
                <option value="" selected disabled>selecione um perfil</option>
                <option value="comprador">Comprador</option>
                <option value="vendedor">Vendedor</option>
              </select>
            </div>

            <div className="flex flex-col w-full xl:w-[31%]">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                className="appInput border-2 border-cor-primaria rounded p-2"
                value={usuario.cpf}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full xl:w-[31%]">
              <label htmlFor="cnpj">CNPJ</label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                className="appInput border-2 border-cor-primaria rounded p-2"
                value={usuario.cnpj}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario">E-mail</label>
            <input
              type="text"
              id="usuario"
              name="email"
              required
              placeholder="exemplo@gmail.com.br"
              className="appInput border-2 border-cor-primaria rounded p-2"
              value={usuario.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="url"
              placeholder="URL da foto"
              className="appInput border-2 border-cor-primaria rounded p-2"
              value={usuario.url}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="about">Sobre</label>
            <textarea
              id="sobre"
              name="about"
              rows={3}
              cols={5}
              className="appInput border-2 border-cor-primaria rounded p-2"
              value={usuario.about}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstadoTextArea(e)}
            />
            <p className="text-lime-700 text-base ">No máximo 1000 caracteres</p>
          </div>
          <div className="flex flex-wrap w-full justify-between xl:flex-nowrap gap-2">
            <div className="flex flex-col w-full xl:w-[48%]">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="password"
                required
                className="appInput border-2 border-cor-primaria rounded p-2"
                value={usuario.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
              <div className="flex flex-col w-full xl:w-[48%]">
                <label htmlFor="confirmarSenha">Confirmar Senha</label>
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  required
                  className="appInput border-2 border-cor-primaria rounded p-2"
                  value={confirmaSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleConfirmarSenha(e)
                  }
                />
              </div>
          </div>

          <div className="w-full my-4">
            <div>
              <input 
              type="checkbox"
              id="newsletter"
              name="newsletter"
              />
              <label htmlFor="newsletter" className="ml-2 ">Receber novidades, informações e ofertas</label>
            </div>
            <div>
            <input 
              type="checkbox"
              id="newsletter"
              name="newsletter"
              />
              <label htmlFor="newsletter" className="ml-2">
              Eu li e concordo com esses <a href="https://drive.google.com/file/d/18C16W0i3gQE_C6z1ctQzAQ_JzhT7A-Jf/view?usp=sharing" target="_blank" className="underline text-lime-700">termos e condições</a>
              </label>
            </div>
          </div>

          <div className="flex justify-around w-full gap-8">
            <button
              className="rounded bg-app-red text-white hover:bg-red-600 w-1/2 py-2"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              className="primaryAppButton bg-green rounded flex justify-center
                      text-white w-1/2 py-2"
              type="submit"
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
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default Cadastro;
