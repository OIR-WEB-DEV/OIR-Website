import React from 'react'
import Button from '../Button/Button'
import viitLogo from '../../Assets/viit-logo.png'
import oirLogo from '../../Assets/oir-logo.png'

const logos=[
  {
    src:viitLogo,
    alt:'viit-logo',
  },
  {
    src:oirLogo,
    alt:'oir-logo',
  },
]

const NavBar = ({navbarData}) => {
  return (
    <header className='w-screen backdrop-blur bg-white/90 fixed  z-30 top-0 px-7 h-20 flex items-center justify-around shadow-md'>
      <div className="w-[80%] flex justify-between content-center">
      <div className='flex items-center justify-center pt-1'>
        {
          logos.map((logo,index)=>(
            <img src={logo.src} key={index} alt={logo.alt} className='h-12 mx-3' />
          ))
        }
      </div>
      <div className='flex flex-row px-16 items-center'>
        <nav >
          <ul className='flex gap-12 pb-2 '>
            {
              navbarData.map((item,index)=>(
                <li key={index} className='cursor-pointer font-semibold text-oirBrown hover:text-oirOrange'>{item.text}</li>
              ))
            }
          </ul>
          <hr className='border-oirOrange w-[110%]' />
        </nav>
      </div>
      </div>
      <div className='flex'>
       <Button text={"Login/SignUp"}/>
      </div>
    </header>
  )
}

export default NavBar