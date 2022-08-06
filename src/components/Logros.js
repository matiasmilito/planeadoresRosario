import React from "react";
import TedX from "../assets/tedx.jpg";


const Logros = () => {
    return (
        <div className="w-full h-screen bg-[#0a192f] text-gray-300" name='cursos'>
            <div className="h-[80px]"></div>
          <div className='flex flex-col justify-center items-center w-full h-full'>
        
          
            
          <div className="p-8">
            <p className='text-4xl font-bold inline border-b-4 border-cyan-400'>
                Cursos
            </p>
          </div>
          
          
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Cumplí hoy tu sueño y convertite en piloto de planeador!</p>
            </div>
            <div>
              <p> Para realizar el curso tenes que tener la edad de 15 años y 9 meses cumplidos. El curso consta de 40 vuelos de instrucción que son los que exige la ANAC para poder rendir el examen con el cual obtendrás la licencia de piloto de planeador y VFR Controlado. <br/>
              Te comentamos que si tu objetivo a futuro es hacer el curso de piloto de avión, con la Licencia de piloto de planeador solo se te pedirán la mitad de horas, por lo cual no solo tendrás una ventaja técnica, sino también económica.</p>  
            </div>
          </div>
      </div>
        </div>
    )
}

export default Logros;