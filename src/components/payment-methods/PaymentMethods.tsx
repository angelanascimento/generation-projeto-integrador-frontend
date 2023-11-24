import Metodo01 from "../../assets/img/payment-methods/selo-compra-segura.png"
import Metodo02 from "../../assets/img/payment-methods/visa.png"
import Metodo03 from "../../assets/img/payment-methods/mastercard.png"
import Metodo04 from "../../assets/img/payment-methods/diners-club.png"
import Metodo05 from "../../assets/img/payment-methods/american-express.png"
import Metodo06 from "../../assets/img/payment-methods/paypal.png"
import Metodo07 from "../../assets/img/payment-methods/barcode.png"

function PaymentMethods() {
  return (
    <>
      <section className="flex justify-around h-[7rem] items-center 2xl:pl-12 2xl:border-[#e5e7eb] 2xl:border-l 2xl:h-[5rem]">
        <div className="flex flex-col justify-center w-[460px] h-[129px] 2xl:items-center 2xl:flex-row 2xl:w-[665px] 2xl:h-[85px] 2xl:justify-between">
          <h4 className="text-lg font-medium text-center mb-4 2xl:m-0">
            Formas de Pagamento:
          </h4>
          <ul className="flex justify-around 2xl:w-[460px]">
            <li>
              <img
                className=" h-[40px]"
                src={Metodo01}
                alt=""
              />
            </li>
            <li>
              <img
                className=" h-[40px]"
                src={Metodo02}
                alt=""
              />
            </li>
            <li>
              <img
                className=" h-[40px]"
                src={Metodo03}
                alt=""
              />
            </li>
            <li>
              <img
                className=" h-[40px]"
                src={Metodo04}
                alt=""
              />
            </li>
            <li>
              <img
                className=" h-[40px]"
                src={Metodo05}
                alt=""
              />
            </li>
            <li>
              <img
                className=" h-[40px]"
                src={Metodo06}
                alt=""
              />
            </li>
            <li>
              <img
                className="h-[40px]"
                src={Metodo07}
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default PaymentMethods;
