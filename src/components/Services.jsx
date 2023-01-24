import React from 'react'
import {SiBandsintown} from "react-icons/si"
import {RiComputerFill} from "react-icons/ri"
import {AiFillHome} from "react-icons/ai"
const Services = () => {
    return (
        // services section 
        <div className="max-w-7xl mx-auto bg-transparent flex flex-col space-y-5 w-screen mt-10 px-3">
            <p className="text-5xl font-bold text-white text-center mb-10 w-full">Our <span className="decoration-4 decoration-fuchsia-500 underline">Services</span></p>
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-10">
                <div className="flex flex-col items-center justify-center space-y-5">
                    <div className="w-40 h-40 bg-fuchsia-500 rounded-full flex items-center justify-center">
                        <SiBandsintown className="text-4xl text-white"/>
                    </div>
                    <p className="text-2xl font-bold text-white">Town Planning</p>
                    <p className="text-lg text-white/50 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-5">
                    <div className="w-40 h-40 bg-fuchsia-500 rounded-full flex items-center justify-center">
                        <RiComputerFill className="text-4xl text-white"/>
                    </div>
                    <p className="text-2xl font-bold text-white">Computer Laws</p>
                    <p className="text-lg text-white/50 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-5">
                    <div className="w-40 h-40 bg-fuchsia-500 rounded-full flex items-center justify-center">
                        <AiFillHome className="text-4xl text-white"/>
                    </div>
                    <p className="text-2xl font-bold text-white">Property Law</p>
                    <p className="text-lg text-white/50 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
        </div>
    )
}

export default Services