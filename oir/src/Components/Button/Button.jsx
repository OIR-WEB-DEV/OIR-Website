import React from 'react'

const Button = ({ text }) => {
  return (
    <div className=' cursor-pointer flex items-center py-3 px-8 rounded-full border-black text-white justify-center bg-gradient-to-r from-oirYellow to-oirOrange hover:to-[#FF814D] hover:from-[#FFCE71] transition duration-100 ease-in-out'>
      <button className=' text-white font-bold'>
        {text}
      </button>
    </div>
  )
}

export default Button