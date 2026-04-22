// import logo from "../assets/logo.png";

// const Navbar = () => {
//   return (
//     <header className="absolute top-7 left-3 w-full px-6 z-50">
//       <nav className="max-w-[1854px] mx-auto h-[94px] bg-[#081224] border border-white/10 rounded-full flex items-center justify-between px-12 shadow-2xl">
      
//         <div className="flex items-center gap-x-16">
//           {/* Logo */}
//           <img
//             src={logo}
//             alt="FC United Logo"
//             className="w-[271px] h-[78px] "
//           />

//           {/* Navigation Links */}
//           <div className="flex items-center gap-x-[12px]">
//             <a
//               href="#"
//               className="font-body text-[#1BA33E] text-[16px] font-medium uppercase border-b-2 border-[#1BA33E] pb-1 transition-all"
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className="font-body text-white/80 text-[16px] font-medium uppercase hover:text-[#1BA33E] transition-all"
//             >
//               Locations
//             </a>
//             <a
//               href="#"
//               className="font-body text-white/80 text-[16px] font-medium uppercase hover:text-[#1BA33E] transition-all"
//             >
//               Fields
//             </a>
//             <a
//               href="#"
//               className="font-body text-white/80 text-[16px] font-medium uppercase hover:text-[#1BA33E] transition-all"
//             >
//               Trending
//             </a>
//             <a
//               href="#"
//               className="font-body text-white/80 text-[16px] font-medium uppercase hover:text-[#1BA33E] transition-all"
//             >
//               Map
//             </a>
//           </div>
//         </div>

      
//         <div className="flex items-center gap-[3px]">
//   {/* Search Box */}
//   <div className="relative">
//     <input
//       type="text"
//       placeholder="search..."
     
//       className="bg-[#262F3E] border border-white/10 rounded-full py-2 pl-5 pr-10 
//                  text-[14px] text-white/70 placeholder:text-white/30 outline-none 
//                  w-[220px] transition-all focus:bg-[#2d3748]"
//     />

//   </div>
// </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;









// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import searchIcon from "../assets/Searchicon.png";
// import userIcon from "../assets/Usericon.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-4 md:top-7 left-0 w-full px-4 md:px-10 z-[100]">
//       <nav className="max-w-[1854px] mx-auto h-[80px] md:h-[94px] bg-[#081224] border border-white/10 rounded-full flex items-center justify-between px-6 md:px-12 shadow-2xl relative overflow-visible">
        
//         {/* Left Side: Logo & Desktop Links */}
//         <div className="flex items-center gap-x-12">
//           {/* Logo */}
//           <img
//             src={logo}
//             alt="FC United Logo"
//             className="w-[180px] md:w-[220px] lg:w-[271px] h-auto object-contain"
//           />

//           {/* Navigation Links - Fixed Spacing */}
//           <div className=" lg:flex items-center gap-x-8 xl:gap-x-10">
//             {["Home", "Locations", "Fields", "Trending", "Map"].map((link, index) => (
//               <a
//                 key={link}
//                 href="#"
//                 className={`font-body text-[15px] xl:text-[16px] font-medium uppercase tracking-widest transition-all whitespace-nowrap ${
//                   index === 0 
//                   ? "text-[#1BA33E] border-b-2 border-[#1BA33E] pb-1" 
//                   : "text-white/70 hover:text-white"
//                 }`}
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Search & User */}
//         <div className=" lg:flex items-center gap-x-5">
//           <div className="relative flex items-center">
//             <input
//               type="text"
//               placeholder="search..."
//               className="bg-[#262F3E] border border-white/10 rounded-full py-2.5 pl-6 pr-12 text-[14px] text-white/70 placeholder:text-white/30 outline-none w-[200px] xl:w-[395px] h-[50px] focus:border-[#1BA33E]/50 transition-all"
//             />
//             <img src={searchIcon} alt="search" className="absolute right-5 w-4 h-4 opacity-70 pointer-events-none" />
//           </div>
          
//           {/* User Icon Box */}
//           <div className="w-[50px] h-[50px] bg-[#262F3E] rounded-full flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#1BA33E]/20 transition-all shrink-0">
//             <img src={userIcon} alt="user" className="w-5 h-5 object-contain" />
//           </div>
//         </div>

