import React from 'react';
import Card1 from '../assets/Card1.png';
import Card2 from '../assets/Card2.png';
import Card3 from '../assets/Card3.png';

const FeaturedCities = () => {
  return (
    <section className="py-20 w-full bg-white">
     
      <div className="max-w-[1380px] mx-auto px-10">
        
        {/* Heading */}
        <h2 className="text-[#091625] text-[80px] font-normal tracking-[4px] uppercase text-center mb-16" 
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Featured cities
        </h2>

        
        <div className="grid grid-cols-3 gap-[60px]">
          
         
          {[
            { img: Card1, city: "Austin, Texas" },
            { img: Card2, city: "Charlotte, Carolina" },
            { img: Card3, city: "Baltimore, Maryland" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col border-none rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="w-full aspect-[16/10]">
                <img 
                  src={item.img} 
                  alt={item.city} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content Area */}
              <div className="p-6 bg-[#E7E7E7] flex justify-between items-end border-t border-gray-50">
                <div>
                  <h3 className="text-[#091625] font-bold text-[20px] uppercase leading-tight">
                    {item.city}
                  </h3>
                  <p className="text-gray-400 text-[13px] mt-1.5">
                    25 Soccer Fields
                  </p>
                </div>
                
               
                <span className="bg-[#4ADE80] text-[#FFFFFF] text-[10px] font-bold p-[5px] rounded-sm uppercase whitespace-nowrap mb-[50px] mr-[3px]" >
                  Popular Location
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedCities;