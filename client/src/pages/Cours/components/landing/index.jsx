import React from 'react'
import Card from './card'

function Landing() {
  return (
    <div >
        <div className='flex flex-col m-12 '>
<h1 className='font-bold text-3xl'>Ajouter vos cours</h1>
<input type="text" className='mt-8 w-96 h-12 px-5' placeholder='Nom de la matière ' />
<input type="text" className='mt-8 w-96 h-12 px-5' placeholder='Description ' />
<input className="form-control
    block
    w-96
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    mt-5
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"/>
<button className='bg-[#8400ff] text-white font-bold w-96 h-12 mt-8 rounded-lg'>Ajouter</button>
        </div>
        <div className='bg-[#f0f0f0] screen'>
            <h1 className='text-3xl font-bold text-center mt-12'>Vos cours</h1>
            <div className='flex flex-row justify-center'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    </div>
  )
}

export default Landing