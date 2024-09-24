import React, { useState } from "react";
import filled from "../../assets/svgs/filled.svg";
import { FaBehanceSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com"; // Import EmailJS

const Footer = () => {
  const [email, setEmail] = useState(''); // State for email input
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update email state
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    const templateParams = {
      from_email: email,
      to_email: 'avinashsarojpersonal@gmail.com',
      message: `User subscribed with email: ${email}`,
    };

    emailjs.send('service_gms0bfe', 'template_bfdn4q3', templateParams, 'k8gDO4DcnhhOxgoyL')

      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setEmail(''); // Clear input field after sending
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
      });
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col bg-zinc-800 rounded-t-xl px-8 md:px-24">
          <div className="flex justify-between items-center border-b-[1px] py-12 border-gray-600">
            <div className="text-white text-3xl md:text-[4rem]">Let's Connect</div>
          </div>
          <div className="py-9 flex flex-col md:flex-row border-b-[1px] border-gray-600">
            <div className="basis-1/2 text-white text-xl">
              Got a project? Let’s Talk
              <div className="flex my-2 gap-4">
                <FaLinkedin
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/avinashsaroj", "_blank");
                  }}
                />
                <FaGithub
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => {
                    window.open("https://github.com/avinashsaroj01", "_blank");
                  }}
                />
                <MdMail
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => {
                    window.open("mailto:avinashsaroj99@gmail.com");
                  }}
                />
              </div>
            </div>
            <div className="basis-1/2 flex justify-between">
              <div className="flex flex-col gap-2">
                <div className="text-red-400 text-xl mb-2">Navigation</div>
                <div onClick={() => navigate("/")} className="text-white cursor-pointer">Home</div>
                <div onClick={() => navigate("/about")} className="text-white cursor-pointer">About Me</div>
                <div onClick={() => navigate("/resume")} className="text-white cursor-pointer">Resume</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-red-400 text-xl mb-2">Contact</div>
                <div onClick={() => window.open("mailto:avinashsaroj99@gmail.com", "_blank")} className="text-white cursor-pointer">
                  avinashsaroj99@gmail.com
                </div>
              </div>
              <div className="flex flex-row h-fit">
                <form onSubmit={sendEmail} className="flex items-center">
                  <input
                    className="p-2 rounded-l-lg"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <button type="submit" className="bg-red-400 flex justify-center items-center p-2 rounded-r-lg">
                    <img src={filled} alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="py-9 flex flex-col md:flex-row justify-between">
            <div className="text-white">Copyright © 2024 All Rights Reserved.</div>
            <div className="text-white md:text-sm text-xs">
              Developed By{" "}
              <span
                className="text-red-400 cursor-pointer"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/avinashsaroj", "_blank");
                }}
              >
                Avinash Saroj
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
