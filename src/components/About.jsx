import React from "react";
import { RiAdminFill } from "react-icons/ri";
const About = () => {
  return (
    <>
      <div className="about-container w-full py-4 px-20">
        <div className="about-heading w-full py-14 flex flex-col">
          <h1 className="text-4xl font-bold w-fit self-center">About Us</h1>
        </div>
        <div className="content py-6 px-20 border-y-2 flex flex-row border-slate-200">
          <div className="about-img relative w-1/2 border-r-2 border-slate-200">
            <img
              src="../src/assets/wp883347-grand-theft-auto-v-wallpapers.jpg" className="img1 rounded-lg w-11/12"
              alt="About"
            />
            <img
              src="../src/assets/wp883347-grand-theft-auto-v-wallpapers.jpg" className="img2 rounded-lg w-2/5 absolute -bottom-5 right-8 shadow-img-shadow"
              alt="About"
            />

          </div>
          <div className="about-benefits w-1/2 ml flex flex-col justify-between">
            <Benefit
              icon="bi bi-person-fill"
              heading="Introduction"
              content='Welcome to Hackathon and Coding Club, where alumni come together to create meaningful change. Our alumni community is a force for positive transformation."'
            />
            <Benefit
              icon="bi bi-check-circle-fill"
              heading="Benefits"
              content="Your donations drive our mission to empower future generations through events and programs. Every contribution makes a difference."
            />
            <Benefit
              icon="bi bi-person-fill"
              heading="Recognition"
              content="As a gesture of gratitude, we proudly showcase our generous alumni donors on our website."
            />
          </div>
        </div>
      </div>
    </>
  );
};
const Benefit = ({ icon, heading, content }) => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <div className="text-[30px] bg-gradient-to-r from-amber-400 via-amber-300 to-orange-200 text-transparent bg-clip-text ">
          <i className={icon}></i>
        </div>
        <div className="flex-col justify-start items-start gap-3 inline-flex">
          <div className=" text-gray-800 text-2xl font-medium pt-[6px]">
            {heading}
          </div>
          <div className="about-benefits text-slate-500 text-base font-medium leading-normal">
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
/* bi bi-person-fill */
/* bi bi-check-circle-fill */
/* "bi bi-star-fill */
