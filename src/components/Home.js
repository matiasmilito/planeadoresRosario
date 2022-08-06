import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi";
import planeador1 from "../assets/homeImg.jpeg";
import {Link} from "react-scroll"

const Home = () => {
    return (
        <div style={{backgroundImage: `url(${planeador1})`}} className="h-screen w-full content-div" name='home'>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl sm:text-7xl font-bold text-[#0a192f] text-center mt-[100px] mb-6">Bienvenido al club</h1>
                <Link to="club" smooth={true} duration={500}>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0a192f] hover:border-[#0a192f]">Conocenos
                        <span className="group-hover:rotate-90 duration-300">
                           <HiArrowNarrowRight className="ml-3"/>
                          </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home