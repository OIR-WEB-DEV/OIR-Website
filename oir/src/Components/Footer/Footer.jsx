import React from 'react'
import oirShortLogo from '../../assets/oir-short-logo.png'
import { MdCall, MdEmail, MdLocationPin, MdKeyboardArrowRight } from "react-icons/md";
import { FaLinkedinIn, FaInstagram, FaDiscord, FaRegEnvelope } from "react-icons/fa";
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const contactInfo = [
  {
    id: 1,
    icon: <MdCall />,
    info: "+91 9876543210",
    hrefdata: "tel:+919876543210"
  },
  {
    id: 2,
    icon: <MdEmail />,
    info: "voir@viit.ac.in",
    hrefdata: "mailto:voir@viit.ac.in"
  },
  {
    id: 3,
    icon: <MdLocationPin />,
    info: "VIIT, Pune",
    hrefdata: "https://goo.gl/maps/k2oB3DZFPRYCvq3F9"
  },

]

const FooterLinks = [
  {
    id: 1,
    text: "Contact Us ",
    link: "/contact",
  },
  {
    id: 2,
    text: "Events",
    link: "/events",
  },
  {
    id: 3,
    text: "Internships",
    link: "/internships",
  },
  {
    id: 4,
    text: "Sign Up",
    link: "/SignUp",
  },
]
const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/office-of-international-relations-viit"
  },
  {
    id: 2,
    icon: <FaInstagram />,
    link: "https://instagram.com/oir_viit?igshid=YmMyMTA2M2Y="
  },
  {
    id: 3,
    icon: <FaRegEnvelope />,
    link: "mailto:voir@viit.ac.in"
  },
  {
    id: 4,
    icon: <FaDiscord />,
    link: "https://discord.gg/SaMYfE8P"
  },

]
const Footer = () => {
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-[1.5fr_0.6fr_0.9fr_1.6fr] bg-oirBrown gap-3 '>
      
      <div className='grid grid-rows-[1fr_0.6fr] gap-2 sm:gap-0 sm:grid-rows-2 bg-oirLightOrange p-6'>
        <div className='flex '>
          <img className='h-14' src={oirShortLogo} alt="short logo" />
          <p className='font-regular text-sm mx-6 leading-none'>Our mission is to facilitate international academic exchange and assist students in pursuing their masters degree abroad.</p>
        </div>

        <div className='flex items-center sm:items-end'>
          <ul className='leading-relaxed flex lg:block'>
            {
              contactInfo.map((contact) => (
                <a target={"_blank"} rel="noreferrer" key={contact.id} href={contact.hrefdata} className="hover:text-oirYellow"><li className='text-xs font-medium flex content-center leading-relaxed'><span className=' text-[#1C1B1F] text-sm ml-2 mr-1 sm:ml-0 sm:mr-3 flex content-center flex-wrap hover:text-oirYellow'>{contact.icon}</span> {contact.info}</li></a>

              ))
            }
          </ul>
        </div>
      </div>

      <div className='px-6 py-5 text-white'>
        <h1 className=' font-bold text-xl'>Fast Links</h1>
        <ul className='mt-2 flex gap-2 sm:gap-5 lg:block'>
          {
            FooterLinks.map((link) => (
              <NavLink  key={link.id} to={link.link}>
                <li className=' cursor-pointer font-regular text-xs sm:text-sm leading-6 flex hover:underline hover:decoration-dotted'>{link.text}<span className='flex text-lg content-center flex-wrap'><MdKeyboardArrowRight /></span></li></NavLink>
          
            ))
          }
        </ul>
      </div>

      <div className='px-6 py-5 text-white'>
        <h1 className=' font-bold text-xl flex '>Connect With Us</h1>
        <div className="flex lg:justify-center">
          <div className='grid w-[34%] grid-cols-4 lg:grid-cols-2 lg:grid-rows-2 text-xl gap-5 mt-2 mr-3'>
            {
              socialLinks.map((socialLink) => (
                <a target="_blank" rel="noreferrer" key={socialLink.id} href={socialLink.link}><p className='flex content-center flex-wrap hover:text-oirYellow text-2xl'>{socialLink.icon}</p></a>

              ))

            }
          </div>
        </div>

      </div>

      <div className='px-6 py-5 mr-1 text-white'>
        <h1 className="font-bold text-3xl">Curious about our work?</h1>
        <p className='font-medium text-base flex flex-wrap leading-tight'>Join the community by taking the first step of Signing Up.</p>
        <div className='flex w-full lg:justify-end mt-3'>
          <Button text={"Login/SignUp"} />
        </div>

      </div>
    </div>
  )
}

export default Footer