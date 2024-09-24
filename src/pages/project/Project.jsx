import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const projects = {
  FINANCE_MATE: {
    title: "Finance Mate",
    tags: [
      "Full Stack Development",
      "Personal Project",
      "Duration : 4 weeks",
    ],
    comp1: {
      key: "WHAT?",
      desc: "A dynamic personal finance tracking application that provides real-time tracking of expenses, financial planning, and smart budgeting insights.",
    },
    comp2: {
      key: "WHY?",
      desc: "In today's fast-paced world, individuals need an efficient way to track expenses and manage personal finances. Finance Mate was designed to address this need by providing users with insights and tools to manage their finances effectively.",
    },
    comp3: {
      key: "HOW?",
      desc: [
        "Used React.js for the frontend and Node.js for the backend.",
        "Employed MongoDB for transaction data storage, using Mongoose for schema management and aggregation pipelines for advanced reporting.",
        "Implemented asynchronous functions and optimized database queries, resulting in 30% faster API response time.",
        "Deployed the frontend via Vercel and backend on AWS Lambda for a scalable serverless architecture.",
      ],
    },
    bgColor: "bg-green-300",
    titleColor: "text-green-500",
    textColor: "black",
    link: "https://github.com/avinashsaroj01/My-Finance-Tracker/tree/main",
  },
  METRO_PATH_FINDER: {
    title: "Metro Path Finder",
    tags: [
      "Algorithm Development",
      "Classroom Project",
      "Duration : 3 weeks",
    ],
    comp1: {
      key: "WHAT?",
      desc: "A real-time metro navigation system using graph traversal algorithms like Dijkstra’s and A* to calculate the shortest path between stations.",
    },
    comp2: {
      key: "WHY?",
      desc: "With growing urban metro systems, it becomes essential to provide users with efficient and accurate route navigation solutions.",
    },
    comp3: {
      key: "HOW?",
      desc: [
        "Designed and implemented using React.js, Node.js, and GraphQL for dynamic data fetching.",
        "Optimized the app's performance using Dijkstra’s and A* algorithms and reduced computation time by 20% through efficient memory handling.",
        "Used priority queues and binary search trees for faster lookups and ensured real-time, responsive performance.",
      ],
    },
    bgColor: "bg-blue-300",
    titleColor: "text-blue-500",
    textColor: "black",
    link: "https://github.com/avinashsaroj01/Metro-Path-Finder",
  },
  ALGOVISION: {
    title: "AlgoVision",
    tags: [
      "Frontend Development",
      "Personal Project",
      "Duration : 2 weeks",
    ],
    comp1: {
      key: "WHAT?",
      desc: "An interactive web application that visualizes various sorting algorithms to help users understand algorithmic efficiency and behavior.",
    },
    comp2: {
      key: "WHY?",
      desc: "Understanding sorting algorithms is essential for students and developers. AlgoVision was created to simplify the process of learning and visualizing the internal workings of these algorithms.",
    },
    comp3: {
      key: "HOW?",
      desc: [
        "Developed using JavaScript, HTML, and CSS, with React.js for dynamic rendering.",
        "Implemented smooth animations to depict sorting steps and transitions, ensuring user engagement and educational value.",
        "Optimized the rendering performance to avoid lag during sorting operations.",
      ],
    },
    bgColor: "bg-red-300",
    titleColor: "text-red-500",
    textColor: "black",
    link: "https://github.com/avinashsaroj01/AlgoVision.git",
  },
  CALCMASTER: {
    title: "CalcMaster",
    tags: [
      "Front-End Development",
      "Personal Project",
      "Duration : 1 week",
    ],
    comp1: {
      key: "WHAT?",
      desc: "A basic yet functional calculator application built using HTML, CSS, and JavaScript, enabling users to perform standard arithmetic operations through a clean and user-friendly interface.",
    },
    comp2: {
      key: "WHY?",
      desc: "CalcMaster was developed to hone front-end development skills while offering users a simple tool for quick calculations.",
    },
    comp3: {
      key: "HOW?",
      desc: [
        "Developed the front-end using HTML for structure, CSS for styling, and JavaScript to implement functionality.",
        "Designed the calculator UI with a minimalistic approach for ease of use and clarity.",
        "Handled arithmetic operations through JavaScript event handling and DOM manipulation.",
        "Deployed the project on GitHub Pages for easy access and sharing.",
      ],
    },
    bgColor: "bg-blue-300",
    titleColor: "text-blue-500",
    textColor: "black",
    link: "https://github.com/avinashsaroj01/CalcMaster",
  },
  
};

