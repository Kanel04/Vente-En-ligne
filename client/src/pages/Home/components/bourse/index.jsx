import React from 'react'
import Card from './card'

function Bourse() {
  return (
    <div>
         <h1 className='font-bold text-3xl text-center'>Demande de bourse</h1>
         <div className='flex justify-center '>
            <Card></Card>
            <Card></Card>
            <Card></Card>

         </div>
    </div>
  )
}

export default Bourse