import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-200 sm:flex sm:justify-between">
        {/* logo */}
        <div className="text-center">Lancet Architects</div>

        {/* address */}
        <div>
          <div className="flex justify-center text-lg font-bold mt-2">
            Office
          </div>
          <div className="mt-1">
            <span className="text-center">14, Amrapali Vihar,</span>
            <span className="text-center">Raibareli Road,</span>
            <p className="text-center">Near Sainik Dhaba,</p>
            <p className="text-center">Lucknow</p>
          </div>
        </div>

        {/* contact */}
        <div>
          <div className="flex justify-center text-lg font-bold mt-2">
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
