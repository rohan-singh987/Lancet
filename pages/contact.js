import React from 'react'
import Image from 'next/image'

const contact = () => {
    return (
        <div className='bg-gradient-to-r from-slate-500 to-slate-400'>
            <section className='relative'>
                <div>
                    <Image
                        src="/media/interiors_1.webp"
                        height="900"
                        width="1920"
                        alt="Contact page banner"
                    />
                </div>
                <div className='absolute w-full bottom-2'>
                    <div className='w-1/3 mx-auto bg-black opacity-90 p-3'>
                        <h2 className='font-semibold text-center text-lg animate-pulse text-white'>Contact Us</h2>
                    </div>
                </div>
            </section>
            <section className='py-5'>
                <div className='w-2/3 mx-auto py-3 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 shadow-xl'>
                    <div className='w-1/4 mx-auto'>
                        <Image
                        src="/media/call.png"
                        height="512"
                        width="512"
                        alt="Call icon"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default contact