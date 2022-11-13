//import React from 'react'
import Image from "next/image"
import { HeartIcon } from "@heroicons/react/24/outline"
import searchInput from "../components/Header"
import { useState } from "react"
import { useRouter } from "next/dist/client/router"




function InfoCard({img, title, description, distance, latitude, longitude}) {

    const router = useRouter()
    // const { exploreData } = router.query
    const search = () => {
        router.push({
            pathname: '/map',
            query: {
                longitude: longitude,
                latitude: latitude,
            }
        })
    }
  return (
    <div onClick={search} className="flex py-7 px-2 pr-2 border-b border-t cursor-pointer
    hover:opacity-80 hover:shadow-lg transition duration-200 ease-out">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
        </div>

        <div className="flex flex-col flex-grow pl-5">
            <div className="flex justify-between">
                <p className="text-xl font-semibold">{title}</p>
                <HeartIcon className="h-7 cursor-pointer" />
            </div>

            <h4 className="text-l text-gray-700">{distance}</h4>

            <p className="pt-2 text-md text-gray-500 flex-grow">{description}</p>

        </div>
    </div>
  )
}

export default InfoCard