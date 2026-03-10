import React from 'react'

export default function ButtonComponent({ text, bgColor = '#5180F6', textColor = '#fff' }) {
  return (


    <button type='button' style={{ backgroundColor: bgColor, color: textColor }}

      className=' cursor-pointer z-10 capitalize rounded-[71px] font-bold leading-[100%] transition-all duration-300 hover:-translate-y-1 shadow-md
        px-10 py-4
        text-lg
        sm:px-16 sm:py-5
        sm:text-xl
        lg:px-24 lg:py-6
        lg:text-2xl'>
      {text}
    </button>
  )
}