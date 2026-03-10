import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import TestimonialCard from '../components/shared/TestimonialCard'

export default function Testimonials() {
  return (
    <section className=' flex flex-col items-center justify-center gap-12'>

      <SectionTitle text={'Testymonials'}/>
      <TestimonialCard/>
    </section>
  )
}
