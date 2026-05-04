// import React from "react";
// import heroBg from "../assets/Background.png";
// import playerImg from "../assets/Player.png";
// import footballImg from "../assets/Football.png";
// import locationBarImg from "../assets/LocationBar.png";

// const Hero = () => {
//   return (
//     <section
//       className=" relative  w-[1920px] h-[939px] bg-cover bg-center  overflow-visible"
//       style={{ backgroundImage: `url(${heroBg})` }}
//     >
//       {/* Dark Overlay for better text readability */}
//       <div className="absolute inset-0 bg-black"></div>

//       <img
//         src={playerImg}
//         alt="Main Player"
//         className="absolute z-20 object-contain  w-[1134px]  h-[710px]  top-[145px]  left-[731px]      "
//       />

//       {/* Football Image - Positioned with higher Z-index */}
//       <img
//         src={footballImg}
//         alt="Football"
//         className="absolute z-30 object-contain w-[75px] md:w-[249px]  h-[74px]  md:h-[217px]    top-[469px]   sm:top-[238px]    left-[20px]  sm:left-[628px]    "
//       />

//       {/* Hero Heading - Bebas Neue Font */}
//       <h1
//         className="absolute z-40  text-[#FFFFFF] uppercase font-['Bebas_Neue']
//                    w-[893px] h-[280px] top-[413px] left-[56px]
//                    text-[168px] leading-[140px] tracking-[4px] font-normal"
//       >
//         SOCCER PITCH <br /> FINDER
//       </h1>

//       {/* Location Bar Image Implementation */}
//       {/* Positioned half-up and half-down at the bottom border using -bottom-[54px] */}
//       <div className="absolute left-1/2 -translate-x-1/2 -bottom-[54px] z-[100] w-[1392px]">
//         <img
//           src={locationBarImg}
//           alt="Location Search Bar"
//           className="w-full h-auto drop-shadow-2xl"
//         />

//       </div>
//     </section>
//   );
// };

// export default Hero;

// import heroBg from "../assets/Background.png";

// const Hero = () => {
//   return (
//     <section
//       className="w-full h-[730px] 2xl:h-[939px] bg-cover bg-top bg-no-repeat "
//       style={{ backgroundImage: `url(${heroBg})` }}
//     >
//       {/* Hero content yahan aayega */}
//     </section>

//   );
// };

// export default Hero;

// import heroBg from "../assets/Background.png";
// import Navbar from "./Navbar";

// const Hero = () => {
//   return (
//     <section
//       className="w-full h-[730px] 2xl:h-[939px] bg-cover bg-no-repeat relative"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundPosition: "top center"
//       }}
//     >
//       <Navbar />
//       {/* Baaki Hero content yahan aayega */}
//     </section>
//   );
// };

// export default Hero;

// import heroBg from "../assets/Background.png";
// import Navbar from "./Navbar";

// const Hero = () => {
//   return (
//     <section
//       className="w-full h-[730px] 2xl:h-[939px] bg-cover bg-no-repeat relative"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundPosition: "top center"
//       }}
//     >
//       <Navbar />
//       {/* Baaki Hero content yahan aayega */}
//     </section>
//   );
// };

// export default Hero;

// import heroBg from "../assets/Background.png";
// import Navbar from "./Navbar";

// const Hero = () => {
//   return (
//     <section
//       className="w-full h-[730px] 2xl:h-[939px] relative"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundSize: "100% 100%",
//        // backgroundPosition: "top center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <Navbar />
//     </section>
//   );
// };

// export default Hero;

// import heroBg from "../assets/Background.png";
// import Navbar from "./Navbar";

// const Hero = () => {
//   return (
//     <section
//       className="w-full relative"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundSize: "100% 100%",
//         backgroundRepeat: "no-repeat",
//         height: "clamp(730px, 50vw, 939px)",
//       }}
//     >
//       <Navbar />
//     </section>
//   );
// };

// export default Hero;

// import heroBg from "../assets/Background.png";
// import Navbar from "./Navbar";

