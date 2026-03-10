import { Button } from 'flowbite-react'
import React from 'react'
import ButtonComponent from '../components/ui/Button'

export default function Hero() {
  return (
    <header className="hero h-screen text-center mx-auto">
      <div className="hero-container  h-[calc(100vh-4rem)] w-full overflow-hidden relative">
        <div className="hero-img">
          <img
            src="/images/trash_bg.jpg"
            alt="hero image"
            className="image-clip h-full object-cover"
          />
        </div>
        <div className="container hero-title flex flex-col justify-center gap-32 items-center  absolute h-full py-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="main-hero md:text-5xl font-bold text-white">
            <div className="logo">
              <div className="svg-logo-icon"></div>
            </div>
            <div className="title">
              Round Rock
              <p>Trush Hauling</p>
            </div>
          </div>
          <div className="contentt flex flex-col justify-between items-center gap-4">

          <div className="label">Experts</div>
          <div className="text-hero flex flex-col  font-extrabold">
            <span className='font-thin'>Lorem</span>
            Lorem lorem
          </div>
          <div className="hero-desc md:w-[552px]   font-light md:font-semibold text-lg">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the
          </div>
          <ButtonComponent text={"help me"} />
        </div>
      </div>
      </div>
    </header>
  )
}
