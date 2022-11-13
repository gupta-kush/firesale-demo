//import React from 'react'
import Header from  "../components/Header"
import { useRouter } from "next/dist/client/router"

function Upload() {

    const router = useRouter()
    const { upload } = router.query

  return (
    <div className="flex flex-col items-center justify-center  space-y-4 py-24">

    <p className="text-3xl text-center font-light text-gray-600">
      <br />
      Please fill out the form below with the correct details!
    </p>

    <div className=" container mx-auto px-16 lg:grid  lg:grid-cols-2 lg:grid-rows-3   w-full">
        <div className="col-span-2 row-span-3 p-4  border">
            <label forHtml="message" className="block mb-2  text-gray-900 ">
            The Place
            </label>
            <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-gray-900  "
            placeholder="Ex. Papa Johns"
            ></textarea>
        </div>

        <div className="col-span-2 row-span-3 p-4  border">
            <label forHtml="message" className="block mb-2  text-gray-900 ">
            Address
            </label>
            <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-gray-900  "
            placeholder="Ex. 2770 Waterview Pkwy, Richardson, TX"
            ></textarea>
        </div>

        <div className="col-span-2 row-span-3 p-4  border">
            <label forHtml="message" className="block mb-2  text-gray-900 ">
            Your description
            </label>
            <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-gray-900  "
            placeholder="Leave a comment describing the deal you received"
            ></textarea>
        </div>

    </div>
    <button
      type="button"
      className=" text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
    >
      UPLOAD
    </button>
  </div>

  )
}

export default Upload