import React from "react";
import Image from "next/image";

export const about = () => {
  return (
    <div>
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
        <section>
          
        </section>
    </div>
  )
}

export default about;
