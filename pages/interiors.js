import Image from 'next/image';
import React from 'react'

const Interiors = () => {
  return (
    <>
      <section className='relative'>
        <div>
          <Image
            src="/media/interiors_img_1.jpg"
            width="1920"
            height="800"
            alt="Landing page display image"
          />
        </div>
        <div className='absolute p-3 rounded-lg bottom-8 left-12 bg-red-500 opacity-80'>
          <h1 className='font-semibold text-lg mb-2'> Presenting Qbic </h1>
          <p>
            jl;dfkgjsdiopfjg
          </p>
        </div>
      </section>
      <section>

      </section>
    </>
  )
};

export default Interiors