//import React from 'react'
import Header from "../components/Header"
import { useRouter } from "next/dist/client/router"
import InfoCard from "../components/InfoCard"

function Search({searchResults}) {

    const router = useRouter()
    const { search } = router.query

  return (
    <div>
        <Header />

        <main className="flex">
            <section className="flex-grow pt-14 px-6">
                <h1 className="text-3xl font-semibold mt-2 mb-6">Deals related to {search}</h1>
                <div className="inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="button">Type of place</p>
                    <p className="button">Best deal</p>
                    <p className="button">Distance</p>
                </div>

                <div className="flex flex-col">
                    {searchResults.map(( { img, location, title, description, 
                    star, price, total} ) => (
                        <InfoCard
                            key={img} 
                            img={img}
                            //location={location}
                            title={title}
                            description={description}
                            //star={star}
                            //price={price}
                            //total={total}
                        />    
                    ))}
                </div>
            </section>
        </main>

    </div>
  )
}

export default Search


export async function getServerSideProps() {
    const searchResults = await fetch('https://api.npoint.io/bfb5dbb0b764bdd7fcee').then((res) => res.json())
  
    return {
      props: {
        searchResults
      }
    }
  }