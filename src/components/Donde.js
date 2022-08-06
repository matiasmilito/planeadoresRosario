import React from "react";

const Donde = () => {
    return (
        <div className="w-full h-screen bg-[#0a192f] text-gray-300" name='donde'>
            <div className="h-[80px]"></div>
            <div className=" flex flex-col items-center justify-center w-full h-full">
                <div className="p-8">
                    <h2 className="text-4xl text-center font-bold inline border-b-4 border-cyan-400 text-gray-300">Donde Estamos</h2>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <h2 className="text-2xl p-4">El aeródromo se encuentra ubicado en la localidad de Alvear, Santa Fe. A solo 15 minutos desde el centro de Rosario.</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.255069465286!2d-60.596208000000004!3d-33.049751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7a83b70b564a1%3A0x2f4a94bd04ee3665!2sClub%20de%20Planeadores%20Rosario!5e0!3m2!1ses!2sar!4v1659756822572!5m2!1ses!2sar" width={"450"} height={"300"} loading={"lazy"} referrerpolicy={"no-referrer-when-downgrade"} className='rounded-xl'></iframe>
                </div>
            </div>
        </div>
    )
}

export default Donde