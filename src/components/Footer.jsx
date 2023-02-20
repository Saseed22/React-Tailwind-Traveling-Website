import React from 'react'
import { BsChatSquareDots } from "react-icons/bs";

const Footer = () => {
  return (
      <div className='max-w-[1140px] m-auto w-full py-8 border-t-4'>
          <div className='flex items-center justify-center gap-4'>
              <BsChatSquareDots size={30} className="text-[var(--primary-light)]"/>
              <h1 className='text-xl font-serif text-gray-800'>WEEKAWAY</h1>
          </div>
    </div>
  )
}

export default Footer