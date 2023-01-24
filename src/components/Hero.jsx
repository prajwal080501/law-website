import React from 'react'
import Input from './Input';
import photo from "../Assets/photo.jpg"
const Hero = () => {
  return (
    <div className="w-screen h-1/2 flex flex-col items-center justify-center mt-10">
        <div className="w-3/4 h-3/4 space-y-5 flex flex-col items-center justify-center">
            <h2 className=' text-3xl lg:text-6xl font-bold text-center text-white'>Welcome to the</h2>
            <p Adv className="text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent w-fit bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text">Adv Rajan Ladkat</p>
            <p className="text-lg lg:text-2xl font-extralight pb-5 text-white/50 text-center">Championing your cause, fighting for your rights.</p>
            </div>
            <Input/>
    </div>
  )
}

export default Hero