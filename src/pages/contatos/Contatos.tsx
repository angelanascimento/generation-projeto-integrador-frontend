function Contatos() {

    return (
        <>
            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>

                <div className="flex justify-center container flex text-lg">
                    <div className='flex gap-4'>
                        E-mail: comerciocomcausa@gmail.com
                        Telefone: (11) 98995-3322
                    </div>              
                </div>
            </div>

            <div className="flex justify-center w-full bg-indigo-900">
                <div className="bg-white dark:bg-gray-900 py-16 px-60">
                            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contate-nos</h2>
                                <form action="#" className="space-y-8">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seu email</label>
                                        <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sua menssagem</label>
                                        <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                    </div>
                                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar menssagem</button>
                                </form>
                            </div>
                    </div>

            </div>
        </>
    );

}

export default Contatos;    