//         {/* Mobile Hamburger Button */}
//         <button 
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-white flex flex-col gap-1.5 p-2"
//         >
//           <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//           <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
//           <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//         </button>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="absolute top-[90px] left-0 w-full bg-[#081224] border border-white/10 rounded-[2rem] p-8 flex flex-col gap-y-6 lg:hidden z-[105] shadow-2xl animate-in fade-in slide-in-from-top-4">
//             {["Home", "Locations", "Fields", "Trending", "Map"].map((link) => (
//               <a key={link} href="#" className="text-white text-xl uppercase font-semibold hover:text-[#1BA33E] transition-all">
//                 {link}
//               </a>
//             ))}
//             <hr className="border-white/5" />
//             <div className="relative flex items-center mt-2">
//               <input
//                 type="text"
//                 placeholder="search..."
//                 className="bg-[#262F3E] w-full rounded-full py-4 pl-6 pr-14 text-white outline-none border border-white/10"
//               />
//               <img src={searchIcon} alt="search" className="absolute right-6 w-6 h-6" />
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import searchIcon from "../assets/Searchicon.png";
// import userIcon from "../assets/Usericon.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-4 md:top-7 left-0 w-full px-4 md:px-10 z-[100]">
//       <nav className="max-w-[1854px] mx-auto h-[80px] md:h-[94px] bg-[#081224] border border-white/10 rounded-full flex items-center justify-between px-8 md:px-12 shadow-2xl relative">
        
//         {/* 1. Logo Section */}
//         <div className="flex-shrink-0">
//           <img
//             src={logo}
//             alt="FC United Logo"
//             className="w-[180px] md:w-[220px] lg:w-[271px] h-auto object-contain"
//           />
//         </div>

//         {/* 2. Middle Navigation Links - Hidden on Mobile with Extra Spacing */}
//         <div className=" lg:flex items-center justify-center flex-1 px-10">
//           <div className="flex items-center gap-x-10 xl:gap-x-14">
//             {["Home", "Locations", "Fields", "Trending", "Map"].map((link, index) => (
//               <a
//                 key={link}
//                 href="#"
//                 className={`font-body text-[15px] xl:text-[16px] font-medium uppercase tracking-[0.1em] transition-all whitespace-nowrap ${
//                   index === 0 
//                   ? "text-[#1BA33E] border-b-2 border-[#1BA33E] pb-1" 
//                   : "text-white/70 hover:text-white"
//                 }`}
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* 3. Right Side: Search & User Icon */}
//         <div className=" lg:flex items-center gap-x-6 flex-shrink-0">
//           {/* Search Bar */}
//           <div className="relative flex items-center">
//             <input
//               type="text"
//               placeholder="search..."
//               className="bg-[#262F3E] border border-white/10 rounded-full py-2.5 pl-6 pr-14 text-[14px] text-white/70 placeholder:text-white/30 outline-none w-[200px] xl:w-[395px] h-[50px] focus:border-[#1BA33E]/50 transition-all"
//             />
//             <img 
//               src={searchIcon} 
//               alt="search" 
//               className="absolute right-5 w-5 h-5 opacity-70 pointer-events-none" 
//             />
//           </div>
          
//           {/* User Profile Icon */}
//           <div className="w-[50px] h-[50px] bg-[#262F3E] rounded-full flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#1BA33E]/20 transition-all group">
//             <img 
//               src={userIcon} 
//               alt="user" 
//               className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100" 
//             />
//           </div>
//         </div>

//         {/* Mobile Hamburger Button */}
//         <button 
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-white flex flex-col gap-1.5 p-2 focus:outline-none"
//         >
//           <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//           <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
//           <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//         </button>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="absolute top-[100px] left-0 w-full bg-[#081224]/fb border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center gap-y-6 lg:hidden z-[105] shadow-2xl backdrop-blur-md">
//             {["Home", "Locations", "Fields", "Trending", "Map"].map((link) => (
//               <a key={link} href="#" className="text-white text-xl uppercase font-semibold hover:text-[#1BA33E] transition-all">
//                 {link}
//               </a>
//             ))}
//             <div className="w-full h-[1px] bg-white/10 my-2"></div>
//             <div className="relative w-full flex items-center">
//               <input
//                 type="text"
//                 placeholder="search..."
//                 className="bg-[#262F3E] w-full rounded-full py-4 pl-6 pr-14 text-white outline-none border border-white/10"
//               />
//               <img src={searchIcon} alt="search" className="absolute right-6 w-6 h-6 opacity-60" />
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;




// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import searchIcon from "../assets/Searchicon.png";
// import userIcon from "../assets/Usericon.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-4 md:top-7 left-0 w-full px-4 md:px-10 z-[100]">
//       <nav className="max-w-[1854px] mx-auto h-[80px] md:h-[94px] bg-[#081224] border border-white/10 rounded-full flex items-center justify-between px-6 md:px-12 shadow-2xl relative">
        
//         {/* 1. Left Side: Logo & Links Wrapper */}
//         <div className="flex items-center gap-x-12 md:gap-x-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img
//               src={logo}
//               alt="FC United Logo"
//               className="w-[160px] md:w-[220px] lg:w-[271px] h-auto object-contain"
//             />
//           </div>

