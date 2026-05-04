
// // import React from 'react';
// // // Assets Imports
// // import Feedback1 from '../assets/Feedback1.png';
// // import Feedback2 from '../assets/Feedback2.png';
// // import StarRating from '../assets/StarRating.png';

// // const Reviews = () => {
// //   return (
// //     <section className="w-full bg-[#FFFFFF] py-[100px] px-6">
// //       <div className="max-w-[1440px] mx-auto">
        
     
// //         <div className="text-center mb-[80px]">
// //           <h2 className="text-[#000000] text-[80px] font-normal leading-[100%] tracking-[4px] uppercase" 
// //               style={{ fontFamily: "Bebas Neue" }}>
// //             WHAT OUR PLAYER SAYS
// //           </h2>
// //         </div>

      
// //         <div className="flex flex-cols-2 gap-[10px] max-w-[1500px] mx-auto overflow-none">
          
// //           {/* Card 1 */}
// //           <div className="w-full md:w-[645px] border-[1px] border-[#D1D1D1] rounded-[20px] p-[40px] relative">
// //             <div className="flex items-center gap-4 mb-4">
            
// //               <img src={Feedback1} alt="James L." className="w-[76px] h-[76px] rounded-full object-cover" />
              
// //               <div>
                
// //                 <h4 className="text-[#000000] text-[50px] font-bold leading-[100%] uppercase" 
// //                     style={{ fontFamily: "Bebas Neue" }}>
// //                   JAMES L.
// //                 </h4>
           
// //                 <p className="text-[#666666] text-[20px] font-light" style={{ fontFamily: "Poppins" }}>
// //                   10-June-2020
// //                 </p>
// //               </div>
// //             </div>

           
// //             <div className="mb-4">
// //               <img src={StarRating} alt="Rating" className="w-[198px] h-[33px] object-contain" />
// //             </div>

         
// //             <p className="text-[#333333] text-[20px] leading-[33px] font-light italic mb-6" style={{ fontFamily: "Poppins" }}>
// //               Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed
// //             </p>

            
// //             <p className="text-[#009A3A] text-[20px] font-medium uppercase" style={{ fontFamily: "Poppins" }}>
// //               —AUSTIN STADIUM
// //             </p>
// //           </div>

// //           <div className="w-full md:w-[645px] border-[1px] border-[#D1D1D1] rounded-[20px] p-[40px] relative">
// //             <div className="flex items-center gap-4 mb-4">
// //               <img src={Feedback2} alt="James L." className="w-[76px] h-[76px] rounded-full object-cover" />
// //               <div>
// //                 <h4 className="text-[#000000] text-[50px] font-bold leading-[100%] uppercase" style={{ fontFamily: "Bebas Neue" }}>
// //                   JAMES L.
// //                 </h4>
// //                 <p className="text-[#666666] text-[20px] font-light" style={{ fontFamily: "Poppins" }}>
// //                   10-June-2020
// //                 </p>
// //               </div>
// //             </div>
// //             <div className="mb-4">
// //               <img src={StarRating} alt="Rating" className="w-[198px] h-[33px] object-contain" />
// //             </div>
// //             <p className="text-[#333333] text-[20px] leading-[33px] font-light italic mb-6" style={{ fontFamily: "Poppins" }}>
// //               Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed
// //             </p>
// //             <p className="text-[#009A3A] text-[20px] font-medium uppercase" style={{ fontFamily: "Poppins" }}>
// //               —AUSTIN STADIUM
// //             </p>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Reviews;






// //  import React from 'react';
// // // Assets Imports
// // import Feedback1 from '../assets/Feedback1.png';
// // import Feedback2 from '../assets/Feedback2.png';
// // import StarRating from '../assets/StarRating.png';

// // const Reviews = () => {
// //   return (
// //     <section className="w-full bg-[#FFFFFF] py-[50px] md:py-[100px] px-4 md:px-6">
// //       <div className="max-w-[1440px] mx-auto">
        
