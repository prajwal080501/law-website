import React from 'react'
import Card from './Card'

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto bg-transparent flex flex-col space-y-5 w-screen mt-10 px-3">
        <p className="text-5xl font-bold text-white text-center mb-10 w-full">Why <span className="decoration-4 decoration-fuchsia-500 underline">Choose</span> Us</p>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-10">
        <Card title="Highly recommended"/>
        <Card title="Expert Services"/>
        <Card title="100% Success rate"/>
        </div>
    </div>
  )
}

export default Features