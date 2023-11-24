import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";

import Categoria from "../../../models/Categoria";
import { RotatingLines } from "react-loader-spinner";
import { toastAlerta } from "../../../utils/toastAlerta";



function DeletarCategoria() {
   
        const navigate = useNavigate()

        const [isLoading, setIsLoading] = useState<boolean>(false)
        const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    
        const { id } = useParams<{ id: string }>()
    
        const { usuario, handleLogout } = useContext(AuthContext)
        const token = usuario.token
    
        async function buscarPorId(id: string) {
        try {
            await buscar(`/categories/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente','erro')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'erro')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categories/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria apagada com sucesso','sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar o Categoria','erro')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?
            </p>

            <div className='border flex flex-col line-clamp-4 rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-[#385937] text-white font-bold text-base'>
                    Categoria
                </header>
                <p className='p-8 text-lg bg-slate-200 h-full'>{categoria.description}</p>

                <div className="flex">

                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>

                    <button
                        className='w-full text-slate-100 bg-emerald-400 hover:bg-emerald-500 
                                flex items-center justify-center'
                        onClick={deletarCategoria}>

                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            
                            <span>Sim</span>
                            
                        }
                    </button>

                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria;