import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div className="max-w-7xl mx-auto bg-transparent flex flex-col space-y-5 w-screen mt-10 pt-5 px-3">
            <p className="text-5xl font-bold text-white text-center mb-10 w-full">Area of <span className="decoration-4 decoration-fuchsia-500 underline">Practice</span></p>
            <div className="flex flex-col space-y-5">
                <ServiceCard/>
                </div>
        </div>
    )
}

export default Services