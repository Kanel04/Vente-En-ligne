import React from 'react'
import About from './components/about'
import Bourse from './components/bourse'
import Contact from './components/contact'
import Cours from './components/cours'
import Footer from './components/footer'
import Header from './components/header'
import Idee from './components/Idee'
import Navbar from './components/navbar'

function HomePage() {
  return (
    <div className='bg-[#f0f0f0]'>
      <Navbar></Navbar>
      <Header></Header>
      <Contact></Contact>
      <About></About>
      <Cours></Cours>
      <Idee></Idee>
      <Bourse></Bourse>
      <Footer></Footer>
    </div>
  )
}

export default HomePage