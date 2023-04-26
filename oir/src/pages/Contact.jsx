import React, { useState } from 'react'
import Button from '../Components/Button/Button'
import {toast,Toaster} from 'react-hot-toast';
import axios from 'axios'
import './events.css'

const Contact = () => {
  const [data,setdata] = useState({
    name:"",
    contact:"",
    email:"",
    message:"",
  });
  const [error,setErrors] = useState({
    name:"",
    contact:"",
    email:"",
    message:"",
  });


  const handleChange = async(event) => {
    const newData = {...data,[event.target.name]:event.target.value};
    setdata(newData);
  }
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {
      name:"",
      contact:"",
      email:"",
      message:"",
    }
    if(!name)
    {
      newErrors.name = "Full Name is required";
      toast.error(newErrors.name);
      formIsValid = false;
    }
    if(!contact) 
    {
      newErrors.contact = "Phone Number is required";
      toast.error(newErrors.contact);
      formIsValid = false;
    }
    else if(contact.length!==10)
    {
      newErrors.contact = "Phone Number must be 10 digits";
      toast.error(newErrors.phone);
      formIsValid = false;
    }
    if(!email)
    {
      newErrors.email = "Email is required"
      toast.error(newErrors.email);
      formIsValid = false;
    }
    else if(!/\S+@\S+\.\S+/.test(email))
    {
      newErrors.email = "Email is Invalid";
      toast.error(newErrors.email);
      return;
    }
    if(!message)
    {
      newErrors.message = "Message cannot be empty";
      toast.error(newErrors.message);
      formIsValid = false;
    }
    return formIsValid;
  }
  const {name,contact,email,message} = data;

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const formIsValid = validateForm();
    if (!formIsValid) {
      return;
    }
    try {
      const result = await axios.post(
        "https://oir-server.vercel.app/api/v1/contactUs",
        data
      )
      if(result.data.success)
      {
        toast.success(result.data.message,{duration:5000});
      }
      else if(!result.data.success)
      {
        toast.error("Failed to Send Message");
      }
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message,{duration:5000})
      
    }
  }
  return (
    <div>
      <div className="rectangle invisible lg:visible">
      </div>
      <div className="circle invisible lg:visible">
        <div className='text'>
          <p className='mt-[180px] ml-20 text-6xl text-#FBF2DE font-bold' style={{ lineHeight: "80px" }}>Happy to<br></br> Help :)</p>
        </div>
      </div>
      <section className="h-screen lg:mr-20 pr-8">
        <div className="h-full lg:mr-10">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
              className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src=""
                className="w-full" />
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <h2 className='underline decoration-yellow-500 font-bold text-amber-900 text-2xl mb-7'>Contact Us</h2>
              <form method='post'>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input 
                  type="text" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Full Name" 
                  value={data.name}
                  id='name'
                  name='name'
                  onChange={handleChange}
                  required />
                </div>
                <div className="grid gap-6 mb-1 md:grid-cols-2">
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                    type="email" 
                    name='email'
                    id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Email address" 
                    value={data.email}
                    onChange={handleChange}
                    required />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label htmlFor="contact_num" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                    <input 
                    type="tel" 
                    name='contact'
                    id="contact" 
                    className="bg-gray-m50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Contact Number" 
                    value={data.contact}
                    onChange={handleChange}
                    required />
                  </div>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="contact_num" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
                  <textarea
                    className="peer block min-h-[auto] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="message"
                    name='message'
                    value={data.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Enter message"></textarea>
                </div>
                <Button text={"Submit"} onClick={handleSubmit} className="mt-5"></Button>
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
  )
}

export default Contact