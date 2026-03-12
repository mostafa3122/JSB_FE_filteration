
import React from 'react'
import Stars from '../ui/Stars'

export default function TestimonialCard({ img, title, desc }) {
  return (

    <div className='flex flex-col  sm:flex-row  p-[30px] gap-3.5  rounded-[40px] border  border-[#6D91EE]  max-w-sm  sm:max-w-[577px]  transition hover:-translate-y-1'>
      {/* Testimonial Image */}
      <div className="testi-img shrink-0">
        <img src={img} alt={title} className='w-2/3  sm:w-20 sm:h-20 object-cover rounded-full mx-auto sm:mx-0 ' />
      </div>
      {/* Testimonial content */}
      <div className=" flex flex-col gap-2.5">
        <div className="content-info">
          <h4 className='mb-3 font-bold text-lg leading-[22px] '>
            {title}
          </h4>
          <p className='text-sm leading-[22px] card-desc '>
            {desc}
          </p>
        </div>
        <Stars />
      </div>
    </div>
  )
}
