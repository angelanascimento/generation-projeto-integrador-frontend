import Produto from '../../../models/Produto';
import { useEffect, useState } from 'react';

interface CardProdutoProps {
    post: Produto
}

function CardProdutoHome({ post }: CardProdutoProps) {
    
    const [valor, setValor] = useState(0);
    const [tarefa, setTarefa] = useState(false)

    function somarQuantidade() {
        setValor(valor + 1);
    }
    function subtrairQuantidade() {

        if(valor > 0) {
            setValor(valor - 1);
        } 
    }
    useEffect(() => {
        if ( valor < 1) {
            setTarefa(true)
        }
        else {
            setTarefa(false)
        }
    }, [valor])

    return (
        <div className='flex flex-col border rounded-xl overflow-hidden justify-between p-2 w-[14rem] h-auto'>
            <div>
                <div className="flex w-full justify-center ">
                    <img src='src/assets/img/alface.png' className='w-full h-full border-transparent rounded-lg' 
                        alt="Imagem do Produto" />
                </div>
                <div className='my-2'>
                    <h4 className='text-lg h-[3.5rem] line-clamp-2 mb-2 text-slate-800'>{post.name} - {post.user?.name}</h4>
                    <p className='ml-[4px] text-green-950 font-bold text-lg'>R$: {post.price}</p>
                </div>
            </div>

            {tarefa ?(
                <div>
                <button className='border-2 border-lime-950 rounded-lg w-full h-[3rem] font-bold text-lg from-green-950 hover:bg-lime-950 hover:text-white hover:transition-all ' onClick={() => setValor(1)}>Adicionar</button>
                </div>            
            ) : (  
                <div className="flex justify-between border-2 border-lime-950 rounded-lg w-full h-[3rem] font-bold text-lg from-green-950 items-center p-2 text-center">
                <button onClick={subtrairQuantidade}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
                <p className='w-1/2'>{valor}</p>
                <button className='text-2xl' onClick={somarQuantidade}>+</button>
            </div> 
            )}
        </div>
    )
}

export default CardProdutoHome;
