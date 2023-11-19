import { ReactNode, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';



function Navbar() {

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let component: ReactNode

    if (usuario.token !== "") {
        component = (
        
            <div className='w-full bg-[#385937] text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home'>Comercio Com Causa</Link>


                    <div className='flex gap-4'>
                        <Link to='/home'>Home</Link>
                        <Link to='/about'>Sobre nós</Link>
                        <Link to='/cadastro'>Cadastro</Link>
                        <Link to='/produtos'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategorias'>Cadastrar Categoria</Link>
                        <Link to='/contatos'>Contatos</Link>
                        <Link to='/perfil'>Perfil</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/sair' onClick={logout} className='hover:underline'>Sair</Link>

                    </div>
                </div>
            </div>
        
    )
}
    return (
        <>
            { component }
        </>
    )
}

export default Navbar