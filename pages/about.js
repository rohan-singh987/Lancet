import React from "react";
import Image from "next/image";

export const about = () => {
  return (
    <div className="bg-gradient-to-r from-[#9D9D9D] to-[#b7d0f8]">
      <section className="relative">
        <div>
          <Image
            src="/media/home_img_1.jpg"
            width="1920"
            height="900"
            alt="About page landing image"
          />
        </div>
        <div className="w-full absolute bottom-3 sm:bottom-5 md:bottom-8 lg:bottom-12 xl:bottom-20">
          <article className="w-5/6 mx-auto bg-black opacity-90 p-2 rounded-lg hover:scale-105 transition-all ease-in-out sm:w-3/4 sm:p-5 lg:w-3/5">
            <h2 className="text-center uppercase text-white font-semibold mb-2 md:text-xl md:font-bold lg:text-2xl xl:text-3xl">About Us</h2>
            <p className="text-center text-xs text-white sm:text-sm md:text-base">
              The company aspires to establish a new milestone in the world of architecture by drafting instances in an exceptional approach.
            </p>
            <p className="text-center text-xs text-white sm:text-sm md:text-base">
              "Design is not to be outlined at the cost of nature. The given resources can be utilized in the most sustainable method."
            </p>
          </article>
        </div>
      </section>
      <section className="py-6 md:py-12 lg:py-14 xl:py-20">
        <div className="w-2/3 pb-3 bg-slate-800 mx-auto rounded-xl hover:scale-105 transition-all ease-in-out sm:w-4/5 md:flex md:p-0">
          <div className="md:w-2/5 md:my-auto md:px-2 md:pt-2 lg:p-5">
            <Image
              height="1080"
              width="1080"
              src="/media/about_img.jpg"
              alt="Principal architects"
            />
          </div>
          <div className="px-3 md:w-3/5 md:p-3 lg:px-8 lg:my-auto">
            <p className="text-center text-white pb-3 lg:text-left lg:text-lg">
              To establish a new milestone in the world of architecture by an exemplary usage of the given resources to emphasis that design is not always bought on the cost of nature....thus lancet was established in 2014 by two architects Ar. Kartikey Verma & Ar. Sneha Pradhan... Currently, a team of 18 people is there comprising of architects, interior designers, engineers, visualizers etc
            </p>
            <p className="text-center text-sm text-sky-500 font-medium lg:text-base">Sneha Pradhan and Kartikey Verma</p>
            <p className="text-center text-slate-400 text-sm lg:text-base">Principal Architects and Founder</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default about;
