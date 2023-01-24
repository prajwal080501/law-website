import React from 'react'

const Form = () => {
  return (
    <div className="max-w-7xl mx-auto bg-transparent flex flex-col space-y-5 w-screen mt-10 px-3">
    <p className="text-5xl font-bold text-white text-center mb-5 w-full">Free <span className="decoration-4 decoration-fuchsia-500 underline">Consultation</span></p>
    <p className="text-lg w-[90%] lg:w-1/2 text-gray-300/80 mx-auto tracking-wider text-center mb-10">With office conviniently located in Ramwadi Nagar Road Pune. We are ready to assist you and your loved ones. Please contact us to set up a free consultation.</p>
    <form className="flex flex-col space-y-5 w-[90%] lg:w-1/2 mx-auto">
        <input type="text" placeholder="Name" className=" rounded-lg shadow-sm p-3 bg-black/50 text-white focus:ring-2 focus:ring-blue-500 duration-300 outline-none"/>
        <input type="text" placeholder="Email" className=" rounded-lg shadow-sm p-3 bg-black/50 text-white focus:ring-2 focus:ring-blue-500 duration-300 outline-none"/>
        <input type="text" placeholder="Phone" className=" rounded-lg shadow-sm p-3 bg-black/50 text-white focus:ring-2 focus:ring-blue-500 duration-300 outline-none"/>
        <textarea placeholder="Message" rows={5} cols={10} className=" rounded-lg shadow-sm p-3 bg-black/50 text-white focus:ring-2 focus:ring-blue-500 duration-300 outline-none"/>
        <button className="bg-fuchsia-500 hover:bg-fuchsia-600 duration-200 text-white font-bold py-2 px-4 w-1/2 mx-auto active:scale-95 rounded">Submit</button>
    </form>
    </div>
  )
}

export default Form