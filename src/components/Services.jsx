// import React from 'react';
// import ServicesBg from '../assets/Servicesbg.png';
// import LocateIcon from '../assets/Locate.png';
// import SearchIcon from '../assets/Search.png';
// import PlayIcon from '../assets/Play.png';

// const cards = [
//   {
//     icon: LocateIcon,
//     alt: 'Locate',
//     title: 'LOCATE',
//     desc: 'Find your nearest football pitch',
//     iconClass: 'w-[15px] h-[15px]'
//   },
//   {
//     icon: SearchIcon,
//     alt: 'Search',
//     title: 'SEARCH',
//     desc: 'Explore the different facilities found at the site',
//     iconClass: 'w-[16px] h-[16px]'
//   },
//   {
//     icon: PlayIcon,
//     alt: 'Play',
//     title: 'PLAY',
//     desc: 'Learn how to book a slot and secure your pitch',
//     iconClass: 'w-[69px] h-[50px]'
//   },
// ];

// const Services = () => {
//   return (
//     <section
//       className="relative w-full bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${ServicesBg})` }}
//     >
//       {/* Green overlay */}
//       <div className="absolute inset-0 bg-[#1a7a3c]/90" />

//       {/* Content wrapper */}
//       <div className="relative z-10 w-full max-w-[1440px] mx-auto px-16 text-center text-white">

//         {/* ✅ HEADING — Figma exact: 70px, Bebas Neue, tracking 4px, h-168px, w-943px */}
//         <div className="w-full flex items-center justify-center py-[52px]">
//           <h2
//             className="max-w-[943px] w-full min-h-[168px] flex items-center justify-center
//                        text-[70px] font-normal uppercase leading-[100%] tracking-[4px]
//                        text-white text-center"
//             style={{ fontFamily: 'Bebas Neue' }}
//           >
//             The Largest Database of Football Pitches in USA
//           </h2>
//         </div>

//         {/* Cards grid */}
//         <div className="grid grid-cols-3 divide-x divide-white/40 border border-white/40 mb-16">
//           {cards.map(({ icon, alt, title, desc, iconClass }) => (
//             <div
//               key={title}
//               className="flex flex-col items-center justify-start gap-4 px-8 py-10"
//             >
//               <img
//                 src={icon}
//                 alt={alt}
//                 className={`${iconClass} object-contain brightness-0 invert`}
//               />
//               <h3
//                 className="text-[2.5rem] font-normal uppercase leading-none tracking-[2px] text-white"
//                 style={{ fontFamily: 'Bebas Neue' }}
//               >
//                 {title}
//               </h3>
//               <p
//                 className="text-[1.1rem] font-normal leading-relaxed tracking-[1px] text-white/90 max-w-[300px]"
//                 style={{ fontFamily: 'Poppins' }}
//               >
//                 {desc}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;

// import React from "react";

// import LocateIcon from "../assets/Locate.png";
// import SearchIcon from "../assets/Search.png";
// import PlayIcon from "../assets/Play.png";

// const cards = [
//   {
//     icon: LocateIcon,
//     alt: "Locate",
//     title: "LOCATE",
//     desc: "Find your nearest football pitch",
//     iconClass: "w-[69px] h-[69px] pt-[10px]",
//   },
//   {
//     icon: SearchIcon,
//     alt: "Search",
//     title: "SEARCH",
//     desc: "Explore the different facilities found at the site",
//     iconClass: "w-[69px] h-[69px] pt-[10px] ",
//   },
//   {
//     icon: PlayIcon,
//     alt: "Play",
//     title: "PLAY",
//     desc: "Learn how to book a slot and secure your pitch",
//     iconClass: "w-[69px] h-[50px] pt-[10px]",
//   },
// ];

// const Services = () => {
//   return (
//     <section
//       className=" mt-[70px] md:mt-[130px] w-full h-screen
//              bg-services-mobile md:bg-services-desktop
//               md:bg-cover   bg-[length:100%_100%]
//              bg-no-repeat bg-top"
//     >
//       <div className="relative inset-0 bg-[#1a7a3c]/90" />

