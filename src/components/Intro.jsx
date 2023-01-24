import React from 'react'

const Intro = () => {
    return (
        <div className="max-w-7xl px-4 rounded-lg pt-28 mx-auto flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 h-fit p-3">
            <div className="flex-1 items-center justify-center">
                <p className="text-4xl lg:text-6xl font-bold text-white">Let's <span className='decoration-4 decoration-fuchsia-500 underline'>Introduce</span> </p>
                <p className="text-4xl lg:text-6xl ml-5 font-bold text-white">Ourself</p>
            </div>
            <div className="flex-1 items-center bg-gradient-to-br from-blue-500/50 to bg-fuchsia-500/50 justify-center p-2 rounded-lg shadow-xl w-[95%]">
                <p className="text-gray-200 tracking-wider text-lg font-medium p-3 text-center">
                I am an experienced lawyer with 8 years of expertise in Property Laws, Town Planning Laws, and Cyber and Computer Laws. I have been practicing in the courts of Pune, as well as the PMRDA court. My knowledge and experience in these areas allow me to provide effective representation and guidance to clients. I am well-versed in the laws and regulations governing these areas and have a proven track record of success. My client-centric approach ensures that client's concerns are addressed and they are informed about the progress of their case. I strive to provide the best possible outcome for each of my clients. I have a dedicated and skilled team to handle the legal matters efficiently. I have the ability to navigate the court systems of Pune and PMRDA court with ease and efficiency. I am always available to take up new cases and provide legal assistance.
                </p>
                <p className="text-white font-bold text-lg w-full text-right p-3">-Adv Rajan Ladkat</p>
            </div>
        </div>
    )
}

export default Intro