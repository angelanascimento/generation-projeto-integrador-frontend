function Seals() {
    
    return(
        <>
            <hr className='w-5/6 m-8'/>
            <div className='flex flex-col w-full mb-8 xl:justify-around xl:flex-row xl:w-5/6'>
                <div className=" flex flex-col text-2xl font-medium w-22 mb-6 self-center items-center xl:ml-10 ">
                    <p> Selos e Certificações:</p>
                </div>        
                <ul className='flex justify-around w-full xl:w-3/4 '>
                    <li><img className='h-20 p-3 md:h-24 md:p-2 xl:h-28 xl:p-4 'src="src/assets/img/seals/selo-GAAS.png" alt="" /></li>
                    <li><img className='h-20 p-3 md:h-24 md:p-2 xl:h-28 xl:p-4 'src="src/assets/img/seals/selo-IBD.png" alt="" /></li>
                    <li><img className='h-20 p-3 md:h-24 md:p-2 xl:h-28 xl:p-4'src="src/assets/img/seals/selo-SESI-ODS.png" alt=""/></li>
                    <li><img className='h-20 p-3 md:h-24 md:p-2 xl:h-28 xl:p-4 'src="src/assets/img/seals/selo-mais-integridade.png" alt=""/></li>
                    <li><img className='h-20 p-3 md:h-24 md:p-2 xl:h-28 xl:p-4'src="src/assets/img/seals/selo-produto-organico-Brasil.png" alt="" /></li>
                </ul>        
            </div>
        </>
    )
}

export default Seals;