import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";

import Categoria from "../../../models/Categoria";

function FormularioCategorias() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categories/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
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
            alert('Você precisa estar logado');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categories`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })

                alert('Categoria atualizada com sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao atualizar a Categoria')
                }
            }

        } else {
            try {
                await cadastrar(`/categories`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })

                alert('Categoria cadastrada com sucesso')
                

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar a Categoria')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categories")

    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8">
            {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
        </h1>

        <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
            <div className="flex flex-col gap-2">
                <label htmlFor="description">Descrição da Categoria</label>
                <input
                    type="text"
                    placeholder="Descreva aqui sua categoria"
                    name='description'
                    className="border-2 border-slate-700 rounded p-2"
                    value={categoria.description}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>
            <button
                className="rounded text-slate-100 bg-indigo-400 
                hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center" type="submit">

                {isLoading ?
                    <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                    <span>Confirmar</span>
                }
            </button>
        </form>
    </div>
)
}

export default FormularioCategorias
