import React from 'react'
import logo from "../Assets/logo.png"
const Header = () => {
    return (
        <div className="hidden lg:inline-flex sticky top-5 w-screen h-fit px-3 justify-between items-center py-5">
            <div className='flex items-center flex-1'>
                <div className='bg-white w-fit h-fit rounded-full'>
                    <img src={logo} alt="img" className="w-16 h-16 object-contain" />
                </div>
                <p className="text-3xl cursor-pointer font-sans p-3 text-white font-extrabold">Adv Rajan Ladkat</p>
            </div>
            <div className="flex flex-1 list-none text-lg font-extralight text-white space-x-7">
                <a href="services" className="cursor-pointer hover:scale-105 duration-200 ease-linear">Services</a>
                <a href="#about" className="cursor-pointer hover:scale-105 duration-200 ease-linear">About</a>
                <a href="#contact" className="cursor-pointer hover:scale-105 duration-200 ease-linear">Contact</a>
                <li className="cursor-pointer hover:scale-105 duration-200 ease-linear">Documents</li>
            </div>
            <div className='flex flex-1 items-center space-x-5  justify-end px-5 text-white'>
                <a href='tel:+91834477319' className="bg-blue-600 text-xl rounded-2xl text-white px-6 font-bold py-2 text-center hover:bg-blue-700 duration-500 hover:scale-105 hover:ring-2 hover:ring-pink-400">Contact us</a>
            </div>
        </div>
    )
}

export default Header