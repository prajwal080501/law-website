import React from 'react'
import logo from "../Assets/logo.png"
const Footer = () => {
  return (
    <div className="w-full bg-black/50 px-3 py-4 flex items-center flex-col space-y-2 justify-center">
       <div className="w-full px-10 mx-auto justify-between flex items-center">
       <div className='bg-white w-fit h-fit rounded-full'>
                    <img src={logo} alt="img" className="w-10 h-10 lg:w-16 lg:h-16 object-contain" />
                </div>
                <p className="text-xl lg:text-3xl font-extrabold text-white text-center">Adv Rajan Ladkat</p>

       </div>

        <p className="text-lg text-gray-300/80">&copy; 2023 All rights reserved</p>
    </div>

  )
}

export default Footer