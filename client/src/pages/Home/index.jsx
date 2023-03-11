import React from 'react'
import Header from './components/header'
import Navbar from './components/navbar'

function HomePage() {
  return (
    <div className='bg-primary lg:h-screen lg:w-full'>
     <Navbar></Navbar>
     <Header></Header>
    </div>
  )
}

export default HomePage