//import React from 'react'
import Image from "next/image"
import { 
    MagnifyingGlassIcon,
    //GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    //Bars3Icon,
 } from '@heroicons/react/20/solid'
import { useState } from "react"
import { useRouter } from "next/dist/client/router"

function Header() {

  const [searchInput, setSearchInput] = useState('')

  const router = useRouter()

  const search = () => {
    router.push({
        pathname: '/search',
        query: {
            search: searchInput,
        }
    })
  }

  return (
    <header className='sticky top-0 z-50 grid 
    grid-cols-3 bg-white shadow-md p-5  md:px-10'>

        {/* Left */}
        <div onClick= {() => router.push("/")} className='relative flex items-center h-10
        cursor-pointer my-auto space-x-10'>
            <Image 
                src='https://img.freepik.com/premium-vector/fire-logo-template_23987-60.jpg?w=2000'
                layout='fill'
                objectFit="contain"
                objectPosition="left"
            />
            <p className="text-red-500 font-semibold">FIRESALE</p>
        </div>

        {/* Middle */}
        <div className='flex items-center md:border-2 rounded-full
        py-2 md:shadow-sm'>
            <input
                value = {searchInput}
                onChange = {(e) => setSearchInput(e.target.value)} // e = event
                className='flex-grow pl-5 bg-transparent outline-none
                text-sm text-gray-600 placeholder-gray-400' 
                type="Text" 
                placeholder='Start your search'
                />

            <MagnifyingGlassIcon onClick={search} className='hidden md:inline-flex h-8 bg-red-400
            text-white rounded-full p-2 cursor-pointer md:mx-2'/>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4
        justify-end text-gray-500">
            <p className="hidden md:inline cursor-pointer">Create an account</p>
            {/* <GlobeAltIcon className="h-6 cursor-pointer"/> */}

            <div className="flex items-center space-x-2
            border-2 p-2 rounded-full">
                {/* <Bars3Icon className="h-6 cursor-pointer"/> */}
                <UserCircleIcon className="h-6 cursor-pointer"/>
            </div>
        </div>
    </header>
  )
}

export default Header

