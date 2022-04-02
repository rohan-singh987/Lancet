import React from "react";
import Image from "next/image";
import team from "../assets/team1.jpg";

const services = () => {
  return (
    <>
    
      <div className=" bg-gradient-to-r from-slate-500 to-yellow-100  space-y-5 lg:space-y-10 pb-10">
        <div>
          <p className="text-center align-center p-5  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eveniet nobis sequi quod impedit quo eaque aliquam perspiciatis hic explicabo nihil non, ex sed itaque rerum in sapiente, vero aspernatur.</p>
        </div>
        <section>
        <div className="w-3/4 rounded-xl shadow-xl backdrop-blur-sm bg-white/30 p-3 mx-auto sm:flex sm:p-5 md:p-8 md:w-3/5 lg:p-10 justify-center hover:scale-105 transition-all ease-in-out">
          <div className="w-3/4 mx-auto border-2 border-black p-2 md:border-4 md:w-2/5 self-center">
            <Image
              src="/media/interiors_img_2.jpg"
              height="1080"
              width="1080"
              alt="Ceiling image"
              className=""
            />
          </div>
          <div className="sm:w-1/2 text-center flex-reverse p-3 mx-auto my-auto sm:p-5 md:p-8 lg:p-10">
            <h2 className="uppercase text-black text-lg font-semibold sm:text-xl md:text-2xl md:font-bold lg:text-3xl lg:mb-3">
            Residential
            </h2>
            <p className="text-sm text-black  sm:text-base md:text-lg lg:text-xl">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae
            </p>
            <div className="pt-8" >
              <button className=" p-2 border-2 border-black">View More</button>
            </div>
          </div>
        </div>
        </section>
        <div className="w-3/4 rounded-xl shadow-xl backdrop-blur-sm bg-white/30 p-3 mx-auto sm:flex sm:p-5 md:p-8 md:w-3/5 lg:p-10 justify-center hover:scale-105 transition-all ease-in-out sm:flex-row-reverse">
        <div className="w-3/4 mx-auto border-2 border-black p-2 md:border-4 md:w-2/5 self-center">
            <Image
              src="/media/interiors_img_3.jpg"
              height="1080"
              width="1080"
              alt="Modular kitchen Image"
              className=""
            />
          </div>
          <div className="sm:w-1/2 text-center flex-reverse p-3 mx-auto my-auto sm:p-5 md:p-8 lg:p-10">
            <h2 className="uppercase text-black text-lg font-semibold sm:text-xl md:text-2xl md:font-bold lg:text-3xl lg:mb-3">
            Commercial
            </h2>
            <p className="text-sm text-black  sm:text-base md:text-lg lg:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, natus?
            </p>
            <div className="pt-8" >
              <button className=" p-2 border-2 border-black">View More</button>
            </div>
          </div>
       
        </div>
        <div className="w-3/4 rounded-xl shadow-xl backdrop-blur-sm bg-white/30 p-3 mx-auto sm:flex sm:p-5 md:p-8 md:w-3/5 lg:p-10 justify-center hover:scale-105 transition-all ease-in-out">
          <div className="w-3/4 mx-auto border-2 border-black p-2 md:border-4 md:w-2/5 self-center">
            <Image
              src="/media/interiors_img_4.jpg"
              height="1080"
              width="1080"
              alt="Designer Room image"
              className=""
            />
          </div>
          <div className="sm:w-1/2 text-center flex-reverse p-3 mx-auto my-auto sm:p-5 md:p-8 lg:p-10">
            <h2 className="uppercase text-black text-lg font-semibold sm:text-xl md:text-2xl md:font-bold lg:text-3xl lg:mb-3">
            Industrial
            </h2>
            <p className="text-sm text-black sm:text-base md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, non!
            </p>
            <div className="pt-8" >
              <button className=" p-2 border-2 border-black">View More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default services;
