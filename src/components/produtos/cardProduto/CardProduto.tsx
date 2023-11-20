import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface CardProdutoProps {
  post: Produto;
}

function CardProduto({ post }: CardProdutoProps) {
  return (
    <div
      className="border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between"
    >
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img
            src={post.user?.url}
            className="h-12 rounded-full"
            alt="Imagem do Produto"
          />
          <h3 className="text-lg font-bold text-center uppercase">
            {post.user?.name}
          </h3>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold uppercase">{post.name}</h4>
          <p>{post.description}</p>
          <p>Tema: {post.category?.description}</p>
          <p>Preço: {post.price}</p>
          <p>
            Data:{" "}
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "full",
              timeStyle: "medium"
            }).format(new Date(post.price))}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarProduto/${post.id}`}
          className="w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarProduto/${post.id}`}
          className="text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
