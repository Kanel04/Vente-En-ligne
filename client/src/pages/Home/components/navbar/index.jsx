import React from 'react'
import { LinkButton } from '../../../../components/buttons'

function Navbar() {
  return (
    <div>
<nav className='flex flex-row h-24'>
<div className='flex flex-row ml-4 py-5 font-bold lg:text-3xl'>
    <p className='text-secondary lg:text-5xl'>V</p>ente.    
</div>
<div className='lg:ml-80 lg:pl-12 flex flex-row lg:py-8 bg-secondary '>
    <LinkButton page="/"  >About</LinkButton>
    <LinkButton page="/" >Services</LinkButton>
    <LinkButton page="/" >Products</LinkButton>
    <LinkButton page="/" >Information</LinkButton>
    
</div>
<div className=' lg:py-6 lg:pl-80  bg-secondary w-full '>
<LinkButton page="/login" >Sign in</LinkButton>
<LinkButton page="/" className="bg-primary py-3 px-6 rounded-lg shadow-xl ml-2">Sign up</LinkButton>
     </div>
        </nav>
    </div>
  )
}

export default Navbar