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
          <h1>Vintage Vantage</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit placeat earum deserunt ea id sapiente vero tempora! Dolorem sapiente accusantium atque itaque optio aut cupiditate ipsa asperiores aliquam rerum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sapiente. Voluptatem sapiente soluta pariatur maxime neque quos omnis aperiam facilis. Temporibus odit placeat facilis.</p>
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
      

            <htmlForm className="w-1/2 h-1/2 max-">
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
    </div>
    )
}

export default contact