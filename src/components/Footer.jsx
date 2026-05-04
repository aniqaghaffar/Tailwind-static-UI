// import React from "react";

// import Linkedin from "../assets/Linkedin.png";
// import Instagram from "../assets/Instagram.png";
// import Facebook from "../assets/Facebook.png";
// import Twitter from "../assets/Twitter.png";

// const Footer = () => {
//   return (
//     <footer className="  w-full bg-[#0B1120] py-16 px-6 sm:px-12">
      
//       <div className="max-w-[1440px] mx-auto">
        
//         <div className="grid grid-cols-3 items-center gap-10">
         
//           <div className="text-center md:text-left">
//             <h2 className="font-['Bebas_Neue'] text-[40px] lg:text-[48px] text-[#FFFFFF] leading-none tracking-wider uppercase">
//               Sign Up Now
//             </h2>
//           </div>

        
//           <div className="text-center">
//             <p className="font-['Poppins'] text-[14px] lg:text-[16px] text-[#FFFFFF] leading-relaxed max-w-[450px] mx-auto">
//               Become a member of our online community and get tickets to
//               upcoming matches or sports events faster!
//             </p>
//           </div>

          
//           <div className="flex justify-center md:justify-end">
//             <div className="relative flex items-center bg-[#1E2633] rounded-full p-1 border border-gray-800 w-full max-w-[400px]">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="bg-transparent border-none outline-none px-5 py-2.5 w-full text-white text-sm placeholder:text-gray-500"
//               />
//               <button className="bg-gray-200 text-black text-xs font-bold px-6 py-2.5 rounded-full hover:bg-white transition-colors duration-300">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="flex items-center gap-4 py-8 ml-[130px] px-20">
//         <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-white transition-all duration-300 group">
//         <img
//           src={Linkedin}
//           alt="Linkedin"
//           class="w-5 h-5 object-contain "/>
//         </a>

//         <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-white transition-all duration-300 group">
//         <img
//           src={Instagram}
//           alt="Instagram"
//           class="w-5 h-5 object-contain "/>
//         </a>


//         <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-white transition-all duration-300 group">
//         <img
//           src={Facebook}
//           alt="Facebook"
//           class="w-5 h-5 object-contain " />
//         </a>


//         <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-white transition-all duration-300 group">
//         <img
//           src={Twitter}
//           alt="Twitter"
//           class="w-5 h-5 object-contain " />
//           </a>
//       </div>
//       <br />
//       <hr className="mt-16 border-gray-800 opacity-30" />

    
//       <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1440px] mx-auto py-8 border-t border-gray-800">
  
//   {/* 1. Navigation Links - Gap aur Color Figma ke mutabiq */}
//   <ul className="flex items-center gap-[40px] mb-4 md:mb-0">
//     <li>
//       <a
//         href="#"
//         className="font-['Poppins'] font-medium text-[16px] text-[#009A3A] hover:opacity-80 transition-all"
//       >
//         Home
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="font-['Poppins'] font-medium text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all"
//       >
//         Locations
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="font-['Poppins'] font-medium text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all"
//       >
//         Fields
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="font-['Poppins'] font-medium text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all"
//       >
//         Trending
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="font-['Poppins'] font-medium text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all"
//       >
//         Map
//       </a>
//     </li>
//   </ul>


//   <div className="font-['Poppins'] font-normal text-[16px] text-[#FFFFFF] opacity-80">
//     © 2026. All Rights Reserved.
//   </div>
// </div>
//     </footer>
//   );
// };

// export default Footer;













// import React from "react";

// import Linkedin from "../assets/Linkedin.png";
// import Instagram from "../assets/Instagram.png";
// import Facebook from "../assets/Facebook.png";
// import Twitter from "../assets/Twitter.png";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#0B1120] py-16 px-6 sm:px-12">
//       <div className="max-w-[1440px] mx-auto">

//         {/* Top Section - Sign Up */}
//         {/* Desktop: 3 columns | Mobile: stacked */}
//         <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-10">

//           {/* Heading */}
//           <div className="text-center md:text-left">
//             <h2 className="font-['Bebas_Neue'] text-[40px] lg:text-[48px] text-[#FFFFFF] leading-none tracking-wider uppercase">
//               Sign Up Now
//             </h2>
//           </div>

//           {/* Description */}
//           <div className="text-center">
//             <p className="font-['Poppins'] text-[14px] lg:text-[16px] text-[#FFFFFF] leading-relaxed max-w-[450px] mx-auto">
//               Become a member of our online community and get tickets to
//               upcoming matches or sports events faster!
//             </p>
//           </div>

