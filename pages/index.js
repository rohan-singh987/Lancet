import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lancet Architects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <section className='relative'>
          <div>
            <Image
              src="/media/home_img_1.jpg"
              width="1920"
              height="800"
              alt="Landing page display image"
            />
          </div>
          <div className='absolute left-12 bottom-5 h-1/2 w-1/2 rounded-lg bg-[#B7CADB] opacity-95 sm:left-20 sm:h-1/3 sm:w-2/5 md:bottom-10 md:left-24 lg:hover:border-4 lg:hover:border-[#9581f002] lg:hover:scale-105 transition-all ease-in-out lg:bottom-14 lg:left-32 xl:left-40 xl:bottom-16'>
            <h1 className='uppercase px-4 text-gray-800 font-semibold sm:text-xl sm:mb-1 md:text-2xl md:my-2 lg:text-4xl lg:my-4 xl:text-5xl'>
              Lancet Architects
            </h1>
            <p className='text-sm px-4 text-gray-700 sm:text-base lg:text-xl xl:text-2xl'>
              The place where dreams are crafted
            </p>
          </div>
        </section>
        <section className='bg-gradient-to-r from-[#9D9D9D] to-[#b7d0f8] py-5 md:py-12'>
          <div className='bg-gradient-to-r from-[#92A9BD] to-[#D3DEDC] rounded-lg w-3/4 mx-auto py-5 md:flex lg:hover:scale-105 transition-all ease-in-out lg:rounded-2xl lg:py-0'>
            <div className='md:w-3/5 md:my-auto lg:w-7/12'>
              <h2 className='text-center uppercase font-semibold mb-3 sm:text-xl sm:font-bold md:text-left md:px-10 lg:text-2xl xl:text-3xl'>Thriving creativity</h2>
              <p className='text-center text-sm px-3 sm:px-10 md:text-left lg:text-base lg:pr-14 xl:text-lg'>We understand the gravity that artistry implants! Lancet Architects focuses on flourishing creativity to its fullest. Our shades, patterns, and fashion are the finest palettes you can acquire at the wittiest price!</p>
            </div>
            <div className='p-5 mx-auto sm:w-96 md:w-2/5 lg:w-5/12'>
              <Image
                src="/media/home_img_2.jpeg"
                height="415"
                width="415"
                alt="Company Logo"
              />
            </div>
          </div>
        </section>
        <section className=' bg-gradient-to-r from-[#b7d0f8] to-[#9D9D9D] py-5 md:py-12'>
          <div className='bg-gradient-to-r from-[#D3DEDC] to-[#92A9BD] rounded-lg w-3/4 mx-auto py-5 md:flex md:flex-row-reverse lg:hover:scale-105 transition-all ease-in-out lg:rounded-2xl lg:py-0'>
            <div className='md:w-3/5 md:my-auto lg:w-7/12'>
              <h2 className='text-center text-black uppercase font-semibold mb-3 sm:text-xl sm:font-bold md:text-right md:px-10 lg:text-2xl xl:text-3xl'>Crafting Dreams</h2>
              <p className='text-center text-black text-sm px-3 sm:px-10 md:text-right lg:text-base lg:pl-14 xl:text-lg'>You are unique, so are your dreams! They deserve to solidify! We know you endeavor to shape your vision. Lancet does sterling designing to convert your picture into reality! Let us carve your imagination into the perfect existence.</p>
            </div>
            <div className='p-5 mx-auto sm:w-96 md:w-2/5 lg:w-5/12'>
              <Image
                src="/media/home_img_2.jpeg"
                height="415"
                width="415"
                alt="Company Logo"
              />
            </div>
          </div>
        </section>
        <section className='bg-gradient-to-r from-[#97999c] to-[#b7d0f8] py-3'>
          <section className='p-3'>
            <h1 className='text-center text-xl font-bold md:text-2xl uppercase lg:text-3xl xl:text-4xl'>Why Us?</h1>
            <article>
              <p className='p-4 text-center text-sm sm:px-10 md:px-20 lg:px-32 lg:text-base xl:px-48'>
              Because we promise to lead your dreams with passion!
              </p>
            </article>
          </section>
          <section className='p-3 space-y-5 md:flex md:space-y-0 md:justify-center md:py-5 lg:py-8 lg:px-10 xl:px-20'>
            <div className='w-3/5 mx-auto sm:w-1/3 md:w-52 lg:w-56 xl:w-64'>
              <section className='bg-[#AFB9C8] rounded-xl  p-3 shadow-lg hover:scale-105 transition-all ease-in-out '>
                <div>
                  <div className='w-8 mx-auto xl:w-10'>
                    <Image
                      src="/media/trust.png"
                      width={40}
                      height={40}
                      alt="Trust Icon"
                    />
                  </div>
                  <h2 className='text-center uppercase font-semibold text-black text-lg lg:text-xl mb-3'>Ethics</h2>
                  <article>
                    <p className='text-center text-sm text-black lg:text-base'>
                    We hold the principle of faith being the building block to water the roots of a relationship. Henceforth, we, Lancet Architects, decorate our projects with the toppings of trust. To us, mutual apprehension is the key to mastering the output you yearned for.
                    </p>
                  </article>
                </div>
              </section>
            </div>
            <div className='w-3/5 mx-auto sm:w-1/3 md:w-52 lg:w-56 xl:w-64'>
              <section className='bg-[#AFB9C8] rounded-xl  p-3 shadow-lg hover:scale-105 transition-all ease-in-out '>
                <div>
                  <div className='w-8 mx-auto xl:w-10'>
                    <Image
                      src="/media/experience.png"
                      width={40}
                      height={40}
                      alt="Experience Icon"
                    />
                  </div>
                  <h2 className='text-center uppercase font-semibold text-lg lg:text-xl mb-3'>Experience</h2>
                  <article>
                    <p className='text-center text-sm lg:text-base'>
                    Crowned with 07 years of expertise, Lancet continues to justify its excellence in crafting and designing interiors. We fathom your desires. We strive for their alluring realization. Be it composing of your dream domicile, corporate occupancy, or favorite fantasy- we ace it all!
                    </p>
                  </article>
                </div>
              </section>
            </div>
            <div className='w-3/5 mx-auto sm:w-1/3 md:w-52 lg:w-56 xl:w-64'>
              <section className='bg-[#AFB9C8] rounded-xl  p-3 shadow-lg hover:scale-105 transition-all ease-in-out '>
                <div>
                  <div className='w-8 mx-auto xl:w-10'>
                    <Image
                      src="/media/perfection.png"
                      width={40}
                      height={40}
                      alt="Perfection Icon"
                    />
                  </div>
                  <h2 className='text-center uppercase font-semibold text-black text-lg lg:text-xl mb-3'>Exquisiteness</h2>
                  <article>
                    <p className='text-center text-sm text-black lg:text-base'>
                    We, at Lancet Architects, target the utmost flawlessness to deliver the most refined results. We believe, "Perfection is doing traditional chores with extraordinary style." Our elite performance in the field presents us as the top-notch pick for remodeling your dream designs into authentic interiors.
                    </p>
                  </article>
                </div>
              </section>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}