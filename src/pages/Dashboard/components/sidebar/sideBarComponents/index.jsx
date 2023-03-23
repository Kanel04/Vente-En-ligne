import React from 'react'
import CircleAvatar from '../../card/circleAvatar'
import {IoMdClose} from 'react-icons/io';
import { LinkButton } from '../../../../../components/buttons';
function SibarComponents() {
  return (
    <div className=' w-96 bg-secondary h-screen p-5 rounded-r-xl'>
        <IoMdClose className=' text-2xl    '></IoMdClose>
          <div className='flex justify-center py-5'>
        <CircleAvatar></CircleAvatar>
        </div>
       
<div className='flex flex-col '>
<LinkButton pages="/dashboard" className="mt-9">Home</LinkButton>
<LinkButton pages="/products" className="mt-5">Products</LinkButton>
<LinkButton pages="/dashboard" className="mt-5">Settings</LinkButton>
</div>
    </div>
  )
}

export default SibarComponents