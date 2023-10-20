import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero-container flex flex-row px-20 py-20">
        <div className="hero-txt-container w-1/2">
          <div className="hero-title text-[52px]/[68px] text-black font-bold font-['SF Pro Display']">
            "Join hands with us to support our club's events and programs."
          </div>
          <div className="hero-subtitle font-medium text-slate-600 mt-12 ">
            Your donations drive our mission to future generations through
            <br />
            events and programs. Every contribution makes a difference
          </div>
          <div className="hero-btn mt-12">
            <button className="px-9 rounded-lg py-4 text-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-orange-200 font-bold uppercase shadow-hero-btn-shadow">
              Donate Now
            </button>
          </div>
        </div>
        <div className="hero-img w-1/2 mx-auto">
          <img
            src="../src/assets/wp883347-grand-theft-auto-v-wallpapers.jpg"
            className="w-10/12 mx-auto h-fit"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
