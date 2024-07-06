import React from 'react'
import Header from './component/Header'
import Carousel from './component/Carousel'
import { Branding } from './component/Branding'
import Feature from './component/Feature'

const Homepage = () => {
  return (
    <>
    <Header/>
    <div className='content'>
    <Carousel/>
    <Branding/>
    <Feature/>
    </div>
    </>
  )
}

export default Homepage