import React from 'react'
import {LinkButton} from "../../../../components/common/index"
function Navbar() {
  return (
    <div>
        <nav className='flex flex-row content-center justify-between'>
        <div className='mt-5 ml-5 font-bold text-xl'>
        Geni.
        </div>
        <div className='flex flex-row mt-5'>
            <LinkButton page="/">Contact</LinkButton>
            <LinkButton page="/">A propos</LinkButton>
            <LinkButton page="/">Cours</LinkButton>
            <LinkButton page="/">Idée</LinkButton>
            <LinkButton page="/">Demande de bourse</LinkButton>
        </div>
        <div className='mt-3 flex flex-row'>
            <LinkButton page="/login" className="mt-3">Connexion</LinkButton>
        <LinkButton page="/choix" className="bg-[#8400ff] w-28 h-12 py-3 px-5 text-white font-bold mr-5 ml-2 rounded-lg">S'inscrire</LinkButton>
        </div>
      </nav>
    </div>
  )
}

export default Navbar