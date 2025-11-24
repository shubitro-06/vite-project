import React, { useState } from 'react'
import logo from './assets/logo(2).png'
import banner from './assets/banner.jpg'
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router";

const NavBar = () => {
    const [cng, setCng] = useState(true)

    const handleClick = () => {
        setCng(!cng)
    }
    return (
        <>
            <div >
                <div className='container '>
                    <div className=' flex justify-between p-5 items-center'>
                        <img src={logo}
                        // {<NavLink to="/" end>
                        //         {logo}
                        //     </NavLink>}
                             alt="" />
                        <div className={` ${cng ? "hidden" : "block"} absolute top-20 left-0 lg:static lg:flex justify-between  gap-[30px] items-center bg-[#00413db7] w-full lg:bg-transparent lg:w-auto text-center `}>
                            <ul className='lg:flex justify-center gap-[55px] text-white lg:text-[#00413D] '>
                                <li>
                                    <NavLink to="/" end>
                                        Home
                                    </NavLink>
                                </li>
                                <li><NavLink to="/Contact" end>
                                    Contact
                                </NavLink></li>
                                <li><NavLink to="/Notices" end>
                                    Notices
                                </NavLink></li>
                                <li><NavLink to="/About" end>
                                    About
                                </NavLink></li>
                            </ul>
                            <button className='text-amber-100 bg-amber-500 px-[29px] py-[11px] rounded-md cursor-pointer ' ><NavLink to="/Login" end>
                                Sing in
                            </NavLink></button>
                        </div>
                        <FiAlignJustify onClick={handleClick} className='text-5xl lg:hidden cursor-pointer' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavBar
