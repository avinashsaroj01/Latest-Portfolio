import React from "react";
import memoji from "../../assets/images/1eaaefc0c081df076f8e699aaaf3155d-sticker 1.png";
import pointer from "../../assets/svgs/pointer.svg";
// import signzy from "../../assets/svgs/Group 224.svg";
// import samsung from "../../assets/companies/image 1.svg";
// import company3 from "../../assets/companies/image 3.svg";
// import company4 from "../../assets/companies/image 2.svg";
// import company5 from "../../assets/companies/Saaspect_Logo_White.png";
const Full = () => {
  return (
    <div className="h-4 md:h-5 w-6 md:w-8 bg-red-400 rounded-3xl border-[1px] border-red-400"></div>
  );
};
const Empty = () => {
  return (
    <div className="h-4 md:h-5 w-6 md:w-8 rounded-3xl border-[1px] border-red-400"></div>
  );
};

const Half = () => {
  return (
    <div className="flex">
      <div className="h-4 md:h-5 w-3 md:w-4 bg-red-400 rounded-l-3xl border-[1px] border-red-400"></div>
      <div className="h-4 md:h-5 w-3 md:w-4 rounded-r-3xl border-[1px] border-red-400"></div>
    </div>
  );
};

const WorkItem = ({ role, desc, logo, timeline }) => {
  return (
    <>
      <div className="p-8 rounded-md bg-zinc-900  grid-cols-10 grid-flow-row gap-4 hidden md:grid">
        <div className="col-span-3">
          <img src={logo} alt="" className="w-3/4 h-1/2" />
        </div>
        <div className="col-span-5">
          <div className="text-gray-50 text-xl font-semibold font-openSans leading-7">
            {role}
          </div>
          <div className="mt-4 font-openSans font-normal text-gray-300">
            {desc}
          </div>
        </div>
        <div className="col-span-2 text-gray-200 text-end">{timeline}</div>
      </div>
      <div className="flex flex-col gap-4 items-start md:hidden bg-zinc-900 p-8">
        <div className="">
          <img src={logo} alt="" className="w-3/4 h-full" />
        </div>
        <div className="text-gray-200 text-base font-normal font-openSans leading-normal">
          {timeline}
        </div>
        <div className="text-gray-50 text-xl font-semibold font-['Open Sans'] leading-7">
          {role}
        </div>
        <div className="text-gray-300 text-base font-normal font-['Open Sans'] leading-normal">
        Worked on UI/UX for software products, driving design and functionality to 
        deliver innovative solutions that align with both user needs and business objectives.
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <div className="my-16 mx-8 md:mx-36 mt-12 md:mt-24">
      <div className="flex flex-col md:flex-row gap-12 md:gap-28 items-center">
        <div className="bg-red-400 w-56 h-56 md:w-72 md:h-72  rounded-full mt-2 md:mt-8">
          <img
            src={memoji}
            alt=""
            srcset=""
            className="w-48 h-48 md:w-64 md:h-64 mx-auto"
          />
        </div>
        <div className="flex flex-col w-full md:w-2/3">
          <div className=" text-white text-4xl font-semibold font-openSans leading-[52px]">
            I’m Avinash
          </div>
          <div className=" text-white text-sm md:text-base font-normal font-openSans leading-snug mt-5">
          A passionate Software Engineer with a Bachelor's degree in Computer Science, 
          driven to solve meaningful problems and improve user experiences through innovative and impactful software solutions.
          </div>
          <div className="justify-start items-start gap-8 md:gap-20 inline-flex py-8 border-y-[1px] border-y-red-400 mt-8">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-[78px] text-white text-2xl md:text-5xl font-semibold font-openSans leading-[52px]">
                2+
              </div>
              <div className=" text-white text-base md:text-xl font-normal font-openSans leading-snug">
                Years of Experience
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className=" text-white text-2xl md:text-5xl font-semibold font-openSans leading-[52px]">
                10+
              </div>
              <div className=" text-white text-base md:text-xl font-normal font-openSans leading-snug">
                Projects{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className=" text-white text-2xl md:text-5xl font-semibold font-openSans leading-[52px]">
                2
              </div>
              <div className=" text-white text-base md:text-xl font-normal font-openSans leading-snug">
                Companies worked at
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 md:mt-32 flex flex-col justify-center items-center">
        <div className="px-5 py-1 bg-zinc-900 rounded-xl w-fit text-gray-300 text-sm font-normal font-openSans leading-tight">
          My Top Skills
        </div>
        <div className="grid grid-cols-2  md:grid-cols-5 grid-flow-row gap-4 my-8">
          <div className="bg-zinc-900 rounded-2xl border border-zinc-900 w-36 md:w-52 p-2 md:p-4 flex flex-col gap-4">
            <div className="justify-start items-center gap-4 inline-flex">
              <img src={pointer} alt="" srcset="" />
              <div className="text-white text-sm font-normal font-openSans leading-tight">
                 Front End Development
              </div>
            </div>
            <div className="justify-start items-center gap-1 inline-flex">
              <Full />
              <Full />
              <Full />
              <Full />
              <Half />
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl border border-zinc-900 w-36 md:w-52 p-2 md:p-4 flex flex-col gap-4">
            <div className="justify-start items-center gap-4 inline-flex">
              <img src={pointer} alt="" srcset="" />
              <div className="text-white text-xs font-normal font-openSans leading-tight">
                Backended Development
              </div>
            </div>
            <div className="justify-start items-center gap-1 inline-flex">
              <Full />
              <Full />
              <Full />
              <Full />
              <Half />
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl border border-zinc-900 w-36 md:w-52 p-2 md:p-4 flex flex-col gap-4">
            <div className="justify-start items-center gap-4 inline-flex">
              <img src={pointer} alt="" srcset="" />
              <div className="text-white text-sm font-normal font-openSans leading-tight">
                Data Structures and Algorithms
              </div>
            </div>
            <div className="justify-start items-center gap-1 inline-flex">
              <Full />
              <Full />
              <Full />
              <Full />
              <Half />
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl border border-zinc-900 w-36 md:w-52 p-2 md:p-4  flex flex-col gap-4">
            <div className="justify-start items-center gap-4 inline-flex">
              <img src={pointer} alt="" srcset="" />
              <div className="text-white text-sm font-normal font-openSans leading-tight">
                Git and Git
              </div>
            </div>
            <div className="justify-start items-center gap-1 inline-flex">
              <Full />
              <Full />
              <Full />
              <Full />
              <Half />
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl border border-zinc-900 w-36 md:w-52 p-2 md:p-4  flex flex-col gap-4">
            <div className="justify-start items-center gap-4 inline-flex">
              <img src={pointer} alt="" srcset="" />
              <div className="text-white text-sm font-normal font-openSans leading-tight">
                Storytelling
              </div>
            </div>
            <div className="justify-start items-center gap-1 inline-flex">
              <Full />
              <Full />
              <Full />
              <Full />
              <Half />
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl border border-zinc-900 w-36 md:w-52 p-2 md:p-4  flex flex-col gap-4">
            <div className="justify-start items-center gap-4 inline-flex">
              <img src={pointer} alt="" srcset="" />
              <div className="text-white text-sm font-normal font-openSans leading-tight">
                Usability Testing
              </div>
            </div>
            <div className="justify-start items-center gap-1 inline-flex">
              <Full />
              <Full />
              <Full />
              <Full />
              <Half />
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl border border-zinc-900 w-36 md:w-52 p-2 md:p-4  flex flex-col gap-4">
            <div className="justify-start items-center gap-4 inline-flex">
              <img src={pointer} alt="" srcset="" />
              <div className="text-white text-sm font-normal font-openSans leading-tight">
                Wireframing
              </div>
            </div>
            <div className="justify-start items-center gap-1 inline-flex">
              <Full />
              <Full />
              <Full />
              <Full />
              <Empty />
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl border border-zinc-900 w-36 md:w-52 p-2 md:p-4  flex flex-col gap-4">
            <div className="justify-start items-center gap-4 inline-flex">
              <img src={pointer} alt="" srcset="" />
              <div className="text-white text-sm font-normal font-openSans leading-tight">
                Service Design
              </div>
            </div>
            <div className="justify-start items-center gap-1 inline-flex">
              <Full />
              <Full />
              <Full />
              <Half />
              <Empty />
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl border border-zinc-900 w-36 md:w-52 p-2 md:p-4  flex flex-col gap-4">
            <div className="justify-start items-center gap-4 inline-flex">
              <img src={pointer} alt="" srcset="" />
              <div className="text-white text-sm font-normal font-openSans leading-tight">
                Interaction Design
              </div>
            </div>
            <div className="justify-start items-center gap-1 inline-flex">
              <Full />
              <Full />
              <Full />
              <Half />
              <Empty />
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl border border-zinc-900 w-36 md:w-52 p-2 md:p-4  flex flex-col gap-4">
            <div className="justify-start items-center gap-4 inline-flex">
              <img src={pointer} alt="" srcset="" />
              <div className="text-white text-sm font-normal font-openSans leading-tight">
                UX Writing
              </div>
            </div>
            <div className="justify-start items-center gap-1 inline-flex">
              <Full />
              <Full />
              <Full />
              <Empty />
              <Empty />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 md:mt-32 flex flex-col justify-center items-center">
        <div className="px-5 py-1 bg-zinc-900 rounded-xl w-fit text-gray-300 text-sm font-normal font-openSans leading-tight">
          My Top Skills
        </div>
        <div className="text-center text-gray-300 text-base font-normal font-openSans leading-7 mt-2">
          Here is a quick summary of my most recent experiences:
        </div>
        {/* <div className="flex flex-col gap-12 mt-12">
          <WorkItem
            desc={`As a Product Designer at Signzy, I conduct user
                research, design wireframes and prototypes, and collaborate with
                cross-functional teams in an agile environment. My goal is to
                enhance user satisfaction and drive product adoption by
                addressing real business needs.`}
            logo={signzy}
            timeline={"Aug 2023 - Present"}
            role={"Product Designer"}
          />
          <WorkItem
            desc={`Led the design and usability testing of parking feature in their
                flagship Maruti Suzuki Connect app.`}
            logo={company4}
            timeline={"Feb 2023 - June 2023"}
            role={"User Experience Designer"}
          />
          <WorkItem
            desc={`Promoted User Centered Design, developed AI and Blockchain
                Fintech onboarding solutions, and collaborated on user flows and
                prototypes, while also leading design direction and methodology.`}
            logo={signzy}
            timeline={"Sept 2021 - Feb 2022"}
            role={"Product Design Intern"}
          />
          <WorkItem
            desc={`Contributed to all design phases for Samsung Finance+, defining
                research questions, selecting data collection methods, and
                performing primarily qualitative user research for financing
                options on Samsung Galaxy devices.`}
            logo={samsung}
            timeline={"Nov 2021 - Jan 2021"}
            role={"User Research Intern"}
          />
          <WorkItem
            desc={`Worked on UI/UX for software products, driving design direction
                and usability, and delivering innovative solutions that meet
                user and business goals.`}
            logo={company5}
            timeline={"Jul 2021 - Aug 2021"}
            role={"UX/UI Intern"}
          />
          <WorkItem
            desc={`Collaborated with product managers and developers to create
                interactive mobile app designs, translating consumer behavior
                into efficient UI.`}
            logo={company3}
            timeline={"May 2021 - June 2021"}
            role={"User Experience Designer"}
          />
        </div> */}
      </div>
    </div>
  );
};

export default About;
