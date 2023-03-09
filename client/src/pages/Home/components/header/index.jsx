import React from 'react'
import Student from '../../assets/Student.svg'
function Header() {
  return (
    <div className='flex flex-row justify-between'>
        <aside className='flex flex-col'>
            <div className='bg-white w-80 h-60 mt-32 ml-10 p-5 rounded-lg text-gray-700 text-base mb-4 shadow-xl'>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptatem, sequi, harum dicta hic atque maiores labore reiciendis animi libero voluptate. Sunt ullam quisquam praesentium asperiores nostrum aspernatur, iusto tempore!</p>
            </div>
            <div className='bg-white w-80 h-40 mt-2 ml-10 p-5 rounded-lg text-gray-700 text-base mb-4 shadow-xl'>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptatem, sequi, harum dicta hic atque maiores labore </p>
<div className='flex flex-col'>
    <div className='bg-[#8500ff] w-40 h-3 rounded-lg'></div>
    <div className='bg-gray-500 w-20 h-3 rounded-lg mt-1'></div>
</div>
            </div>
        </aside>
        <aside>
         <div>
         <img src={Student} alt="Photo"  className='w-auto h-auto'/>
        </div>
        </aside>
    </div>
  )
}

export default Header