// //         {/* Section Title */}
// //         <div className="text-center mb-[40px] md:mb-[80px]">
// //           <h2 className="text-[#000000] text-[40px] md:text-[80px] font-normal leading-[100%] tracking-[2px] md:tracking-[4px] uppercase" 
// //               style={{ fontFamily: "Bebas Neue" }}>
// //             WHAT OUR PLAYER SAYS
// //           </h2>
// //         </div>

// //         {/* Cards Container - Single column on mobile, 2 columns on desktop */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[10px] max-w-[1300px] mx-auto">
          
// //           {/* Card 1 */}
// //           <div className="w-full border-[1px] border-[#D1D1D1] rounded-[20px] p-[24px] md:p-[40px]">
// //             <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
// //               {/* Profile Image */}
// //               <img src={Feedback1} alt="James L." className="w-[52px] h-[52px] md:w-[76px] md:h-[76px] rounded-full object-cover" />
              
// //               <div>
// //                 {/* Name */}
// //                 <h4 className="text-[#000000] text-[32px] md:text-[50px] font-bold leading-[100%] uppercase" 
// //                     style={{ fontFamily: "Bebas Neue" }}>
// //                   JAMES L.
// //                 </h4>
// //                 {/* Date */}
// //                 <p className="text-[#666666] text-[14px] md:text-[20px] font-light" style={{ fontFamily: "Poppins" }}>
// //                   10-June-2020
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Star Rating */}
// //             <div className="mb-3 md:mb-4">
// //               <img src={StarRating} alt="Rating" className="w-[119px] h-[19px] md:w-[198px] md:h-[33px] object-contain" />
// //             </div>

// //             {/* Testimonial Text */}
// //             <p className="text-[#333333] text-[14px] md:text-[20px] leading-[24px] md:leading-[33px] font-light italic mb-4 md:mb-6" 
// //                style={{ fontFamily: "Poppins" }}>
// //               Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed
// //             </p>

// //             {/* Location */}
// //             <p className="text-[#009A3A] text-[14px] md:text-[20px] font-medium uppercase" style={{ fontFamily: "Poppins" }}>
// //               —AUSTIN STADIUM
// //             </p>
// //           </div>

// //           {/* Card 2 */}
// //           <div className="w-full border-[1px] border-[#D1D1D1] rounded-[20px] p-[24px] md:p-[40px]">
// //             <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
// //               {/* Profile Image */}
// //               <img src={Feedback2} alt="James L." className="w-[52px] h-[52px] md:w-[76px] md:h-[76px] rounded-full object-cover" />
              
// //               <div>
// //                 {/* Name */}
// //                 <h4 className="text-[#000000] text-[32px] md:text-[50px] font-bold leading-[100%] uppercase" 
// //                     style={{ fontFamily: "Bebas Neue" }}>
// //                   JAMES L.
// //                 </h4>
// //                 {/* Date */}
// //                 <p className="text-[#666666] text-[14px] md:text-[20px] font-light" style={{ fontFamily: "Poppins" }}>
// //                   10-June-2020
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Star Rating */}
// //             <div className="mb-3 md:mb-4">
// //               <img src={StarRating} alt="Rating" className="w-[119px] h-[19px] md:w-[198px] md:h-[33px] object-contain" />
// //             </div>

// //             {/* Testimonial Text */}
// //             <p className="text-[#333333] text-[14px] md:text-[20px] leading-[24px] md:leading-[33px] font-light italic mb-4 md:mb-6" 
// //                style={{ fontFamily: "Poppins" }}>
// //               Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed
// //             </p>

// //             {/* Location */}
// //             <p className="text-[#009A3A] text-[14px] md:text-[20px] font-medium uppercase" style={{ fontFamily: "Poppins" }}>
// //               —AUSTIN STADIUM
// //             </p>
// //           </div>

// //         </div>

// //         {/* Navigation Dots */}
// //         <div className="flex justify-center items-center gap-2 mt-[40px] md:hidden">
// //           <div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-[#009A3A]"></div>
// //           <div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-[#D1D1D1]"></div>
// //           <div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-[#D1D1D1]"></div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default Reviews;












