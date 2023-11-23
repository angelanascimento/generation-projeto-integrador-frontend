import PaymentMethods from "../../components/payment-methods/PaymentMethods";
import Seals from "../../components/seals/Seals";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";
import ListaProdutoHome from "../../components/produtos/listaProduto/ListaProdutoHome";

function Home() {
  return (
    <>
      <div className="bg-slate-800 flex justify-center">
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
              src={"https://lh3.googleusercontent.com/pw/ADCreHf8qF8Gm4QhIvR7TYi2HvpMZ-pzzFIjMPFyHCtJPatR0slcoFIs4zxLjvQuR3NzW4gOcZcvAl_-MAOV0bBaXfH5OOlGrXgYfteYytEaTD9vYPj4UOEqwmrk0lj1RbMVai2mtXZr4V-lJ-8ilpf-6ZFujdcRx_Sis1R85RFwxjby8Q3fG4aG9Q2_wCXHQYjfyQ3esYO_b3hCss22iNg7pImLqWkf8QwTSOl3E4bvVuoq5q978DQ2wc5at-L2VKMDRGlDK3DjqgT4Cq60-UsvPQnia1-I2XL2k9a2DF4el_PNU6OLzmccnX2xUi4tSsQuI4LvMu_hXp96ZeSrwgQuzfoxDYMoBDZLB7ABnqFXAeyXO1O5vVLXmg7iWKsgxsJtvvKTde8TKPX3CxFNykTGmBnh5-vADV84o2VfUFP4t4NJ8WXfk3M4zcaXVt-uy9p6ZT7OI2C635QCKXZcJcKObgNGwIey_3ne9zaEDAlHLW2GRiM7d_XESdwcEA6EFHkSkPxyyc3hiCt4cibB0Xadd7xhIXPqdyhARD167ryK6IQe_xA0rK2OBcYMjxhlbf0Q7z1VcjJHEvrvQfXE1vQyiHyfxGzpfhvg0hDkfHz6SibSqU1prOE0m5i51vGonD-GwBQWP2ZLz9owGgBSEgT2f0Fb7EBAFdGe-KZ0Vq3MFmj_WaqYyPBWJkP4u4Ju1VrAcSG7sX4g_s1Mb80pETrmIc3tDSSqKgnTNPgoxwmt-xk8WaX9Qb51CVXgHMmUasBIOgaRJLlVPbWru5qClE7u__S1Nuxig6LFGph2K2CWjICKeZn-jThPoSi6Xw4HgkL26bVnS0FU6dvTb78exrWxuwWPtuF7H6D5KWFio9yjf6pnpIy50dKenM_a_1ktZ-ZnMzZe9o52mHP3ZAk4DzkqsNZA7ozAYH5TI4c4SiocIyPtl42FBTTN_Odro_39Fms=w966-h966-s-no?authuser=0"}
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
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
