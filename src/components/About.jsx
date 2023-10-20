import React from "react";
import { RiAdminFill } from "react-icons/ri";
const About = () => {
  return (
    <>
      <div className="about-container w-screen py-4 px-20">
        <div className="about-heading w-full py-14 flex flex-col border-b-2 border-slate-300">
          <h1 className="text-4xl font-bold w-fit self-center">About Us</h1>
        </div>
        <div className="about-img relative w-1/2">
          <img src="" alt="" />  
        </div>
        <div className="about-content w-1/2">
          <Benefit icon="bi bi-person-fill" heading="Introduction" content='Welcome to Hackathon and Coding Club, where alumni come together to create meaningful change. Our alumni community is a force for positive transformation."'/>
          <Benefit icon="bi bi-check-circle-fill" heading="Benefits" content='Your donations drive our mission to empower future generations through events and programs. Every contribution makes a difference.'/>
          <Benefit icon="bi bi-person-fill" heading="Recognition" content='As a gesture of gratitude, we proudly showcase our generous alumni donors on our website.'/>
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
          <i class={icon}></i>
        </div>
        <div className="flex-col justify-start items-start gap-3 inline-flex">
          <div className=" text-gray-800 text-2xl font-medium pt-[6px]">{heading}</div>
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
