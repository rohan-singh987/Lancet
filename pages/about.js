import React from "react";
import Image from "next/image";
import team from "../assets/team1.jpg";

export const about = () => {
  return (
    <>
      {/* header */}
      <div className="relative">
        <div>
          <Image
            src="/media/home_img_1.jpg"
            width="1920"
            height="800"
            alt="Landing page display image"
            
          />
          <div className="text-xs mt-3 px-5 md:text-base lg:text-lg lg:mt-10 lg:px-32">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>

      {/* team members */}
      <div className="lg:space-y-8 relative">
        <div className="flex border-2 mt-3 mx-3 border-black justify-center lg:w-1/2 lg:mx-auto lg:mt-12">
          <div className="mt-3 ml-9 mb-2">
            <Image src={team} width="200" height="200" />
          </div>
          <div className="mt-5 ml-5 sm:mt-20">
            <div className="md:text-xl lg:text-2xl">Lorem Ipsum</div>
            <div className="text-xs md:text-base lg:text-lg">
              Lorem Ipsum is simply dummy text of the printing and
            </div>
          </div>
        </div>

        <div className="flex border-2 mt-3 mx-3 border-black justify-center lg:w-1/2 lg:mx-auto">
          <div className="mt-5 mr-5 ml-3 sm:mt-20">
            <div className="md:text-xl lg:text-2xl">Lorem Ipsum</div>
            <div className="text-xs md:text-base lg:text-lg">
              Lorem Ipsum is simply dummy text of the printing and
            </div>
          </div>
          <div className="mt-3 mr-9 mb-2">
            <Image src={team} width="200" height="200" />
          </div>
        </div>

        <div className="flex border-2 mt-3 mx-3 border-black justify-center lg:w-1/2 lg:mx-auto">
          <div className="mt-3 ml-9 mb-2">
            <Image src={team} width="200" height="200" />
          </div>
          <div className="mt-5 ml-5 sm:mt-20">
            <div className="md:text-xl lg:text-2xl">Lorem Ipsum</div>
            <div className="text-xs md:text-base lg:text-lg">
              Lorem Ipsum is simply dummy text of the printing and
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
