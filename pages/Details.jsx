import React from 'react'
import Head from 'next/head'
import TopBar from '../Components/Layout/TopBar'
import Footer from '../Components/Layout/Footer'
import DetailsPage from '../Components/DetailsPage/DetailsPage'

const Details = () => {
  return (
    <>
        <TopBar/>
    <Head>
        <title>Swift Games | Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='item-details'>
        <DetailsPage/>
        <Footer/>
      </div>
    </>
  )
}

export default Details