// import React from 'react';
// // Assets Imports
// import Feedback1 from '../assets/Feedback1.png';
// import Feedback2 from '../assets/Feedback2.png';
// import StarRating from '../assets/StarRating.png';

// const Reviews = () => {
//   return (
//     <section className="w-full bg-[#FFFFFF] py-[50px] md:py-[100px] px-4 md:px-6">
//       <div className="max-w-[1440px] mx-auto">
        
//         {/* Section Title */}
//         <div className="text-center mb-[40px] md:mb-[80px]">
//           <h2 className="text-[#000000] text-[40px] md:text-[80px] font-normal leading-[100%] tracking-[2px] md:tracking-[4px] uppercase" 
//               style={{ fontFamily: "Bebas Neue" }}>
//             WHAT OUR PLAYER SAYS
//           </h2>
//         </div>

//         {/* Cards Container - Desktop: 2 columns side by side */}
//         <div className="flex flex-col md:flex-row md:justify-center gap-[20px] md:gap-[10px] max-w-[1300px] mx-auto">
          
//           {/* Card 1 - Always visible */}
//           <div className="w-full md:w-[645px] border-[1px] border-[#D1D1D1] rounded-[20px] p-[24px] md:p-[40px] mx-auto">
//             <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
//               {/* Profile Image */}
//               <img src={Feedback1} alt="James L." className="w-[52px] h-[52px] md:w-[76px] md:h-[76px] rounded-full object-cover" />
              
//               <div>
//                 {/* Name */}
//                 <h4 className="text-[#000000] text-[32px] md:text-[50px] font-bold leading-[100%] uppercase" 
//                     style={{ fontFamily: "Bebas Neue" }}>
//                   JAMES L.
//                 </h4>
//                 {/* Date */}
//                 <p className="text-[#666666] text-[14px] md:text-[20px] font-light" style={{ fontFamily: "Poppins" }}>
//                   10-June-2020
//                 </p>
//               </div>
//             </div>

//             {/* Star Rating */}
//             <div className="mb-3 md:mb-4">
//               <img src={StarRating} alt="Rating" className="w-[119px] h-[19px] md:w-[198px] md:h-[33px] object-contain" />
//             </div>

//             {/* Testimonial Text */}
//             <p className="text-[#333333] text-[14px] md:text-[20px] leading-[24px] md:leading-[33px] font-light italic mb-4 md:mb-6" 
//                style={{ fontFamily: "Poppins" }}>
//               Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed
//             </p>

//             {/* Location */}
//             <p className="text-[#009A3A] text-[14px] md:text-[20px] font-medium uppercase" style={{ fontFamily: "Poppins" }}>
//               —AUSTIN STADIUM
//             </p>
//           </div>

//           {/* Card 2 - Hidden on mobile, visible on desktop */}
//           <div className="hidden md:block w-full md:w-[645px] border-[1px] border-[#D1D1D1] rounded-[20px] p-[24px] md:p-[40px]">
//             <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
//               {/* Profile Image */}
//               <img src={Feedback2} alt="James L." className="w-[52px] h-[52px] md:w-[76px] md:h-[76px] rounded-full object-cover" />
              
//               <div>
//                 {/* Name */}
//                 <h4 className="text-[#000000] text-[32px] md:text-[50px] font-bold leading-[100%] uppercase" 
//                     style={{ fontFamily: "Bebas Neue" }}>
//                   JAMES L.
//                 </h4>
//                 {/* Date */}
//                 <p className="text-[#666666] text-[14px] md:text-[20px] font-light" style={{ fontFamily: "Poppins" }}>
//                   10-June-2020
//                 </p>
//               </div>
//             </div>

//             {/* Star Rating */}
//             <div className="mb-3 md:mb-4">
//               <img src={StarRating} alt="Rating" className="w-[119px] h-[19px] md:w-[198px] md:h-[33px] object-contain" />
//             </div>

//             {/* Testimonial Text */}
//             <p className="text-[#333333] text-[14px] md:text-[20px] leading-[24px] md:leading-[33px] font-light italic mb-4 md:mb-6" 
//                style={{ fontFamily: "Poppins" }}>
//               Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed
//             </p>

