import React, { useState } from "react";
import Button from "../Components/Button/Button";
import Dropdown from "../Components/Dropdown";
import "./events.css";
import { connect } from "react-redux";
import { loginUser } from "../Redux/Actions/AuthActions";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Login = (props) => {
  const [checked, setChecked] = React.useState(false);
   //const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const details = { ...data, [event.target.name]: event.target.value };
    setData(details);
    setChecked(event.target.checked);
  };

  const handleSubmit = async(e) => { 
    e.preventDefault();
    console.log(data);
    const result = await axios.post(
      "https://oir-server.vercel.app/api/v1/login",
      data
    )
    console.log(result)
    try {
      const result = await axios.post(
        "https://oir-server.vercel.app/api/v1/login",
        data
      )
      console.log(result)
      if(result.data.success)
      {
        toast.success("Login Successfully");
      }
      else{
        console.log(result);
      }
    } catch (error) {
     console.log(error)
      toast.error(error.response.data.message,{duration:5000})
    }
  }

  return (
    <div>
      <div className="rectangle hidden lg:block"></div>
      <div className="circle hidden lg:block">
        <div className="text">
          <h1 className="text-4xl mt-24">Login As</h1>
          <p className="mt-24 mr-8 text-2xl para text-white">
            Login and discover great new opportunities !
          </p>
          <Dropdown />
        </div>
      </div>
      <section className="h-screen lg:mr-20 pr-8">
        <div className="block lg:hidden ml-3">
          <h1 className="text-xl font-bold text-amber-900 mt-10">
            Login As <Dropdown />
          </h1>
          <p className="mr-3 text-xl text-gray-600 mt-3">
            Login and discover great new opportunities !
          </p>
        </div>
        <div className="h-full lg:mt-18 lg:mr-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12"></div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <h2 className="underline decoration-yellow-500 font-bold text-amber-900 text-2xl mb-2">
                Student Login
              </h2>
              <form method="post">
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 mr-3 text-lg">Sign in with</p>
                  <button
                    type="submit"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className=" ml-1 mr-2 h-9 w-9 rounded-full bg-black uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mx-2 h-9 w-9 rounded-full bg-black uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    <svg
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mx-2 h-9 w-9 rounded-full bg-black uppercase leading-normal font-bold text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    G
                  </button>
                </div>

                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                    OR
                  </p>
                </div>

                <div className="relative mb-3">
                  <input
                    type="email"
                    className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                    id="email"
                    placeholder="Enter Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                  <label
                   htmlFor="floatingInput"
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
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                  <label
                    htmlFor="floatingPassword"
                    className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
                  >
                    Password
                  </label>
                </div>

                <div className="mb-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <div className="flex items-center mb-2">
                      <input
                        id="Remember-me"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                       htmlFor="Remember-me"
                        className="text-sm ml-2 font-medium text-gray-700 dark:text-gray-300"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <a href="/forgot" className="text-blue-500 hover:text-blue-800">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center lg:text-left">
                  {/* <Button text={"Login"} className=""></Button> */}
                  <div className=" mt-5 cursor-pointer flex items-center py-3 px-8 rounded-full border-black text-white justify-center bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className=" text-white font-bold"
                    >
                      Login
                    </button>
                  </div>
                  <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                    Don't have an account?
                    <a
                      href="/signup"
                      className="text-amber-700 transition duration-150 ease-in-out hover:text-blue-700 focus:text-danger-600 active:text-danger-700"
                    >
                      Register
                    </a>
                  </p>
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
const mapStateToProps = (state) => ({ AuthLogin: state.AuthLogin });
const mapDispatchToProps = (dispact) => ({
  loginUser: (userDetails) => dispact(loginUser(userDetails)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