// const Hero = () => {
//   return (
//     <section
//       className="w-full relative"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "right top",
//         backgroundRepeat: "no-repeat",
//         height: "clamp(730px, 50vw, 939px)",
//       }}
//     >
//       <Navbar />
//       {/* Yahan player image, text aur search bar aayenge */}
//     </section>
//   );
// };

// export default Hero;

// import heroBg from "../assets/Background.png";
// import Navbar from "./Navbar";

// const Hero = () => {
//   return (
//     <section
//       className="w-full relative"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundSize: "cover",
//         backgroundPosition:  window.innerWidth >= 440 ? "center top" : "right top",
//         backgroundRepeat: "no-repeat",
//         height: "clamp(730px, 50vw, 939px)",

//       }}
//     >
//       <Navbar />

//       <img
//         src={playerImg}
//         alt="Player"
//         className="absolute
//           w-[375px] h-[264px] top-[426px] left-[45px]
//           min-[700px]:w-[1134px] min-[700px]:h-[710px] min-[700px]:top-[145px] min-[700px]:left-[731px]"
//       />

//       <img
//         src={footballImg}
//         alt="Football"
//         className="absolute
//           w-[75px] h-[74px] top-[469px] left-[20px]
//           min-[700px]:w-[249px] min-[700px]:h-[217px] min-[700px]:top-[238px] min-[700px]:left-[628px]"
//       />

//       <img
//         src={locationBarImg}
//         alt="Location Bar"
//         className="absolute
//             w-[400px] h-[55px] top-[326px] left-[20px]
//             min-[700px]:w-[1392px] min-[700px]:h-[109px] min-[700px]:top-auto min-[700px]:bottom-[-54px] min-[700px]:left-1/2 min-[700px]:-translate-x-1/2"
//       />
//     </section>
//   );
// };

// // export default Hero;

// import heroBg from "../assets/Background.png";
// import playerImg from "../assets/player.png"; // import missing tha
// import footballImg from "../assets/football.png"; // import missing tha
// import locationBarImg from "../assets/locationbar.png"; // import missing tha
// import Navbar from "./Navbar";

// const Hero = () => {
//   return (
//     <section
//       className="w-full relative"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: window.innerWidth >= 440? "center top" : "right top",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Wrapper: 1920px pe lock + center + overflow hidden */}
//       <div className="max-w-[1920px] mx-auto relative h-[clamp(730px,50vw,939px)] overflow-hidden">

//         <Navbar />

//         {/* Player Image - Right side se % mein */}
//         <img
//           src={playerImg}
//           alt="Player"
//           className="absolute
//             w-[320px] h-auto bottom-10 right-5
//             md:w-[500px] md:right-[5%]
//             lg:w-auto lg:h-[75%] lg:bottom-0 lg:right-[3%]
//             object-contain"
//         />

//         {/* Football - Player ke relative */}
//         <img
//           src={footballImg}
//           alt="Football"
//           className="absolute
//             w-[70px] h-auto bottom-32 right-64
//             md:w-[120px] md:bottom-40 md:right-[45%]
//             lg:w-[200px] lg:bottom-[30%] lg:right-[40%]
//             object-contain"
//         />

//         {/* Location Bar - Center mein hamesha */}
//         <img
//           src={locationBarImg}
//           alt="Location Bar"
//           className="absolute
//             w-[90%] max-w-[400px] h-auto top-[60%] left-1/2 -translate-x-1/2
//             md:max-w-[700px] md:top-[65%]
//             lg:max-w-[1392px] lg:top-auto lg:bottom-[-54px]"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import heroBg from "../assets/Background.png";
// import playerImg from "../assets/player.png";
// import footballImg from "../assets/football.png";
// import locationBarImg from "../assets/locationbar.png";

// const Hero = () => {
//   return (
//     <section
//       className=" w-full relative"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: window.innerWidth >= 440? "center top" : "right top",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Wrapper */}
//       <div className="max-w-[1920px] mx-auto relative h-[clamp(730px,50vw,939px)] overflow-hidden">

//         {/* Player -  */}
//          <img
//           src={playerImg}
//           alt="Player"
//           className="absolute
//             w-[375px] h-[264px] top-[426px] left-[45px]
//             min-[700px]:w-[1134px]  min-[700px]:h-[710px] min-[700px]:top-[145px] min-[700px]:left-[731px]"
//         />

