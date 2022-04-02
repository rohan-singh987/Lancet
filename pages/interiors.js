import Image from 'next/image';
import React from 'react'

const Interiors = () => {
  return (
    <div className="">
      <section className='relative '>
        <div>
          <Image
            src="/media/interiors_img_1.jpg"
            width="1920"
            height="800"
            alt="Landing page display image"
          />
        </div>
        <div className='absolute p-3 rounded-lg bottom-5 left-6 bg-gradient-to-r from-gray-700 to-black opacity-80 sm:p-5 sm:bottom-8 sm:left-8 md:p-8 md:bottom-10 md:left-10 lg:p-10 lg:bottom-16 lg:left-24 lg:rounded-2xl xl:p-14 xl:bottom-20 xl:left-28 hover:scale-105 transition-all ease-in-out'>
          <h1 className='font-semibold text-white text-xl mb-1 md:text-2xl md:font-bold lg:text-3xl xl:text-4xl'> Presenting Qbic </h1>
          <p className='text-sm text-white sm:text-base'>
            The place for all your interiors
          </p>
        </div>
      </section>
      <section className='p-3 pb-5 lg:p-8 bg-gradient-to-r from-[#e9ae88] to-[#f5e7cecf] '>
        <h1 className='text-center uppercase font-semibold text-lg mb-5 md:text-xl md:font-bold lg:text-2xl lg:mt-3'>What we Provide?</h1>
        <p className='text-sm text-center px-5 mb-5 sm:px-16 md:px-24 lg:text-base lg:px-32 lg:mb-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ea est autem aperiam ullam dignissimos magnam, rem, voluptate esse ipsa suscipit? Voluptatibus ut ab eaque mollitia, quidem a explicabo cum!</p>
        <div className='space-y-5 lg:space-y-10'>
          <div className='w-3/4 rounded-xl bg-gradient-to-r from-[#93725a] to-[#ebcbb6] shadow-xl p-3 mx-auto flex sm:p-5 md:p-8 md:w-3/5 lg:p-10 justify-center hover:scale-105 transition-all ease-in-out'>
            <div className='w-1/2 md:w-2/5 self-center'>
              <Image
                src="/media/interiors_img_2.jpg"
                height="1080"
                width="1080"
                alt="Ceiling image"
                className=''
              />
            </div>
            <div className='w-1/2 p-3 my-auto sm:p-5 md:p-8 lg:p-10'>
              <h2 className='uppercase text-lg font-semibold sm:text-xl md:text-2xl md:font-bold lg:text-3xl lg:mb-3'>Ceilings</h2>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className='w-3/4 rounded-xl  bg-gradient-to-r from-[#ebcbb6] to-[#93725a] shadow-xl p-3 mx-auto flex sm:p-5 md:p-8 md:w-3/5 lg:p-10 justify-center hover:scale-105 transition-all ease-in-out'>
            <div className='w-1/2 p-3 my-auto sm:p-5 md:p-8 lg:p-10'>
              <h2 className='uppercase text-lg font-semibold sm:text-xl md:text-2xl md:font-bold lg:text-3xl lg:mb-3'>Modular Kitchens</h2>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className='w-1/2 md:w-2/5 self-center'>
              <Image
                src="/media/interiors_img_3.jpg"
                height="1080"
                width="1080"
                alt="Modular kitchen Image"
                className=''
              />
            </div>
          </div>
          <div className='w-3/4 rounded-xl  bg-gradient-to-r from-[#93725a] to-[#ebcbb6] shadow-xl p-3 mx-auto flex sm:p-5 md:p-8 md:w-3/5 lg:p-10 justify-center hover:scale-105 transition-all ease-in-out'>
            <div className='w-1/2 md:w-2/5 self-center'>
              <Image
                src="/media/interiors_img_4.jpg"
                height="1080"
                width="1080"
                alt="Designer Room image"
                className=''
              />
            </div>
            <div className='w-1/2 p-3 my-auto sm:p-5 md:p-8 lg:p-10'>
              <h2 className='uppercase text-lg font-semibold sm:text-xl md:text-2xl md:font-bold lg:text-3xl lg:mb-3'>Designer Rooms</h2>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='p-3 pt-8 bg-gradient-to-tl from-slate-700 to-yellow-100'>
        <h1 className='text-center uppercase font-semibold text-lg mb-5 md:mb-8 md:text-xl md:font-bold lg:text-2xl'>Our Crafts</h1>
        <div className='space-y-5 mb-5 md:flex md:flex-wrap md:space-y-0 justify-evenly'>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className=' text-white shadow-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-indigo-200 via-slate-600 to-indigo-200 p-4 flex'>
              <div className='w-1/2 my-auto p-3'>
                1
              </div>
              <div className='w-1/2 md:w-2/5 self-center'>
                <Image
                  src="/media/interiors_img_4.jpg"
                  height="1080"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-indigo-200 via-slate-600 to-indigo-200 p-4 flex md:flex-row-reverse>'>

              <div className='w-1/2 md:w-2/5 self-center'>
                <Image
                  src="/media/interiors_img_4.jpg"
                  height="1080"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
              <div className='w-1/2 my-auto p-3'>
                2
              </div>
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-indigo-200 via-slate-600 to-indigo-200 p-4 flex md:flex-row-reverse'>
              <div className='w-1/2 my-auto p-3'>
                3
              </div>
              <div className='w-1/2 md:w-2/5 self-center'>
                <Image
                  src="/media/interiors_img_4.jpg"
                  height="1080"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-indigo-200 via-slate-600 to-indigo-200 p-4 flex md:justify-evenly'>
              <div className='w-1/2 md:w-2/5 self-center'>
                <Image
                  src="/media/interiors_img_4.jpg"
                  height="1080"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
              <div className='w-1/2 my-auto p-3'>
                4
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
};

export default Interiors