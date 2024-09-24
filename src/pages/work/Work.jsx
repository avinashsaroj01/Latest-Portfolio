import React, { useState } from "react";
// import signzy from "../../assets/svgs/Group 224.svg";
import Arrow1 from "../../assets/svgs/Group.svg";
// import samsung from "../../assets/svgs/image 1.svg";
// import company3 from "../../assets/svgs/image 2.svg";
// import company4 from "../../assets/svgs/image 3.svg";
// import company5 from "../../assets/companies/saaspect.svg";
import { useNavigate } from "react-router-dom";
import Project1 from "../ProjectOveriviews/Project1";
import Project2 from "../ProjectOveriviews/Project2";
import Project3 from "../ProjectOveriviews/Project3";
import Project4 from "../ProjectOveriviews/Project4";

// import signzy from "../../assets/svgs/image 1.svg";
const Work = () => {
  const [selected, setSelected] = useState("");
  const Project = ({ title, desc, id }) => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);

    return (
      <div
        onMouseEnter={() => {
          setIsActive(true);
          setSelected(id);
        }}
        onMouseLeave={() => {
          setIsActive(false);
          setSelected("");
        }}
        onClick={() => {
          navigate("/project", { state: { project: id } });
        }}
      >
        {isActive ? (
          <div className="bg-stone-700 px-10 flex items-center h-36 justify-between">
            <div className="font-semibold font-openSans text-lg text-red-400">
              {title}
            </div>
            <img src={Arrow1} alt="" srcset="" className="text-white" />
          </div>
        ) : (
          <div className="text-white flex flex-col gap-3 border-b-[1px] border-stone-700 px-10 py-5 h-fit md:h-36">
            <div className="text-xl font-semibold font-openSans">{title}</div>
            <div className="text-stone-300 text-xs font-normal font-openSans">
              {desc}
            </div>{" "}
          </div>
        )}
      </div>
    );
  };
  const data = [
    {
      title: "Finance Mate",
      key: "FINANCE_MATE",
      desc: "A dynamic personal finance tracking application that provides real-time tracking of expenses, financial planning, and smart budgeting insights.",
    },
    {
      title: "Metro Path Finder",
      key: "METRO_PATH_FINDER",
      desc: "A real-time metro navigation system using graph traversal algorithms like Dijkstra’s and A* to calculate the shortest path between stations.",
    },
    {
      title: "AlgoVision",
      key: "ALGOVISION",
      desc: "An interactive web application that visualizes various sorting algorithms to help users understand algorithmic efficiency and behavior.",
    },
    {
      title: "CalcMaster",
      key: "CALCMASTER",
      desc: "A simple yet intuitive calculator application built using HTML, CSS, and JavaScript, designed to perform basic arithmetic operations with a user-friendly interface.",
    },
    
    // {
    //   title: "Hidden Layers (Live Project)",
    //   key: "HIDDEN_LAYERS",
    //   desc: "Hidden Layers- The project is a joint research initiative of five leading German art and design schools that aims at sustainably anchoring the teaching of AI topics in the field of design.",
    // },
    // {
    //   title: "Subscription Management",
    //   key: "SUB_SPACE",
    //   desc: "To design a subscription management interface that allows users to readily pay for all their subscriptions and maintain a history of the same in the easiest and simplest way possible, while giving them insights and suggestions based on their usage.",
    // },
    // {
    //   title: "Redesigning OneDrive",
    //   key: "ONEDRIVE_REDISIGN",
    //   desc: "Redesigning OneDrive- Creating a better version of the file-sharing app.",
    // },
    // {
    //   title: "Dermatology- Case Study",
    //   key: "DOCTALK",
    //   desc: "In a growing field like dermatology, internet interventions have some drawbacks. This project introduces concepts that solve problems for patients and make the process easier for doctors.",
    // },
    // {
    //   title: "Waste Management",
    //   key: "WASTE_MANAGEMENT",
    //   desc: "Designed a solution to reduce the complexity of waste management and make learning waste segregation more interesting for the new generation.",
    // },
  ];
  
  return (
    <div className="mt-2">
      <div className="flex h-fit">
  {!selected ? (
    <div className="basis-1/2 bg-zinc-900 justify-center items-center text-white text-xl font-openSans hidden md:flex">
      Hover on a project to view.
    </div>
  ) : (
    <div className="basis-1/2 hidden md:block">
      {selected === "FINANCE_MATE" && <Project1/>}
      {selected === "METRO_PATH_FINDER" && <Project2/>}
      {selected === "ALGOVISION" && <Project3 />}
      {selected === "CALCMASTER" && <Project4 />}
      {/* {selected === "HIDDEN_LAYERS" && <Project1 />}
      {selected === "SUB_SPACE" && < />}
      {selected === "ONEDRIVE_REDISIGN" && < />}
      {selected === "DOCTALK" && <Project4 />}
      {selected === "WASTE_MANAGEMENT" && <Project5 />} */}
    </div>
  )}
  <div className="md:basis-1/2 flex flex-col pt-5">
    <div className="text-stone-200 text-5xl px-10 font-normal font-openSans pb-4">
      My Work
    </div>
    {data.map(({ title, desc, key }) => (
      <Project title={title} desc={desc} id={key} />
    ))}
  </div>
</div>

      {/* <div className="">
        <div className="text-center text-stone-200 text-xl md:text-[3rem] font-normal font-openSans mt-8 md:mt-16">
          Where I've Worked
        </div>
        <div className="">
          <div className="flex items-center justify-center gap-2 md:gap-16 py-8 md:py-36 mx-4 md:mx-16">
            <div className="w-48">
              <img src={signzy} alt="" srcset="" className="" />
            </div>
            <div className="w-48">
              <img src={samsung} alt="" srcset="" className="" />
            </div>
            <div className="w-48">
              <img src={company3} alt="" srcset="" className="" />
            </div>

            <div className="w-48 my-auto">
              <img src={company5} alt="" srcset="" className="" />
            </div>
            <div className="w-48">
              <img src={company4} alt="" srcset="" className="" />
            </div>
          </div>
        </div>
        </div> */}
      </div>
  );
};

export default Work;
