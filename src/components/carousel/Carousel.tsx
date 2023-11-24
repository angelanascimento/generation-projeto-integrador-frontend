import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 7500,
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
                    <div className="bg-slate-800 flex justify-center h-full ">
                        <div className="container grid md:grid-cols-9 text-white xl:w-[90rem]">
                            <div className="flex  flex-col gap-4 items-center justify-center py-4 col-start-1 col-span-3">
                                <h2 className="text-5xl font-bold ">Seja Bem Vinde!</h2>
                            </div>
                            <div className="hidden md:flex justify-center col-start-4 col-span-2">
                                <img
                                src={"https://lh3.googleusercontent.com/pw/ADCreHf8qF8Gm4QhIvR7TYi2HvpMZ-pzzFIjMPFyHCtJPatR0slcoFIs4zxLjvQuR3NzW4gOcZcvAl_-MAOV0bBaXfH5OOlGrXgYfteYytEaTD9vYPj4UOEqwmrk0lj1RbMVai2mtXZr4V-lJ-8ilpf-6ZFujdcRx_Sis1R85RFwxjby8Q3fG4aG9Q2_wCXHQYjfyQ3esYO_b3hCss22iNg7pImLqWkf8QwTSOl3E4bvVuoq5q978DQ2wc5at-L2VKMDRGlDK3DjqgT4Cq60-UsvPQnia1-I2XL2k9a2DF4el_PNU6OLzmccnX2xUi4tSsQuI4LvMu_hXp96ZeSrwgQuzfoxDYMoBDZLB7ABnqFXAeyXO1O5vVLXmg7iWKsgxsJtvvKTde8TKPX3CxFNykTGmBnh5-vADV84o2VfUFP4t4NJ8WXfk3M4zcaXVt-uy9p6ZT7OI2C635QCKXZcJcKObgNGwIey_3ne9zaEDAlHLW2GRiM7d_XESdwcEA6EFHkSkPxyyc3hiCt4cibB0Xadd7xhIXPqdyhARD167ryK6IQe_xA0rK2OBcYMjxhlbf0Q7z1VcjJHEvrvQfXE1vQyiHyfxGzpfhvg0hDkfHz6SibSqU1prOE0m5i51vGonD-GwBQWP2ZLz9owGgBSEgT2f0Fb7EBAFdGe-KZ0Vq3MFmj_WaqYyPBWJkP4u4Ju1VrAcSG7sX4g_s1Mb80pETrmIc3tDSSqKgnTNPgoxwmt-xk8WaX9Qb51CVXgHMmUasBIOgaRJLlVPbWru5qClE7u__S1Nuxig6LFGph2K2CWjICKeZn-jThPoSi6Xw4HgkL26bVnS0FU6dvTb78exrWxuwWPtuF7H6D5KWFio9yjf6pnpIy50dKenM_a_1ktZ-ZnMzZe9o52mHP3ZAk4DzkqsNZA7ozAYH5TI4c4SiocIyPtl42FBTTN_Odro_39Fms=w966-h966-s-no?authuser=0"}
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
                <SwiperSlide><img className="h-full w-full" src={"https://lh3.googleusercontent.com/pw/ADCreHfJYufrD3NLJ1nnkGPhGDyb2qeVerZ2MEbUGxTDfQMoZWU5AP5tXOrmZdW6NuKPigO1aVR4irmv1f6DxK92jkZfytKK5h1NglVywNO2rfJ4-gjChm-qr5SY3gRJRMl0oxu-z4_MoZ_Ld0J5cZDLeKNdz9O8lv7qhCG620FNsZR73tDZUm02Wb_mS6kfFIOr-x_Vq6MdvJJtDfbxprSI_f_qFoLpj1YFic_WVGJw5_zScRGDgvEIQKmx34nprU2g6SCtAv5eANVppjPsHzGmSQ64S7MyG4g77V9bJXjEt-MaqByunQdOb1sfsVJR6nxP95RwjUc3ZHIXInerQwGmYFKHhEygsyBewswTvQee0udm5EwG8lofpExAiGMKQVYsG4gZKyGviBfi7bsJoymG0UWDbUmqlE4vf0dvH1CJF4QxTM30HzyXkLXBFLAd4gDo7y4wYFm8Udat7-hrlhK0d6m-W8IXHtnY2C-CG9OpuOiEvyWnb4PeLV-lP0G4aFqrjmXYertmQSEWKMAvUi93WNOPkMNUbvzxdeRZJwNpSJC43S6aDKbPlaH5SD1A1An6xwRcQe81c7u5AjKkldP4QsvCm8yN90AYcODoMgGBKTfL3zbC50Hgoj_e4IdNybNa_iQPG7b4IWJABQPlFHMwccXuq3c_6Dz3YDIslzwWkogj8JGejTnUiT6QAsMBsYgXI4O7Aol3_8cC-c4CmgrDsADLpgQiFXhvF7-v13YBHo4X5X13UiVdA5WOMzvmwRT4CJyyPDvDvfbTRo2_PB2P4qEgP-LeMkjDn1I4E7Ise2WxwMc0isUJZNPWh39UIj5ygNNPB5iTwbl0e5JNKh2rtAwqPq1Bx7g8gxkhbAyJuHWwZPMo3pTF7dRxjWK4ZIIxO6MC53PpH8VtjaHPbVKEE61rdZ6vlv7zQ6n7N_FYWH0SihO7WhGi3afqtl2xV0U=w1904-h362-s-no?authuser=0"} alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-full w-full" src={"https://lh3.googleusercontent.com/pw/ADCreHdbGoPj-nrjT1ffwoHwsjcATtw2qBwxJn_eGNM3mVu16AJZyKIrkqR9_3paT8v7Afim0DuyPhGo5ltaRdmmTzgwMCxlIrHj-vXU8rgN0w6tnN6HkadQjiTLx9kd-YYBnwYqNxIMzUSx4kWIC_U8bRyVPJUEaYGRwrTtms9bwzKxlxDg4oeDmM95h_xhu8hwU3otTzH4IU6VCDhpyCOUNTSJGK59v76N_8oR8n9q5QUzrWA1d5pocViF4yFPVR4RftfJUYErW-Xw0IUha5tEKT8VZ3EwSwrWGsBX-BYt23RHzEleT_eLnps_Y-Ht4H44_klgoCGwUfaLIkQhhEpNFcMk36Q07a1hSxMOHhD_UIISTeURpt9TQb3dB7OFQM_KpKadfk6pKSOpp8Fbcf0h0cRx-3GJDt2NPlyav3mYDRayidM2Q70FcrMU4nw9Ytsc-1EGMkdSbMKHN-4V31mhR3vV_W6MhNHuI41Ew1ZYWRrWlUsNczliNgu_NWmFgbWUB0f--mPPLhUGr177XftS1HhbOOuxKnToL-Tv84BMi1Ph7GCpLznuogIqiXCp3RnZF1fdYJZYJG8r_79D6oGSCABTkm77K5ETB3q1Z6VYd0tgSbAdDaBEYitZN3Yx_dIXylyLC4eWiogNATeYg3fasQpJ_SkCq-WGT61bGp7o3EotMb0k8dsHo4Rs8pCy58SkAsUAxROGpijuMGXfsiHFSbo5lZiB5zcA7h-6fIN3P3ANg1BUGZCPhnTvVsh1Sw63UR48ctVqe3TIlbXAoIhMFXjkn96isZSCqE9WusS8OdjPAVxDpBJXPcKxofObAKQnfEp5Ro5gtjzeUTcdRzkVGCf7VNdv60HfNqWkUeKEwTxEtwLGdI4DICru-8_1NaBafLTpOWxEG4xVTHoLecI8rZ_rYMjHVLaukhDeyBrAZbgFmGP2VNFsiO-8A7hD-TA=w1904-h362-s-no?authuser=0"} alt="" /></SwiperSlide>
                
            </Swiper>
        </>
    )
}

export default Carousel;