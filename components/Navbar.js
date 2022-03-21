import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imgg from '../public/media/Screenshot 2022-03-21 at 10.18.58 PM.png'

const Navbar = () => {
    return (

        <nav className='flex items-center flex-wrap bg-gradient-to-r from-gray-500 via-gray-700 to-black  p-3 '>
            {/* <Link href='/'> */}
            {/* <a className='inline-flex items-center p-2 mr-4 '>
              <Image
                src={imgg}
                width="140"
                height="50"
                alt="logo"
              />

          </a> */}
            <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-red-200">
                <Link href='/'
                 className="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-red-200">
                    LANCET
                </Link>
            </div>
            {/* </Link> */}
            <button className=' inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
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
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white '>
                            Home
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                            Services
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                            About us
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                            Contact
                        </a>
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar