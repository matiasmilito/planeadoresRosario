import React from "react";

const Contacto = () => {
    return (
        <div name="contacto" className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4 pb-2">
            <div className="h-[80px]"></div>
            <form method="POST" action="https://getform.io/f/2724fdc8-643e-47cb-a532-ac970a1142ef" className="flex flex-col max-w-[600px] w-full mt-16">
                <div className="p-6 flex flex-col items-center">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-400 text-gray-300">Contacto</p>
                    <p className="text-gray-300 py-4">// Envíe el formulario o envíe un mail - info_cprosario@yahoo.com.ar</p>
                </div>
                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Nombre" name="name"/>
                <input className="my-4 p-2 bg-[#ccd6f6]" type="text" placeholder="Email" name="email"/>
                <textarea className="bg-[#ccd6f6] p-2" name="message" id="" cols="30" rows="8" placeholder="Mensaje"></textarea>
                <button className="text-white border-2 hover:bg-cyan-400 hover:border-cyan-400 px-4 py-3 my-4 mx-auto flex items-center">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto