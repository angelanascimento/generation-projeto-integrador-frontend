

function PaymentMethods() {
    return(
        <>
            <section className="flex justify-around h-[7rem] items-center xl:pl-12 xl:border-[#e5e7eb] xl:border-l xl:h-[5rem]">
                <div className="flex flex-col justify-center w-[460px] h-[129px] xl:items-center xl:flex-row xl:w-[665px] xl:h-[85px] xl:justify-between">
                    <h4 className="text-lg font-medium text-center mb-4 xl:m-0">Formas de Pagamento:</h4>
                    <ul className="flex justify-around xl:w-[460px]">
                        <li><img className=" h-[40px]" src="src/assets/img/payment-methods/compra-segura.png" alt=""/></li>
                        <li><img className=" h-[40px]"src="src\assets\img\payment-methods\visa.png" alt="" /></li>
                        <li><img className=" h-[40px]" src="src/assets/img/payment-methods/mastercard.png" alt=""/></li>
                        <li><img className=" h-[40px]" src="src/assets/img/payment-methods/diners-club.png" alt=""/></li>
                        <li><img className=" h-[40px]" src="src/assets/img/payment-methods/american-express.png" alt="" /></li>
                        <li><img className=" h-[40px]" src="src/assets/img/payment-methods/paypal.png" alt=""/></li>
                        <li><img className=" h-[40px]" src="src/assets/img/payment-methods/barcode.png" alt="" /></li>
                       
                    </ul>
                </div>
            </section>
        </>
    )
}

export default PaymentMethods