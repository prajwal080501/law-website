import React from 'react'
const ServiceCard = () => {
    return (
        <div className="flex w-full overflow-x-hidden space-x-5">
            <div className="w-[100%] relative h-96 rounded-xl backdrop-brightness-0 bg-cover bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546_960_720.jpg')]">
                <p className="text-5xl drop-shadow-2xl	 font-bold w-full text-white absolute bottom-1/2 text-center">Town Planning</p>
            </div>
            <div className="w-[80%] relative h-96 rounded-xl px-5 backdrop-brightness-0 bg-cover bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546_960_720.jpg')]">
                <p className="text-5xl drop-shadow-2xl px-5 font-bold w-full text-white absolute bottom-1/2 text-center">Town Planning</p>
            </div>
            <div className="w-[80%] hover:Scale-105 duration-200 cursor-pointer relative h-96 rounded-xl backdrop-brightness-0 bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600.jpg')]">
                <p className="text-5xl drop-shadow-2xl font-bold w-full text-white px-5 absolute bottom-1/2 text-center">Town Planning</p>
            </div>
        </div>
    )
}

export default ServiceCard