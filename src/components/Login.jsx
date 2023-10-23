import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <>
      <div className="backbtn h-[56px] w-[56px]  border-2 border-black mt-[20px] mx-[80px] flex justify-center items-center rounded-full hover:cursor-pointer">
        <Link to={"/combined"}>
          <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
        </Link>
      </div>
      <div className="form h-[600px] w-[580px]  first-letter  mx-[430px] flex flex-col justify-between items-center ">
        <div className="w-full h-fit p-1  flex flex-col items-center">
          <span className="text-3xl font-medium">Log in</span>
          <span>
            Don't have an account?{" "}
            <Link to="/signup">
              <button className="underline text-blue-700">Sign up</button>
            </Link>
          </span>
        </div>
        <div className="w-full h-fit  ">
          <div className="button w-full h-12 border-[1px] border-gray-500 mt-3 mb-3 rounded-3xl flex justify-center items-center text-center hover:cursor-pointer">
            <span className="px-2">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </span>
            <span>Log in with Facebook</span>
          </div>
          <div className="button h-12 w-full hover:cursor-pointer border-[1px] border-gray-500 mt-3 rounded-3xl flex justify-center items-center">
            <span className="px-2">
              <FontAwesomeIcon icon={faGoogle} size="xl" />
            </span>
            <span>Log in with Google</span>
          </div>
        </div>
        <div className="line flex flex-row justify-center items-center mb-10">
          <div className="w-[250px] h-[1px] border-[1px] border-gray-500 "></div>
          <span className="mx-2">OR</span>
          <div className="w-[250px] h-[1px] border-[1px] border-gray-500 "></div>
        </div>
        <div className="w-full h-fit  -mt-12">
          <form action="">
            <div className="mb-6">
              <span className=" text-l">Your email</span>

              <input
                className="w-full border-[1px] border-gray-500 h-12 rounded-md px-2"
                id="email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <span className=" text-l mt-10">Your password</span>

            <input
              className="w-full border-[1px] border-gray-500 h-12 rounded-md px-2"
              id="password"
              type="password"
              placeholder="Your password"
            />
            <button
              className="underline mt-5 text-blue-700 text-sm flex flex-row 
             items-end  w-full "
            >
              <span>Forgot your password</span>
            </button>
          </form>
        </div>
        <div className="w-full h-20  ">
          <button className="w-full bg-black text-white text-2xl p-2 rounded-3xl mt-3">
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
