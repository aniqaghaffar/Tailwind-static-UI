// import React from 'react';
// import Card1 from '../assets/Card1.png';
// import Card2 from '../assets/Card2.png';
// import Card3 from '../assets/Card3.png';

// const FeaturedCities = () => {
//   return (
//     <section className= " mt-0  md:mt-[120px] w-full bg-white">
     
//       <div className="max-w-[1380px] mx-auto px-10    ">
        
//         {/* Heading */}
//         <h2 className="text-[#091625]  text-[40px] md:text-[80px] font-normal  tracking-[2px] md:tracking-[4px] uppercase text-center mb-16" 
//             style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
//           Featured cities
//         </h2>

        
//         <div className="grid grid-cols-1  md:grid-cols-3 gap-[60px]">
          
         
//           {[
//             { img: Card1, city: "Austin, Texas" },
//             { img: Card2, city: "Charlotte, Carolina" },
//             { img: Card3, city: "Baltimore, Maryland" }
//           ].map((item, index) => (
//             <div key={index} className="flex flex-col border-none rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
//               {/* Image Container with Fixed Aspect Ratio */}
//               <div className="w-full aspect-[16/10]">
//                 <img 
//                   src={item.img} 
//                   alt={item.city} 
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Text Content Area */}
//               <div className="p-6 bg-[#E7E7E7] flex justify-between items-end  border-gray-50">
//                 <div>
//                   <h3 className="text-[#091625] font-bold text-[20px] uppercase leading-tight">
//                     {item.city}
//                   </h3>
//                   <p className="text-gray-400 text-[13px] mt-1.5">
//                     25 Soccer Fields
//                   </p>
//                 </div>
                
               
//                 <span className="bg-[#4ADE80] text-[#FFFFFF] text-[10px] font-bold p-[5px] rounded-sm uppercase whitespace-nowrap mb-[50px] mr-[3px]" >
//                   Popular Location
//                 </span>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCities;








// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// import Card1 from '../assets/Card1.png';
// import Card2 from '../assets/Card2.png';
// import Card3 from '../assets/Card3.png';

// const cities = [
//   { img: Card1, city: "Austin, Texas" },
//   { img: Card2, city: "Charlotte, Carolina" },
//   { img: Card3, city: "Baltimore, Maryland" },
// ];

// const CityCard = ({ img, city }) => (
//   <div className="flex flex-col border-none rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
//     <div className="w-full aspect-[16/10]">
//       <img src={img} alt={city} className="w-full h-full object-cover" />
//     </div>
//     <div className="p-6 bg-[#E7E7E7] flex justify-between items-end border-gray-50">
//       <div>
//         <h3 className="text-[#091625] font-bold text-[20px] uppercase leading-tight">
//           {city}
//         </h3>
//         <p className="text-gray-400 text-[13px] mt-1.5">25 Soccer Fields</p>
//       </div>
//       <span className="bg-[#4ADE80] text-[#FFFFFF] text-[10px] font-bold p-[5px] rounded-sm uppercase whitespace-nowrap mb-[50px] mr-[3px]">
//         Popular Location
//       </span>
//     </div>
//   </div>
// );

// const FeaturedCities = () => {
//   return (
//     <section className="mt-0 md:mt-[120px] w-full bg-white">
//       <div className="max-w-[1380px] mx-auto px-10">

//         {/* Heading */}
//         <h2
//           className="text-[#091625] text-[40px] md:text-[80px] font-normal tracking-[2px] md:tracking-[4px] uppercase text-center mb-16"
//           style={{ fontFamily: "'Bebas Neue', sans-serif" }}
//         >
//           Featured cities
//         </h2>

//         {/* Desktop — 3 grid cards */}
//         <div className="hidden md:grid md:grid-cols-3 gap-[60px]">
//           {cities.map((item, index) => (
//             <CityCard key={index} {...item} />
//           ))}
//         </div>

