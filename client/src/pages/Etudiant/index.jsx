import React from 'react'

function EtudiantPage() {
  return (
    <div className='flex flex-col items-center m-5'>
    <h1 className='font-bold text-3xl mr-40 mt-5'>Etudiant</h1>
    <input type="text" className='mt-16 w-96 h-12 px-5' placeholder='Votre nom ' />
    <input type="text" className='mt-8 w-96 h-12 px-5' placeholder='Votre prénom ' />
    <input type="text" className='mt-8 w-96 h-12 px-5' placeholder='Votre email' />
    <input type="password" className='mt-8 w-96 h-12 px-5' placeholder='Votre mot de passe' />
    <input type="password" className='mt-8 w-96 h-12 px-5' placeholder='Confirmer votre mot de passe' />
    <button className='bg-[#8400ff] text-white font-bold w-96 h-12 mt-8 rounded-lg'>S'inscrire</button>
</div>
  )
}

export default EtudiantPage