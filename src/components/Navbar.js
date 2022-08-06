import React from "react";
import Logo from "../assets/logo.png"
import {FaBars, FaTimes, FaWhatsapp, FaInstagram, FaFacebook} from "react-icons/fa";
import {useState} from "react";
import {Link} from "react-scroll";

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div className="flex justify-between items-center">
                <img src={Logo} alt="logo image" style={{width: '60px'}}/>
                <h2 className="px-4 sm:text-2xl font-bold">Club de Planeadores Rosario</h2>
            </div>

            {/* menu */}
            <ul className="hidden md:flex">
                <li className="hover:text-cyan-400"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className="hover:text-cyan-400"><Link to="club" smooth={true} duration={500}>Club</Link></li>
                <li className="hover:text-cyan-400"><Link to="cursos" smooth={true} duration={500}>Curso</Link></li>
                <li className="hover:text-cyan-400"><Link to="donde" smooth={true} duration={500}>Donde estamos</Link></li>
                <li className="hover:text-cyan-400"><Link to="contacto" smooth={true} duration={500}>Contacto</Link></li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className='py-6 text-4xl hover:text-cyan-400'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl hover:text-cyan-400'>
                    {' '}
                    <Link onClick={handleClick} to='club' smooth={true} duration={500}>
                        Club
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-cyan-400'>
                    {' '}
                    <Link onClick={handleClick} to='Curso' smooth={true} duration={500}>
                        Curso
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-cyan-400'>
                    {' '}
                    <Link onClick={handleClick} to='donde' smooth={true} duration={500}>
                        Donde estamos
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-cyan-400'>
                    {' '}
                    <Link onClick={handleClick} to='contacto' smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li>
            </ul>
            {/* social icons */}
            <div className="hidden lg:flex flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-40px] duration-300 bg-[#E1306C]">
                        <a className="flex justify-between items-center w-full text-white" href="https://ar.linkedin.com/in/matiasmilito">
                            Instagram <FaInstagram size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-40px] duration-300 bg-[#4267B2]">
                        <a className="flex justify-between items-center w-full text-white" href="https://ar.linkedin.com/in/matiasmilito">
                            Facebook <FaFacebook size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-40px] duration-300 bg-[#25D366]">
                        <a className="flex justify-between items-center w-full text-white" href="https://wa.me/543412553267">
                            WhatsApp <FaWhatsapp size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar