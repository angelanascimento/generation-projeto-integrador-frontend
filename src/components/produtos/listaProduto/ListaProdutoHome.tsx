import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';

import Produto from '../../../models/Produto';
import CardProdutoHome from '../cardProduto/CardProdutoHome';


function ListaProdutoHome() {
    const navigate = useNavigate();

    const [produto, setProduto] = useState<Produto[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProdutos() {
        try {
            await buscar('/products', setProduto, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarProdutos()
    }, [produto.length])

    return (
        <>
            <section className='flex flex-col w-full md:w-5/6 lg:w-5/6 xl:w-5/6  mx-auto my-4'>
                <h3 className='font-bold text-2xl'>Destaques</h3>
                {produto.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
                )}
                <div className='flex flex-wrap my-4 
                 gap-4 justify-start '>

                    {produto.map((produtos) => (
                        <CardProdutoHome key={produtos.id} post={produtos} />
                    ))}

                </div>
            </section>
        </>
    );
}

export default ListaProdutoHome;