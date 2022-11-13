//import React from 'react'
import Image from "next/image"
import { useRouter } from "next/dist/client/router"


function Banner() {

  const router = useRouter()


  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image 
        //src="https://links.papareact.com/0fm"
        src="https://wallpaperaccess.com/full/1667651.jpg"
        layout="fill"
        objectFit="cover"
        />
        <div className="absolute top-1/2 w-full text-center">
            <p className="font-semibold text-white text-md sm:text-lg">Want to contribute?</p>
            <button onClick= {() => router.push("/upload")} className="text-red-500 bg-white px-10 py-4 
            shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-100">
                Upload a FIRE sale
                </button>
        </div>
    </div>
  )
}

export default Banner