//         {/* Mobile — Swiper slider */}
//         <div className="block md:hidden pb-10">
//           <Swiper
//             modules={[Pagination]}
//             pagination={{ clickable: true }}
//             slidesPerView={1}
//             spaceBetween={20}
//             loop={true}
//           >
//             {cities.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <CityCard {...item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturedCities;







// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css/bundle';

// import Card1 from '../assets/Card1.png';
// import Card2 from '../assets/Card2.png';
// import Card3 from '../assets/Card3.png';

// const cities = [
//   { img: Card1, city: "Austin, Texas" },
//   { img: Card2, city: "Charlotte, Carolina" },
//   { img: Card3, city: "Baltimore, Maryland" },
// ];

// const CityCard = ({ img, city }) => (
//   <div className="flex flex-col border-none rounded-3xl shadow-lg overflow-hidden">
//     {/* Image */}
//     <div className="w-full aspect-[16/10]">
//       <img src={img} alt={city} className="w-full h-full object-cover" />
//     </div>

//     {/* Text Content */}
//     <div className="p-6 bg-[#E7E7E7]">
//       {/* City name + Badge same row mein */}
//       <div className="flex justify-between items-center">
//         <h3 className="text-[#091625] font-bold text-[20px] uppercase leading-tight">
//           {city}
//         </h3>
//         <span className="bg-[#1BA33E] text-[#FFFFFF] text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase whitespace-nowrap">
//           Popular Location
//         </span>
//       </div>

//       {/* Soccer Fields */}
//       <p className="text-gray-400 text-[13px] mt-1.5">25 Soccer Fields</p>
//     </div>
//   </div>
// );

// const FeaturedCities = () => {
//   return (
//     <section className="mt-0 md:mt-[120px] w-full bg-white">
//       <div className="max-w-[1380px] mx-auto px-10">

//         {/* Heading */}
//         <h2
//           className="text-[#091625] text-[40px] md:text-[80px] font-normal tracking-[2px] md:tracking-[4px] uppercase text-center mb-16"
//           style={{ fontFamily: "'Bebas Neue', sans-serif" }}
//         >
//           Featured cities
//         </h2>

//         {/* Desktop — 3 grid cards */}
//         <div className="hidden md:grid md:grid-cols-3 gap-[60px]">
//           {cities.map((item, index) => (
//             <CityCard key={index} {...item} />
//           ))}
//         </div>

//         {/* Mobile — Swiper slider */}
//         <div className="block md:hidden pb-10">
//           <Swiper
//             modules={[Pagination]}
//             pagination={{ clickable: true }}
//             slidesPerView={1}
//             spaceBetween={20}
//             loop={true}
//           >
//             {cities.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <CityCard {...item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturedCities;











// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css/bundle';

// import Card1 from '../assets/Card1.png';
// import Card2 from '../assets/Card2.png';
// import Card3 from '../assets/Card3.png';

// const cities = [
//   { img: Card1, city: "Austin, Texas" },
//   { img: Card2, city: "Charlotte, Carolina" },
//   { img: Card3, city: "Baltimore, Maryland" },
// ];

// const CityCard = ({ img, city }) => (
//   <div className="flex flex-col border-none rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
//     {/* Image */}
//     <div className="w-full aspect-[16/10]">
//       <img src={img} alt={city} className="w-full h-full object-cover" />
//     </div>

//     {/* Text Content */}
//     <div className="p-6 bg-[#E7E7E7] flex-1">
//       <div className="flex justify-between items-center">
//         <h3 className="text-[#091625] font-bold text-[20px] uppercase leading-tight">
//           {city}
//         </h3>
//         <span className="bg-[#4ADE80] text-[#FFFFFF] text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase whitespace-nowrap">
//           Popular Location
//         </span>
//       </div>
//       <p className="text-gray-400 text-[13px] mt-1.5">25 Soccer Fields</p>
//     </div>
//   </div>
// );

// const FeaturedCities = () => {
//   return (
//     <section className="mt-0 md:mt-[120px] w-full bg-white">
//       <div className="max-w-[1380px] mx-auto px-10">

