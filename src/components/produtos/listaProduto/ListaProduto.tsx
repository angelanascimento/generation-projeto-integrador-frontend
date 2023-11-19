import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';

import Produto from '../../../models/Produto';
import CardProduto from "../cardProduto/CardProduto";
import { toastAlerta } from '../../../utils/toastAlerta';


function ListaProduto() {
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
                toastAlerta('O token expirou, favor logar novamente','erro')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado','erro')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarProdutos()
    }, [produto.length])

    return (
        <>
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

            <div className='container mx-auto my-4 
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {produto.map((produtos) => (
                    <CardProduto key={produtos.id} post={produtos} />
                ))}

            </div>
        </>
    );
}

export default ListaProduto;