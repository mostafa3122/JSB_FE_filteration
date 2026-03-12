import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { Mail, Phone } from 'lucide-react'
import ContactForm from '../components/ContactForm/ContactForm'

export default function Contact() {
  return (
    <section className=' flex flex-col items-center justify-center my-5 lg:my-12 gap-12'>

      <SectionTitle text={'Contact Us'} />
      {/* form */}
      <div className=" container mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-24 ">
        {/* left side */}
        <ContactForm />
        {/* right side */}
        <div className="contact-text flex flex-col gap-[30px] font-normal  text-sm leading-[100%] text-[#333333]">
          <div className=" flex items-center gap-5">
            <Mail strokeWidth={2} className='text-[#6D91EE] w-6 h-6' />
            <a href='mailto:upskilling.eg1@gmail.com' >upskilling.eg1<span className='underline'>@gmail.com</span></a>
          </div>
          <div className=" flex items-center gap-5">
            <Phone strokeWidth={0} className='fill-[#6D91EE] w-6 h-6' />
            <a href='tel:+201154932137'>+20 115 493 2137</a>
          </div>
        </div>

      </div>
    </section>
  )
}