//         {/* Football - */}
//         <img
//           src={footballImg}
//           alt="Football"
//           className="absolute
//             w-[75px] h-[74px] top-[469px] left-[20px]
//              min-[700px]:w-[249px]  min-[700px]:h-[217px]  min-[700px]:top-[238px]  min-[700px]:left-[628px]    2xl:mt-[117px] 2xl:mr-[1021px]  2xl:mb-[484px] 2xl:ml-[628px]   "
//         />

//         {/* Location Bar */}
//         <img
//           src={locationBarImg}
//           alt="Location Bar"
//           className="absolute
//             w-[400px] h-[55px] top-[326px] left-[20px]
//             min-[700px]:w-[1392px] min-[700px]:h-[109px] min-[700px]:top-auto min-[700px]:bottom-[-54px] min-[700px]:left-1/2 min-[700px]:-translate-x-1/2"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

// const Hero = () => {
//   return (
//     <section className=" relative w-full h-screen bg-hero-mobile md:bg-hero-desktop bg-contain md:bg-cover  bg-no-repeat    ">

//         <div className="absolute z-30 flex flex-col items-start justify-center h-full px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16 pt-8 pb-10 sm:pt-10"

//       >
//       //main title.............
//         <h1
//           className="
//             font-['Bebas_Neue'] font-normal tracking-[0.04em] leading-[0.9]
//             text-white uppercase text-left
//             mb-5 sm:mb-6 md:mb-7
//             w-[55%] sm:w-[52%] md:w-[50%] lg:w-[48%]
//             text-[clamp(3rem,10vw,10.5rem)]
//           "
//         >
//           SOCCAR PITCH FINDER
//         </h1>

//       </div>

//     </section>

// import HeroBg from '../assets/desktop-bg.png';
// import HeroMobileBg from '../assets/mobile-phone-hero-bg.png';

// const Hero = () => {
//   return (
//     <section
//       className="w-full h-screen bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${HeroMobileBg})`
//       }}
//     >
//       <div className="hidden md:flex absolute inset-0"
//         style={{
//           backgroundImage: `url(${HeroBg})`
//         }}
//       ></div>

//     </section>
//   );
// };
// export default Hero;
// <div className="w-[70%] h-[40px] bg-white rounded-lg absoulte top-[100%] mx-auto"></div>



import search from "../assets/searchImg.png";
import mapImg from "../assets/mapImg.png";

