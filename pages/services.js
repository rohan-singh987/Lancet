import React from "react";
import Image from "next/image";
import team from "../assets/team1.jpg";

const services = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-10">
        <div className="w-3/4  p-3 mx-auto flex sm:p-5 md:p-8 md:w-3/5 lg:p-10 justify-center hover:scale-105 transition-all ease-in-out">
          <div className="w-1/2 border-2 border-grey p-2 md:border-4 md:w-2/5 self-center">
            <Image
              src="/media/interiors_img_2.jpg"
              height="1080"
              width="1080"
              alt="Ceiling image"
              className=""
            />
          </div>
          <div className="w-1/2  p-3 my-auto sm:p-5 md:p-8 lg:p-10">
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
        <div className="w-3/4  p-3 mx-auto flex sm:p-5 md:p-8 md:w-3/5 lg:p-10 justify-center hover:scale-105 transition-all ease-in-out">
          <div className="w-1/2 p-3 my-auto sm:p-5 md:p-8 lg:p-10">
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
          <div className="w-1/2 border-2 border-grey p-2 md:border-4 md:w-2/5 self-center">
            <Image
              src="/media/interiors_img_3.jpg"
              height="1080"
              width="1080"
              alt="Modular kitchen Image"
              className=""
            />
          </div>
        </div>
        <div className="w-3/4  p-3 mx-auto flex sm:p-5 md:p-8 md:w-3/5 lg:p-10 justify-center hover:scale-105 transition-all ease-in-out">
          <div className="w-1/2 border-2 border-grey p-2 md:border-4 md:w-2/5 self-center">
            <Image
              src="/media/interiors_img_4.jpg"
              height="1080"
              width="1080"
              alt="Designer Room image"
              className=""
            />
          </div>
          <div className="w-1/2 p-3 my-auto sm:p-5 md:p-8 lg:p-10">
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
