import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-200 md:flex md:justify-between p-5">
        {/* logo */}
        <div className="w-48 mx-auto sm:w-36 md:mx-10">
          <Image
            src = "/media/logo.png"
            height="100"
            width="200"
            />
        </div>

        {/* address */}
        <div>
          <div className="justify-center text-md font-bold mt-2 hidden sm:block sm:flex">
            Office
          </div>
          <div className="mt-1 hidden sm:block">
            <p className="text-center text-md">14, Amrapali Vihar,</p>
            <p className="text-center text-md">Raibareli Road,</p>
            <p className="text-center text-md">Near Sainik Dhaba,</p>
            <p className="text-center text-md">Lucknow</p>
          </div>
        </div>

        {/* contact */}
        <div>
          <div className="flex justify-center text-md font-bold mt-2">
            Contact
          </div>
          <p className="text-center">Email: lancentarchitects@gmail.com</p>
          <p className="text-center">Phone: +91 7275712348</p>
          <div className="flex justify-center mt-3">
          <div className="mr-1">
            <Image
              src="/media/insta_icon-removebg-preview.png"
              width="30"
              height="20"
              alt="Landing page display image"
            />
          </div>
          <div>
            <Image
              src="/media/59439-removebg-preview.png"
              width="30"
              height="20"
              alt="Landing page display image"
            />
          </div>
        </div>
        </div>

        {/* social icons */}
        
      </div>
    </>
  );
};

export default Footer;