const Tag = ({ tag, bgColor, textColor }) => {
  // const background = "bg-" + bgColor;
  const color = "text-" + textColor;
  // console.log("background: ", background);
  return <div className={`rounded-full p-2 ${bgColor} ${color}`}>{tag}</div>;
};
const Project = () => {
  const location = useLocation();
  const { project } = location.state || {};
  console.log(location);
  const data = projects[project];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="flex flex-col my-8 items-center mx-auto md:mx-40">
        <div className="text-white w-full text-2xl md:text-5xl leading-10 font-bold font-rubik text-center">
          {data.title}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          {data.tags.map((tag, index) => {
            console.log(data.bgColor, data.textColor);
            return (
              <Tag
                key={index}
                tag={tag}
                bgColor={data.bgColor}
                textColor={data.textColor}
              />
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row my-8 md:my-16">
          <div className="basis-1/2 md:flex flex-col pr-16 border-r-[1px] border-zinc-600 hidden">
            <div className="border-b-[1px] border-zinc-600">
              <div className={`pb-5 font-medium text-2xl ${data.titleColor}`}>
                {data.comp1.key}
              </div>
              <div className="text-white pb-16">{data.comp1.desc}</div>
            </div>
            <div>
              <div
                className={`${data.titleColor} pt-16 pb-5 font-medium text-2xl`}
              >
                {data.comp2.key}
              </div>
              <div className="text-white">{data.comp2.desc}</div>
              {data?.comp2?.note && (
                <div className="my-4 text-stone-300 text-sm font-normal font-rubik">
                  {data?.comp2?.note}
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden mx-8 my-4">
            <div className={`font-medium text-2xl ${data.titleColor} pb-5`}>
              {data.comp1.key}
            </div>
            <div className="text-white">{data.comp1.desc}</div>
          </div>
          <div className="md:hidden mx-8 mt-4 mb-8">
            <div className={`font-medium text-2xl ${data.titleColor} pb-5`}>
              {data.comp2.key}
            </div>
            <div className="text-white">{data.comp2.desc}</div>
            {data?.comp2?.note && (
              <div className="my-4 text-stone-300 text-sm font-normal font-rubik">
                {data?.comp2?.note}
              </div>
            )}
          </div>
          <div className="md:basis-1/2 mx-8 md:ml-16">
            <div className={`font-medium text-2xl text-${data.bgColor} pb-5`}>
              {data.comp3.key}
            </div>
            {data.comp3.desc.map((item) => (
              <div className="flex gap-2 text-white font-extrabold">
                <div>{"•"}</div>
                <div className="text-white text-base font-normal font-rubik leading-relaxed ">
                  {item}
                </div>
              </div>
            ))}
            {data?.comp3?.desc2 && (
              <div className="my-4">
                {data.comp3.desc2.map((item) => (
                  <div className="text-white text-base font-normal font-rubik leading-relaxed pl-3">
                    {item}
                  </div>
                ))}
              </div>
            )}
            {data?.comp3?.desc3 && (
              <div className="my-4 text-white text-base font-normal font-rubik ml-3">
                {data?.comp3?.desc3}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="text-white text-sm font-normal font-rubik underline text-center md:text-right mx-auto md:mx-40 mb-16 cursor-pointer"
        onClick={() => {
          window.open(data?.link, "_blank");
        }}
      >
        <span>{"Click to view the complete Project with Source code"}</span> <span>{"->"}</span>
      </div>
    </div>
  );
};

export default Project;
