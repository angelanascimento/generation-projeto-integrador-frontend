import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface CardProdutoProps {
  post: Produto;
}

function CardProduto({ post }: CardProdutoProps) {
  return (
    <div
      className=" border 
            flex flex-col rounded-lg overflow-hidden justify-between p-3 bg-slate-50"
    >
      <div>
        <div className="flex w-full items-center gap-4">
          <img
          src="https://hortifrutirecife.com.br/image/cache/catalog/produtos/REPOLHO%20ROXO-1000x1000.png"
            //src={post.img_url}
            className="w-full h-full border-transparent rounded-lg"
            alt="Imagem do Produto"
          />
        </div>
        <div className="flex flex-col px-2 py-4">

          <h4 className="text-lg font-semibold uppercase h-[3.5rem] line-clamp-2">{post.name}</h4>
            
          <div className="flex mt-2 justify-between">
            <div className="w-[7rem] font-semibold">
              <h3>Vendedor:</h3>
              <h3>Categoria:</h3>
              <h3>Descrição: </h3>
              <h3>Preço: </h3>
              <h3>Data: </h3>
            </div>
            <div className="w-full">
              <p>{post.user?.name}</p>
              <p>{post.category?.description}</p>
              <p className="line-clamp-4">{post.description}</p>
              <p className="line-clamp-1">{post.price}</p>
              <p>{" "}
              {new Intl.DateTimeFormat(undefined, {
                dateStyle: "full",
                timeStyle: "medium"
              }).format(new Date())}
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="flex">
        <Link
          to={`/editarProduto/${post.id}`}
          className="w-full text-white bg-emerald-400
                    hover:bg-emerald-600 flex items-center justify-center py-2"
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
