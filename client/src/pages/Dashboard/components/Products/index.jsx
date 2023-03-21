import React from 'react'
import { Input } from '../../../../components/buttons'

function Products() {
  return (
    <div className='bg-secondary h-screen w-[1100px] p-4 rounded-xl'>
     <div className='ml-96'>
     <Input type="text" placeholder="search" ></Input>
     </div>

    </div>
  )
}

export default Products