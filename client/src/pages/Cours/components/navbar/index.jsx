import React from 'react'
import { LinkButton } from '../../../../components/common'

function Navbar() {
  return (
    <div>
              <nav className='flex flex-row content-center justify-between'>
        <div className='mt-5 ml-5 font-bold text-xl'>
        Geni.
        </div>
        <div className='flex flex-row mt-5'>
        </div>
        <div className='mt-3 flex flex-row'>
        <LinkButton page="/" className="bg-[#8400ff] w-36 h-12 py-3 px-5 text-white font-bold mr-5 ml-2 rounded-lg">Deconnection</LinkButton>
        </div>
      </nav>
    </div>
    
  )
}

export default Navbar