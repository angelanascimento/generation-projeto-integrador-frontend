
import PaymentMethods from "../../components/payment-methods/PaymentMethods"
import ListaProduto from "../../components/produtos/listaProduto/ListaProduto"
import Seals from "../../components/seals/Seals"
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto"

function Home() {


    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                            <ModalProduto />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <ListaProduto/>
            <div className="flex items-center justify-center bg-[#F5F5F5] w-full py-2">
                <div className="flex flex-col items-center xl:flex xl:flex-row xl:justify-between xl:w-5/6 xl:h-[5rem]" >
                    <Seals/>
                    <hr className='w-5/6 m-2 xl:hidden'/>
                    <PaymentMethods/>
                </div>
            </div>
        </>
    )
}

export default Home