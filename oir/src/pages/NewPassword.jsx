
import React from 'react'
import './events.css'
import tick from '../assets/tick.png'
import lock from '../assets/lock.png'

const NewPassword = () => {
  return (
    <div>
    <div className="rectangle invisible md:visible">
    </div>
    <div className="circle invisible md:visible">
    
    <div className='text mt-40 pl-24 ml-[30px]'>
    <div className='rounded-full w-48 h-48 ring-2 ring-amber-500'><img className='ml-6 pt-2 h-36 w-36' src={lock}></img></div>
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
        <h2 className='underline decoration-yellow-500 font-bold text-amber-900 text-2xl mb-5'>New Password</h2>
        <h1 className='font-bold text-amber-900 text-xl mb-7'>Minimum 6 characters, at least one letter 
and one number</h1>
        <div class="bg-gray-100 rounded border flex items-center justify-between mb-10"><input type="text" placeholder="New Password" class="bg-transparent text-gray-600 px-4 border-gray-100 focus:ring-1 focus:ring-amber-400 w-full" /> <button class="cursor-pointer flex items-center py-2 px-7 rounded-full border-black text-white hover:ring-2 hover:ring-blue-500 justify-center bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out"><img src={tick}></img></button></div>
    
        <form action="" method="post">

        <div class="bg-gray-100 rounded border flex items-center justify-between mb-10"><input type="text" placeholder="Confirm Password" class="bg-transparent text-gray-600 px-4 border-gray-100 focus:ring-1 focus:ring-amber-400 w-full" /> <button class="cursor-pointer flex items-center py-2 px-7 rounded-full border-black text-white hover:ring-2 hover:ring-blue-500 justify-center bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out"><img src={tick} className='w-10 h-10'></img></button></div>
            

            <div class="flex flex-col space-y-5">
              <div className='md:ml-[12rem]'>
                <button class="flex flex-row items-center justify-center text-center w-40 border rounded-xl outline-none py-3 cursor-pointer flex items-center py-1 px-4 rounded-full border-black text-white justify-center bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out  border-none text-white text-md hover:ring-2 hover:ring-blue-600 shadow-sm">
                  Reset Password
                </button>
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

export default NewPassword