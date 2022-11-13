//import React from 'react'
import Image from "next/image"


function SmallCard({img, title, distance, description}) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4
    rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105
    transition transform duration-200 ease-out">
        {/* Left */}
        <div className="relative h-48 w-80">
            <Image src={img} layout="fill" className="rounded-lg"/>
        </div>  

        {/* Right */}
        <div>
            <h2 className="font-semibold">{title}</h2>
            <h2 className="font-semibold">{description}</h2>
            <h3 className="text-gray-500">{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard