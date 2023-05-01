import React, { useState } from "react";
import Button from "../Components/Button/Button";
import "./events.css";
import lock from "../assets/lock.png";
import { registerUser } from "../Redux/Actions/AuthActions";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import OtpInput from 'react-otp-input';
import { connect } from "react-redux";
import { useNavigate } from "react-router";

const OtpPage = (props) => {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();
  const id = props.AuthLogin.registerAuth.data.id;
  const handleOTPChange = (otpvalue) => {
    setOTP(otpvalue)
  };
  const handleResendOTP = async (e) => {
    e.preventDefault();
    toast.success("OTP Send Successfully");
    try {
      const result = await axios.get(
        `https://oir-server.vercel.app/api/v1/sendOTP/${id}`
      )
    } catch (error) {
      toast.error(error.data.message)
    }
  }
  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `https://oir-server.vercel.app/api/v1/verifyUser/${id}`,
        { code: otp }
      )
      if (result.data.success) {
        toast.success(result.data.message,{duration:5000});
        navigate('/login');
      }
      else if (!result.data.success) {
        toast.error(result.data.message);
      }
      console.log(result)
    } catch (error) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message)
    }
  }
  return (
    <div>
      <div className="rectangle invisible lg:visible min-[800px]:invisible"></div>
      <div className="circle invisible md:visible">
        <div className="text mt-40 pl-24 ml-[30px]">
          <div className="rounded-full w-48 h-48 ring-2 ring-amber-500">
            <img className="ml-6 pt-2 h-36 w-36" src={lock}></img>
          </div>
        </div>
      </div>
      <section className="h-screen lg:mr-20 pr-8">
        <div className="h-full lg:mr-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 invisible basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img src="" className="w-full" alt="Sample image" />
            </div>
            <div className="mb-12 max-[420px]:ml-10 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 md:mx-auto">
              <h1 className="font-bold text-amber-900 text-xl mb-7">
                Verify your email
              </h1>

              <form action="" method="post">
                <h1 className="items-center">OTP</h1>
                <h2 className="mt-4">Enter the OTP sent on your email</h2>
                <div className="flex flex-row items-center justify-between mr-4 mt-6  max-w-xs">
                  <div className="w-24 h-14 mr-2  ">
                    <OtpInput
                      value={otp}
                      onChange={handleOTPChange}
                      numInputs={6}
                      isInputNum={true}
                      shouldAutoFocus={true}
                      renderSeparator={<span>-</span>}
                      inputStyle={{
                        width:"3rem",
                      }}
                      renderInput={(props) => <input {...props}
                        className="flex flex-col text-lg  text-black items-center justify-center text-center  outline-none rounded-xl border-2 border-amber-900 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      />}
                    />
                  </div>
                </div>
                <div className="flex flex-col  mr-4">
                  <div className="md:ml-[0.5rem] mt-4">
                    <button onClick={handleResendOTP} className="text-oirOrange font-semibold text-md mt-4">
                      Resend OTP
                    </button>
                    <button onClick={handleOTPSubmit} className="flex flex-row items-center justify-center text-center w-40 border rounded-xl outline-none py-3 cursor-pointer flex items-center py-1 px-4 rounded-full border-black text-white justify-center bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out  border-none text-white text-md   shadow-sm mt-4">
                      Submit
                    </button>
                  </div>
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
  registerUser: (userDetails) => dispact(registerUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OtpPage)