//       <div className="relative z-10 w-full max-w-[1440px] mx-auto px-16 text-center text-white">
//         <div className="w-full flex items-center justify-center pt-[52px]">
//           <h2
//             className=" max-w-[400px]  md:max-w-[943px] w-full  flex items-center justify-center
//                        text-[50px] md:text-[70px] font-normal uppercase leading-[100%] tracking-[2px]  md:tracking-[4px]
//                        text-[#FFFFFF] text-center"
//             style={{ fontFamily: 'Bebas Neue' }}
//           >
//             The Largest Database of Football Pitches in USA
//           </h2>
//         </div>

//         <div className="grid grid-cols-3 gap-[30px]  ">
//           {cards.map(({ icon, alt, title, desc, iconClass }) => (
//             <div
//               key={title}
//               className="flex flex-col items-center justify-between gap-3 mb-[100px]  ml-[50px]  mr-[50px] px-8 py-8  bg-[#FFFFFF]/10 border-none  rounded-[20px] "
//             >
//               <img
//                 src={icon}
//                 alt={alt}
//                 className={`${iconClass} object-contain brightness-0 invert mb-1`}
//               />
//               <h3
//                 className="text-[2rem] font-normal uppercase leading-none tracking-[2px] text-[#FFFFFF]"
//                 style={{ fontFamily: "Bebas Neue" }}
//               >
//                 {title}
//               </h3>
//               <p
//                 className="text-[1rem] font-normal leading-relaxed max-w-[280px]   text-[#FFFFFF] "
//                 style={{ fontFamily: "Poppins" }}
//               >
//                 {desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";

import LocateIcon from "../assets/Locate.png";
import SearchIcon from "../assets/Search.png";
import PlayIcon from "../assets/Play.png";

const cards = [
  {
    icon: LocateIcon,
    alt: "Locate",
    title: "LOCATE",
    desc: "Find your nearest football pitch",
    iconClass: "w-[69px] h-[69px] pt-[10px]",
  },
  {
    icon: SearchIcon,
    alt: "Search",
    title: "SEARCH",
    desc: "Explore the different facilities found at the site",
    iconClass: "w-[69px] h-[69px] pt-[10px]",
  },
  {
    icon: PlayIcon,
    alt: "Play",
    title: "PLAY",
    desc: "Learn how to book a slot and secure your pitch",
    iconClass: "w-[69px] h-[50px] pt-[10px]",
  },
];

const Services = () => {
  return (
    <section
      className="relative mt-[70px] pb-[50px] md:mt-[130px] w-full 
             h-auto md:h-screen
             bg-services-mobile md:bg-services-desktop
             md:bg-cover bg-[length:100%_100%]
             bg-no-repeat bg-top
             flex items-center"
    >
      {/* Green overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-16 text-center text-white">
        {/* Desktop Heading */}
        <div className="w-full hidden md:flex items-center justify-center py-[52px]">
          <h2
            className="max-w-[943px] w-full min-h-[168px] flex items-center justify-center
               text-[70px] font-normal uppercase leading-[100%] tracking-[4px]
               text-[#FFFFFF] text-center"
            style={{ fontFamily: "Bebas Neue" }}
          >
            The Largest Database of Football Pitches in USA
          </h2>
        </div>

        {/* Mobile Heading */}
        <div className="w-full flex md:hidden items-center justify-center pt-[70px] pb-[50px]">
          <h2
            className="max-w-[400px] w-full flex items-center justify-center
               text-[44px] font-normal uppercase leading-[44px] tracking-[2px]
               text-[#FFFFFF] text-center"
            style={{ fontFamily: "Bebas Neue" }}
          >
            The Largest Database of Football Pitches in USA
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px] pb-[40px] md:pb-[52px]">
          {cards.map(({ icon, alt, title, desc, iconClass }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center gap-3
                     px-8 py-8
                     bg-[#FFFFFF]/10 border-none rounded-[20px]"
            >
              <img
                src={icon}
                alt={alt}
                className={`${iconClass} object-contain brightness-0 invert mb-1`}
              />
              <h3
                className="text-[2rem] font-normal uppercase leading-none tracking-[2px] text-[#FFFFFF]"
                style={{ fontFamily: "Bebas Neue" }}
              >
                {title}
              </h3>
              <p
                className="text-[1rem] font-normal leading-relaxed max-w-[280px] text-[#FFFFFF]"
                style={{ fontFamily: "Poppins" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;



