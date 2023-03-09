import React from 'react'
import LoginPhoto from './assets/Login.svg'
import {LinkButton} from "../../components/common/index"
function LoginPage() {
  return (
<div className='flex flex-row'>
    <div className='bg-[#f0f0f0]'>
<img src={LoginPhoto} alt="Login" className='w-auto h-auto ' />
    </div>
<div className='flex flex-col items-end ml-12 '>
        <label className='font-bold mt-28 text-3xl mr-36'>Connexion</label>
        <input type="text" className='mt-32 w-96 h-12 px-5' placeholder='Votre Email ' />
        <input type="password" className='mt-8 w-96 h-12 px-5' placeholder='Votre mot de passe ' />
        <LinkButton page="/choix" className='mt-8 mr-12'>Cliquer ici si vous n'avez pas de compte?</LinkButton>
        <button className='bg-[#8400ff] text-white font-bold w-96 h-12 mt-8 rounded-lg'>Se connecter</button>
    </div>
</div>
  )
}

export default LoginPage