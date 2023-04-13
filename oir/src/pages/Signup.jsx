import React, { useState } from "react";
import Button from "../Components/Button/Button";
import "./events.css";
import axios from "axios";

const Signup = () => {
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = data;

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log("Handle Change");
    const newData = { ...data, [event.target.name]: event.target.value };
    setdata(newData);
  };

  const validateForm = () => {
    console.log("Validate Form");
    let formIsValid = true;
    const newErrors = {
      email: "",
      password: "",
      confirmpassword: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    };

    if (!email) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      formIsValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      formIsValid = false;
    } else if (password.length < 8) {
      newErrors.password = "Password should be at least 8 characters long";
      formIsValid = false;
    }

    if (!firstName) {
      newErrors.firstName = "First Name is required";
      formIsValid = false;
    }

    if (!lastName) {
      newErrors.lastName = "Last Name is required";
      formIsValid = false;
    }

    setError(newErrors);
    return formIsValid;
  };

  const handleSubmit = async () => {
    console.log("Handle Submit");
    const formIsValid = validateForm();
    if (!formIsValid) {
      return;
    }
    try {
      const result = await axios.post(
        "https://oir-server.vercel.app/api/v1/register",
        data
      );
      console.log(result);
    } catch (e) {
      console.error(`Error signing up: ${e}`);
    }
  };
  return (
    <div>
      <div className="rectangle hidden lg:block"></div>
      <div className="circle hidden lg:block">
        <div className="text">
          <h1 className="text-4xl mt-24">New Here ?</h1>
          <p className="mt-24 mr-8 text-2xl para text-white">
            Sign up and discover great new opportunities!
          </p>
          <div className="flex">
            <p className="mt-10 pr-24 text-white">
              <input type="checkbox" className="mr-4" />
              Creating an account means you are okay with our{" "}
              <a className="text-oirOrange">Terms and of Service</a> and our{" "}
              <a className="text-oirOrange">Privacy Policy</a>
            </p>
          </div>
          <button className="w-32 h-12 mt-8 rounded-full bg-gradient-to-r from-oirYellow to-oirOrange button ml-24">
            Hello
          </button>
        </div>
      </div>
      <section className="h-screen lg:mr-20 pr-8">
        <div className="h-full lg:mr-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12"></div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <h2 className="underline decoration-yellow-500 font-bold text-amber-900 text-2xl mb-7">
                Sign Up
              </h2>
              <form method="post">
                <div class="relative mb-3">
                  <input
                    type="text"
                    class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                    placeholder="Enter First Name"
                    id="firstName"
                    onChange={handleChange}
                    required
                  />
                  <label
                    for="floatingInput"
                    class="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
                  >
                    First Name
                  </label>
                </div>
                <div class="relative mb-3">
                  <input
                    type="text"
                    class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                    placeholder="Enter last Name"
                    id="lastName"
                    onChange={handleChange}
                    required
                  />
                  <label
                    for="floatingPassword"
                    class="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
                  >
                    Last Name
                  </label>
                </div>
                <div class="relative mb-3">
                  <input
                    type="email"
                    class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                    placeholder="name@example.com"
                    id="email"
                    onChange={handleChange}
                    required
                  />
                  <label
                    for="floatingInput"
                    class="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
                  >
                    Email address
                  </label>
                </div>
                <div class="relative mb-3">
                  <input
                    type="password"
                    class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                    required
                  />
                  <label
                    for="floatingPassword"
                    class="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
                  >
                    Password
                  </label>
                </div>

                <div className="block lg:hidden mb-4">
                  <p className="pr-24 text-amber-800">
                    <input type="checkbox" className="mr-4" />
                    You agree with our{" "}
                    <a className="text-oirOrange">Terms of Service</a> and our{" "}
                    <a className="text-oirOrange">Privacy Policy</a>
                  </p>
                </div>
                {/* <Button text={"Register"} onSubmit={handleSubmit}  className="mt-5"></Button> */}
                <div className=" mt-5 cursor-pointer flex items-center py-3 px-8 rounded-full border-black text-white justify-center bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out">
                  <button onSubmit={handleSubmit} className=" text-white font-bold">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
