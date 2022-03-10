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
        <section className='bg-gray-100 py-5 md:py-12 lg:py-14'>
          <div className='bg-gray-400 rounded-lg w-3/4 mx-auto py-5 md:flex lg:hover:scale-105 transition-all ease-in-out lg:rounded-2xl lg:py-1'>
            <div className='md:w-3/5 md:my-auto lg:w-7/12'>
              <h2 className='text-center uppercase font-semibold mb-3 sm:text-xl sm:font-bold md:text-left md:px-10 lg:text-2xl xl:text-3xl'>Thriving creativity</h2>
              <p className='text-center text-sm px-3 sm:px-10 md:text-left lg:text-base lg:pr-14 xl:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto doloribus voluptatem quia. Tempore qui iure alias delectus, dignissimos maiores</p>
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
        <section className='bg-gray-100 py-5 md:py-12 lg:py-14'>
          <div className='bg-gray-400 rounded-lg w-3/4 mx-auto py-5 md:flex md:flex-row-reverse lg:hover:scale-105 transition-all ease-in-out lg:rounded-2xl lg:py-1'>
            <div className='md:w-3/5 md:my-auto lg:w-7/12'>
              <h2 className='text-center uppercase font-semibold mb-3 sm:text-xl sm:font-bold md:text-right md:px-10 lg:text-2xl xl:text-3xl'>Crafting Dreams</h2>
              <p className='text-center text-sm px-3 sm:px-10 md:text-right lg:text-base lg:pl-14 xl:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto doloribus voluptatem quia. Tempore qui iure alias delectus, dignissimos maiores</p>
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
        <section className='bg-gray-400 py-3'>
          <section className='p-3'>
            <h1 className='text-center text-xl font-bold md:text-2xl uppercase lg:text-3xl xl:text-4xl'>Why Us?</h1>
            <article>
              <p className='p-4 text-center text-sm sm:px-10 md:px-20 lg:px-32 lg:text-base xl:px-48'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto iste nisi error culpa provident quibusdam, dolore molestiae quaerat nesciunt.
              </p>
            </article>
          </section>
          <section className='p-3 space-y-5 md:flex md:space-y-0 md:justify-center md:py-5 lg:py-8 lg:px-10 xl:px-20'>
            <div className='w-3/5 mx-auto sm:w-1/3 md:w-52 lg:w-56 xl:w-64'>
              <section className='bg-gray-800 rounded-xl  p-3 shadow-lg hover:scale-105 transition-all ease-in-out '>
                <div>
                  <div className='w-8 mx-auto xl:w-10'>
                    <Image
                      src="/media/trust.png"
                      width={40}
                      height={40}
                      alt="Trust Icon"
                    />
                  </div>
                  <h2 className='text-center uppercase font-semibold text-white text-lg lg:text-xl mb-3'>Trust</h2>
                  <article>
                    <p className='text-center text-sm text-white lg:text-base'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis reprehenderit, neque commodi minus laborum quo dignissimos delectus, sunt sint, id corporis culpa! Non a, animi ratione porro labore nihil molestiae.
                    </p>
                  </article>
                </div>
              </section>
            </div>
            <div className='w-3/5 mx-auto sm:w-1/3 md:w-52 lg:w-56 xl:w-64'>
              <section className='bg-gray-800 rounded-xl  p-3 shadow-lg hover:scale-105 transition-all ease-in-out '>
                <div>
                  <div className='w-8 mx-auto xl:w-10'>
                    <Image
                      src="/media/experience.png"
                      width={40}
                      height={40}
                      alt="Experience Icon"
                    />
                  </div>
                  <h2 className='text-center uppercase font-semibold text-white text-lg lg:text-xl mb-3'>Experience</h2>
                  <article>
                    <p className='text-center text-sm text-white lg:text-base'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis reprehenderit, neque commodi minus laborum quo dignissimos delectus, sunt sint, id corporis culpa! Non a, animi ratione porro labore nihil molestiae.
                    </p>
                  </article>
                </div>
              </section>
            </div>
            <div className='w-3/5 mx-auto sm:w-1/3 md:w-52 lg:w-56 xl:w-64'>
              <section className='bg-gray-800 rounded-xl  p-3 shadow-lg hover:scale-105 transition-all ease-in-out '>
                <div>
                  <div className='w-8 mx-auto xl:w-10'>
                    <Image
                      src="/media/perfection.png"
                      width={40}
                      height={40}
                      alt="Perfection Icon"
                    />
                  </div>
                  <h2 className='text-center uppercase font-semibold text-white text-lg lg:text-xl mb-3'>Perfection</h2>
                  <article>
                    <p className='text-center text-sm text-white lg:text-base'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis reprehenderit, neque commodi minus laborum quo dignissimos delectus, sunt sint, id corporis culpa! Non a, animi ratione porro labore nihil molestiae.
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