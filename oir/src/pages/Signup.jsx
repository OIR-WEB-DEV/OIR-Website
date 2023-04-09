import React from 'react'
import Button from '../Components/Button/Button'
import './events.css'


const Signup = () => {

  return (
    <div>
    <div className="rectangle hidden lg:block">
    </div>
    <div className="circle hidden lg:block" >
    <div className='text'>
    <h1 className='text-4xl mt-24'>New Here ?</h1>
    <p className='mt-24 mr-8 text-2xl para text-white'>Sign up and discover  great new opportunities!</p>
    <div className='flex'>
    
    <p className='mt-10 pr-24 text-white'><input type='checkbox' className='mr-4'/>Creating an account means you are okay with our <a className='text-oirOrange'>Terms and of Service</a> and our <a className='text-oirOrange'>Privacy Policy</a></p>
    </div>
   <button className='w-32 h-12 mt-8 rounded-full bg-gradient-to-r from-oirYellow to-oirOrange button ml-24'>Hello</button>
    </div>
    </div>
  <section className="h-screen lg:mr-20 pr-8">
  <div className="h-full lg:mr-10">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
      </div>
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <h2 className='underline decoration-yellow-500 font-bold text-amber-900 text-2xl mb-7'>Sign Up</h2>
        <form method='post'>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-2 border-black-700 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput2"
              placeholder="Full Name" />
            <label
              htmlFor="exampleFormControlInput2"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >Full Name
            </label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-2 border-black-700 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput2"
              placeholder="Email address" />
            <label
              htmlFor="exampleFormControlInput2"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >Email address
            </label>
          </div>

          
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-2 border-black-700 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput22"
              placeholder="Password" />
            <label
              htmlFor="exampleFormControlInput2"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >Password
            </label>
          </div>
         <div className='block lg:hidden mb-4'> 
         <p className='pr-24 text-amber-800'><input type='checkbox' className='mr-4'/>You agree with our <a className='text-oirOrange'>Terms of Service</a> and our <a className='text-oirOrange'>Privacy Policy</a></p></div>
          <Button text={"Register"} className="mt-5"></Button>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
  );
};

export default Signup;