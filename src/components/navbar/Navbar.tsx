import {Link} from 'react-router-dom';



function Navbar() {
    return (
        <>
            <div className='w-full bg-[#385937] text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    Comercio Com Causa

                    <div className='flex gap-4'>
                        Compras 
                        Categorias
                        Produtos
                        Cadastrar produtos
                        Perfil
                        <Link to='/contatos'>Contatos</Link>
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar