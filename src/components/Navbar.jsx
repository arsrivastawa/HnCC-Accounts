import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container py-[46px] px-20 flex justify-between items-center w-full">
        <div className="logo-container">
          <img
            src="../src/assets/hncc-logo.jpg"
            alt="logo"
            className="w-[80px] h-fit"
          />
        </div>
        <div className="btns-container flex justify-between items-center w-[56%] text-xl">
          <div className="navigation-btn-container text-lg">
            <button className="mr-9">HOME</button>
            <button>ABOUT US</button>
          </div>
          <div className="auth-btn-container flex flex-row w-fit">
            <div className="w-fit flex flex-row items-center  text-white bg-black px-[30px] rounded-lg py-4">
              <RiAdminFill />
              <span className="ml-3">Admin</span>
            </div>
            <div className="w-fit flex flex-row items-center text-white bg-black py-4 px-[30px] rounded-lg ml-12">
              <BiSolidUser />
              <span className="ml-3">Login / Register</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
