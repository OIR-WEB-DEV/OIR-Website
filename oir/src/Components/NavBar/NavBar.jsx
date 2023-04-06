import React, { useState } from 'react'
import Button from '../Button/Button'
import viitLogo from '../../assets/viit-logo.png'
import oirLogo from '../../assets/oir-logo.png'
import { RxCross2 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import { Sidebar, SidebarItemPhone } from '../Sidebar/Sidebar';

const logos = [
  {
    id: 1,
    src: viitLogo,
    alt: 'viit-logo',
  },
  {
    id: 2,
    src: oirLogo,
    alt: 'oir-logo',
  },

]

const NavBar = ({ navbarData }) => {


  // for sidebar, mobile screen
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => (
    setIsOpen(!isOpen)
  )

  return (
    <>
      <header className='w-screen backdrop-blur bg-white/90 fixed  z-30 top-0 px-7 h-20 flex items-center justify-around shadow-md '>

        {/* hidden for lg , visible for mobile */}

        <div className="flex items-center justify-center text-2xl border-2 p-2 text-oirPurple border-oirPurple rounded-full cursor-pointer lg:hidden" onClick={handleClick}>{!isOpen ? <div className='rotate-0 duration-150'><MdMenu /></div> : <div className='rotate-180 duration-200'> <RxCross2 /></div>}</div>



        <div className="w-[93%] lg:w-[80%] flex justify-center lg:justify-between content-center">
          <div className='flex items-center justify-center pt-1'>
            {
              logos.map((logo) => (
                <img src={logo.src} key={logo.id} alt={logo.alt} className='h-12 mx-3' />
              ))
            }
          </div>
          <div className='flex flex-row px-0 lg:px-16 items-center'>

            {/* hidden for below lg, for desktop */}
            <nav className='hidden lg:flex flex-col' >
              <ul className='flex gap-10 pb-2 '>
                {
                  navbarData.map((item) => (
                    <NavLink to={item.link} key={item.key}>
                      {({ isActive }) => (
                        <li
                          className={[
                            "cursor-pointer text-sm font-semibold hover:text-oirOrange",
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
        <div className=' hidden lg:flex'>
          <Button text={"Login/SignUp"} />
        </div>
        </header >

        {!isOpen ?
          <div className="flex flex-col absolute top-20 z-30 lg:hidden -translate-x-64 duration-200">
            <Sidebar />
          </div> :
          (<div className="flex flex-col absolute top-20 z-30 lg:hidden duration-300">
            <Sidebar name={"ketty Bruno"} email={"kettybruno@viit.ac.in"}>
              {
                navbarData.map((item) => (
                  <SidebarItemPhone key={item.id} title={item.text} link={item.link} />
                ))
              }
            </Sidebar>
          </div>)
        }

      
    </>
  )
}

export default NavBar