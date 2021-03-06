import React from "react";
import Image from "next/image";
import Link from 'next/link'
import team from "../assets/team1.jpg";

const services = () => {
  return (
    <>

      <div className=" bg-gradient-to-r from-slate-400 to-yellow-200 space-y-5 lg:space-y-10 pb-10">
        <div>
          <p className="animate-pulse text-center align-center p-5 text-sm sm:text-base sm:p-8 md:pb-3 lg:px-40 lg:text-lg lg:font-semibold xl:px-52">Lancet Architects serves its amenities in multiple spheres, be it residential, commercial, or corporate- you name it, and we create it! </p>
        </div>
        <section>
          <div className="w-3/4 rounded-xl shadow-xl bg-white/30 p-3 mx-auto sm:flex sm:p-5 md:p-8 md:w-3/5 justify-center hover:scale-105 transition-all ease-in-out">
            <div className="animate-pulse w-3/4 mx-auto border-2 border-black p-2 md:border-4 md:w-2/5 self-center">
              <Image
                src="/media/waterproofing.webp"
                height="1080"
                width="1080"
                alt="Ceiling image"
                className=""
              />
            </div>
            <div className="sm:w-1/2 text-center flex-reverse p-3 mx-auto my-auto sm:p-5 md:p-8 lg:p-10">
              <h2 className="animate-pulse uppercase text-black text-lg font-semibold sm:text-lg md:text-xl md:font-bold lg:text-2xl lg:mb-3 lg:text-left">
                Waterproofing
              </h2>
              <p className="text-sm text-black sm:text-base lg:text-lg lg:text-left">
                Leaking taps betray the beauty! Lancet induces premium waterproofing techniques to your designs. We offer the best solutions- reliable to your budget!

              </p>
              {/* <Link href="/portfolio">
                <a>
                  <div className="pt-8" >
                    <button className=" p-2 border-2 border-black">View More</button>
                  </div>
                </a>
              </Link> */}
            </div>
          </div>
        </section>
        <section>
          <div className="w-3/4 rounded-xl shadow-xl bg-white/30 p-3 mx-auto sm:flex sm:p-5 md:p-8 md:w-3/5 justify-center hover:scale-105 transition-all ease-in-out sm:flex-row-reverse">
            <div className="animate-pulse w-3/4 mx-auto border-2 border-black p-2 md:border-4 md:w-2/5 self-center">
              <Image
                src="/media/structure_strengthening.webp"
                height="1080"
                width="1080"
                alt="Modular kitchen Image"
                className=""
              />
            </div>
            <div className="sm:w-1/2 text-center flex-reverse p-3 mx-auto my-auto sm:p-5 md:p-8 lg:p-10">
              <h2 className="animate-pulse uppercase text-black text-lg font-semibold sm:text-lg md:text-xl md:font-bold lg:text-2xl lg:mb-3 lg:text-left">
                Structure Strengthening
              </h2>
              <p className="text-sm text-black sm:text-base lg:text-lg lg:text-left">
                The architects and engineers of the Lancet impart the point ornamentation to strengthen the structure of your layouts. For us, pillars are the bearers of harmony with height!
              </p>
              {/* <Link href="/portfolio">
              <a>
                <div className="pt-8" >
                  <button className=" p-2 border-2 border-black">View More</button>
                </div>
              </a>
            </Link> */}
            </div>
          </div>
        </section>
        <section>
          <div className="w-3/4 rounded-xl shadow-xl bg-white/30 p-3 mx-auto sm:flex sm:p-5 md:p-8 md:w-3/5 justify-center hover:scale-105 transition-all ease-in-out">
            <div className="animate-pulse w-3/4 mx-auto border-2 border-black p-2 md:border-4 md:w-2/5 self-center">
              <Image
                src="/media/interior_planning.webp"
                height="1080"
                width="1080"
                alt="Designer Room image"
                className=""
              />
            </div>
            <div className="sm:w-1/2 text-center flex-reverse p-3 mx-auto my-auto sm:p-5 md:p-8 lg:p-10">
              <h2 className="animate-pulse uppercase text-black text-lg font-semibold sm:text-lg md:text-xl md:font-bold lg:text-2xl lg:mb-3 lg:text-left">
                Interior Planning
              </h2>
              <p className="text-sm text-black sm:text-base lg:text-lg lg:text-left">
                We understand the influence of designs on the audience. Trust Lancet with every corner of your nest to weave the most unique set of dreams into existence!

              </p>
              {/* <Link href="/portfolio">
              <a>
                <div className="pt-8" >
                  <button className=" p-2 border-2 border-black">View More</button>
                </div>
              </a>
            </Link> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default services;
