import React from 'react'
import Image from 'next/image'

const commercial = () => {
    return (
        <div className='bg-gradient-to-r from-[#D6E0F0] to-[#8D93AB]'>
            <section className='relative'>
                <div>
                    <Image
                        src="/media/commercial_5.webp"
                        width="1920"
                        height="1080"
                        alt="Residential banner"
                    />
                </div>
                <div className='w-full absolute bottom-10 sm:bottom-1/3'>
                <div className='w-1/3 mx-auto bg-black p-4 rounded-xl opacity-90 lg:w-1/4'>
                    <h2 className='animate-pulse uppercase font-semibold text-center text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Commercial</h2>
                </div>
                </div>
            </section>
            <section className='py-4 md:py-8 lg:py-10'>
                <div className='w-5/6 mx-auto py-5 rounded-lg bg-[#faf2f2] space-y-3 shadow-xl sm:py-8 sm:space-y-5 md:rounded-xl lg:flex lg:space-y-0 lg:flex-wrap'>
                    <div className='w-5/6 mx-auto lg:p-5 lg:w-2/5'>
                        <div className='p-1 border-4 border-black shadow-xl md:p-3 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
                            <Image
                                src="/media/commercial_1.webp"
                                width="1920"
                                height="1080"
                                alt="Residential image 1"
                            />
                        </div>
                    </div>
                    <div className='w-5/6 mx-auto lg:p-5 lg:w-2/5'>
                        <div className='p-1 border-4 border-black shadow-xl md:p-3 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
                            <Image
                                src="/media/commercial_2.webp"
                                width="1920"
                                height="1080"
                                alt="Residential image 1"
                            />
                        </div>
                    </div>
                    <div className='w-5/6 mx-auto lg:p-5 lg:w-2/5'>
                        <div className='p-1 border-4 border-black shadow-xl md:p-3 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
                            <Image
                                src="/media/commercial_3.webp"
                                width="1920"
                                height="1080"
                                alt="Residential image 1"
                            />
                        </div>
                    </div>
                    <div className='w-5/6 mx-auto lg:p-5 lg:w-2/5'>
                        <div className='p-1 border-4 border-black shadow-xl md:p-3 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
                            <Image
                                src="/media/commercial_4.webp"
                                width="1920"
                                height="1080"
                                alt="Residential image 1"
                            />
                        </div>
                    </div>
                    <div className='w-5/6 mx-auto lg:p-5 lg:w-2/5'>
                        <div className='p-1 border-4 border-black shadow-xl md:p-3 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
                            <Image
                                src="/media/commercial_5.webp"
                                width="1920"
                                height="1080"
                                alt="Residential image 1"
                            />
                        </div>
                    </div>
                    <div className='w-5/6 mx-auto lg:p-5 lg:w-2/5'>
                        <div className='p-1 border-4 border-black shadow-xl md:p-3 lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105 transition-all ease-in-out'>
                            <Image
                                src="/media/commercial_6.webp"
                                width="1920"
                                height="1080"
                                alt="Residential image 1"
                            />
                        </div>
                    </div>                    
                </div>
            </section>
        </div>
    )
}

export default commercial