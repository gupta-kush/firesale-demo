import Header from  "../components/Header"
import { useRouter } from "next/dist/client/router"
import { useJsApiLoader, Autocomplete, GoogleMap, Marker, DirectionsRenderer} from "@react-google-maps/api";
import { useRef, useState } from 'react'

const center = { lat: 33.117, lng: -96.719 }


function Map() {

    const router = useRouter()
    const { upload } = router.query

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDjiRy0v8ZHvZxdgDJPbJWvNZUx-dk7M9U",
        libraries: ['places'],
    })

    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')


    const originRef = { lat: 33.1525235, lng: -96.789572 }
    const destinationRef = { lat: 33.119580, lng: -96.720050 }

    if (!isLoaded) {
        return 'is loading...'
    }

    async function calculateRoute() {
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef,
            destination: destinationRef,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiantionRef.current.value = ''
    }

    return (
        <div class = "h-screen">
            <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{
                    zoomControl: true,
                    streetViewControl: true,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
                onLoad={map => setMap(map)}
                onLoad={calculateRoute}
            >
                {/*<Marker position={originRef} />*/}
                {/*<Marker position={destinationRef} />*/}
                {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                )}

            </GoogleMap>
            <button type="button" className=" text-black rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "

            >
                CLICK
            </button>
        </div>
    )
}

export default Map