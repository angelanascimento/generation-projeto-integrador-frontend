import PaymentMethods from "../../components/payment-methods/PaymentMethods";
import Seals from "../../components/seals/Seals";
import ListaProdutoHome from "../../components/produtos/listaProduto/ListaProdutoHome";
import Carousel from "../../components/carousel/Carousel";

function Home() {
  return (
    <>
      <Carousel />
      <ListaProdutoHome />
      <div className="flex items-center justify-center bg-[#F5F5F5] w-full py-2">
        <div className="flex flex-col items-center 2xl:flex-row 2xl:justify-between 2xl:w-5/6 2xl:h-[4.5rem] ">
          <Seals />
          <hr className="w-5/6 m-2 2xl:hidden" />
          <PaymentMethods />
        </div>
      </div>
    </>
  );
}

export default Home;
