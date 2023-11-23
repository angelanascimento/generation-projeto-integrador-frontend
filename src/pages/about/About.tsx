import Seals from "../../components/seals/Seals";
import PhotosAbout from "../../components/photos/PhotosAbout";
import PaymentMethods from "../../components/payment-methods/PaymentMethods";


function About() {
  return (
    <>
      <main className="flex flex-col justify-center items-center w-screen">
        <div className="flex flex-col mt-16 mb-16 w-5/6 items-start justify-between xl:flex-row">
          <PhotosAbout />
          <div className="w-full xl:w-7/12 xl:flex xl:flex-col xl:ml-20 xl:my-auto xl:justify-center">
            <h2 className="text-slate-900 text-center text-5xl font-bold mb-9 ">
              Sobre Nós
            </h2>
            <p className="text-justify mb-3 text-gray-800">
              Criada com o propósito de promover o desenvolvimento e o
              crescimento econômico de pequenos e médios produtores que praticam
              uma agricultura sustentável, o Comércio com Causa conecta pessoas
              por meio de uma plataforma online, acessível e segura, que permite
              a conexão entre produtores e os consumidores que valorizam a
              qualidade, a origem e o impacto social dos alimentos que adquirem.
              O propósito da nossa empresa esta fundamentada no Objetivo de
              Desenvolvimento Sustentável (ODS) 8 das Nações Unidas, que busca
              promover o crescimento econômico inclusivo e sustentável, o
              emprego pleno e produtivo e o trabalho decente para todos.
            </p>
            <p className="text-justify mb-3 text-gray-800">
              À medida que a conscientização sobre questões sociais e ambientais
              cresce, o Comércio com Causa se posiciona como uma plataforma
              pioneira, alinhando os princípios do desenvolvimento sustentável
              com o poder do comércio. Ele não é apenas um marketplace, mas uma
              expressão tangível da crença de que, juntos, podemos tornar o
              mundo um lugar melhor.
            </p>
            <p className="text-justify mb-12 text-gray-800">
              Se você é um consumidor em busca de produtos com propósito ou uma
              ONG procurando ampliar seu alcance e impacto, o Comércio com Causa
              é o lugar onde o comércio e a causa se encontram, criando um
              futuro mais brilhante e inclusivo para todos. Junte-se a essa
              jornada e faça parte dessa mudança positiva!
            </p>
            <div className="w-full flex text-center justify-center">
              <div className="font-medium text-orange-600 w-[29.5rem] md:w-[30rem]  lg:w-[30.5rem] xl:w-[31rem]">
                <p>
                  Nossa plataforma é mais do que um canal de vendas, é uma rede
                  de colaboração e transformação social. Venha fazer parte dela!
                </p>
                <div className="flex justify-around mt-5">
                  <button
                    className="bg-lime-950 rounded-md p-3.5 w-44 md:w-52 xl:w-52  text-white hover:bg-white
                                        hover: border-2 border-lime-950 hover:text-black transition-all"
                  >
                    Conheça nossos produtos
                  </button>
                  <button
                    className="bg-lime-950 rounded-md p-3.5 w-44 md:w-52 xl:w-52 text-white hover:bg-white
                                        hover: border-2 border-lime-950 hover:text-black transition-all"
                  >
                    Conheça nossos fornecedores
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#F5F5F5] w-full py-2">
          <div className="flex flex-col items-center 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:w-5/6 2xl:h-[5rem]">
            <Seals />
            <hr className="w-5/6 m-2 2xl:hidden" />
            <PaymentMethods />
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
