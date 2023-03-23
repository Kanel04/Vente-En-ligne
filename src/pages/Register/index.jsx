import React from 'react'
import { Button, Input, LinkButton } from '../../components/buttons'
import Register from "./assets/register.jpg"
function RegisterPage() {
  return (
    <div className=''>
      <div className='flex justify-center bg-secondary h-screen p-28 '>
       
    <div className='flex flex-row  '>
       
       <div className='flex flex-col bg-five h-[530px]  w-96 p-6 rounded-xl shadow-xl '>
           <h1 className='text-primary text-3xl font-bold text-center mt-9'>Sign up</h1>
    <div className='mt-4'>
    <Input type="text" placeholder="Your username" ></Input>
    <Input type="email" placeholder="Your email" ></Input>
    <Input type="phone" placeholder="Your phone number" ></Input>   
    <Input type="password" placeholder="Your password"></Input>
    <Input type="password" placeholder="Confirm password"></Input>
    <p className='mt-4 ml-12'>Back to home. <LinkButton page="/">Click here!</LinkButton></p>
    <Button>Create</Button>   
    </div>
       </div>
   </div>
  </div></div>
  )
}

export default RegisterPage