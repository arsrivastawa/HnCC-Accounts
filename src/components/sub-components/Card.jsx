import React from "react";

const Card = ({ name, designation }) => {
  return (
    <>
      <div className="main w-64 group rounded-md overflow-hidden">
        <div className="img w-64 zoo">
          <img
            src="../src/assets/alumni.jpg"
            className="group-hover:scale-[1.05] duration-200"
            alt="Alumni"
          />
        </div>
        <div className="title-logo relative">
          <div className="logo absolute right-[-60%] duration-200 top-[-25%] group-hover:right-0 bg-gradient-to-r from-amber-400 via-amber-300 text-base to-orange-200 px-[10px] py-3 flex justify-between w-fit">
            <i class="bi bi-facebook px-2"></i>
            <i class="bi bi-twitter-x px-2 "></i>
            <i class="bi bi-linkedin px-2 "></i>
            <i class="bi bi-instagram px-2 "></i>
          </div>
          <div className="txt bg-black text-white w-full px-6 py-4">
            <div className="name text-base">{name}</div>
            <div className="designaiton text-slate-400 text-[12px] mt-1">{designation}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