//         {/* Heading */}
//         <h2
//           className="text-[#091625] text-[40px] md:text-[80px] font-normal tracking-[2px] md:tracking-[4px] uppercase text-center mb-16"
//           style={{ fontFamily: "'Bebas Neue', sans-serif" }}
//         >
//           Featured cities
//         </h2>

//         {/* Desktop — 3 grid cards */}
//         <div className="hidden md:grid md:grid-cols-3 gap-[60px] items-start">
//           {cities.map((item, index) => (
//             <CityCard key={index} {...item} />
//           ))}
//         </div>

//         {/* Mobile — Swiper slider */}
//         <div className="block md:hidden pb-10">
//           <Swiper
//             modules={[Pagination]}
//             pagination={{ clickable: true }}
//             slidesPerView={1}
//             spaceBetween={20}
//             loop={true}
//           >
//             {cities.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <CityCard {...item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturedCities;











// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css/bundle';

// import Card1 from '../assets/Card1.png';
// import Card2 from '../assets/Card2.png';
// import Card3 from '../assets/Card3.png';

// const cities = [
//   { img: Card1, city: "Austin, Texas" },
//   { img: Card2, city: "Charlotte, Carolina" },
//   { img: Card3, city: "Baltimore, Maryland" },
// ];

// const CityCard = ({ img, city }) => (
//   <div className="flex flex-col border-none rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
//     {/* Image */}
//     <div className="w-full aspect-[16/10]">
//       <img src={img} alt={city} className="w-full h-full object-cover" />
//     </div>

//     {/* Text Content */}
//     <div className="p-6 bg-[#E7E7E7] flex-1">
//       <div className="flex justify-between items-center gap-2">
//         <h3 className="text-[#091625] font-bold text-[16px] uppercase leading-tight">
//           {city}
//         </h3>
//         <span className="bg-[#1BA33E] text-[#FFFFFF] text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase whitespace-nowrap flex-shrink-0">
//           Popular Location
//         </span>
//       </div>
//       <p className="text-gray-400 text-[13px] mt-1.5">25 Soccer Fields</p>
//     </div>
//   </div>
// );

// const FeaturedCities = () => {
//   return (
//     <section className="mt-0 md:mt-[120px] w-full bg-white">
//       <div className="max-w-[1380px] mx-auto px-10">

//         {/* Heading */}
//         <h2
//           className="text-[#091625] text-[40px] md:text-[80px] font-normal tracking-[2px] md:tracking-[4px] uppercase text-center mb-16"
//           style={{ fontFamily: "'Bebas Neue', sans-serif" }}
//         >
//           Featured cities
//         </h2>

//         {/* Desktop — 3 grid cards */}
//         <div className="hidden md:grid md:grid-cols-3 gap-[60px]">
//           {cities.map((item, index) => (
//             <CityCard key={index} {...item} />
//           ))}
//         </div>

//         {/* Mobile — Swiper slider */}
//         <div className="block md:hidden pb-10">
//           <Swiper
//             modules={[Pagination]}
//             pagination={{ clickable: true }}
//             slidesPerView={1}
//             spaceBetween={20}
//             loop={true}
//           >
//             {cities.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <CityCard {...item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturedCities;






// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css/bundle';

// import Card1 from '../assets/Card1.png';
// import Card2 from '../assets/Card2.png';
// import Card3 from '../assets/Card3.png';

// const cities = [
//   { img: Card1, city: "Austin, Texas" },
//   { img: Card2, city: "Charlotte, Carolina" },
//   { img: Card3, city: "Baltimore, Maryland" },
// ];

// const CityCard = ({ img, city }) => (
//   <div className="flex flex-col border-none rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
//     {/* Image */}
//     <div className="w-full aspect-[16/10]">
//       <img src={img} alt={city} className="w-full h-full object-cover" />
//     </div>

//     {/* Text Content */}
//     <div className="p-6 bg-[#E7E7E7] flex-1">
//       <div className="flex justify-between items-center gap-2">
//         <h3 className="text-[#091625] font-bold text-[16px] uppercase leading-tight">
//           {city}
//         </h3>
//         <span className="bg-[#1BA33E] text-[#FFFFFF] text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase whitespace-nowrap flex-shrink-0">
//           Popular Location
//         </span>
//       </div>
//       <p className="text-[#091625] text-[13px] mt-1.5">25 Soccer Fields</p>
//     </div>
//   </div>
// );

