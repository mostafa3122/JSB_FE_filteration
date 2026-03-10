import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import ButtonComponent from '../components/ui/Button'
import ServiceCard from '../components/shared/ServiceCard'

export default function Services() {
  return (
    <section className=' flex flex-col items-center justify-center gap-12'>
      <SectionTitle text={'services'}/>
      <ServiceCard/>
      <ButtonComponent text={'help me'}/>
    </section>
  )
}
