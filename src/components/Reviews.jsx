
import React from 'react';
// Assets Imports
import Feedback1 from '../assets/Feedback1.png';
import Feedback2 from '../assets/Feedback2.png';
import StarRating from '../assets/StarRating.png';

const Reviews = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-[100px] px-6">
      <div className="max-w-[1440px] mx-auto">
        
     
        <div className="text-center mb-[80px]">
          <h2 className="text-[#000000] text-[80px] font-normal leading-[100%] tracking-[4px] uppercase" 
              style={{ fontFamily: "Bebas Neue" }}>
            WHAT OUR PLAYER SAYS
          </h2>
        </div>

      
        <div className="grid grid-cols-2 gap-[150px] max-w-[1500px] mx-auto">
          
          {/* Card 1 */}
          <div className="w-full md:w-[645px] border-[1px] border-[#D1D1D1] rounded-[20px] p-[40px] relative">
            <div className="flex items-center gap-4 mb-4">
            
              <img src={Feedback1} alt="James L." className="w-[76px] h-[76px] rounded-full object-cover" />
              
              <div>
                
                <h4 className="text-[#000000] text-[50px] font-bold leading-[100%] uppercase" 
                    style={{ fontFamily: "Bebas Neue" }}>
                  JAMES L.
                </h4>
           
                <p className="text-[#666666] text-[20px] font-light" style={{ fontFamily: "Poppins" }}>
                  10-June-2020
                </p>
              </div>
            </div>

           
            <div className="mb-4">
              <img src={StarRating} alt="Rating" className="w-[198px] h-[33px] object-contain" />
            </div>

         
            <p className="text-[#333333] text-[20px] leading-[33px] font-light italic mb-6" style={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed
            </p>

            
            <p className="text-[#009A3A] text-[20px] font-medium uppercase" style={{ fontFamily: "Poppins" }}>
              —AUSTIN STADIUM
            </p>
          </div>

          <div className="w-full md:w-[645px] border-[1px] border-[#D1D1D1] rounded-[20px] p-[40px] relative">
            <div className="flex items-center gap-4 mb-4">
              <img src={Feedback2} alt="James L." className="w-[76px] h-[76px] rounded-full object-cover" />
              <div>
                <h4 className="text-[#000000] text-[50px] font-bold leading-[100%] uppercase" style={{ fontFamily: "Bebas Neue" }}>
                  JAMES L.
                </h4>
                <p className="text-[#666666] text-[20px] font-light" style={{ fontFamily: "Poppins" }}>
                  10-June-2020
                </p>
              </div>
            </div>
            <div className="mb-4">
              <img src={StarRating} alt="Rating" className="w-[198px] h-[33px] object-contain" />
            </div>
            <p className="text-[#333333] text-[20px] leading-[33px] font-light italic mb-6" style={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed
            </p>
            <p className="text-[#009A3A] text-[20px] font-medium uppercase" style={{ fontFamily: "Poppins" }}>
              —AUSTIN STADIUM
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;