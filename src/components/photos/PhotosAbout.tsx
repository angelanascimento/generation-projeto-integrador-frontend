function PhotosAbout() {

    return(
        <div className="w-full xl:w-2/5">
            <div className="grid grid-cols-8 grid-rows-7 gap-1.5 mb-16 xl:h-screen xl:mb-0">
                <img  className="rounded-xl col-start-1 col-span-4
                row-start-1 row-span-4 h-full" src="src/assets/img/photos-about/photo-05.jpg" alt="Fotografia de uma pessoa com um cesto de palha no braço mostrando as uvas roxas colhidas" />
                <img className="rounded-xl col-start-5 col-span-4
                row-start-1 row-span-2 h-full"src="src/assets/img/photos-about/photo-02.jpg" alt="Fotografia de vários caixotes de frutas mostrados de cima, o braço de uma pessoa aparece mexendo nessas frutas"/>
                <img className="rounded-xl col-start-4 col-span-5
                row-start-5 row-span-2 h-full w-full "src="src/assets/img/photos-about/photo-01.jpg" alt="Fotografia de um homem com chepéu de palha encurvado colhendo sua plantação" />
                <img className="rounded-xl col-start-1 col-span-3
                row-start-5 row-span-2 h-full"src="src/assets/img/photos-about/photo-03.jpg" alt="Fotografia posicionada lateralmente a vários caixotes de frutas empilhados em uma banca"/>
                <img className="rounded-xl col-start-5 col-span-2
                row-start-3 row-span-2 h-full" src="src/assets/img/photos-about/photo-06.jpg" alt="Fotografia de dois caixotes de vegeitas, sendo o de baixo com pepinos e o de cima com tomates pequenos" />
                <img className="rounded-xl col-start-7 col-span-2
                row-start-3 row-span-2 h-full "src="src/assets/img/photos-about/photo-04.jpg" alt="Fotografia de uma melância pela metade no chão e duas criaças agachadas retirando um pedaço dela com suas respectivas colheres"/>                        
            </div>
        </div>                    
    )
}

export default PhotosAbout;