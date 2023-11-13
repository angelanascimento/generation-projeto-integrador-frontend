import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

import PaymentMethods from "../../components/payment-methods/PaymentMethods"
import Seals from "../../components/seals/Seals"

function Home() {

    const { nome } = useContext(AuthContext)

    return (
        <>
            <div className="flex justify-center bg-[#2FF5BC] text-white min-h-[80vh]">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde, { nome }!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="src/assets/img/logos/comercio_com_causa_logo.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
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