import React, { useState } from "react";
import Button from "../Components/Button/Button";
import "./events.css";
import axios from "axios";

const ForgotPass = () => {
  const [email,setEmail] = useState(null);
  const handleChange = (event) => {
    setEmail((prevEmail) => ({
      ...prevEmail,
      email: event.target.value,
    }));
  }
  const handleForgot = async(e) => {
    e.preventDefault();
    const result = axios.post(
      "https://oir-server.vercel.app/api/v1/forgotPasswordUserVerify",

    )
  }
  return (
    <div>
      <div className="rectangle invisible md:visible"></div>
      <div className="circle invisible md:visible">
        <div className="text"></div>
      </div>
      <section className="h-screen lg:mr-20 pr-8">
        <div className="h-full lg:mr-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 invisible basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img src="" className="w-full" alt="Sample image" />
            </div>
            <div className="mb-12 max-[420px]:ml-10 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <h2 className="underline decoration-yellow-500 font-bold text-amber-900 text-2xl mb-5">
                Forgot Password
              </h2>
              <h1 className="font-bold text-amber-900 text-xl mb-7">
                Verify Your Email to reset your password
              </h1>
              <div className="bg-gray-100 rounded border flex items-center justify-between mb-10">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email.email.email}
                  onChange={handleChange}
                  required
                  placeholder="Email address"
                  className="bg-transparent text-gray-600 px-4 border-gray-100 focus:ring-1 focus:ring-amber-400 w-full"
                />{" "}
                <button onClick={handleForgot} className="cursor-pointer flex items-center py-2 px-7 rounded-full border-black text-white hover:ring-2 hover:ring-blue-500 justify-center bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out">
                  Submit
                </button>
              </div>
              <h2 className="text-lg text-gray-500 mb-3">OTP</h2>
              <h2 className="text-md text-black mb-5">
                Enter the OTP sent on your mail
              </h2>
              <form action="" method="post">
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-14 h-14 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-amber-900 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-14 h-14 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-amber-900 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-14 h-14 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-amber-900 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-14 h-14 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-amber-900 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div className="md:ml-[12rem]">
                      <button className="flex flex-row items-center justify-center text-center w-40 border rounded-xl outline-none py-3 cursor-pointer flex items-center py-1 px-4 rounded-full border-black text-white justify-center bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out  border-none text-white text-md hover:ring-2 hover:ring-blue-600 shadow-sm">
                        Reset
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-blue-500 hover:text-blue-700"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              {/* <div className='relative'>
        <label for="UserEmail" className="sr-only"> Email </label>

        <input
          type="email"
          id="UserEmail"
          placeholder="Email address"
          className="w-96 rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
        />

        <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
          <button
            type="button"
            className="rounded-full bg-rose-600 p-0.5 text-white hover:bg-rose-700"
          >
            <span className="sr-only">Submit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
            </svg>
          </button>
        </span>
        </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPass;