// const FeaturedCities = () => {
//   return (
//     <section className="mt-0 md:mt-[120px] w-full bg-white">
//       <div className="max-w-[1380px] mx-auto px-10">

//         {/* Heading */}
//         <h2
//           className="text-[#091625] text-[40px] md:text-[80px] font-normal tracking-[2px] md:tracking-[4px] uppercase text-center mb-16"
//           style={{ fontFamily: "'Bebas Neue', sans-serif" }}
//         >
//           Featured cities
//         </h2>

//         {/* Desktop — 3 grid cards */}
//         <div className="hidden md:grid md:grid-cols-3 gap-[60px]">
//           {cities.map((item, index) => (
//             <CityCard key={index} {...item} />
//           ))}
//         </div>

//         {/* Mobile — Swiper slider */}
//         <div className="block md:hidden">
//           <Swiper
//             modules={[Pagination]}
//             pagination={{ clickable: true }}
//             slidesPerView={1}
//             spaceBetween={20}
//             loop={true}
//             className="pb-10"
//           >
//             {cities.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <CityCard {...item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//       </div>

//       {/* Swiper dots custom styling */}
//       <style>{`
//         .swiper-pagination-bullet {
//           width: 10px;
//           height: 10px;
//           background: #1BA33E;
//           opacity: 1;
//         }
//         .swiper-pagination-bullet-active {
//           background: #1BA33E;
//           width: 24px;
//           border-radius: 5px;
//         }
//       `}</style>

//     </section>
//   );
// };

// export default FeaturedCities;






import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

import Card1 from '../assets/Card1.png';
import Card2 from '../assets/Card2.png';
import Card3 from '../assets/Card3.png';

const cities = [
  { img: Card1, city: "Austin, Texas" },
  { img: Card2, city: "Charlotte, Carolina" },
  { img: Card3, city: "Baltimore, Maryland" },
];

const CityCard = ({ img, city }) => (
  <div className="flex flex-col border-none rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    {/* Image */}
    <div className="w-full aspect-[16/10]">
      <img src={img} alt={city} className="w-full h-full object-cover" />
    </div>

    {/* Text Content */}
    <div className="p-6 bg-[#E7E7E7] flex-1">
      <div className="flex justify-between items-center gap-2">
        <h3 className="text-[#091625] font-bold text-[16px] uppercase leading-tight">
          {city}
        </h3>
        <span className="bg-[#1BA33E] text-[#FFFFFF] text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase whitespace-nowrap flex-shrink-0">
          Popular Location
        </span>
      </div>
      <p className="text-[#091625] text-[13px] mt-1.5">25 Soccer Fields</p>
    </div>
  </div>
);

const FeaturedCities = () => {
  return (
    <section className="mt-0 md:mt-[120px] w-full bg-white">
      <div className="max-w-[1380px] mx-auto px-10">

        {/* Heading */}
        <h2
          className="text-[#091625] text-[40px] md:text-[80px] font-normal tracking-[2px] md:tracking-[4px] uppercase text-center mb-16"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Featured cities
        </h2>

        {/* Desktop — 3 grid cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-[60px] ">
          {cities.map((item, index) => (
            <CityCard key={index} {...item} />
          ))}
        </div>

        {/* Mobile — Swiper slider */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, el: '.cities-pagination' }}
            slidesPerView={1}
            spaceBetween={20}          
            loop={true}
          >
            {cities.map((item, index) => (
              <SwiperSlide key={index}>
                <CityCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="cities-pagination flex justify-center mt-4  " />
        </div>

      </div>

      {/* Swiper dots custom styling */}
      <style>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #C3C3C3;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #1BA33E;
          width: 24px;
          border-radius: 5px;
        }
      `}</style>

    </section>
  );
};

export default FeaturedCities;


