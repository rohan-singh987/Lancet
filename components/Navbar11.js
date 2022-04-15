import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";
import Logo from "../public/media/logo.png";


const Navbar11 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" shadow-sm w-full z-10 flex justify-evenly items-center flex-wrap bg-gradient-to-r from-[#1B1227] via-[#B66D5E] to-[#351324]  px-3">
      <div className="w-full">
        <div className="flex items-center h-20 w-full">
          <div className="flex items-center  mx-20  justify-between w-full">
            <div className="flex justify-center items-center flex-shrink-0 ">
              <Link href='/'
                className="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-red-200">
                <a>
                  <div className='w-24 md:w-36 lg:w-48'>
                    <Image
                      src="/media/logo.png"
                      height="100"
                      width="200"
                      alt=""
                    />
                  </div>
                </a>

              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href='/'
                  activeClass="Home"
                  // to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                >
                  <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center uppercase hover:bg-gray-600 hover:text-white '>
                    Home
                  </a>
                </Link>
                <Link
                  href='/interiors'
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center uppercase hover:bg-gray-600 hover:text-white '>
                Interiors
            </a>
                </Link>
                <Link
                  href='/portfolio'
                  // activeClass="about"
                  // to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center uppercase hover:bg-gray-600 hover:text-white '>
                portfolio
            </a>
                </Link>
                <Link
                  href='/services'
                  // activeClass="about"
                  // to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center uppercase hover:bg-gray-600 hover:text-white '>
                services
            </a>
                </Link>
                <Link
                  href='/about'
                  // activeClass="about"
                  // to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center uppercase hover:bg-gray-600 hover:text-white '>
                about
            </a>
                </Link>
                <Link
                  href='/contact'
                  // activeClass="about"
                  // to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center uppercase hover:bg-gray-600 hover:text-white '>
                contact
            </a>
                </Link>

              </div>
            </div>
          </div>
          <div className="mr-10 flex md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              <Link
                href="/home"
                activeClass="home"
                to="home"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                activeClass="about"
                to="about"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>

              <Link
                href="/work"
                activeClass="work"
                to="work"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </Link>
              <Link
                href="/services"
                activeClass="services"
                to="services"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </Link>

              <Link
                href="/contact"
                activeClass="work"
                to="work"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>

  )
}

export default Navbar11