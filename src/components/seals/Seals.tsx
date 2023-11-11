function Seals() {
    
    return(
        <>
            <hr className='w-5/6 m-8'/>
            <div className='flex flex-col w-full mb-8 xl:justify-around xl:flex-row xl:w-5/6'>
                <div className=" flex flex-col text-2xl font-medium w-22 mb-6 self-center items-center xl:ml-10 ">
                    <p> Selos e Certificações:</p>
                </div>        
                <ul className='flex justify-around w-full xl:w-3/4 '>
                    <li><img className='h-20 p-3 md:h-24 md:p-2 xl:h-28 xl:p-4 'src="src\assets\img\Logo-Selo-GAAS-1-768x768.png" alt="" /></li>
                    <li><img className='h-20 p-3 md:h-24 md:p-2 xl:h-28 xl:p-4'src="src\assets\img\Selo-IBD-Orgânico-mod.png" alt="" /></li>
                    <li><img className='h-20 p-3 md:h-24 md:p-2 xl:h-28 xl:p-4'src="src\assets\img\premiosesiods-selosesiods2023-v01-empresa.png" alt="" /></li>
                    <li><img className='h-20 p-3 md:h-24 md:p-2 xl:h-28 xl:p-4'src="src\assets\img\b7141008-981e-43e9-8983-7ffa69831d92.png" alt="" /></li>
                    <li><img className='h-20 p-3 md:h-24 md:p-2 xl:h-28 xl:p-4 'src="src/assets/img/produto-organico-brasil-logo-mod.png" alt="" /></li>
                </ul>        
            </div>
        </>
    )
}

export default Seals;