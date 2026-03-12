import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import ButtonComponent from '../components/ui/Button'
import ServiceCard from '../components/shared/ServiceCard'
import { servicesCardData } from "../data/data.js"
export default function Services() {
  return (
    <section className=' flex flex-col items-center justify-center gap-3 lg:gap-12'>
      <SectionTitle text={'services'} />
      <div className="services-content mx-auto flex flex-wrap gap-7 justify-center py-5 lg:py-0">
        {servicesCardData.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </div>


      <ButtonComponent text={'help me'} />
    </section>
  )
}
