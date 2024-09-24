import React from "react";
import pic1 from "../../assets/mocks/image 6.png";
import pic2 from "../../assets/mocks/image 7.png";
import pic3 from "../../assets/mocks/image 8.png";
const Project5 = () => {
  return (
    <div className="bg-teal-600 h-full flex gap-4 justify-center">
      <img src={pic1} alt="" srcset="" className="mt-[15%] h-[40%]" />
      <img src={pic2} alt="" srcset="" className="my-auto h-[40%]" />
      <img src={pic3} alt="" srcset="" className="mt-[45%] h-[40%]" />
    </div>
  );
};

export default Project5;
