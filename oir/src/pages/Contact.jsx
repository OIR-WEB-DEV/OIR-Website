import React, { useState } from 'react'
import Button from '../Components/Button/Button'
import {toast,Toaster} from 'react-hot-toast';
import './events.css'

const Contact = () => {
  const [name,setName] = useState("");
  const [phone,setphone] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!name)
    {
      toast.error("Full Name is required");
      return;
    }
    if(!phone)
    {
      toast.error("Phone Number is required");
      return;
    }
    else if(phone.length!==10)
    {
      toast.error("Phone Number must be 10 digits");
      return;
    }
    if(!email)
    {
      toast.error("Email is required");
      return;
    }
    else if(!/\S+@\S+\.\S+/.test(email))
    {
      toast.error("Email is Invalid");
      return;
    }
    if(!message)
    {
      toast.error("Message cannot be empty");
      return;
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
                  <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Full Name" 
                  value={name}
                  id='name'
                  onChange={(event) => setName(event.target.value)}
                  required />
                </div>
                <div className="grid gap-6 mb-1 md:grid-cols-2">
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Email address" 
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    required />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label for="contact_num" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                    <input 
                    type="tel" 
                    id="phone" 
                    className="bg-gray-m50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Contact Number" 
                    value={phone}
                    onChange={(event)=>setphone(event.target.value)}
                    required />
                  </div>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label for="contact_num" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
                  <textarea
                    className="peer block min-h-[auto] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="message"
                    value={message}
                    onChange={(event)=>{setMessage(event.target.value)}}
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