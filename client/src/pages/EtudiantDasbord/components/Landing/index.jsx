import React from 'react'
import Card from './card'

function Landing() {
  return (
    <div className='bg-[#f0f0f0]'>
        <h1 className='font-bold text-3xl text-center mt-24 mr-16'>Cours</h1>
        <div className="flex justify-center ">
  <div className="mb-3 xl:w-96 ">
    <div className="input-group relative flex flex-row items-stretch w-full m-5">
      <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
      <button className="btn inline-block px-6 py-2.5 bg-[#8400ff] text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
        <div className='flex flex-row justify-center'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
        <div className='flex flex-row justify-center'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
        <div className='bg-white flex  justify-center h-screen'>
<h1 className='mt-12 font-bold text-3xl m-5'>Demande de bourse</h1>
<div className='flex flex-col'>
<textarea name="bourse" id="bourse" cols="30" rows="10" className='mt-12 bg-gray-200 rounded-lg shadow-xl h-96 p-5' placeholder='Votre demande '></textarea>
<button className='bg-[#8400ff] text-white font-bold w-96 h-12 mt-12 m-5 rounded-lg'>Envoyer</button>
</div>
 </div>

<div className='flex justify-center h-screen '>
    <div className='flex flex-col'>
<h1 className='text-3xl mt-12'>Idée</h1>
<input type="text" className='mt-8 w-96 h-12 px-5' placeholder="Nom de l'idée" />
<textarea name="idee" id="idee" cols="30" rows="10" placeholder='Votre idée'  className='mt-4 rounded-lg shadow-xl h-96 w-96 p-5'></textarea>
<button className='bg-[#8400ff] text-white font-bold w-96 h-12 mt-12  rounded-lg'>Envoyer</button>
    </div>
</div>
    </div>
  )
}

export default Landing