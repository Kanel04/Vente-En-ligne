import React from 'react'
import Landing from './components/Landing'
import Navbar from './components/navbar'

function DasbordPage() {
  return (
    <div className='bg-[#f0f0f0] h-auto'>
      <Navbar></Navbar>
      <Landing></Landing>
    </div>
  )
}

export default DasbordPage