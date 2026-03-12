import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import TestimonialCard from '../components/shared/TestimonialCard'
import { testimonialsCardData } from '../data/data'
export default function Testimonials() {
  return (
    <section className=' container mx-auto flex flex-col items-center justify-center gap-3 lg:gap-12'>
      <SectionTitle text={'Testymonials'} />
      <div className='  grid grid-cols-1 gap-11 lg:grid-cols-2 xl:grid-cols-2 py-5 lg:py-0'>
        {testimonialsCardData.map((item) => (
          <TestimonialCard key={item.id} {...item} />

        ))}

      </div>
    </section>
  )
}
