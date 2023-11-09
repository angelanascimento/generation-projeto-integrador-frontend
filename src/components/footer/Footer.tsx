import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-[#2A332A] text-white ">
                <div className="container flex justify-between mt-6 mb-6">
                        <div className='w-1/3 self-center' >
                            <img className='w-2/3 py-1.5 mb-2' src="./src/assets/img/comercio_com_causa_letreiro-mod.png" alt="" />
                            <p className='py-1.5 text-gray-200 text-justify'>Nossa empresa é mais do que apenas um e-commerce de alimentos naturais. Somos uma comunidade que valoriza a sustentabilidade, o crescimento econômico e o trabalho decente. Junte-se a nós em nossa missão de fazer a diferença no mundo, um produto de cada vez.</p>
                        </div>
                        
                        
                        <div className='w-38 px-2 mt-2 text-gray-200 ml-14'>
                            <h4 className='text-lg font-bold mb-2 text-white'>Mapa do Site</h4>
                            <ul>
                                <li>Sobre nós</li>
                                <li>Produtos</li>
                                <li>Cadastro</li>
                                <li>Contato</li>
                                <li></li>
                            </ul>
                        </div>
                        <div className='w-1/5 mt-2 text-gray-200 ml-14'>
                            <h4 className='text-lg font-bold mb-2 text-white'>Contatos</h4>
                            <ul>
                                <li className='flex py-1.5'>  
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                    </svg>
                                    <a className="ml-2" href="tel:+5500000000000">+55 00 00000 0000</a>
                                </li>
                                <li className='flex py-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    <a className="ml-2" href="mailto:e-mail@name.com.br?">suporte@comerciocausa.com.br</a>
                                </li>
                                <li className='flex py-1.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <a className="ml-2" href="https://maps.app.goo.gl/veAL64HVn8kxqtWSA" target="_blank" rel="_external">Rua João Albertin da Costa </a> 
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col w-1/5 px-2 self-center items-center'>
                            <h4 className='text-lg text-center font-bold mb-3'>Siga Nós</h4>
                            <div className='flex justify-between w-3/5' >
                                <LinkedinLogo size={48} className='stroke-2 text-[#2FBF2A] hover:scale-110 transition-all' />
                                <InstagramLogo size={48} className='stroke-2 text-[#2FBF2A] hover:scale-110 transition-all' />
                                <FacebookLogo size={48} className='stroke-2 text-[#2FBF2A] hover:scale-110 transition-all' />
                        </div>
                    </div>
                </div>
                <hr className='w-full border-slate-500'/>
                <div className='my-3'>
                    <p className='text-sm'>
                            Comércio com Causa {data} | © Todos os direitos reservados
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;