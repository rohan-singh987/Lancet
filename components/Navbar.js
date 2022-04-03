import Link from 'next/link'
import React from 'react'
import Image from "next/image";

const Navbar = () => {
    return (


        <nav className='flex justify-evenly items-center flex-wrap bg-gradient-to-r from-[#1B1227] via-[#B66D5E] to-[#351324]  px-3'>
                <Link href='/'
                    className="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-red-200">
                    <div className='w-24 md:w-36 lg:w-48'>
                        <Image
                            src="/media/logo.png"
                            height="100"
                            width="200"
                        />
                    </div>

                </Link>
            <button className=' inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >c
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
            <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center uppercase hover:bg-gray-600 hover:text-white '>
                            Home
                        </a>
                    </Link>
                    <Link href='/interiors'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center uppercase hover:bg-gray-600 hover:text-white '>
                            Interiors
                        </a>
                    </Link>
                    <Link href='/portfolio'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center uppercase hover:bg-gray-600 hover:text-white '>
                            Portfolio
                        </a>
                    </Link>
                    <Link href='/services'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center uppercase hover:bg-gray-600 hover:text-white'>
                            Services
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center uppercase hover:bg-gray-600 hover:text-white'>
                            About us
                        </a>
                    </Link>
                    <Link href='/contact'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center uppercase hover:bg-gray-600 hover:text-white'>
                            Contact
                        </a>
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar