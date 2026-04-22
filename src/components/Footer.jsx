import React from "react";

import Linkedin from "../assets/Linkedin.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1120] py-16 px-6 sm:px-12">
      
      <div className="max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-3 items-center gap-10">
         
          <div className="text-center md:text-left">
            <h2 className="font-['Bebas_Neue'] text-[40px] lg:text-[48px] text-[#FFFFFF] leading-none tracking-wider uppercase">
              Sign Up Now
            </h2>
          </div>

          
          <div className="text-center">
            <p className="font-['Poppins'] text-[14px] lg:text-[16px] text-[#FFFFFF] leading-relaxed max-w-[450px] mx-auto">
              Become a member of our online community and get tickets to
              upcoming matches or sports events faster!
            </p>
          </div>

          
          <div className="flex justify-center md:justify-end">
            <div className="relative flex items-center bg-[#1E2633] rounded-full p-1 border border-gray-800 w-full max-w-[400px]">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-none outline-none px-5 py-2.5 w-full text-white text-sm placeholder:text-gray-500"
              />
              <button className="bg-gray-200 text-black text-xs font-bold px-6 py-2.5 rounded-full hover:bg-white transition-colors duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-4 py-8 ml-[375px]">
        <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-white transition-all duration-300 group">
        <img
          src={Linkedin}
          alt="Linkedin"
          class="w-5 h-5 object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0"/>
        </a>

        <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-white transition-all duration-300 group">
        <img
          src={Instagram}
          alt="Instagram"
          class="w-5 h-5 object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0"/>
        </a>


        <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-white transition-all duration-300 group">
        <img
          src={Facebook}
          alt="Facebook"
          class="w-5 h-5 object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0" />
        </a>


        <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-white transition-all duration-300 group">
        <img
          src={Twitter}
          alt="Twitter"
          class="w-5 h-5 object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0" />
          </a>
      </div>
      <br />
      <hr className="mt-16 border-gray-800 opacity-30" />

    
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1440px] mx-auto py-8 border-t border-gray-800">
  
  {/* 1. Navigation Links - Gap aur Color Figma ke mutabiq */}
  <ul className="flex items-center gap-[40px] mb-4 md:mb-0">
    <li>
      <a
        href="#"
        className="font-['Poppins'] font-medium text-[16px] text-[#009A3A] hover:opacity-80 transition-all"
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#"
        className="font-['Poppins'] font-medium text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all"
      >
        Locations
      </a>
    </li>
    <li>
      <a
        href="#"
        className="font-['Poppins'] font-medium text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all"
      >
        Fields
      </a>
    </li>
    <li>
      <a
        href="#"
        className="font-['Poppins'] font-medium text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all"
      >
        Trending
      </a>
    </li>
    <li>
      <a
        href="#"
        className="font-['Poppins'] font-medium text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all"
      >
        Map
      </a>
    </li>
  </ul>


  <div className="font-['Poppins'] font-normal text-[16px] text-[#FFFFFF] opacity-80">
    © 2026. All Rights Reserved.
  </div>
</div>
    </footer>
  );
};

export default Footer;
