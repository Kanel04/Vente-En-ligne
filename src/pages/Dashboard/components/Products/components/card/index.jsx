import React from 'react'
import Image from '../assets/image.jpg'
import {GrFormAdd} from 'react-icons/gr'
function Card() {
  return (
    <div className='w-96 h-[445px] shadow-2xl m-4 '>
        <div>
<img src={Image} alt="stock photo" />
        </div>
        <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione sed quo quidem, esse dolor neque dolorem reprehenderit tempora tempore nesciunt cumque iusto saepe dolore error eveniet voluptates praesentium. Nihil!</p>
    <button className='mt-1 bg-three px-40 py-2 ml-5   '><GrFormAdd className='fill-primary' ></GrFormAdd></button>
    </div>
  )
}

export default Card