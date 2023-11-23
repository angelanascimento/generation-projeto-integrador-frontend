import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";
import { currencyFormat } from "../../../utils/currencyFormat";
import dateFormat from "../../../utils/dateFormat";
import defaultProductImage from "../../../assets/img/product-default-image/fruit-696169_1280.jpg";

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
        <div className="flex w-full h-[10rem] items-center gap-4">
          <img
            src={post.image_url ? post.image_url : defaultProductImage}
            className="w-full h-full object-cover border-transparent rounded-lg"
            alt="Imagem do Produto"
          />
        </div>
        <div className="flex flex-col px-2 py-4">
          <h4 className="text-lg font-semibold uppercase h-[3.5rem] line-clamp-2">
            {post.name}
          </h4>

          <div className="flex mt-2 justify-between">
            <ul className="w-fit font-semibold">
              <li className="flex gap-0.5">
                <h3>Vendedor:</h3>
                <span className="font-normal">{post.user?.name}</span>
              </li>
              <li className="flex gap-0.5">
                <h3>Categoria:</h3>
                <span className="font-normal">
                  {post.category?.description}
                </span>
              </li>
              <li className="flex gap-0.5">
                <h3>Descrição:</h3>
                <span className="line-clamp-1 font-normal">
                  {post.description}
                </span>
              </li>
              <li className="flex gap-0.5">
                <h3>Data:</h3>
                <span className="font-normal">{dateFormat(new Date())}</span>
              </li>

              <li className="flex gap-0.5 items-baseline">
                <h3>Preço:</h3>
                <span className="text-2xl text-cor-primaria">
                  {currencyFormat.format(post.price)}
                </span>
              </li>
            </ul>
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
