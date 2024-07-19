import React from 'react'
import Header from './component/Header'
import Carousel from './component/Carousel'
import { Branding } from './component/Branding'
import Feature from './component/Feature'
import { useAuth } from './contexts/AuthContext'

const Homepage = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);

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