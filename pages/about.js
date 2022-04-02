import React from "react";
import Image from "next/image";

export const about = () => {
  return (
    <div className="bg-gradient-to-tr from-[#F1E1A6] to-[#C3E5AE]">
        <section className="relative">
          <div>
            <Image
              src="/media/home_img_1.jpg"
              width="1920"
              height="900"
              alt="About page landing image"
            />
          </div>
          <div className="absolute bottom-3 sm:bottom-5 md:bottom-8 lg:bottom-10 xl:bottom-12">
            <article className="w-5/6 mx-auto bg-black opacity-90 p-2 rounded-lg hover:scale-105 transition-all ease-in-out sm:w-3/4 sm:p-5 lg:w-2/3">
              <h2 className="text-center uppercase text-white font-semibold mb-2 md:text-xl md:font-bold lg:text-2xl xl:text-3xl">About Us</h2>
              <p className="text-center text-xs text-white sm:text-sm md:text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id, dolor saepe voluptatem voluptatum harum ratione similique illum quia corporis esse aspernatur nisi exercitationem totam reiciendis?</p>
            </article>
          </div>
        </section>
        <section className="py-5">
          <div className="w-4/5 pb-3 bg-gradient-to-tr from-black to-gray-500 mx-auto rounded-xl hover:scale-105 transition-all ease-in-out sm:w-3/4 md:flex md:p-0">
            <div className="px-5 pt-5 pb-1 sm:px-8 sm:pt-8 md:w-1/3 md:p-0 md:my-auto">
              <Image
              height="1080"
              width="1080"
              src="/media/about_img.jpg"
              alt="Principal architects"
              />
            </div>
            <div className="px-5 md:w-2/3 md:p-0 md:my-auto">
              <h2 className="font-semibold text-center text-white sm:text-xl">Sneha Pradhan and Kartikey Verma</h2>
              <h3 className="font-semibold text-white text-center mb-2 text-sm sm:text-base">Principal Architects and Founder</h3>
              <p className="text-center text-white text-xs pb-3 sm:text-sm">
              To establish a new milestone in the world of architecture by an exemplary usage of the given resources to emphasis that design is not always bought on the cost of nature....thus lancet was established in 2014 by two architects Ar. Kartikey Verma & Ar. Sneha Pradhan... Currently, a team of 18 people is there comprising of architects, interior designers, engineers, visualizers etc
              </p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default about;
