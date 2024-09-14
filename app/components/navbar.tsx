import Link from 'next/link';
import React from 'react';
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='container w-full h-full flex justify-between items-center'>
            <Link href="/" className='logo'>Art Kiss</Link>
            <div className='cart-icon'>
                <FiShoppingBag/>
                <span className='cart-item-qty'>0</span>

            </div>
            
        </div>
      
    </div>
  )
}

export default Navbar
