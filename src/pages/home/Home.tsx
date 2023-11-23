import PaymentMethods from "../../components/payment-methods/PaymentMethods";
import Seals from "../../components/seals/Seals";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";
import ListaProdutoHome from "../../components/produtos/listaProduto/ListaProdutoHome";

function Home() {
  return (
    <>
      <div className="bg-emerald-400 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Cadastre novos produtos</p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalProduto />
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="src/assets/img/logos/comercio_com_causa_logo.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
      <ListaProdutoHome />
      <div className="flex items-center justify-center bg-[#F5F5F5] w-full py-2">
        <div className="flex flex-col items-center 2xl:flex-row 2xl:justify-between 2xl:w-5/6 2xl:h-[5rem] ">
          <Seals />
          <hr className="w-5/6 m-2 2xl:hidden" />
          <PaymentMethods />
        </div>
      </div>
    </>
  );
}

export default Home;
