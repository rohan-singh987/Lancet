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
        <section className='bg-gray-400'>
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