import React , { useState } from 'react'
import {RxAvatar} from 'react-icons/rx';
import {AiOutlineShopping} from "react-icons/ai"
import {FiShoppingCart} from "react-icons/fi"
import SibarComponents from './sideBarComponents';
import { LinkButton } from '../../../../components/buttons';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-secondary w-16 h-screen rounded-r-xl m-[2px]  shadow-xl z-40'>
      <button type='button'
      onClick={() => setIsOpen(!isOpen)}
      >
 {isOpen ?(<SibarComponents></SibarComponents>
  ) : (
<LinkButton  className="p-4 rounded-t-xl">    <RxAvatar   className=' text-3xl mt-5  font-bold  '  >  </RxAvatar></LinkButton>
             )}
      </button>
<LinkButton page="/" className="p-4 "><AiOutlineShopping className="mt-5  text-3xl font-bold"></AiOutlineShopping></LinkButton>
<LinkButton page="/" className="p-4 "><FiShoppingCart className="mt-5  text-3xl font-bold"></FiShoppingCart></LinkButton>
    </div>
  )
}

export default Sidebar