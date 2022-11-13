//import React from 'react'
import Header from  "../components/Header"
import { useRouter } from "next/dist/client/router"
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useState } from 'react'


function Upload() {

    const router = useRouter()
    const { upload } = router.query

    const address = '1818 Palo Pinto Drive, Allen, TX, USA'

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDjiRy0v8ZHvZxdgDJPbJWvNZUx-dk7M9U",
        libraries: ['places'],
    })

    const [map, setMap] = useState(/** @type google.maps.Map */ (null))


    if (!isLoaded) {
        return 'is loading...'
    }

    const temp = () => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDjiRy0v8ZHvZxdgDJPbJWvNZUx-dk7M9U`)
            .then((response) => {
                return response.json();
            }).then(jsonData => {
            console.log(jsonData.results[0].geometry.location);
            console.log(1)
        })
    }

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
            <input
            id="message"
            rows="4"
            className="block p-2.5 w-full text-gray-900  "
            placeholder="Ex. Papa Johns"
            ></input>
        </div>

        <div className="col-span-2 row-span-3 p-4  border">
            <label forHtml="message" className="block mb-2  text-gray-900 ">
            Address
            </label>
           <Autocomplete>
                <input
                    id="message"
                    rows=""
                    className="block p-2.5 w-full text-gray-900  "
                    placeholder="Ex. 2770 Waterview Pkwy, Richardson, TX"
                >
                </input>
           </Autocomplete>
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
      onClick={temp}
    >
      UPLOAD
    </button>
  </div>

  )


}

export default Upload