
import React from "react";
import heroBg from "../assets/Background.png";
import playerImg from "../assets/Player.png";
import footballImg from "../assets/Football.png";

const Hero = () => {
  return (
    <section

      className="relative w-full h-[939px] bg-cover bg-center overflow-visible"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      
      <div className="absolute inset-0 bg-black/20"></div>

     
      <img
        src={playerImg}
        alt="Main Player"
        className="absolute z-20 object-contain w-[1134px] h-[710px] top-[145px] left-[731px]"
      />

   
      <img
        src={footballImg}
        alt="Football"
        className="absolute z-30 object-contain w-[249px] h-[217px] top-[238px] left-[628px]"
      />

      <h1 
        className="absolute z-40 text-[#FFFFFF] uppercase font-['Bebas_Neue'] 
                   w-[893px] h-[280px] top-[413px] left-[56px] 
                   text-[168px] leading-[140px] tracking-[4px] font-normal"
      >
        SOCCER PITCH <br /> FINDER
      </h1>

      
      <div 
        
        className="absolute left-1/2 -translate-x-1/2 -bottom-[54px] z-[100] 
                   bg-[#FFFFFF] rounded-full flex items-center shadow-2xl
                   w-[1392px] h-[109px] border border-gray-100 overflow-hidden"
      >
        
        <div className="flex items-center flex-1 px-10 gap-5">
          <span className="text-3xl text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Find sites near a postcode, place or region"
            className="w-full bg-transparent border-none outline-none text-[#091625] font-['Poppins'] 
                       text-[22px] font-normal placeholder:text-[#091625]/40"
          />
        </div>

        
        <div className="w-[1.5px] h-[60px] bg-[#000000] opacity-10"></div>

       
        <button 
          className="flex items-center justify-center gap-3 px-10 whitespace-nowrap 
                     hover:opacity-80 transition-all font-['Poppins'] text-[22px] 
                     font-normal text-[#1BA33E] border-none outline-none bg-white"
        >
          <span className="text-3xl bg-[#FFFFFF] ">📍</span>
          <span className="tracking-wide  bg-[#FFFFFF] border-none outline-none">USE CURRENT LOCATION</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;