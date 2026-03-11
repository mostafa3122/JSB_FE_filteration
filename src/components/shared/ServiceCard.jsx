import React from 'react'

export default function ServiceCard({ img, title, desc }) {
  return (
    <div className="services-card flex flex-col w-full max-w-sm rounded-4xl   bg-white shadow-lg overflow-hidden transition hover:-translate-y-1">
      <img src={img} alt={title} className='w-full h-72 object-cover' />
      <div className="content p-8 ">
        <h3 className="text-base mb-2.5 font-black tracking-tight  leading-6  dark:text-white">
          {title}
        </h3>
        <p className="text-sm leading-5 card-desc  ">
          {desc}
        </p>
      </div>
    </div>
  )
}
