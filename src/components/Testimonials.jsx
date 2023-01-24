import React from 'react'

const Testimonials = () => {
  return (
    // design a testimonial component make it responsive and modern looking
    <div className="w-full h-fit p-8 bg-black/40  mt-10 flex flex-col items-center justify-center space-y-5">
        <p className="text-5xl font-bold text-white text-center">Testimonials</p>
        <div className="w-full flex p-1 flex-col lg:flex-row items-center justify-center space-y-5 lg:space-y-0 lg:space-x-10">
            <div className="w-[95%] lg:w-[40%] h-fit cursor-pointer hover:scale-110 duration-150 ease-linear p-2 bg-black/30 rounded-lg shadow-lg">
                <div className="w-full p-2 h-1/2 flex flex-col items-center justify-center">
                    <p className="text-lg p-3 w-[95%] text-white/50 text-center mx-auto">
                    The experience with Adv Rajan Ladkat was very good. His way of dealing  with clients is fantastic.
                    </p>
                    <p className="text-lg text-fuchsia-500/70 font-bold text-center">
                    - Sham Kharat
                    </p>
                </div>
            </div>
            <div className="w-[90%] lg:w-[40%] h-fit cursor-pointer hover:scale-110 duration-150 ease-linear p-2 bg-black/30 rounded-lg shadow-lg">
                <div className="w-full p-2 h-1/2 flex flex-col items-center justify-center">
                    <p className="text-lg p-3 w-[95%] text-white/50 text-center mx-auto">
                    Experience with Sir was really good. His perspective found leaning towards client's side, which is a rare quality.
                    </p>
                    <p className="text-lg text-fuchsia-500/70 font-bold text-center">
                    - Ashu Tambvekar
                    </p>
                </div>
            </div>
            <div className="w-[90%] lg:w-[40%] h-fit cursor-pointer hover:scale-110 duration-150 ease-linear p-2 bg-black/30 rounded-lg shadow-lg">
                <div className="w-full p-2 h-1/2 flex flex-col items-center justify-center">
                    <p className="text-lg p-3 w-[95%] text-white/50 text-center mx-auto">
                    He is very genuine lawer. He listened our concerns and spend good amount of time to do his homework and helped us to understand each and every clause. He always ready to help over whatsapp or phone whenever need .....great help
                    </p>
                    <p className="text-lg text-fuchsia-500/70 font-bold text-center">
                    - Sanju Chaturvedi
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials