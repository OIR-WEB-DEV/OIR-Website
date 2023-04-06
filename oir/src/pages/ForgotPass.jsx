import React from 'react'
import Button from '../Components/Button/Button'
import './events.css'


const ForgotPass = () => {
  return (
    <div>
    <div className="rectangle invisible md:visible">
    </div>
    <div className="circle invisible md:visible">
    <div className='text'>
    </div>
    </div>
    <section className="h-screen lg:mr-20 pr-8">
  <div className="h-full lg:mr-10">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        className="shrink-1 mb-12 grow-0 invisible basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src=""
          className="w-full"
          alt="Sample image" />
      </div>
      <div className="mb-12 max-[420px]:ml-10 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <h2 className='underline decoration-yellow-500 font-bold text-amber-900 text-2xl mb-5'>Forgot Password</h2>
        <h1 className='font-bold text-amber-900 text-xl mb-7'>Verify Your Email to reset your password</h1>
        <div class="bg-gray-100 rounded border flex items-center justify-between mb-10"><input type="text" placeholder="Email address" class="bg-transparent text-gray-600 px-4 border-gray-100 focus:ring-1 focus:ring-amber-400 w-full" /> <button class="cursor-pointer flex items-center py-2 px-7 rounded-full border-black text-white hover:ring-2 hover:ring-blue-500 justify-center bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out">Submit</button></div>
        <h2 className='text-lg text-gray-500 mb-3'>OTP</h2>
        <h2 className='text-md text-black mb-5'>Enter the OTP sent on your mail</h2>
        <form action="" method="post">
          <div class="flex flex-col space-y-16">
            <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div class="w-14 h-14 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-amber-900 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:ring-orange-400 focus:border-orange-400" type="text" name="" id="" />
              </div>
              <div class="w-14 h-14 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-amber-900 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:ring-orange-500 focus:border-orange-500" type="text" name="" id="" />
              </div>
              <div class="w-14 h-14 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-amber-900 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:ring-orange-500 focus:border-orange-500" type="text" name="" id="" />
              </div>
              <div class="w-14 h-14 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-amber-900 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:ring-orange-500 focus:border-orange-500" type="text" name="" id="" />
              </div>
            </div>

            <div class="flex flex-col space-y-5">
              <div className='md:ml-[12rem]'>
                <button class="flex flex-row items-center justify-center text-center w-40 border rounded-xl outline-none py-3 cursor-pointer flex items-center py-1 px-4 rounded-full border-black text-white justify-center bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out  border-none text-white text-md hover:ring-2 hover:ring-blue-600 shadow-sm">
                  Reset
                </button>
              </div>

              <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p> <a class="flex flex-row items-center text-blue-500 hover:text-blue-700" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
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
          class="w-96 rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
        />

        <span class="absolute inset-y-0 right-0 grid w-10 place-content-center">
          <button
            type="button"
            class="rounded-full bg-rose-600 p-0.5 text-white hover:bg-rose-700"
          >
            <span class="sr-only">Submit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-4 w-4"
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
  )
}

export default ForgotPass