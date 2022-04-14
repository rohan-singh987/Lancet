import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='bg-gradient-to-r from-slate-300 to-slate-400'>
      <section className='relative'>
        <div>
          <Image
            src="/media/portfolio_banner.webp"
            width="1920"
            height="950"
            alt="Portfolio banner"
          />
        </div>
        <div className='absolute bottom-1 w-full md:bottom-5 lg:bottom-10 xl:bottom-20'>
          <article className='bg-gray-600 w-4/5 mx-auto opacity-95 py-2 px-1 rounded-lg md:hover:scale-105 transition-all ease-in-out md:w-3/4 md:px-3 lg:w-3/5 lg:px-7 lg:py-3'>
            <h2 className='uppercase text-center font-semibold text-white md:text-lg lg:text-xl'>Portfolio</h2>
            <p className='text-xs text-white text-center sm:text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim non natus repellendus illum! Eveniet neque facilis delectus, est earum excepturi tenetur impedit reprehenderit, adipisci odio, eaque recusandae nobis assumenda.</p>
          </article>
        </div>
      </section>
      <section className='py-5 lg:py-8'>
        <h2 className='uppercase text-center font-semibold mb-5 sm:text-lg md:font-bold lg:text-xl xl:text-2xl'>Institutional</h2>
        <div className='space-y-4 md:space-y-0 md:flex md:flex-wrap md:justify-around md:w-4/5 md:mx-auto mb-8'>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Commercial_1.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Commercial_2.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Commercial_3.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Commercial_4.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Commercial_5.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Commercial_6.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
        </div>
        <h2 className='uppercase text-center font-semibold mb-5 sm:text-lg md:font-bold lg:text-xl xl:text-2xl'>Residential</h2>
        <div className='space-y-4 md:space-y-0 md:flex md:flex-wrap md:justify-around md:w-4/5 md:mx-auto'>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Residential_1.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Residential_2.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Residential_3.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Residential_4.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Residential_5.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Residential_6.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Residential_7.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Residential_8.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
          <div className='md:w-1/3 md:p-3'>
            <div className='w-3/4 mx-auto shadow-xl md:w-full lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
              <Image
                src="/media/Residential_9.webp"
                height="1080"
                width="1920"
                alt="Commercial img-1"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio