import React, { useState, useEffect } from "react";
import Icon1 from "../../assets/svgs/bi_laptop-fill.svg";
import Icon2 from "../../assets/svgs/material-symbols-light_work.svg";
import Icon3 from "../../assets/svgs/mdi_location.svg";
import Icon4 from "../../assets/svgs/vaadin_office.svg";
import Icon5 from "../../assets/svgs/wpf_like.svg";
import Avinash from "../../assets/images/Subject 1.png";

const FiveIconsCircle = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1); // -1 means no icon is hovered
  const [isManuallyHovered, setIsManuallyHovered] = useState(false); // To track manual hovering

  const ICONS = [
    {
      icon: Icon1,
      ctx: "1 year of experience",
      position: "right-2 bottom-6 absolute",
      subPosition: "top-full mt-2 right-[-24px]",
    },
    {
      icon: Icon4,
      ctx: "IIIT Sricity (B.Tech in CSE)",
      position: "top-0 mx-auto",
      subPosition: "bottom-full mb-2",
    },
    {
      icon: Icon2,
      ctx: "SkilloVilla",
      position: "left-2 bottom-6 absolute",
      subPosition: "top-full mt-2 right-0",
    },
    {
      icon: Icon3,
      ctx: "Bengaluru",
      position: "right-0 top-24 absolute",
      subPosition: "bottom-full mb-2",
    },
    {
      icon: Icon5,
      ctx: "Software Engineer",
      position: "left-0 top-24 absolute",
      subPosition: "bottom-full mb-2",
    },
  ];

  // Effect to handle automatic hovering
  useEffect(() => {
    // Only run the interval if not manually hovering
    if (!isManuallyHovered) {
      const interval = setInterval(() => {
        setHoveredIndex((prevIndex) => (prevIndex + 1) % ICONS.length);
      }, 1000); // Change the hovered icon every second

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }
  }, [ICONS.length, isManuallyHovered]);

  // Event handlers to start/stop manual hover
  const handleMouseEnter = (index) => {
    setIsManuallyHovered(true);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setIsManuallyHovered(false);
  };

  return (
    <div className="relative">
      {ICONS.map((item, index) => (
        <div
          key={index}
          className={`w-14 h-14 ${
            item.position
          } transition ease-in-out duration-300 ${
            hoveredIndex === index ? "-translate-y-1 scale-110" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            <div
              className={`whitespace-nowrap absolute ${item.subPosition} ${
                hoveredIndex === index ? "block" : "hidden"
              } w-fit bg-gray-800 text-white text-xs rounded py-2 px-3`}
            >
              {item.ctx}
            </div>
            <img src={item.icon} alt="" />
          </div>
        </div>
      ))}
      <div className="relative m-10 h-56 w-56 md:h-72 md:w-72 bg-[#CACACA] rounded-full mt-12 mx-auto flex items-center justify-center">
  <img className="h-52 w-52 md:h-[18rem] md:w-[18rem] rounded-full object-cover" src={Avinash} alt="Profile" />
</div>

    </div>
  );
};

export default FiveIconsCircle;
