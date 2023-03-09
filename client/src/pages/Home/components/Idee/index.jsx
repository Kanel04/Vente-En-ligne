import React from 'react'
import Card from './card/inex'

function Idee() {
  return (
    <div>
        <h1 className='font-bold text-3xl text-center'>Idée</h1>
        <div className='flex justify-between m-5'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    </div>
  )
}

export default Idee