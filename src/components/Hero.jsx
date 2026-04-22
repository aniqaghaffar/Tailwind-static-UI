import React from "react";
import heroBg from "../assets/Background.png";
import playerImg from "../assets/Player.png";
import footballImg from "../assets/Football.png";
import locationBarImg from "../assets/locationbar.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[939px] bg-cover bg-center overflow-visible"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main Player Image - Positioned exactly as per your layout */}
      <img
        src={playerImg}
        alt="Main Player"
        className="absolute z-20 object-contain w-[1134px] h-[710px] top-[145px] left-[731px]"
      />

      {/* Football Image - Positioned with higher Z-index */}
      <img
        src={footballImg}
        alt="Football"
        className="absolute z-30 object-contain w-[249px] h-[217px] top-[238px] left-[628px]"
      />

      {/* Hero Heading - Bebas Neue Font */}
      <h1 
        className="absolute z-40 text-[#FFFFFF] uppercase font-['Bebas_Neue'] 
                   w-[893px] h-[280px] top-[413px] left-[56px] 
                   text-[168px] leading-[140px] tracking-[4px] font-normal"
      >
        SOCCER PITCH <br /> FINDER
      </h1>

      {/* Location Bar Image Implementation */}
      {/* Positioned half-up and half-down at the bottom border using -bottom-[54px] */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-[54px] z-[100] w-[1392px]">
        <img 
          src={locationBarImg} 
          alt="Location Search Bar" 
          className="w-full h-auto drop-shadow-2xl"
        />
        
      
      </div>
    </section>
  );
};

export default Hero;