//           {/* 2. Menu Links - Manual Spacing and No 'hidden' issues */}
//           <div className="hidden md:flex items-center gap-x-[8px] lg:gap-x-[12px] xl:gap-x-[16px]">
//             {["Home", "Locations", "Fields", "Trending", "Map"].map((link, index) => (
//               <a
//                 key={link}
//                 href="#"
//                 className={`font-body text-[14px] lg:text-[16px] font-medium uppercase tracking-[0.15em] transition-all whitespace-nowrap ${
//                   index === 0 
//                   ? "text-[#1BA33E] border-b-2 border-[#1BA33E] pb-1" 
//                   : "text-white/70 hover:text-white"
//                 }`}
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* 3. Right Side: Search & User Icon - Proper Alignment */}
//         <div className="flex items-center gap-x-4 md:gap-x-6">
//           {/* Search Box - Width adjusts to fill space */}
//           <div className="relative hidden sm:flex items-center group">
//             <input
//               type="text"
//               placeholder="search..."
//               className="bg-[#262F3E] border border-white/10 rounded-full py-2.5 pl-6 pr-12 text-[14px] text-white/70 placeholder:text-white/30 outline-none w-[150px] md:w-[250px] lg:w-[395px] h-[45px] md:h-[50px] focus:border-[#1BA33E] transition-all"
//             />
//             <img 
//               src={searchIcon} 
//               alt="search icon" 
//               className="absolute right-5 w-4 h-4 opacity-50 group-focus-within:opacity-100 transition-opacity" 
//             />
//           </div>
          
//           {/* User Icon - Fixed Circular Shape */}
//           <div className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] bg-[#262F3E] rounded-full flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#1BA33E]/20 transition-all shrink-0">
//             <img 
//               src={userIcon} 
//               alt="user profile" 
//               className="w-4 h-4 md:w-5 h-5 object-contain" 
//             />
//           </div>

//           {/* Mobile Menu Button - Appears only on very small screens */}
//           <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
//             <div className="w-6 h-0.5 bg-white mb-1.5"></div>
//             <div className="w-6 h-0.5 bg-white mb-1.5"></div>
//             <div className="w-6 h-0.5 bg-white"></div>
//           </button>
//         </div>

//         {/* 4. Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="absolute top-[90px] left-0 w-full bg-[#081224] border border-white/10 rounded-[2rem] p-8 flex flex-col gap-y-6 md:hidden z-[105] shadow-2xl">
//             {["Home", "Locations", "Fields", "Trending", "Map"].map((link) => (
//               <a key={link} href="#" className="text-white text-lg uppercase font-semibold">{link}</a>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/Searchicon.png";
import userIcon from "../assets/Usericon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 md:top-7 left-0 w-full px-4 md:px-10 z-[100]">
      <nav className="max-w-[1854px] mx-auto h-[80px] md:h-[94px] bg-[#081224] border border-white/10 rounded-full flex items-center justify-between px-6 md:px-12 shadow-2xl relative overflow-visible">
        
        {/* 1. Left Side: Logo Section */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="FC United Logo"
            className="w-[160px] md:w-[220px] lg:w-[271px] h-auto object-contain"
          />
        </div>

        {/* 2. Middle: Menu Links (Figma Spacing) */}
        {/* 'hidden' ki jagah 'flex' krdia taake nazar aayein, pr 'gap-x' barha dia hai */}
        <div className=" md:flex items-center justify-center flex-1">
          <div className="flex items-center gap-x-[10px] lg:gap-x-[14px] xl:gap-x-[20px]">
            {["Home", "Locations", "Fields", "Trending", "Map"].map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`font-body text-[14px] lg:text-[16px] font-medium uppercase tracking-[0.18em] transition-all whitespace-nowrap ${
                  index === 0 
                  ? "text-[#1BA33E] border-b-2 border-[#1BA33E] pb-1" 
                  : "text-white/70 hover:text-white"
                }`}
              >
                {link}
              </a>
            ))} 
          </div>
        </div>

        {/* 3. Right Side: Search & User Icon */}
        <div className="flex items-center gap-x-4 md:gap-x-6 flex-shrink-0">
          {/* Search Input Section */}
          <div className="relative sm:flex items-center">
            <input
              type="text"
              placeholder="search..."
              className="bg-[#262F3E] border border-white/10 rounded-full py-2.5 pl-6 pr-14 text-[14px] text-white/70 placeholder:text-white/30 outline-none w-[150px] md:w-[250px] lg:w-[395px] h-[45px] md:h-[50px] focus:border-[#1BA33E]/50 transition-all"
            />
            <img 
              src={searchIcon} 
              alt="search" 
              className="absolute right-[15px] bottom-[16px]  w-5 h-5 opacity-60" 
            />
          </div>
          
          {/* User Profile Circle */}
          <div className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] bg-[#262F3E] rounded-full flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#1BA33E]/20 transition-all shrink-0">
            <img 
              src={userIcon} 
              alt="user" 
              className="w-4 h-4 md:w-5 h-5 object-contain" 
            />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* 4. Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-[95px] left-0 w-full bg-[#081224] border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center gap-y-6 md:hidden z-[110] shadow-2xl backdrop-blur-lg">
            {["Home", "Locations", "Fields", "Trending", "Map"].map((link) => (
              <a key={link} href="#" className="text-white text-xl uppercase font-semibold hover:text-[#1BA33E]">{link}</a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;