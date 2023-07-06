import { useNavigate } from "react-router";
import valid from "../assets/valid.png";
import axios from "axios";
import { registerUser } from "../Redux/Actions/AuthActions";
import {connect} from 'react-redux';
import React from "react";
import { Toaster, toast } from "react-hot-toast";

const validation = (props) => {
  // const navigate = useNavigate();
  const id = props.AuthLogin.registerAuth.data.id;
  const handleSendOTP = async (e) => {
    e.preventDefault();
    toast.success("OTP Send Successfully");
    try {
      const result = await axios.get(
        `https://oir-server.vercel.app/api/v1/sendOTP/${id}`
      )
      // navigate('/otp');
    } catch (error) {
      console.log(error.data)
      toast.error(error.data.message)
    }
  }
  return (
    <>
      <div className='mt-36 text-center items-center'>
        <h2 className='underline decoration-yellow-500 mt-15 font-bold text-amber-900 text-2xl mb-2'>Email Validation</h2>
        <div className='text-center '>
          <img src={valid} className='lg:ml-[710px]  min-[900px]:mx-auto min-[1028px]:mx-auto min-[500px]:mx-auto min-[100px]:mx-auto'></img>
        </div>
        <div className="text-amber-900 text-xl font-bold mt-12">
          You’ve entered oir@viit.ac.in as the email address for your account.
          <br></br>Please verify the email address by clicking button below
        </div>
        <button 
        onChange={handleSendOTP}
        className="bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out mb-6 text-white rounded-xl px-2 py-2 mt-6">
          Verify Mail
        </button>
        <Toaster
          position="top-center"
          reverseOrder={true}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ AuthLogin: state.AuthLogin });
const mapDispatchToProps = (dispact) => ({
  registerUser: (userDetails) => dispact(registerUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(validation)

