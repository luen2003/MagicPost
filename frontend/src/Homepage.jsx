import React from 'react'
import Header from './component/Header'
import Carousel from './component/Carousel'
import { Branding } from './component/Branding'

const Homepage = () => {
  return (
    <>
    <Header/>
    <div className='content'>
    <Carousel/>
    <Branding/>
    </div>
    </>
  )
}

export default Homepage