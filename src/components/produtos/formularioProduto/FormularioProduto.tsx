import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";

import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { toastAlerta } from "../../../utils/toastAlerta";
import Usuario from "../../../models/Usuario";

function FormularioPostagem() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    name: "",
    description: ""
  });
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [userFullData, setUserFullData] = useState<Usuario>({} as Usuario);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProdutoPorId(id: string) {
    await buscar(`/products/${id}`, setProduto, {
      headers: {
        Authorization: token
      }
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categories/${id}`, setCategoria, {
      headers: {
        Authorization: token
      }
    });
  }

  async function buscarCategorias() {
    await buscar("/categories", setCategorias, {
      headers: {
        Authorization: token
      }
    });
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "erro");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      category: categoria
    });
  }, [categoria]);

  useEffect(() => {
    buscar(`/users/${usuario.id}`, setUserFullData, {
      Authorization: usuario.token
    });
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      category: categoria,
      user: userFullData
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id != undefined) {
      try {
        await atualizar(`/products`, produto, setProduto, {
          headers: {
            Authorization: token
          }
        });

        toastAlerta("Produto atualizado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "erro");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar o Produto", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/products`, produto, setProduto, {
          headers: {
            Authorization: token
          }
        });

        toastAlerta("Produto cadastrado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "erro");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar a Categoria", "erro");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  const carregandoCategoria = categoria.description === "";

  return (
    <div className="container flex flex-col mx-auto mb-8 items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Título do Produto</label>
          <input
            id="titulo"
            value={produto.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Insira aqui o Título"
            name="name"
            required
            className="appInput border-2 border-cor-primaria rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description">Descrição do Produto</label>

          <input
            id="description"
            value={produto.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Adicione aqui a Descrição do Produto"
            name="description"
            required
            className="appInput border-2 border-cor-primaria rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="price">Preço</label>
          <input
            id="price"
            value={produto.price}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Insira aqui o Preço do Produto"
            name="price"
            required
            className="appInput border-2 border-cor-primaria rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image_url">Imagem</label>
          <input
            id="image_url"
            value={produto.image_url}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Insira aqui a URL da imagem"
            name="image_url"
            required
            className="appInput border-2 border-cor-primaria rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="categoria">Categoria do Produto</label>
          <select
            name="categoria"
            id="categoria"
            className="appInput border-2 border-cor-primaria rounded p-2"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.description}</option>
              </>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={carregandoCategoria}
          className="flex justify-center rounded disabled:bg-slate-200 bg-green 
                            hover:bg-cor-destaque text-white font-bold w-1/2 mx-auto py-2"
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
            <span>Cadastrar Produto</span>
          )}
        </button>
      </form>
    </div>
  );
}
export default FormularioPostagem;
