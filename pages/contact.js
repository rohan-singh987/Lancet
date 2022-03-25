import Image from 'next/image'
import React from 'react'
import image from '../assets/portfolioIMG.jpg'
import fb from '../assets/iconsfacebook.png'
import twitter from '../assets/iconstwitter.png'
import insta from '../assets/iconsinstagram.png'
import call from '../assets/iconphone.png'

const contact = () => {
    return (
        // <div classNameName="flex justify-center items-center p-28">
        // <div>
        //     <Image
        //         src={img}
        //         width="400"
        //         height='400'
        //         alt=""
        //     />
        // </div>

        //     <div>

        //     </div>
        // </div>
        <div className="bg-gradient-to-r from-[#97999c] to-[#b7d0f8] overflow-hidden">
            <div className=" flex flex-col md:flex-row items-center justify-center pt-20 mb-48 ">

                <div className="md:shrink-0 relative">
                    <Image
                        src={image}
                        alt="image"
                        width='500'
                        height='500'
                    />
                </div>

                <div className=" lg:w-1/4 md:w-1/2 w-fit  bg-[#6e7c80] text-white sm:p-12 p-5 pb-2 sm:ml-64 m-9 sm:absolute z-10 md:top-52 top-56">
                    <div className="flex justify-center ">
                        <h1 className="mx-2" >Contact US</h1>
                        <Image
                            src={call}
                            alt="image"
                            width='25'
                            height='25'
                        />
                    </div>
                    <p className="text-center items-center py-5">14, Amrapali Vihar,

                        Raibareli Road,

                        Near Sainik Dhaba,

                        Lucknow</p>
                    
                    <p className="text-center items-center">
                    Email: lancentarchitects@gmail.com

                    Phone: +91 7275712348
                    </p>
                    <div className="pt-6 flex items-center justify-center ">

                        <Image
                            src={fb}
                            alt="image"
                            width='35'
                            height='35'
                        />

                        <Image
                            src={insta}
                            alt="image"
                            width='35'
                            height='35'
                        />

                    </div>
                </div>


            </div>

            <div className="" >



            <htmlForm className="w-1/4 h-1/2 border-4">
                <div className="flex flex-wrap -mx-3 mb-6 md:px-40 sm:px-20 px-10">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" />
                        <p className="text-red-500 text-xs italic">For any query, Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 md:px-40 sm:px-20 px-10">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            E-mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                        <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 md:px-40 sm:px-20 px-10">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Message
                        </label>
                        <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3 md:px-40 sm:px-20 px-10">
                        <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Send
                        </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
            </htmlForm>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1001.9994351424767!2d80.94588201851697!3d26.76100970703398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb78041db227%3A0x86fb742e0ecd1c1f!2sRaibareli%20Rd%2C%20Sector%203%2C%20Vrindavan%20Colony%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1648053628327!5m2!1sen!2sin" className="w-1/2 h-96 flex justify-center items-center" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default contact