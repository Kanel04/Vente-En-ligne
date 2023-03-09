import React from 'react'

function DonneurPage() {
  return (
    <div className='flex flex-col items-center m-5'>
        <h1 className='font-bold text-3xl mr-40 mt-5'>Donneur</h1>
        <input type="text" className='mt-16 w-96 h-12 px-5' placeholder='Votre nom ' />
        <input type="text" className='mt-8 w-96 h-12 px-5' placeholder='Votre prénom ' />
        <input type="text" className='mt-8 w-96 h-12 px-5' placeholder='Votre email' />
        <input type="text" className='mt-8 w-96 h-12 px-5' placeholder='Somme donner ' />
        <input type="text" className='mt-8 w-96 h-12 px-5' placeholder='Votre numéro de compte' />
        <button className='bg-[#8400ff] text-white font-bold w-96 h-12 mt-8 rounded-lg'>Donner</button>
    </div>
  )
}

export default DonneurPage