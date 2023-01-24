import React from 'react'

const Input = () => {
  return (
    <div className="flex w-[90%] lg:w-fit focus:ring-2 focus:ring-blue-500 duration-200 bg-black/40 rounded-xl p-2">
    <div className='w-fit mx-auto text-white  outline-none flex  h-fit p-3'>
        <input type="text" className="w-full  :placeholder:text-lg flex-1 mx-auto h-full px-3 text-base placeholder-gray-100 bg-transparent outline-none :placeholder:text-xl rounded-lg focus:shadow-outline" placeholder="Enter your email address" />
    </div>
    <button className="bg-blue-600 flex items-center text-sm rounded-2xl text-white px-10 font-bold py-1 text-center hover:bg-blue-700 duration-500 hover:scale-105 w-fit hover:ring-2 hover:ring-pink-400">Let's talk</button>
    </div>
  )
}

export default Input