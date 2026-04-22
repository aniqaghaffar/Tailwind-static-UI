import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="absolute top-7 left-3 w-full px-6 z-50">
      <nav className="max-w-[1854px] mx-auto h-[94px] bg-[#081224] border border-white/10 rounded-full flex items-center justify-between px-12 shadow-2xl">
        {/* LEFT: Logo + Navigation Links */}
        <div className="flex items-center gap-x-16">
          {/* Logo */}
          <img
            src={logo}
            alt="FC United Logo"
            className="w-[271px] h-[78px] "
          />

          {/* Navigation Links */}
          <div className="flex items-center gap-x-[12px]">
            <a
              href="#"
              className="font-body text-[#1BA33E] text-[16px] font-medium uppercase border-b-2 border-[#1BA33E] pb-1 transition-all"
            >
              Home
            </a>
            <a
              href="#"
              className="font-body text-white/80 text-[16px] font-medium uppercase hover:text-[#1BA33E] transition-all"
            >
              Locations
            </a>
            <a
              href="#"
              className="font-body text-white/80 text-[16px] font-medium uppercase hover:text-[#1BA33E] transition-all"
            >
              Fields
            </a>
            <a
              href="#"
              className="font-body text-white/80 text-[16px] font-medium uppercase hover:text-[#1BA33E] transition-all"
            >
              Trending
            </a>
            <a
              href="#"
              className="font-body text-white/80 text-[16px] font-medium uppercase hover:text-[#1BA33E] transition-all"
            >
              Map
            </a>
          </div>
        </div>

        {/* RIGHT: Search & Profile Icons */}
        <div className="flex items-center gap-[3px]">
  {/* Search Box */}
  <div className="relative">
    <input
      type="text"
      placeholder="search..."
      /* padding-left (pl-4) kam kiya aur padding-right (pr-10) badhaya icon ke liye */
      className="bg-[#262F3E] border border-white/10 rounded-full py-2 pl-5 pr-10 
                 text-[14px] text-white/70 placeholder:text-white/30 outline-none 
                 w-[220px] transition-all focus:bg-[#2d3748]"
    />

  </div>
</div>
      </nav>
    </header>
  );
};

export default Navbar;