//             {/* Location */}
//             <p className="text-[#009A3A] text-[14px] md:text-[20px] font-medium uppercase" style={{ fontFamily: "Poppins" }}>
//               —AUSTIN STADIUM
//             </p>
//           </div>

//         </div>

//         {/* Navigation Dots */}
//         <div className="flex justify-center items-center gap-2 mt-[40px] md:mt-[60px]">
//           <div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-[#009A3A]"></div>
//           <div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-[#D1D1D1]"></div>
//           <div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-[#D1D1D1]"></div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Reviews;






// import React from 'react';
// // Assets Imports
// import Feedback1 from '../assets/Feedback1.png';
// import Feedback2 from '../assets/Feedback2.png';
// import StarRating from '../assets/StarRating.png';

// const Reviews = () => {
//   return (
//     <section className="w-full bg-[#FFFFFF] py-[50px] md:py-[100px] px-4 md:px-6">
//       <div className="max-w-[1440px] mx-auto">
        
//         {/* Section Title */}
//         <div className="text-center mb-[40px] md:mb-[80px]">
//           <h2 className="text-[#000000] text-[40px] md:text-[80px] font-normal leading-[100%] tracking-[2px] md:tracking-[4px] uppercase" 
//               style={{ fontFamily: "Bebas Neue" }}>
//             WHAT OUR PLAYER SAYS
//           </h2>
//         </div>

//         {/* Cards Container - Using CSS Grid for better control */}
//         <div className="flex flex-cols-1 md:flex-cols-2 gap-[30px] md:gap-[20px] max-w-[1300px] mx-auto place-items-center  justify-center">
          
//           {/* Card 1 */}
//           <div className="w-full max-w-[400px] md:max-w-none border-[1px] border-[#D1D1D1] rounded-[20px] p-[30px] md:p-[40px]">
//             <div className="flex items-center gap-4 mb-4">
//               {/* Profile Image */}
//               <img src={Feedback1} alt="James L." className="w-[60px] h-[60px] md:w-[76px] md:h-[76px] rounded-full object-cover" />
              
//               <div>
//                 {/* Name */}
//                 <h4 className="text-[#000000] text-[36px] md:text-[50px] font-bold leading-[100%] uppercase" 
//                     style={{ fontFamily: "Bebas Neue" }}>
//                   JAMES L.
//                 </h4>
//                 {/* Date */}
//                 <p className="text-[#666666] text-[16px] md:text-[20px] font-light mt-1" 
//                    style={{ fontFamily: "Poppins" }}>
//                   10-June-2020
//                 </p>
//               </div>
//             </div>

//             {/* Star Rating */}
//             <div className="mb-4">
//               <img src={StarRating} alt="Rating" className="w-[150px] h-[25px] md:w-[198px] md:h-[33px] object-contain" />
//             </div>

//             {/* Testimonial Text */}
//             <p className="text-[#333333] text-[16px] md:text-[20px] leading-[26px] md:leading-[33px] font-light italic mb-4 md:mb-6" 
//                style={{ fontFamily: "Poppins" }}>
//               Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed
//             </p>

//             {/* Location */}
//             <p className="text-[#009A3A] text-[16px] md:text-[20px] font-medium uppercase" 
//                style={{ fontFamily: "Poppins" }}>
//               —AUSTIN STADIUM
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="w-full max-w-[400px] md:max-w-none border-[1px] border-[#D1D1D1] rounded-[20px] p-[30px] md:p-[40px]">
//             <div className="flex items-center gap-4 mb-4">
//               {/* Profile Image */}
//               <img src={Feedback2} alt="James L." className="w-[60px] h-[60px] md:w-[76px] md:h-[76px] rounded-full object-cover" />
              
//               <div>
//                 {/* Name */}
//                 <h4 className="text-[#000000] text-[36px] md:text-[50px] font-bold leading-[100%] uppercase" 
//                     style={{ fontFamily: "Bebas Neue" }}>
//                   JAMES L.
//                 </h4>
//                 {/* Date */}
//                 <p className="text-[#666666] text-[16px] md:text-[20px] font-light mt-1" 
//                    style={{ fontFamily: "Poppins" }}>
//                   10-June-2020
//                 </p>
//               </div>
//             </div>

//             {/* Star Rating */}
//             <div className="mb-4">
//               <img src={StarRating} alt="Rating" className="w-[150px] h-[25px] md:w-[198px] md:h-[33px] object-contain" />
//             </div>

//             {/* Testimonial Text */}
//             <p className="text-[#333333] text-[16px] md:text-[20px] leading-[26px] md:leading-[33px] font-light italic mb-4 md:mb-6" 
//                style={{ fontFamily: "Poppins" }}>
//               Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed
//             </p>

//             {/* Location */}
//             <p className="text-[#009A3A] text-[16px] md:text-[20px] font-medium uppercase" 
//                style={{ fontFamily: "Poppins" }}>
//               —AUSTIN STADIUM
//             </p>
//           </div>

//         </div>


//       </div>
//     </section>
//   );
// };

// export default Reviews;












// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css/bundle';

// import Feedback1 from '../assets/Feedback1.png';
// import Feedback2 from '../assets/Feedback2.png';
// import StarRating from '../assets/StarRating.png';

// const reviews = [
//   {
//     img: Feedback1,
//     name: "JAMES L.",
//     date: "10-June-2020",
//     text: "Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed",
//     location: "—AUSTIN STADIUM",
//   },
//   {
//     img: Feedback2,
//     name: "JAMES L.",
//     date: "10-June-2020",
//     text: "Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed",
//     location: "—AUSTIN STADIUM",
//   },
// ];

// const ReviewCard = ({ img, name, date, text, location }) => (
//   <div className="w-full border-[1px] border-[#262F3E] rounded-[20px] p-[30px] md:p-[40px]">
//     {/* Profile */}
//     <div className="flex items-center gap-4 mb-4">
//       <img src={img} alt={name} className="w-[60px] h-[60px] md:w-[76px] md:h-[76px] rounded-full object-cover" />
//       <div>
//         <h4
//           className="text-[#000000] text-[36px] md:text-[50px] font-bold leading-[100%] uppercase"
//           style={{ fontFamily: "Bebas Neue" }}
//         >
//           {name}
//         </h4>
//         <p
//           className="text-[#666666] text-[16px] md:text-[20px] font-light mt-1"
//           style={{ fontFamily: "Poppins" }}
//         >
//           {date}
//         </p>
//       </div>
//     </div>

//     {/* Star Rating */}
//     <div className="mb-4">
//       <img src={StarRating} alt="Rating" className="w-[150px] h-[25px] md:w-[198px] md:h-[33px] object-contain" />
//     </div>

//     {/* Text */}
//     <p
//       className="text-[#333333] text-[16px] md:text-[20px] leading-[26px] md:leading-[33px] font-light italic mb-4 md:mb-6"
//       style={{ fontFamily: "Poppins" }}
//     >
//       {text}
//     </p>

//     {/* Location */}
//     <p
//       className="text-[#009A3A] text-[16px] md:text-[20px] font-medium uppercase"
//       style={{ fontFamily: "Poppins" }}
//     >
//       {location}
//     </p>
//   </div>
// );

// const Reviews = () => {
//   return (
//     <section className="w-full bg-[#FFFFFF] py-[50px] md:py-[100px] px-4 md:px-6">
//       <div className="max-w-[1440px] mx-auto">

//         {/* Section Title */}
//         <div className="text-center mb-[40px] md:mb-[80px]">
//           <h2
//             className="text-[#000000] text-[40px] md:text-[80px] font-normal leading-[100%] tracking-[2px] md:tracking-[4px] uppercase"
//             style={{ fontFamily: "Bebas Neue" }}
//           >
//             WHAT OUR PLAYER SAYS
//           </h2>
//         </div>

//         {/* Desktop — 2 cards side by side */}
//         <div className="hidden md:grid md:grid-cols-2 gap-[20px] max-w-[1300px] mx-auto">
//           {reviews.map((review, index) => (
//             <ReviewCard key={index} {...review} />
//           ))}
//         </div>

