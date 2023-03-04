import React from 'react'
import Button from '../Button/Button'
import viitLogo from '../../assets/viit-logo.png'
import oirLogo from '../../assets/oir-logo.png'
import { NavLink } from 'react-router-dom'

const logos = [
  {
    id:1,
    src: viitLogo,
    alt: 'viit-logo',
  },
  {
    id:2,
    src: oirLogo,
    alt: 'oir-logo',
  },

]

const NavBar = ({ navbarData }) => {
  return (
    <header className='w-screen backdrop-blur bg-white/90 fixed  z-30 top-0 px-7 h-20 flex items-center justify-around shadow-md'>
      <div className="w-[80%] flex justify-between content-center">
        <div className='flex items-center justify-center pt-1'>
          {
            logos.map((logo) => (
              <img src={logo.src} key={logo.id} alt={logo.alt} className='h-12 mx-3' />
            ))
          }
        </div>
        <div className='flex flex-row px-16 items-center'>
          <nav >
            <ul className='flex gap-12 pb-2 '>
              {
                navbarData.map((item) => (
                  <NavLink to={item.link} key={item.key}>
                    {({ isActive }) => (
                      <li
                        className={[
                          "cursor-pointer font-semibold hover:text-oirOrange",
                          isActive ? "text-oirOrange" : "text-oirBrown"
                        ].join(" ")}
                      >
                        {item.text}
                      </li>

                    )}
                  </NavLink>
                ))
              }
            </ul>
            <hr className='border-oirOrange w-[110%]' />
          </nav>
        </div>
      </div>
      <div className='flex'>
        <Button text={"Login/SignUp"} />
      </div>
    </header>
  )
}

export default NavBar