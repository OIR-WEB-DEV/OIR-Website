import React from 'react'

const Button = ({ text, onClick , className  }) => {
  return (
    <div className={`cursor-pointer flex items-center py-3 px-8 rounded-full border-black text-white justify-center bg-gradient-to-r from-oirYellow to-oirOrange transition duration-100 ease-in-out  ${className} `}
        onClick={onClick}>
      <button className=' text-white font-bold'>
        {text}
      </button>
    </div>
  )
}

export default Button