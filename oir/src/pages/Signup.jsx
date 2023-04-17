import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import Button from "../Components/Button/Button";
import {toast,Toaster} from 'react-hot-toast';
import "./events.css";
import axios from "axios";

const Signup = () => {
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    if (!email) {
      newErrors.email = "Email is required";
      toast.error(newErrors.email);
      formIsValid = false;
      
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      toast.error(newErrors.email)
      formIsValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      toast.error(newErrors.password)
      formIsValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password should be at least 6 characters long";
      toast.error(newErrors.password)
      formIsValid = false;
    }

    if (!firstName) {
      newErrors.firstName = "First Name is required";
      toast.error(newErrors.firstName)
      formIsValid = false;
    }

    if (!lastName) {
      newErrors.lastName = "Last Name is required";
      toast.error(newErrors.lastName)
      formIsValid = false;
    }
    setErrors(newErrors);
    return formIsValid;
  };

  const { firstName, lastName, email, password } = data;

  const handleChange = (event) => {
    const newData = { ...data, [event.target.name]: event.target.value };
    setdata(newData);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (isLoading) return;
    const formIsValid = validateForm();
    if (!formIsValid) {
      return;
    }
    setIsLoading(true);
    try{
      const result = await axios.post(
        "https://oir-server.vercel.app/api/v1/register",
        data
      )
      console.log(result)
      if(result.data.success)
      {
        toast.success(result.data.message,{duration:5000});
        setIsLoading(false);
        navigate('/')
      }
      else{
        toast.error("Failed to Register");
      }
      setIsLoading(false);
    } catch(error){
      toast.error(error.response.data.message,{duration:5000})
      setIsLoading(false);
    }

  }

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
              <form method="post" >
                <div className="relative mb-3">
                  <input
                    type="text"
                    className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={data.firstName}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative mb-3">
                  <input
                    type="text"
                    className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={data.lastName}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
                  >
                    Last Name
                  </label>
                </div>
                <div className="relative mb-3">
                  <input
                    type="email"
                    className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-3">
                  <input
                    type="password"
                    className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    value={data.password}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
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
                  <button type="submit" onClick={handleSubmit} className=" text-white font-bold">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={true}
        />
      </section>
    </div>
  );
};

export default Signup;
