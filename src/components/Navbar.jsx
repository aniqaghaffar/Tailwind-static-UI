

import logo from "../assets/logo.png";
import searchIcon from "../assets/Search.png";
import userIcon from "../assets/Usericon.png";
import menuicon from "../assets/Menuicon.png";

const Navbar = () => {
  return (
    <header className=" w-full bg-[#081224] pt-[25px] 2xl:pt-[27px] px-[20px] 2xl:px-[33px]">
      <nav className="h-[49px] 2xl:h-[94px] flex items-center">

        {/* Logo */}
        <div className="flex items-center h-full w-[119px] 2xl:w-[271px] pl-[10px] 2xl:pl-[22px]">
          <img
            src={logo}
            alt="FC United"
            className="h-[35px] 2xl:h-[78px] w-auto"
          />
        </div>

        {/* Nav Links -  sirf desktop pe */}
        <div className="hidden min-[768px]:flex items-center gap-[16px] ml-[36px]">
          <a href="#" className="  no-underline font-poppins font-medium text-[16px] leading-[21px] tracking-[0.18px] text-[#1BA33E]">
            Home
          </a>
          <a href="#" className="  no-underline font-poppins font-medium text-[16px] leading-[21px] tracking-[0.18px] text-[#848992]">
            Locations
          </a>
          <a href="#" className="  no-underline font-poppins font-medium text-[16px] leading-[21px] tracking-[0.18px] text-[#848992]">
            Fields
          </a>
          <a href="#" className="  no-underline font-poppins font-medium text-[16px] leading-[21px] tracking-[0.18px] text-[#848992]">
            Trending
          </a>
          <a href="#" className="  no-underline font-poppins font-medium text-[16px] leading-[21px] tracking-[0.18px] text-[#848992]">
            Map
          </a>
        </div>

        {/* Right Side - ml-auto se right mein push hoga */}
        <div className="flex items-center gap-[8px] 2xl:gap-[12px] ml-auto">

          {/* Search Box */}
          <div className="flex items-center w-[162px] h-[32px] 2xl:w-[395px] 2xl:h-[50px] rounded-[25px] 2xl:rounded-[42px] bg-[#262F3E] px-[13px] 2xl:px-[21px]">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none border-none text-white font-poppins text-[10px] 2xl:text-[14px] font-normal placeholder:text-white/60"
            />
            <img
              src={searchIcon}
              alt="Search"
              className="w-[7.84px] h-[7.84px] 2xl:w-[13.02px] 2xl:h-[13.02px]"
            />
          </div>

          {/* User Icon - har screen pe */}
          <button className="flex items-center justify-center w-[32px] h-[32px] 2xl:w-[50px] 2xl:h-[50px] rounded-full bg-[#262F3E] outline-none border-none">
            <img
              src={userIcon}
              alt="User"
              className="w-[6.52px] h-[7.84px] 2xl:w-[10.19px] 2xl:h-[12.25px]"
            />
          </button>

          {/* Hamburger - sirf mobile pe */}
          <button className="flex items-center justify-center w-[32px] h-[32px] rounded-[25px] bg-[#262F3E] min-[768px]:hidden outline-none border-none">
            <img
              src={menuicon}
              alt="Menu"
              className="w-[11.33px] h-[8px]"
            />
          </button>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;









