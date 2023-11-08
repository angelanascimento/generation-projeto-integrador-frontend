import {Link} from 'react-router-dom';



function Navbar() {
    return (
        <>
            <div className='w-full bg-[#385937] text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home'>Comercio Com Causa</Link>
                    

                    <div className='flex gap-4'>
                        <Link to='/home'>Home</Link>
                        <Link to='/about'>Sobre nós</Link>
                        <Link to='/cadastro'>Cadastro</Link>
                        <Link to='/produtos'>Produtos</Link>
                        <Link to='/contatos'>Contatos</Link>
                        <Link to='/perfil'>Perfil</Link>
                        <Link to='/sair'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar