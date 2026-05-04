// import React from 'react';
// import Logo1 from '../assets/Logo1.png';
// import Logo2 from '../assets/Logo2.png';
// import Logo3 from '../assets/Logo3.png';
// import Logo4 from '../assets/Logo4.png';
// import Logo5 from '../assets/Logo5.png';


// const PartnerBar = () => {
  
//   const partnerLogos = [
//     { id: 1, src: Logo1, alt: "Football Club" },
//     { id: 2, src: Logo2, alt: "Tournament" },
//     { id: 3, src: Logo3, alt: "Football" },
//     { id: 4, src: Logo4, alt: "Football Cup" },
//     { id: 5, src: Logo5, alt: "Soccer Club" },
//   ];

//   return (
//     <section className=" w-full  mx-auto bg-[#00713C] h-[224px] flex items-center justify-center">
//       <div className="container mx-auto px-4">
        
      
//         <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 lg:gap-32">
          
//           {partnerLogos.map((logo) => (
//             <div key={logo.id} className="flex-shrink-0">
//               <img 
//                 src={logo.src} 
//                 alt={logo.alt} 
//                 className="h-24 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
//               />
//             </div>
//           ))}
          

//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnerBar;










// import React from 'react';
// import Logo1 from '../assets/Logo1.png';
// import Logo2 from '../assets/Logo2.png';
// import Logo3 from '../assets/Logo3.png';
// import Logo4 from '../assets/Logo4.png';
// import Logo5 from '../assets/Logo5.png';

// const PartnerBar = () => {
//   const partnerLogos = [
//     { id: 1, src: Logo1, alt: "Football Club" },
//     { id: 2, src: Logo2, alt: "Tournament" },
//     { id: 3, src: Logo3, alt: "Football" },
//     { id: 4, src: Logo4, alt: "Football Cup" },
//     { id: 5, src: Logo5, alt: "Soccer Club" },
//   ];

//   return (
//     <section className="w-full bg-[#00713C] py-6 md:py-0 md:h-[224px] flex items-center justify-center">
//       <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16">

//         <div className="flex flex-nowrap justify-between items-center">
//           {partnerLogos.map((logo) => (
//             <div key={logo.id} className="flex-shrink-0">
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 className="h-10 md:h-20 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
//               />
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PartnerBar;








import React from 'react';
import Logo1 from '../assets/Logo1.png';
import Logo2 from '../assets/Logo2.png';
import Logo3 from '../assets/Logo3.png';
import Logo4 from '../assets/Logo4.png';
import Logo5 from '../assets/Logo5.png';

const PartnerBar = () => {
  const partnerLogos = [
    { id: 1, src: Logo1, alt: "Football Club" },
    { id: 2, src: Logo2, alt: "Tournament" },
    { id: 3, src: Logo3, alt: "Football" },
    { id: 4, src: Logo4, alt: "Football Cup" },
    { id: 5, src: Logo5, alt: "Soccer Club" },
  ];

  return (
    <section className="w-full bg-[#00713C] py-6 md:py-0 md:h-[224px] flex items-center justify-center">
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-16">

        <div className="flex flex-nowrap justify-between items-center">
          {partnerLogos.map((logo) => (
            <div key={logo.id} className="flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-28 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnerBar;











