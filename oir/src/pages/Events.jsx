import second from '../assets/speakers.png'
import edfair from '../assets/edfair.png'
import arrow from '../assets/arrow.png'
import orange from '../assets/orangeNicee.png'
import univ from '../assets/universities.png'
import React from 'react'
import image from '../assets/image.png'
import { guest } from './data' 
import './events.css'
import button from '../assets/button.png'


const Events = () => {
  return (
    <>
    <h3 className='the-event mt-20'>Global Education Fair</h3>
    <div className='the-images'>
        <img src={second} className="the-image"></img>
        <img src={edfair} className="the-image"></img>
        <h3 className='the-event'>International Webinar Series</h3>
        <img src={image} className="the-image"></img>
    </div>
    <div style={{position:'absolute'}} className='hello'>                                                
    <img className='arrow' src={arrow}></img>                                                
    <img className='orange' src={orange}></img>                                                
    <div className='names univer'>
    <p className='mb-2 text-2xl font-bold'>Participating Universities</p>
    <h2 className='text-3xl' style={{color:'#FE6C19'}}>USA</h2>
        <div className='flex flex-row mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1' >
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>Indiana University</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>Purdue University</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>University Of Utah</h4>
        </div>
        </div>
        <div className='flex flex-row mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>Colorado State University</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>Arkansas State University</h4>
        </div>
        </div>
        <div className='flex flex-row mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>Wellspring</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>University of Arizona</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>Louisville University</h4>
        </div>
        </div>
        <h2 className='mb-3 text-3xl' style={{color:'#FE6C19'}}>UK & IRELAND</h2>
        <div className='flex flex-row mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>Queen's University Belfast</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>Global University Systems</h4>
        </div>
        </div>
        <div className='grid grid-cols-2 mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2  mb-3'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>University of Leeds</h4>
        </div>
        </div>
        <div className='flex flex-row mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>Trinity College Dublin</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>Technical University of Shanon</h4>
        </div>
        </div>
        <h2 className='mb-3 text-3xl' style={{color:'#FE6C19'}}>CANADA & GERMANY</h2>
        <div className='flex flex-row mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>Ontario Tech University</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>Applyboard</h4>
        </div>
        </div>
        <div className='grid grid-cols-2 mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4>RWTH Aachen University</h4>
        </div>
        </div>
    </div>                   
    <p className='the-para'>
      <h3 className='webinar' style={{fontWeight:'bold'}}>About the International webinar:-</h3>
      <li>Vishwakarma Institute of Information Technology organized a Webinar Series by International Distinguished Speakers from Top Institutes across the globe. </li>

<li>The International Eminent Speakers invited for the webinar covered the most trending topics in Engineering.</li>
 
<li>End-to-End Student Counselling: Free counselling for VIIT students aspiring to study abroad after graduation. </li>

<li>The academic expert from institute's official partner CollegeDekho help aspirants evaluate their career and course choices accurately, tracking admission process while considering students educational background, strengths and skills.</li>
    </p>
    </div>
    <h4 className="m-1 ml-5 mt-12 mb-8 font-bold text-4xl relative text-oirBrown after:content-[''] after:absolute after:w-24 after:-bottom-2 after:left-0 after:h-[2px] after:bg-oirYellow">Guest Lectures and Visits</h4>
    <div  className="grid grid-cols-3 gap-3 m-5 ">
    {guest.map((item)=>{
      const {id,name,title,info,date,image} = item;
      return <div class="max-w-sm bg-white border border-black-500/100 rounded-lg shadow dark:bg-gray-800 dark:border-black-700 ml-8 mr-2" key={id}>
           <img class="rounded-t-lg object-cover h-48 w-96" src={image} />
           <div class="p-5">
            <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">{title}</h3>
            <h5 class="mb-1 text-base font-bold tracking-tight text-gray-900 dark:text-white font-mono">{name}</h5>
            <div>
            <p class="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 mr-8" style={{fontSize:15}}>{info}</p>
            <p style={{fontSize:11}} className='text-right font-bold'>{date}</p>
            </div>
       </div>
   </div>
    })}
    </div>
    </>

  )
}

export default Events