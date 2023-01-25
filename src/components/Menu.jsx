import React from 'react'
import { HiMenuAlt4 } from "react-icons/hi"
import { AiFillCloseCircle } from "react-icons/ai"
import logo from "../Assets/logo.png"
const Menu = ({ open, handleOpen }) => {
  return (
    <div className="lg:hidden w-screen h-fit  p-5">
      <HiMenuAlt4 onClick={handleOpen} className="text-3xl z-10 hover:scale-110 duration-200 ease-linear hover:text-fuchsia-500 cursor-pointer text-white" />
      {/* add a black opacity behind the menu */}
      <div className={`w-screen h-screen bg-black blur-lg absolute top-0 left-0 -z-10 transition-all duration-500 ease-linear ${open ? ' w-full blur-lg	' : ' blur-sm opacity-0'}`} />
      <div className={`w-[80%] overflow-y-scroll h-full bg-gradient-to-br from-sky-500 to-fuchsia-600 absolute top-0 left-0 z-10 transition-all duration-500 ease-linear ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <p onClick={handleOpen} className="py-5 px-3 w-full">
          <AiFillCloseCircle className="text-3xl text-white hover:scale-110 duration-200 ease-linear cursor-pointer" />
        </p>
        <div className="flex w-full h-fit items-center py-5 justify-center">
          <div className='bg-white w-fit h-fit rounded-full'>
            <img src={logo} alt="img" className="w-24 h-24 object-contain" />
          </div>
        </div>
        <div className="w-full h-fit flex mt-10 flex-col items-center justify-center space-y-5">
          <p className="text-3xl font-bold cursor-pointer hover:scale-110 active:scale-95 duration-200 ease-linear text-white">Home</p>
          <p className="text-3xl font-bold cursor-pointer hover:scale-110 active:scale-95 duration-200 ease-linear text-white">About</p>
          <p className="text-3xl font-bold cursor-pointer hover:scale-110 active:scale-95 duration-200 ease-linear text-white">Services</p>
          <p className="text-3xl font-bold cursor-pointer hover:scale-110 active:scale-95 duration-200 ease-linear text-white">Testimonials</p>
          <p className="text-3xl font-bold cursor-pointer hover:scale-110 active:scale-95 duration-200 ease-linear text-white">Contact</p>
          <p className="text-3xl font-bold cursor-pointer hover:scale-110 active:scale-95 duration-200 ease-linear text-white">Map</p>
        </div>
        <div className="w-full h-fit flex absolute bottom-0 flex-col items-center justify-center">
          <p className="w-full text-lg text-white text-center font-medium pb-2">
            &copy; {Date().slice(11, 15)} Adv Rajan Ladkat
          </p>
          </div>
      </div>
    </div>
  )
}

export default Menu