const Hero = () => {
  return (
    <section className="w-full h-[80vh]  md:h-screen bg-hero-mobile md:bg-hero-desktop bg-contain md:bg-cover  bg-no-repeat ">
      <div className="md:relative h-[100%] flex item-start md:items-center justify-center md:justify-start">
        <div className="mt-[200px] hidden md:block">
          <h1 className="text-white ms-4  text-[120px] font-['Bebas_Neue'] leading-[40px] tracking-[4px]">
            Soccer pitch
          </h1>
          <h1 className="text-white ms-4  text-[120px] font-['Bebas_Neue']">
            Finder
          </h1>
        </div>
        <div className="mt-[200px] block md:hidden">
          <h1 className="text-white ms-4 text-[80px] font-['Bebas_Neue'] leading-[20px] tracking-[2px]">
            Soccer pitch
          </h1>
          <h1 className="text-white ms-4 text-[80px] font-['Bebas_Neue']  flex justify-center">
            FInder
          </h1>
        </div>

        {/* ── Desktop Search Bar: half outside bottom edge ── */}
        <div className="hidden md:flex justify-between w-[70%] h-[55px] bg-white rounded-full absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 shadow-lg z-20">
          {/* Left: Search icon + Input */}
          <div className="flex w-[60%] items-center gap-2 px-4">
            <img className="w-5 h-5" src={search} alt="searchImg" />
            <input
              type="text"
              placeholder="Find sites near a postcode, place or region"
              className="font-['Poppins'] text-sm text-[#091625] placeholder:text-[#091625] bg-transparent outline-none w-full"
            />
          </div>

          {/* Divider */}
          <div className="w-px h-[30px] bg-black/20 self-center" />

          {/* Right: Location */}
          <div className="flex w-[40%] items-center justify-center gap-2 px-4">
            <img className="w-5 h-5" src={mapImg} alt="mapImg" />
            <p className="text-[#1BA33E] font-['Poppins'] text-sm font-medium whitespace-nowrap">
              USE CURRENT LOCATION
            </p>
          </div>
        </div>

        {/* ── Mobile Search Bar: centered inside hero ── */}
        <div className="flex md:hidden justify-between w-[90%] h-[55px] bg-white rounded-full absolute top-[390px] left-1/2 -translate-x-1/2 shadow-lg z-20">
          {/* Search icon + Input */}
          <div className="flex w-full items-center gap-2 px-4">
            <img className="w-5 h-5" src={search} alt="searchImg" />
            <input
              type="text"
              placeholder="Find sites near a postcode, place or region"
              className="font-['Poppins'] text-sm text-[#091625] placeholder:text-[#091625] bg-transparent outline-none w-full"
            />
          </div>

          {/* Location icon only (no text) */}
          <div className="flex items-center pr-4">
            <img className="w-5 h-5" src={mapImg} alt="mapImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;














































































































// import search from "../assets/searchImg.png";
// import mapImg from "../assets/mapImg.png";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen bg-hero-mobile md:bg-hero-desktop bg-cover bg-no-repeat bg-center">

//       {/* ── Mobile Layout ── */}
//       <div className="flex md:hidden flex-col items-center pt-[180px]">
//         <h1 className="text-white text-[80px] font-['Bebas_Neue'] leading-[73px] tracking-[2px] text-center">
//           Soccer Pitch
//         </h1>
//         <h1 className="text-white text-[80px] font-['Bebas_Neue'] leading-[73px] tracking-[2px] text-center mb-6">
//           Finder
//         </h1>

//         {/* Mobile Search Bar: sits below title */}
//         <div className="flex justify-between w-[90%] h-[55px] bg-white rounded-full shadow-lg z-20">
//           <div className="flex w-full items-center gap-2 px-4">
//             <img className="w-5 h-5" src={search} alt="searchImg" />
//             <input
//               type="text"
//               placeholder="Find sites near a postcode, place or region"
//               className="font-['Poppins'] text-sm text-[#091625] placeholder:text-[#091625] bg-transparent outline-none w-full"
//             />
//           </div>
//           <div className="flex items-center pr-4">
//             <img className="w-5 h-5" src={mapImg} alt="mapImg" />
//           </div>
//         </div>
//       </div>

//       {/* ── Desktop Layout ── */}
//       <div className="hidden md:flex h-full items-center">
//         <div className="mt-[200px] ml-14">
//           <h1 className="text-white text-[120px] font-['Bebas_Neue'] leading-[140px] tracking-[4px]">
//             Soccer Pitch
//           </h1>
//           <h1 className="text-white text-[120px] font-['Bebas_Neue'] leading-[140px] tracking-[4px]">
//             Finder
//           </h1>
//         </div>
//       </div>

//       {/* Desktop Search Bar: half outside bottom */}
//       <div className="hidden md:flex justify-between w-[70%] h-[55px] bg-white rounded-full absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 shadow-lg z-20">
//         <div className="flex w-[60%] items-center gap-2 px-4">
//           <img className="w-5 h-5" src={search} alt="searchImg" />
//           <input
//             type="text"
//             placeholder="Find sites near a postcode, place or region"
//             className="font-['Poppins'] text-sm text-[#091625] placeholder:text-[#091625] bg-transparent outline-none w-full"
//           />
//         </div>
//         <div className="w-px h-[30px] bg-black/20 self-center" />
//         <div className="flex w-[40%] items-center justify-center gap-2 px-4">
//           <img className="w-5 h-5" src={mapImg} alt="mapImg" />
//           <p className="text-[#1BA33E] font-['Poppins'] text-sm font-medium whitespace-nowrap">
//             USE CURRENT LOCATION
//           </p>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Hero;



