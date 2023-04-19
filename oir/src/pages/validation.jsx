
import valid from '../assets/valid.png'
import React from 'react'

const validation = () => {
  return (
    <>
        <div className='mt-36 text-center items-center'>
        <h2 className='underline decoration-yellow-500 mt-15 font-bold text-amber-900 text-2xl mb-2'>Email Validation</h2>
        <div className='text-center '>
        <img src={valid} className='lg:ml-[710px]  min-[900px]:mx-auto min-[1028px]:mx-auto min-[500px]:mx-auto'></img>
        </div>
        <div className='text-amber-900 text-xl font-bold mt-12'>You’ve entered oir@viit.ac.in as the email address for your account.<br></br>Please verify the email address by clicking button below</div>
        <button className='bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out mb-6 text-white rounded-xl px-2 py-2 mt-6'>Verify Mail</button>
        </div>
    </>
  )
}

export default validation