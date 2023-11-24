import Selo01 from "../../assets/img/seals/selo-mais-integridade.png"
import Selo02 from "../../assets/img/seals/selo-GAAS.png"
import Selo03 from "../../assets/img/seals/selo-SESI-ODS.png"
import Selo04 from "../../assets/img/seals/selo-IBD.png"
import Selo05 from "../../assets/img/seals/selo-produto-organico-Brasil.png"


function Seals() {
  return (
    <>
      <section className="flex justify-around h-[9rem] items-center 2xl:w-[800px] 2xl:h-[5rem]">
        <div className="flex flex-col items-center w-[460px] md:w-[650px] 2xl:flex-row 2xl:w-full">
          <div className=" flex flex-col w-22 mb-4 self-center items-center 2xl:w-[240px] 2xl:m-0 ">
            <h4 className="text-lg font-medium text-center  ">
              Selos e Certificações:
            </h4>
          </div>
          <ul className="flex justify-around w-full">
            <li>
              <img
                className="h-[75px] p-2 md:p-2"
                src={Selo01}
                alt=""
              />
            </li>
            <li>
              <img
                className="h-[75px] p-2 md:p-2 "
                src={Selo02}
                alt=""
              />
            </li>
            <li>
              <img
                className="h-[75px] p-2 md:p-2 "
                src={Selo03}
                alt=""
              />
            </li>
            <li>
              <img
                className="h-[75px] p-2 md:p-2 "
                src={Selo04}
                alt=""
              />
            </li>
            <li>
              <img
                className="h-[75px] p-2 md:p-2 "
                src={Selo05}
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Seals;
