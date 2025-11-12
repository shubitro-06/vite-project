import React, { useState } from 'react'
import logo from './assets/logo(2).png'
import banner from './assets/banner.jpg'
import { FiAlignJustify } from "react-icons/fi";
import Input from './Input';


const NavBar = () => {
    const [cng, setCng] = useState(false)

    const handleClick = () => {
        setCng(!cng)
    }
    return (
        <>
            <div >
                <div className='container '>
                    <div className=' flex justify-between p-5 items-center'>
                        <img src={logo} alt="" />
                        <div className={` ${cng ? "hidden" : "block"} absolute top-20 left-0 lg:static lg:flex justify-between  gap-[30px] items-center bg-[#00413db7] w-full lg:bg-transparent lg:w-auto text-center `}>
                            <ul className='lg:flex justify-center gap-[55px] text-white lg:text-[#00413D] '>
                                <li>Home</li>
                                <li>Contact</li>
                                <li>Notices</li>
                                <li>About</li>
                            </ul>
                            <button  className='text-amber-100 bg-amber-500 px-[29px] py-[11px] rounded-md cursor-pointer ' >Click</button>
                        </div>
                        <FiAlignJustify  onClick={handleClick} className='text-5xl lg:hidden cursor-pointer'/>
                    </div>
                </div>

                <div className='bg-[url(./assets/banner.jpg)] lg:px-[300px] py-[200px] bg-cover bg-no-repeat bg-center'>
                    <div className="container">

                        <div >
                            <h1 className='text-white text-[30px] lg:text-[50px] font-bold'>Hello! <br />
                                I’m Zarror Nibors</h1>
                            <p className='lg:text-[15px] text-[12px] lg:w-[500px] text-white py-5'>I’am freelance UI/UX Desogner based in Indonesia who loves to craft attractive design experiences for the web.</p>
                            <button className='text-amber-100 bg-amber-500 px-[29px] py-[11px] rounded-md cursor-pointer ' >Contact me</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
