import React from 'react'
import Games from './Games'
import Carousel from './Carousel'
import TopBar from '../Layout/TopBar'
import Accessories from './Accessories'

const Index = (gameData) => {
  return (
    <div>
      <TopBar/>
        <Carousel/>
        <Games/>
        <Accessories/>
    </div>
  )
}

export default Index