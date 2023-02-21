import React from 'react'

const Button = ({BtnText}) => {
  return (
    <>
    <div className='flex items-center rounded-md border-black text-white justify-center bg-orange-500 transition duration-100 ease-in-out'>
    <button >
        {BtnText}
    </button>    
    </div>
    </>
  )
}

export default Button