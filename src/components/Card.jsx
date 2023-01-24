import React from 'react'
import {MdRecommend} from "react-icons/md"
const Card = ({title}) => {
  return (
    <div className="w-[90%] lg:w-1/2 h-fit cursor-pointer hover:scale-110 duration-150 ease-linear p-2 bg-black/30 rounded-lg shadow-lg">
        <div className="w-full p-2 h-1/2 flex flex-col items-center justify-center">
            <MdRecommend className="text-5xl text-white/50 mb-5"/>
            <h2 className="text-3xl text-white font-bold text-center">
                {title}
            </h2>
            <p className="text-lg p-3 w-[95%] text-white/50 text-center mx-auto">
            Choosing us as your legal representation would be a wise decision for a number of reasons. Our extensive experience in the fields of Property Laws, Town Planning Laws, and Cyber and Computer Laws, allows us to provide expert guidance and representation in these areas. We are well-versed in the laws and regulations governing these areas and have a proven track record of successfully representing clients in these matters.
            </p>
        </div>
    </div>
  )
}

export default Card