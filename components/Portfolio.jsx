import Image from 'next/image'
import React from 'react'
import image from '../assets/portfolioIMG.jpg'

const Portfolio = () => {
  return (
    <div className="  pt-9 bg-slate-400">
      <div className=" flex flex-col md:flex-row items-center justify-center relative ">
        
        <div className=" lg:w-1/4 md:w-1/2  w-fit  bg-slate-500 text-white sm:p-12 p-5 sm:m-9 m-5 md:top-28 relative z-10 ">
          <h1>Vintage Vantage</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit placeat earum deserunt ea id sapiente vero tempora! Dolorem sapiente accusantium atque itaque optio aut cupiditate ipsa asperiores aliquam rerum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sapiente. Voluptatem sapiente soluta pariatur maxime neque quos omnis aperiam facilis. Temporibus odit placeat facilis.</p>
        </div>
        
        <div className="md:shrink-0 relative">
        <Image 
        src={image}
        alt="image"
        width='400'
        height='400'
        />
        </div>

      </div>
      
      <div className=" flex flex-col md:flex-row items-center justify-center absolute ">
        
        <div className="md:shrink-0 relative">
        <Image 
        src={image}
        alt="image"
        width='400'
        height='400'
        />
        </div>

        <div className=" lg:w-1/4 md:w-1/2 w-fit  bg-slate-500 text-white sm:p-12 p-5 sm:m-9 m-5 relative z-10 md:bottom-28">
          <h1>Vintage Vantage</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit placeat earum deserunt ea id sapiente vero tempora! Dolorem sapiente accusantium atque itaque optio aut cupiditate ipsa asperiores aliquam rerum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sapiente. Voluptatem sapiente soluta pariatur maxime neque quos omnis aperiam facilis. Temporibus odit placeat facilis.</p>
        </div>
        

      </div>
    </div>
  )
}

export default Portfolio