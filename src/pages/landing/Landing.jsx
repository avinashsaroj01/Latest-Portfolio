import React, { useEffect, useState } from "react";
import Arrow from "../../assets/svgs/Arrow.svg";
import FiveIconsCircle from "./FiveIconsCircle.jsx";

import { Routes, Route, useNavigate } from "react-router-dom";
import About from "../about/About.jsx";
import Work from "../work/Work.jsx";

import Project from "../project/Project.jsx";
import HamburgerMenu from "../../components/HamburgerMenu";
import Footer from "./Footer.jsx";
const fonts = ["font-play", "font-pecita", "font-pinyon"];
const Info = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      // Update the value every second
      const prevValue = value;
      const newValue = (prevValue + 1) % fonts.length;
      console.log("prevValue, newValue: ", prevValue, newValue);
      setValue(newValue);
    }, 1000);
  }, [value]);
  return (
    <div>
      <div className="flex flex-col md:flex-row ml-4 md:ml-24 mt-12 md:my-28">
        <div className="basis-1/2">
          <div className="font-pecita text-4xl md:text-6xl text-stone-200 ">
            Hey!
          </div>
          <div className="my-8">
            <span className="text-stone-200 text-xl md:text-5xl font-semibold font-openSans leading-4">
              This is{" "}
            </span>
            <span className="text-red-400 text-xl md:text-5xl font-semibold font-openSans leading-4">
              Avinash
            </span>
            <span className="text-stone-200 text-xl md:text-5xl font-semibold font-openSans">
              , an{" "}
            </span>
            <span
              className={`text-stone-200 font-normal ${fonts[value]} leading-4 text-5xl hidden md:inline-block`}
            >
              <div className="w-48 hidden md:inline-block">{`Engineer`}</div>
            </span>
            <span
              className={`text-stone-200 font-normal ${fonts[value]} leading-4 text-xl inline-block md:hidden`}
            >
              <div className="w-20 md:hidden inline-block">{`Designer`}</div>
            </span>
            <span className="text-stone-200 text-xl md:text-5xl font-semibold font-font-openSans">
              {" "}
              On a mission to leverage my software engineering skills to 
              create impactful solutions in a competitive digital landscape.
            </span>
          </div>
          <div className="mt-4 md:mt-20 hidden md:block">
            {/* <Link to="#work"> */}
            <div
              className="w-fit pl-3 h-12 relative bg-red-400 rounded-full flex justify-end items-center gap-2 cursor-pointer"
              onClick={() => {
                window.scrollBy({
                  top: window.innerHeight,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className="text-white text-lg font-semibold font-openSans mx-auto">
                View My Work
              </div>
              <div className="w-11 h-11 bg-violet-50 rounded-full mr-1 flex justify-center items-center">
                <div className="w-2 h-2">
                  <img src={Arrow} alt="" srcset="" />
                </div>
              </div>
            </div>
            {/* </Link> */}
          </div>
        </div>
        <div className="mx-auto flex md:items-end scale-75 md:scale-100">
          <FiveIconsCircle />
        </div>
      </div>
      <div className="text-center md:text-right italic font-openSans md:text-xl text-stone-200 font-semibold mb-20 text-base mr-1 md:mr-12">
        An Engineer by degree and choice
      </div>

      <div id="work">
        <Work />
      </div>
    </div>
  );
};
const Landing = () => {
  const navigate = useNavigate();
  const openPdf = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1ZCfmrKiXMNhCp6tb47QH6jPv-BlfPfUL/view?usp=drive_link"; // Replace with your PDF URL
    window.open(pdfUrl, "_blank");
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between mx-4 md:mx-24 md:mt-10 mt-5 py-1">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="flex flex-row gap-3 cursor-pointer"
        >
          <div className="bg-white w-[5rem] h-8 rounded-r-full"></div>
          <div className="flex flex-col text-white items-start justify-start leading-[80%] gap-1 text-base font-semibold font-openSans">
            <p>Avinash</p>
            <p>Saroj</p>
          </div>
        </div>
        <div className="text-white hidden md:flex justify-end gap-2 md:gap-10 font-openSans md:text-base text-xs font-semibold">
          <div className="cursor-pointer ">
            <a href="/">Home</a>
          </div>
          <div className="">
            <a href="/about">About</a>
          </div>
          {/* <div>Blog</div> */}
          <div onClick={openPdf} className="cursor-pointer ">
            Resume
          </div>
        </div>
        <div className="block md:hidden">
          <HamburgerMenu />
        </div>
      </div>

      <Routes>
        <Route path="*" element={<Info />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Landing;
