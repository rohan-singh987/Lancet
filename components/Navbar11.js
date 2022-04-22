import Link from 'next/link'
import React from 'react'
import Image from "next/image";

const Navbar11 = () => {
    return (
        <nav className='bg-gradient-to-r from-[#000000] via-[#414141] to-[#000000] px-1 sm:flex sm:px-0'>
            <div className='my-auto px-3 w-1/3 mx-auto sm:w-1/4'>
                <Link href="/">
                    <a>
                        <Image
                            src="/media/logo.png"
                            height="90"
                            width="200"
                            alt="Logo"
                        />
                    </a>
                </Link>
            </div>
            <div className='flex justify-evenly pb-1 sm:my-auto sm:pb-0 sm:w-3/4'>
                <Link href="/" passHref>
                    <span className='align-middle uppercase font-semibold text-xs p-1 cursor-pointer text-white hover:bg-slate-500 transition-all ease-in-out rounded-lg sm:p-2 md:text-sm lg:text-base'>
                        Home
                    </span>
                </Link>
                <Link href="/interiors" passHref>
                    <span className='align-middle uppercase font-semibold text-xs p-1 cursor-pointer text-white hover:bg-slate-500 transition-all ease-in-out rounded-lg sm:p-2 md:text-sm lg:text-base'>
                        Interiors
                    </span>
                </Link>
                <Link href="/portfolio" passHref>
                    <span className='align-middle uppercase font-semibold text-xs p-1 cursor-pointer text-white hover:bg-slate-500 transition-all ease-in-out rounded-lg sm:p-2 md:text-sm lg:text-base'>
                        Portfolio
                    </span>
                </Link>
                <Link href="/services" passHref>
                    <span className='align-middle uppercase font-semibold text-xs p-1 cursor-pointer text-white hover:bg-slate-500 transition-all ease-in-out rounded-lg sm:p-2 md:text-sm lg:text-base'>
                        Services
                    </span>
                </Link>
                <Link href="/about" passHref>
                    <span className='align-middle uppercase font-semibold text-xs p-1 cursor-pointer text-white hover:bg-slate-500 transition-all ease-in-out rounded-lg sm:p-2 md:text-sm lg:text-base'>
                        About
                    </span>
                </Link>
                <Link href="/contact" passHref>
                    <span className='align-middle uppercase font-semibold text-xs p-1 cursor-pointer text-white hover:bg-slate-500 transition-all ease-in-out rounded-lg sm:p-2 md:text-sm lg:text-base'>
                        Contact
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar11