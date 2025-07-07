import { useState } from "react";
import logo from '../src/assets/Vector.svg'

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="fixed w-full z-40 h-[80px] bg-gradient-to-b from-[#000000] from-0% to-[#111111] to-90% border-b  border-[rgb(38,38,38)]  ">
      <div className="flex items-center justify-between md:justify-end md:gap-40  h-full w-screen md:w-full md:px-20 px-2">
        <div className="flex items-center gap-5">
            <div className="w-10">
                <img src={logo} alt="logo" className="w-full" />
            </div>
            <h3 className="text text-2xl">nitin</h3>
        </div>
        <div className="flex items-end gap-10">
          <div>
            <h3 className="text-xl ">Portfolio</h3>
          </div>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(true)}
            className="relative cursor-pointer"
          >
            <h3 className="text-xl md:text-3xl font-semibold z-20 relative"><a href="mailto:gargshabh2224@gmail.com">Hire Me</a></h3>
            <div className="absolute bottom-1 w-full h-1 md:h-2 bg-[#9ddcff] z-10"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
