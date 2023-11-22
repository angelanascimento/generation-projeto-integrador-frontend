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
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center font-bold">
      <div className="fundoCadastro hidden lg:block h-full"></div>
      <form
        className="cadastroContainer flex justify-center items-center flex-col w-2/3 gap-3"
        onSubmit={cadastrarNovoUsuario}
      >
        <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
        <div className="flex flex-col w-full">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="name"
            placeholder="Nome"
            className="appInput border-2 border-cor-primaria rounded p-2"
            value={usuario.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            name="email"
            placeholder="exemplo@gmai.com"
            className="appInput border-2 border-cor-primaria rounded p-2"
            value={usuario.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            name="cep"
            placeholder="Cep"
            className="appInput border-2 border-cor-primaria rounded p-2"
            value={usuario.cep}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col w-full">
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

        <div className="flex flex-col w-full">
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Cpf"
            className="appInput border-2 border-cor-primaria rounded p-2"
            value={usuario.cpf}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="cnpj">CNPJ</label>
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            placeholder="Cnpf"
            className="appInput border-2 border-cor-primaria rounded p-2"
            value={usuario.cnpj}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="about">Sobre</label>
          <textarea
            id="sobre"
            name="about"
            rows={4}
            cols={5}
            className="appInput border-2 border-cor-primaria rounded p-2"
            value={usuario.about}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstadoTextArea(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="genero">Gênero</label>
          <input
            type="text"
            id="genero"
            name="gender"
            placeholder="Gender"
            className="appInput border-2 border-cor-primaria rounded p-2"
            value={usuario.gender}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="etnia">Etnia</label>
          <input
            type="text"
            id="etnia"
            name="ethnicity"
            placeholder="Ethnicity"
            className="appInput border-2 border-cor-primaria rounded p-2"
            value={usuario.ethnicity}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="foto">Foto</label>
          <input
            type="text"
            id="foto"
            name="url"
            placeholder="Foto"
            className="appInput border-2 border-cor-primaria rounded p-2"
            value={usuario.url}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
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
            value={usuario.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            className="appInput border-2 border-cor-primaria rounded p-2"
            value={confirmaSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleConfirmarSenha(e)
            }
          />
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
  );
}

export default Cadastro;
