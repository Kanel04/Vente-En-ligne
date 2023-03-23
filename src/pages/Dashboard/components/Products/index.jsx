import React from 'react'
import { Input } from '../../../../components/buttons'
import Card from './components/card'
function Products() {
  return (
    <div className='flex flex-row'>
      <div className='bg-primary h-screen w-[1000px] m-[1px] rounded-xl'>
     <div className='flex flex-col'>
     <div className='bg-image w-[1000px] h-[250px] bg-cover'>
     <div className='ml-40'>
     <Input type="text" placeholder="search" ></Input>
     </div>
     </div>
<div className='mt-1 overflow-y-auto h-[440px] '>
<Card></Card>
<Card></Card>
<Card></Card>
</div>
     </div>
    </div>
    <div className='p-4 ml-1 rounded-xl h-screen bg-secondary w-[345px]'>

    </div>
    </div>
  )
}

export default Products