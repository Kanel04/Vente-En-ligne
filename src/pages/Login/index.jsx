import React from 'react'
import { Button, Input, LinkButton } from '../../components/buttons'
import Shop from "./assets/images.jpeg"
function LoginPage() {
  return (
   <div className='flex justify-center p-40 bg-secondary '>
     <div className='flex flex-row '>
        
        <div className='flex flex-col bg-five h-96 w-96 p-6 rounded-xl shadow-xl '>
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