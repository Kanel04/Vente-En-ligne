import React from 'react'
import { Button, Input, LinkButton } from '../../components/buttons'
import Shop from "./assets/images.jpeg"
function LoginPage() {
  return (
   <div className='flex justify-center p-40  '>
     <div className='flex flex-row '>
        <div>
            <img src={Shop} alt="shop" className='h-96 w-96 shadow-xl rounded-l-xl '  />
        </div>
        <div className='flex flex-col bg-secondary h-96 w-96 p-6 rounded-r-xl shadow-xl '>
            <h1 className='text-primary text-3xl font-bold text-center mt-9'>Sign in</h1>
     <div className='mt-9'>
     <Input type="email" placeholder="Your email" ></Input>   
     <Input type="password" placeholder="Your password"></Input>
     <p className='mt-4 ml-12'>Create a account. <LinkButton page="/register">Click here!</LinkButton></p>
     <Button>Sign in</Button>   
     </div>
        </div>
    </div>
   </div>
  )
}

export default LoginPage