//         {/* Mobile — Swiper */}
//         <div className="block md:hidden">
//           <Swiper
//             modules={[Pagination]}
//             pagination={{ clickable: true }}
//             slidesPerView={1}
//             spaceBetween={20}
//             loop={true}
//             className="pb-10"
//           >
//             {reviews.map((review, index) => (
//               <SwiperSlide key={index}>
//                 <ReviewCard {...review} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//       </div>

//       {/* Swiper dots styling */}
//       <style>{`
//         .swiper-pagination-bullet {
//           width: 10px;
//           height: 10px;
//           background: #D1D5DB;
//           opacity: 1;
//         }
//         .swiper-pagination-bullet-active {
//           background: #4ADE80;
//           width: 24px;
//           border-radius: 5px;
//         }
//       `}</style>

//     </section>
//   );
// };

// export default Reviews;








import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

import Feedback1 from '../assets/Feedback1.png';
import Feedback2 from '../assets/Feedback2.png';
import StarRating from '../assets/StarRating.png';

const reviews = [
  {
    img: Feedback1,
    name: "JAMES L.",
    date: "10-June-2020",
    text: "Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed",
    location: "—AUSTIN STADIUM",
  },
  {
    img: Feedback2,
    name: "JAMES L.",
    date: "10-June-2020",
    text: "Lorem ipsum dolor sit amet consectetur. Tristique ultrices neque iaculis et orci sit dictumst. Consequat velit nunc ultricies pharetra tincidunt commodo turpis. Cursus lacus pharetra eget sed",
    location: "—AUSTIN STADIUM",
  },
];

const ReviewCard = ({ img, name, date, text, location }) => (
  <div className="w-full border-[1px] border-[#262F3E] rounded-[20px] p-[30px] md:p-[40px]">
    {/* Profile */}
    <div className="flex items-center gap-4 mb-4">
      <img src={img} alt={name} className="w-[60px] h-[60px] md:w-[76px] md:h-[76px] rounded-full object-cover" />
      <div>
        <h4
          className="text-[#000000] text-[36px] md:text-[50px] font-bold leading-[100%] uppercase"
          style={{ fontFamily: "Bebas Neue" }}
        >
          {name}
        </h4>
        <p
          className="text-[#666666] text-[16px] md:text-[20px] font-light mt-1"
          style={{ fontFamily: "Poppins" }}
        >
          {date}
        </p>
      </div>
    </div>

    {/* Star Rating */}
    <div className="mb-4">
      <img src={StarRating} alt="Rating" className="w-[150px] h-[25px] md:w-[198px] md:h-[33px] object-contain" />
    </div>

    {/* Text */}
    <p
      className="text-[#333333] text-[16px] md:text-[20px] leading-[26px] md:leading-[33px] font-light italic mb-4 md:mb-6"
      style={{ fontFamily: "Poppins" }}
    >
      {text}
    </p>

    {/* Location */}
    <p
      className="text-[#009A3A] text-[16px] md:text-[20px] font-medium uppercase"
      style={{ fontFamily: "Poppins" }}
    >
      {location}
    </p>
  </div>
);

const Reviews = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-[50px] md:py-[100px] px-4 md:px-6">
      <div className="max-w-[1440px] mx-auto">

        {/* Section Title */}
        <div className="text-center mb-[40px] md:mb-[80px]">
          <h2
            className="text-[#000000] text-[40px] md:text-[80px] font-normal leading-[100%] tracking-[2px] md:tracking-[4px] uppercase"
            style={{ fontFamily: "Bebas Neue" }}
          >
            WHAT OUR PLAYER SAYS
          </h2>
        </div>

        {/* Desktop — 2 cards side by side */}
        <div className="hidden md:grid md:grid-cols-2 gap-[20px] max-w-[1300px] mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        {/* Mobile — Swiper */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center mt-4" />
        </div>

      </div>

      {/* Swiper dots styling */}
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

export default Reviews;



















