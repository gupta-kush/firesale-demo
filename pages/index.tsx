// Represents the "home" point of webpage

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"

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
          <h2 className='text-3xl font-semibold pb-5'>Explore Nearby Deals</h2>
          {/* Pull data from a server - API Endpoint, STATIC RENDERING */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {exploreData?.map(({img, distance, location}: any) => (
            // <h1>{item.location}</h1>
            <SmallCard 
            key={img}
              img={img} 
              distance={distance}
              location={location}
            />
          ))}
          </div>
        </section>
      </main>

    </div>
  )
}

//export default Home
export async function getStaticProps() {
  const exploreData = await fetch('https://api.npoint.io/fe93aa3fbb5487631f0d').
  then(
    (res) => res.json()
  )

  return {
    props: {
      exploreData
    }
  }
}
