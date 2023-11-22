function Contatos() {
  return (
    <>
      <div
        className="w-full bg-light-grey text-cor-primaria
                flex justify-center py-4"
      >
        <div className="flex justify-center container flex text-lg">
          <div className="flex gap-4">
            E-mail: comerciocomcausa@gmail.com Telefone: (11) 98995-3322
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full bg-light-grey">
        <div className="bg-white dark:bg-gray-900 py-16 px-16 mb-16 rounded-xl w-1/2">
          <div className="flex-column align-top  mx-auto max-w-screen-md ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contate-nos
            </h2>
            <form action="#" className="flex-column space-y-8">
              <div>
                <label className="block mb-2 font-medium text-gray-900 dark:text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="exemplo@email.com"
                ></input>
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 font-medium text-gray-900 dark:text-gray-400">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={10}
                  className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-100"
                  placeholder="Escreva sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="primaryAppButton bg-green rounded flex justify-center
                            text-white w-1/3 py-2 m-auto"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contatos;
