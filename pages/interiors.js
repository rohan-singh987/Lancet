import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';

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
            the most alluring thread of Lancet Architects
          </p>
        </div>
      </section>
      <section className='p-3 pb-5 lg:p-8 bg-gradient-to-r from-[#e9ae88] to-[#f5e7cecf] lg:mb-2'>
        <h1 className='text-center uppercase font-semibold text-lg mb-5 md:text-xl md:font-bold lg:text-2xl lg:mt-3'>What do we equip?</h1>
        <p className='text-sm text-center px-5 mb-5 sm:px-16 md:px-24 lg:text-base lg:px-32 lg:mb-12'>With Qbic, Lancet Architects steps ahead to deliver you a more charismatic take-off with your premium vision. We effort at amplifying your buildings to your favorite buildings! The corners you visit identify you!</p>
        <div className='space-y-5 lg:space-y-10'>
          <div className='w-3/4 rounded-xl bg-gradient-to-r from-[#caa992] to-[#ebcbb6] shadow-xl p-3 mx-auto flex sm:p-5 md:p-8 md:w-3/5 lg:p-10 justify-center hover:scale-105 transition-all ease-in-out'>
            <div className='w-1/2 md:w-2/5 self-center'>
              <Image
                src="/media/interiors_img_2.jpg"
                height="1080"
                width="1080"
                alt="Ceiling image"
              />
            </div>
            <div className='w-1/2 p-3 my-auto sm:p-5 md:p-8 lg:p-10'>
              <h2 className='uppercase text-lg font-semibold sm:text-xl md:text-2xl md:font-bold lg:text-3xl lg:mb-3'>Ceilings</h2>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
                We can craft your heights with passion!
              </p>
            </div>
          </div>
          <div className='w-3/4 rounded-xl  bg-gradient-to-r from-[#ebcbb6] to-[#caa992] shadow-xl p-3 mx-auto flex sm:p-5 md:p-8 md:w-3/5 lg:p-10 justify-center hover:scale-105 transition-all ease-in-out'>
            <div className='w-1/2 p-3 my-auto sm:p-5 md:p-8 lg:p-10'>
              <h2 className='uppercase text-lg font-semibold sm:text-xl md:text-2xl md:font-bold lg:text-3xl lg:mb-3'>Modular Kitchens</h2>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
                Giving your recipes the ultimate vision!
              </p>
            </div>
            <div className='w-1/2 md:w-2/5 self-center'>
              <Image
                src="/media/interiors_img_3.jpg"
                height="1080"
                width="1080"
                alt="Modular kitchen Image"
              />
            </div>
          </div>
          <div className='w-3/4 rounded-xl  bg-gradient-to-r from-[#caa992] to-[#ebcbb6] shadow-xl p-3 mx-auto flex sm:p-5 md:p-8 md:w-3/5 lg:p-10 justify-center hover:scale-105 transition-all ease-in-out'>
            <div className='w-1/2 md:w-2/5 self-center'>
              <Image
                src="/media/interiors_img_4.jpg"
                height="1080"
                width="1080"
                alt="Designer Room image"
              />
            </div>
            <div className='w-1/2 p-3 my-auto sm:p-5 md:p-8 lg:p-10'>
              <h2 className='uppercase text-lg font-semibold sm:text-xl md:text-2xl md:font-bold lg:text-3xl lg:mb-3'>Designer Rooms</h2>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
                Let us steer your dreams to reality!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='p-3 pt-8 bg-gradient-to-tl to-yellow-100 from-[#e9ae88]'>
        <h1 className='text-center uppercase font-semibold text-lg mb-5 md:mb-8 md:text-xl md:font-bold lg:text-2xl'>Our Crafts</h1>
        <div className='space-y-5 mb-5 md:flex md:flex-wrap md:space-y-0 justify-evenly'>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className=' text-white shadow-xl rounded-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-[#dcb593] to-[#CA965C] p-4'>
              {/* <div className='w-1/2 my-auto p-3'>
                1
              </div> */}
              <div className='self-center lg:grayscale lg:hover:grayscale-0 transition-all ease-in-out'>
                <Image
                  src="/media/interiors_1.jpg"
                  height="750"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl rounded-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-[#dcb593] to-[#CA965C] p-4'>

              <div className='self-center lg:grayscale lg:hover:grayscale-0 transition-all ease-in-out'>
                <Image
                  src="/media/interiors_2.jpg"
                  height="750"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
              {/* <div className='w-1/2 my-auto p-3'>
                2
              </div> */}
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl rounded-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-[#dcb593] to-[#CA965C] p-4'>
              {/* <div className='w-1/2 my-auto p-3'>
                3
              </div> */}
              <div className='self-center lg:grayscale lg:hover:grayscale-0 transition-all ease-in-out'>
                <Image
                  src="/media/interiors_3.jpg"
                  height="750"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl rounded-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-[#dcb593] to-[#CA965C] p-4'>
              <div className='self-center lg:grayscale lg:hover:grayscale-0 transition-all ease-in-out'>
                <Image
                  src="/media/interiors_4.jpg"
                  height="750"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
              {/* <div className='w-1/2 my-auto p-3'>
                4
              </div> */}
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl rounded-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-[#dcb593] to-[#CA965C] p-4'>
              <div className='self-center lg:grayscale lg:hover:grayscale-0 transition-all ease-in-out'>
                <Image
                  src="/media/interiors_5.jpg"
                  height="750"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
              {/* <div className='w-1/2 my-auto p-3'>
                5
              </div> */}
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl rounded-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-[#dcb593] to-[#CA965C] p-4'>
              <div className='self-center lg:grayscale lg:hover:grayscale-0 transition-all ease-in-out'>
                <Image
                  src="/media/interiors_6.jpg"
                  height="750"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
              {/* <div className='w-1/2 my-auto p-3'>
                6
              </div> */}
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl rounded-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-[#dcb593] to-[#CA965C] p-4'>
              <div className='self-center lg:grayscale lg:hover:grayscale-0 transition-all ease-in-out'>
                <Image
                  src="/media/interiors_7.jpg"
                  height="750"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
              {/* <div className='w-1/2 my-auto p-3'>
                7
              </div> */}
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl rounded-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-[#dcb593] to-[#CA965C] p-4'>
              <div className='self-center lg:grayscale lg:hover:grayscale-0 transition-all ease-in-out'>
                <Image
                  src="/media/interiors_8.jpg"
                  height="750"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
              {/* <div className='w-1/2 my-auto p-3'>
                8
              </div> */}
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl rounded-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-[#dcb593] to-[#CA965C] p-4'>
              <div className='self-center lg:grayscale lg:hover:grayscale-0 transition-all ease-in-out'>
                <Image
                  src="/media/interiors_9.jpg"
                  height="750"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
              {/* <div className='w-1/2 my-auto p-3'>
                9
              </div> */}
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl rounded-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-[#dcb593] to-[#CA965C] p-4'>
              <div className='self-center lg:grayscale lg:hover:grayscale-0 transition-all ease-in-out'>
                <Image
                  src="/media/interiors_10.jpg"
                  height="750"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
              {/* <div className='w-1/2 my-auto p-3'>
                10
              </div> */}
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl rounded-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-[#dcb593] to-[#CA965C] p-4'>
              <div className='self-center lg:grayscale lg:hover:grayscale-0 transition-all ease-in-out'>
                <Image
                  src="/media/interiors_11.jpg"
                  height="750"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
              {/* <div className='w-1/2 my-auto p-3'>
                11
              </div> */}
            </div>
          </div>
          <div className='w-3/4 mx-auto md:pb-7 md:w-2/5'>
            <div className='text-white shadow-xl rounded-xl hover:scale-105 transition-all ease-in-out bg-gradient-to-tr from-[#dcb593] to-[#CA965C] p-4'>
              <div className='self-center lg:grayscale lg:hover:grayscale-0 transition-all ease-in-out'>
                <Image
                  src="/media/interiors_12.jpg"
                  height="750"
                  width="1080"
                  alt="Designer Room image"
                />
              </div>
              {/* <div className='w-1/2 my-auto p-3'>
                12
              </div> */}
            </div>
          </div>
        </div>
      </section >
    </div >
  )
};

export default Interiors