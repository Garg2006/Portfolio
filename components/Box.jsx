  import React, { useState } from "react";

  const Box = ({ img, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    const shadowStyle = isHovered && img
      ? {
          boxShadow: `0px 0px 30px 0px ${color}`,
        }
      : {};
    return (
      <div
        className="w-22 h-22 min-[368px]:w-24 min-[368px]:h-24 rounded-xl border border-[rgba(38,38,38,.7)] bg-[#181818] p-6 flex items-center justify-center has hover:scale-90 has-[img]:hover:scale-100  transition-all duration-[3s] ease-in-out has-[img]:hover:duration-300  has-[img]:duration-[3s] has-[img]:ease-in-out  has-[img]:cursor-pointer"
        style={shadowStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {img && <img src={img} />}
      </div>
    );
  };

  export default Box;



