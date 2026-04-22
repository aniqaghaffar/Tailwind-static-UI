
import React from 'react';
import ServicesBg from '../assets/Servicesbg.png'; 
import LocateIcon from '../assets/Locate.png'; 
import SearchIcon from '../assets/Search.png';
import PlayIcon from '../assets/Play.png';

const Services = () => {
  return (
    <section 
      className="relative w-full min-h-[672px] bg-none flex items-center justify-center py-20 px-6"
      style={{ 
        backgroundImage: `url(${ServicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply' 
      }}
    >
      <div className="max-w-[1440px] mx-auto text-center text-[#FFFFFF] relative z-10">
        
        {/* Main Heading: Figma 70px, White, 4px letter spacing */}
        <div className="mb-[60px]">
          <h2 className="text-[#FFFFFF] text-[45px] md:text-[70px] font-normal leading-[100%] tracking-[4px] uppercase" 
              style={{ fontFamily: "Bebas Neue" }}>
            The Largest Database of Football <br className="hidden md:block" /> Pitches in USA
          </h2>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-3 gap-[30px]">
          
          {/* Locate Card */}
          <div className="bg-[#FFFFFF1A] backdrop-blur-[10px] min-h-[264px] w-full md:w-[450px] flex flex-col items-center justify-center p-8 outline-none border-none rounded-xl transition-all hover:bg-white/20">
            <div className="mb-6 ]">
              <img src={LocateIcon} alt="Locate" className="w-[50px] h-[50px] object-contain  pt-[5px]" />
            </div>
            <h3 className="text-[#FFFFFF] text-[40px] font-normal uppercase tracking-[2px] mb-2" style={{ fontFamily: "Bebas Neue" }}>
              LOCATE
            </h3>
            <p className="text-[#FFFFFF] text-[22px] font-normal leading-[33px] tracking-[2px] max-w-[375px]" style={{ fontFamily: "Poppins" }}>
              Find your nearest football pitch
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-[#FFFFFF1A] backdrop-blur-[10px] min-h-[264px] w-full md:w-[450px] flex flex-col items-center justify-center p-8  outline-none border-none rounded-xl transition-all hover:bg-white/20">
            <div className="mb-6">
              <img src={SearchIcon} alt="Search" className="w-[50px] h-[50px] object-contain" />
            </div>
            <h3 className="text-[#FFFFFF] text-[40px] font-normal uppercase tracking-[2px] mb-2" style={{ fontFamily: "Bebas Neue" }}>
              SEARCH
            </h3>
            <p className="text-[#FFFFFF] text-[22px] font-normal leading-[33px] tracking-[2px] max-w-[375px]" style={{ fontFamily: "Poppins" }}>
              Explore the different facilities found at the site
            </p>
          </div>

          {/* Play Card */}
          <div className="bg-[#FFFFFF1A] backdrop-blur-[10px] min-h-[264px] w-full md:w-[450px] flex flex-col items-center justify-center p-8  outline-none border-none rounded-xl transition-all hover:bg-white/20">
            <div className="mb-6">
              <img src={PlayIcon} alt="Play" className="w-[50px] h-[50px] object-contain" />
            </div>
            <h3 className="text-[#FFFFFF] text-[40px] font-normal uppercase tracking-[2px] mb-2" style={{ fontFamily: "Bebas Neue" }}>
              PLAY
            </h3>
            <p className="text-[#FFFFFF] text-[22px] font-normal leading-[33px] tracking-[2px] max-w-[375px]" style={{ fontFamily: "Poppins" }}>
              Learn how to book a slot and secure your pitch
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;

