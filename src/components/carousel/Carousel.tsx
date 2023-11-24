import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Logo from "../../assets/img/logos/comercio_com_causa_logo.png"
import Banner01 from "../../assets/img/photos-about/photo-carrossel 1.png"
import Banner02 from "../../assets/img/photos-about/photo-carrossel 2.png"


function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 9500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[22rem]"
            >
                <SwiperSlide>
                    <div className="bg-cor-primaria flex justify-center h-full ">
                        <div className="container grid md:grid-cols-9 text-white xl:w-[90rem]">
                            <div className="flex  flex-col gap-4 items-center justify-center py-4 col-start-1 col-span-3">
                                <h2 className="text-5xl font-bold ">Seja Bem Vinde!</h2>
                            </div>
                            <div className="hidden md:flex justify-center col-start-4 col-span-2">
                                <img
                                src={Logo}
                                alt="Imagem Página Home"
                                className="h-[22rem]"
                                />
                            </div>
                            <div className="hidden md:flex flex-col gap-4 items-center justify-center py-4 col-start-6 col-span-3">
                                <p className="text-center">Somos mais que um e-commerce, somos uma causa. Aqui você encontra produtos, preços e compromisso social. Venha fazer parte dessa comunidade e transforme o mundo conosco. Cadastre-se e saiba mais!</p>
                                    <div className="flex justify-around gap-4">
                                    <div className="flex justify-around gap-4">
                                        <a className="text-xl border-2 rounded-lg p-3 hover:delay-75 hover:scale-105 " href="/cadastro">Cadastre-se</a>
                                        
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide><img className="h-full w-full" src={Banner01} alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-full w-full" src={Banner02} alt="" /></SwiperSlide>      
            </Swiper>
        </>
    )
}

export default Carousel;