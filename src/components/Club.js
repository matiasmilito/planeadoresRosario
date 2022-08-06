import React from "react";
import clubImg from "../assets/clubImg.JPG"

const Club = () => {
    return (
        
        <div className="w-full h-full bg-[#0a192f] text-gray-300" name='club'>
            <div className="h-[80px]"></div>
            <div className=" flex flex-col items-center justify-center w-full h-full">
                <div className="p-8">
                    <h2 className="text-4xl text-center font-bold inline border-b-4 border-cyan-400 text-gray-300">El Club</h2>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <h2 className="text-2xl p-4">El Club de Planeadores Rosario es una institución civil sin
                        fines de lucro fundada en 1942, con personería jurídica según decreto.
                        En su Escuela de Vuelo , con más de siete décadas de funcionamiento, se formaron 
                        cientos de pilotos, muchos de los cuales ocupan posiciones destacadas en vuelo deportivo,
                        civil y comercial, en el país y en el extranjero</h2>
                    <img src={clubImg} alt="club" className="rounded-xl"/>
                </div>
            </div>
        </div>
        
        // <div name="club" className="w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col items-center justify-center">
        //     <div>
        //         <h1 className="text-4xl font-bold inline border-b-4 border-cyan-400 text-gray-300">El Club</h1>
        //     </div>
        //     <div className="flex items-center">
        //         <img src={clubImg} alt="club" className='h-[300px] p-6'/>
        //         <p className="p-6">El Club de Planeadores Rosario es una institución civil sin<br/>
        //         fines de lucro fundada en 1942, con personería jurídica según decreto.<br/>
        //         El aeródromo e instalaciones sociales están ubicados en la localidad de <br/>
        //         Alvear. Cuenta además con una sede administrativa y secretaría en la <br/>
        //         ciudad de Rosario, Santa Fe, Argentina.<br/>
        //         En su Escuela de Vuelo , con más de siete décadas de funcionamiento, se formaron <br/>
        //         cientos de pilotos, muchos de los cuales ocupan posiciones destacadas en vuelo deportivo,<br/>
        //         civil y comercial, en el país y en el extranjero
        //         </p>
        //     </div>
        // </div>
    )
}

export default Club