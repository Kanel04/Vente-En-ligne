import React from 'react';
import Shopping from "../assets/shoes.webp";
import Anelka from "../assets/Anelka.jpg";

function Header() {
  return (
    <div className=''>
    <div className='ml-[443px]  bg-secondary h-screen w-[978.5px]  flex flex-row '>
<div className='flex flex-col'>
<div className='bg-primary w-96 py-5 px-4 ml-12 shadow-xl rounded-lg '>
<div className='flex flex-row'>
<p className='font-bold text-three'>Products:</p>
<p className='bg-three w-40 rounded-lg h-3 mt-1 ml-4'></p>
</div>
<div className='flex flex-row'>
<p className='font-bold text-three'>Sales:</p>
<p className='bg-secondary w-32 rounded-lg h-3 mt-1 ml-11'></p>
</div>
      </div>
      <div className='flex flex-row bg-primary w-96 p-4 rounded-lg shadow-xl ml-12  mt-4'>
<div className='w-36 h-full'>
  <img src={Anelka} alt="anelka" className='object-cover rounded-xl w-36 shadow-xl' />
</div>
<div className='pl-5'>
  <p className='font-bold'>riores inventore ullam libero temporibus nisi voluptatem in culpa. Similique excepturi quo ex amet.</p>
</div>
      </div>
</div>
<div className='mt-40'>
<img src={Shopping} alt="shopping" className=' w-[500px]  bg-cover  h-96 ' />
</div>
    </div>
    </div>
    
  )
}

export default Header