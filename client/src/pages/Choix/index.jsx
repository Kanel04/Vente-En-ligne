import React from 'react'
import { LinkButton } from '../../components/common'

function ChoixPage() {
  return (
    <div className='flex flex-col items-center mt-40'>
        <LinkButton page="/donneur" className="bg-[#8400ff] text-white font-bold w-96 h-12 mt-8 rounded-lg text-center py-3 hover:border-2 hover:bg-white hover:text-black hover:border-black">Donneur</LinkButton>
        <LinkButton page="/etudiant" className="bg-[#8400ff] text-white font-bold w-96 h-12 mt-8 rounded-lg text-center py-3 hover:border-2 hover:bg-white hover:text-black hover:border-black">Etudiant</LinkButton>
        <LinkButton page="/investisseur" className="bg-[#8400ff] text-white font-bold w-96 h-12 mt-8 rounded-lg text-center py-3 hover:border-2 hover:bg-white hover:text-black hover:border-black">Investisseur</LinkButton>
        <LinkButton page="/enseignant" className="bg-[#8400ff] text-white font-bold w-96 h-12 mt-8 rounded-lg text-center py-3 hover:border-2 hover:bg-white hover:text-black hover:border-black">Enseignant</LinkButton>
    </div>
  )
}

export default ChoixPage