//           {/* Email Input */}
//           <div className="flex justify-center md:justify-end">
//             <div className="relative flex items-center bg-[#1E2633] rounded-full p-1 border border-gray-800 w-full max-w-[400px]">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="bg-transparent border-none outline-none px-5 py-2.5 w-full text-white text-sm placeholder:text-gray-500"
//               />
//               <button className="bg-gray-200 text-black text-xs font-bold px-6 py-2.5 rounded-full hover:bg-white transition-colors duration-300">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Social Icons */}
//         {/* Desktop: left aligned | Mobile: centered */}
//         {/* Social Icons */}
// <div className="flex items-center justify-center md:justify-start gap-4 py-8">
//   <a href="#">
//     <img src={Linkedin} alt="Linkedin" className="w-8 h-8 object-contain" />
//   </a>
//   <a href="#">
//     <img src={Instagram} alt="Instagram" className="w-8 h-8 object-contain" />
//   </a>
//   <a href="#">
//     <img src={Facebook} alt="Facebook" className="w-8 h-8 object-contain" />
//   </a>
//   <a href="#">
//     <img src={Twitter} alt="Twitter" className="w-8 h-8 object-contain" />
//   </a>
// </div>

//         {/* Divider */}
//         <hr className="border-[#262F3E]" />

//         {/* Bottom Section - Nav + Copyright */}
//         {/* Desktop: row | Mobile: stacked centered */}
//         <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-4 md:gap-0">

//           {/* Navigation Links */}
//           <ul className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-[40px]">
//             <li>
//               <a href="#" className="font-['Poppins'] font-medium text-[16px] text-[#009A3A] hover:opacity-80 transition-all">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="font-['Poppins'] font-medium text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all">
//                 Locations
//               </a>
//             </li>
//             <li>
//               <a href="#" className="font-['Poppins'] font-medium text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all">
//                 Fields
//               </a>
//             </li>
//             <li>
//               <a href="#" className="font-['Poppins'] font-medium text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all">
//                 Trending
//               </a>
//             </li>
//             <li>
//               <a href="#" className="font-['Poppins'] font-medium text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all">
//                 Map
//               </a>
//             </li>
//           </ul>
          

//            <hr className="border-[#262F3E]" />
//           {/* Copyright */}
//           <div className="font-['Poppins'] font-normal text-[16px] text-[#FFFFFF] opacity-80 text-center md:text-right">
//             © 2026. All Rights Reserved.
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";

import Linkedin from "../assets/Linkedin.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1120] py-16 px-6 sm:px-12     h-[535xp]  md:h-[362xp]">
      <div className="max-w-[1440px] mx-auto">

        {/* Top Section - Sign Up */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-10">

          {/* Heading */}
          <div className="text-center md:text-left">
            <h2 className="font-['Bebas_Neue'] text-[40px] lg:text-[48px] text-[#FFFFFF] leading-none tracking-wider uppercase">
              Sign Up Now
            </h2>
          </div>

          {/* Description */}
          <div className="text-center">
            <p className="font-['Poppins'] text-[14px] lg:text-[16px] text-[#FFFFFF] leading-relaxed max-w-[450px] mx-auto">
              Become a member of our online community and get tickets to
              upcoming matches or sports events faster!
            </p>
          </div>

          {/* Email Input */}
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

        {/* Social Icons */}
        <div className="flex items-center justify-center md:justify-start gap-4 py-8">
          <a href="#">
            <img src={Linkedin} alt="Linkedin" className="w-8 h-8 object-contain" />
          </a>
          <a href="#">
            <img src={Instagram} alt="Instagram" className="w-8 h-8 object-contain" />
          </a>
          <a href="#">
            <img src={Facebook} alt="Facebook" className="w-8 h-8 object-contain" />
          </a>
          <a href="#">
            <img src={Twitter} alt="Twitter" className="w-8 h-8 object-contain" />
          </a>
        </div>

        {/* Divider */}
        <hr className="border-[#3a4557]" />

        {/* Bottom Section - Nav + Copyright */}
        <div className="flex flex-col items-center md:flex-row md:justify-between py-8 gap-6 md:gap-0">

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-[40px]">
            <li>
              <a href="#" className="font-['Poppins'] font-medium text-[14px] md:text-[16px] text-[#009A3A] hover:opacity-80 transition-all">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="font-['Poppins'] font-medium text-[14px] md:text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all">
                Locations
              </a>
            </li>
            <li>
              <a href="#" className="font-['Poppins'] font-medium text-[14px] md:text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all">
                Fields
              </a>
            </li>
            <li>
              <a href="#" className="font-['Poppins'] font-medium text-[14px] md:text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all">
                Trending
              </a>
            </li>
            <li>
              <a href="#" className="font-['Poppins'] font-medium text-[14px] md:text-[16px] text-[#FFFFFF] hover:text-[#009A3A] transition-all">
                Map
              </a>
            </li>
          </ul>
          

            <hr className="w-full border-[#3a4557] md:hidden" />
          {/* Copyright */}
          <div className="font-['Poppins'] font-normal text-[14px] md:text-[16px] text-[#FFFFFF] opacity-80 text-center md:text-right">
            © 2026. All Rights Reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;