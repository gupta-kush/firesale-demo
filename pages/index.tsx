// Represents the "home" point of webpage

//import type {, NextPage } from 'next'
import Head from 'next/head'  
import Image from 'next/image'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import InfoCard from "../components/InfoCard"
import { useRouter } from "next/dist/client/router"

//const Home: NextPage = () => {
export default function Home({ exploreData }: any) {
  return (
    <div className="">
      <Head>
        <title>FIRESALE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
  
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-3xl font-semibold pb-5'>Trending Deals Near You</h2>
          {/* Pull data from a server - API Endpoint, STATIC RENDERING */}
          <div className='flex flex-col grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {exploreData?.map(({img, title, description, distance, latitude, longitude}: any) => (
            // <h1>{item.location}</h1>
            <InfoCard 
            key={title}
              img={img} 
              title={title}
              description={description}
              distance={distance}
              latitude={latitude}
              longitude={longitude}
            />
          ))}
          </div>
        </section>
      </main>

    </div>
  )
}

//export default Home
export async function getServerSideProps() {
  const exploreData = await fetch('https://api.npoint.io/bfb5dbb0b764bdd7fcee').
  then(
    (res) => res.json()
  )

  return {
    props: {
      exploreData
    }
  }
}
