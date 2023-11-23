function Seals() {
  return (
    <>
      <section className="flex justify-around h-[9rem] items-center 2xl:w-[800px] 2xl:h-[5rem]">
        <div className="flex flex-col items-center w-[460px] md:w-[650px] 2xl:w-[890px] 2xl:flex-row">
          <div className=" flex flex-col w-22 mb-4 self-center items-center 2xl:w-[240px] 2xl:m-0">
            <h4 className="text-lg font-medium text-center">
              Selos e Certificações:
            </h4>
          </div>
          <ul className="flex justify-around w-full">
            <li>
              <img
                className="h-[75px] p-2 md:h-[85px] md:p-2 xl:h-[85px]"
                src="src/assets/img/seals/selo-GAAS.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="h-[75px] p-2 md:h-[85px] md:p-2 xl:h-[85px] "
                src="src/assets/img/seals/selo-IBD.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="h-[75px] p-2 md:h-[85px] md:p-2 xl:h-[85px] "
                src="src/assets/img/seals/selo-SESI-ODS.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="h-[75px] p-2 md:h-[85px] md:p-2 xl:h-[85px] "
                src="src/assets/img/seals/selo-mais-integridade.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="h-[75px] p-2 md:h-[85px] md:p-2 xl:h-[85px] "
                src="src/assets/img/seals/selo-produto-organico-Brasil.png"
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
