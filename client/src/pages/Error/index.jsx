import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
     <div className='flex flex-row items-center m-5'>
        <p className='font-bold'>Page 404 not found </p>
        <Link to="/" className='text-2xl text-red-500 ml-3 '>Acceuil</Link>
     </div>
    </div>
    
  )
}

export default ErrorPage