
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
import Slider from '../pages/Slider'


const Events = () => {
  return (
    <div>
    <h2 className="m-1 ml-5 mt-12 mb-8 font-bold sm:text-4xl lg:text-4xl relative text-oirBrown after:content-[''] after:absolute after:w-24 after:-bottom-2 after:left-0 after:h-[2px] after:bg-oirYellow">Events & Activities</h2>
    <div className='abs hidden lg:block'>
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
    <Slider />                
    <p className='the-para'>
      <h3 className='webinar' style={{fontWeight:'bold'}}>About the International webinar:-</h3>
      <li>Vishwakarma Institute of Information Technology organized a Webinar Series by International Distinguished Speakers from Top Institutes across the globe. </li>

<li>The International Eminent Speakers invited for the webinar covered the most trending topics in Engineering.</li>
 
<li>End-to-End Student Counselling: Free counselling for VIIT students aspiring to study abroad after graduation. </li>

<li>The academic expert from institute's official partner CollegeDekho help aspirants evaluate their career and course choices accurately, tracking admission process while considering students educational background, strengths and skills.</li>
    </p>
    </div>
    </div>
    <div className='block lg:hidden'>
        
<div id="default-carousel" className="relative w-full" data-carousel="slide">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={second} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={second} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
       
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={edfair} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
    </div>
    
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
    
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-600 dark:bg-gray-800/30 group-hover:bg-gray-400 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-600 dark:bg-gray-800/30 group-hover:bg-gray-400 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
    </div>
    <div className='mt-6 mx-2'>
    <p className='mb-2 text-xl font-bold'>Participating Universities</p>
    <h2 className='text-xl' style={{color:'#FE6C19'}}>USA</h2>
        <div className='flex flex-row mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1' >
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h5 className='text-sm'>Indiana University</h5>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>Purdue University</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>University Of Utah</h4>
        </div>
        </div>
        <div className='flex flex-row mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>Colorado State University</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>Arkansas State University</h4>
        </div>
        </div>
        <div className='flex flex-row mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>Wellspring</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>University of Arizona</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>Louisville University</h4>
        </div>
        </div>
        <h2 className='mb-3 text-xl' style={{color:'#FE6C19'}}>UK & IRELAND</h2>
        <div className='flex flex-row mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>Queen's University Belfast</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>Global University Systems</h4>
        </div>
        </div>
        <div className='grid grid-cols-2 mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2  mb-3'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>University of Leeds</h4>
        </div>
        </div>
        <div className='flex flex-row mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>Trinity College Dublin</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>Technical University of Shanon</h4>
        </div>
        </div>
        <h2 className='mb-3 text-xl' style={{color:'#FE6C19'}}>CANADA & GERMANY</h2>
        <div className='flex flex-row mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>Ontario Tech University</h4>
        </div>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2 width1'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>Applyboard</h4>
        </div>
        </div>
        <div className='grid grid-cols-2 mb-3'>
        <div className='flex pl-2 pr-2 border-4 border-black-200 rounded-lg mr-2'>
        <img src={button} className='h-3 w-3 mt-2 mr-2'></img>
        <h4 className='text-sm'>RWTH Aachen University</h4>
        </div>
        </div>
    </div>
    <p className='mt-3 ml-1 mb-2 text-xl font-bold'>International Webinar Series</p>
    <img src={image} className='w-30 h-30'></img>
    <p className='mt-3 m-2'>
    <h3 className='font-bold'>About the International webinar:-</h3>
      <li>Vishwakarma Institute of Information Technology organized a Webinar Series by International Distinguished Speakers from Top Institutes across the globe. </li>

<li>The International Eminent Speakers invited for the webinar covered the most trending topics in Engineering.</li>
 
<li>End-to-End Student Counselling: Free counselling for VIIT students aspiring to study abroad after graduation. </li>

<li>The academic expert from institute's official partner CollegeDekho help aspirants evaluate their career and course choices accurately, tracking admission process while considering students educational background, strengths and skills.</li>
    </p>


    </div>
    <h4 className="m-1 ml-5 mt-12 mb-8 font-bold sm:text-4xl lg:text-4xl relative text-oirBrown after:content-[''] after:absolute after:w-24 after:-bottom-2 after:left-0 after:h-[2px] after:bg-oirYellow">Guest Lectures and Visits</h4>
    <div  className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-5 ">
    {guest.map((item)=>{
      const {id,name,title,info,date,image} = item;
      return <div className="max-w-sm bg-white border border-black-500/100 rounded-lg shadow dark:bg-gray-800 dark:border-black-700 ml-8 mr-2" key={id}>
           <img className="rounded-t-lg object-cover h-48 w-96" src={image} />
           <div className="p-5">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">{title}</h3>
            <h5 className="mb-1 text-base font-bold tracking-tight text-gray-900 dark:text-white font-mono">{name}</h5>
            <div>
            <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 mr-8" style={{fontSize:15}}>{info}</p>
            <p style={{fontSize:11}} className='text-right font-bold'>{date}</p>
            </div>
       </div>
   </div>
    })}
    </div>
    </div>

  )
// TODO: Add to assets to cloud { cloudinary }

const Events = () => {
    document.title="OIR | Events and Activities"
    return (
        <>
            <h3 className='the-event mt-20'>Global Education Fair</h3>
            <div className='the-images'>
                <img src={second} className="the-image"></img>
                <img src={edfair} className="the-image"></img>
                <h3 className='the-event'>International Webinar Series</h3>
                <img src={image} className="the-image"></img>
            </div>
            <div style={{ position: 'absolute' }} className='hello'>
                <img className='arrow' src={arrow}></img>
                <img className='orange' src={orange}></img>
                <img className='names univer' src={univ}></img>
                <p className='the-para'>
                    <h3 className='webinar' style={{ fontWeight: 'bold' }}>About the International webinar:-</h3>
                    <li>Vishwakarma Institute of Information Technology organized a Webinar Series by International Distinguished Speakers from Top Institutes across the globe. </li>

                    <li>The International Eminent Speakers invited for the webinar covered the most trending topics in Engineering.</li>

                    <li>End-to-End Student Counselling: Free counselling for VIIT students aspiring to study abroad after graduation. </li>

                    <li>The academic expert from institute's official partner CollegeDekho help aspirants evaluate their career and course choices accurately, tracking admission process while considering students educational background, strengths and skills.</li>
                </p>
            </div>
            <h4 className="m-1 ml-5 mt-12 mb-8 font-bold text-4xl relative text-oirBrown after:content-[''] after:absolute after:w-24 after:-bottom-2 after:left-0 after:h-[2px] after:bg-oirYellow">Guest Lectures and Visits</h4>
            <div className="grid grid-cols-3 gap-3 m-5 ">
                {guest.map((item) => {
                    const { id, name, title, info, date, image } = item;
                    return <div className="max-w-sm bg-white border border-black-500/100 rounded-lg shadow dark:bg-gray-800 dark:border-black-700 ml-8 mr-2" key={id}>
                        <img className="rounded-t-lg object-cover h-48 w-96" src={image} />
                        <div className="p-5">
                            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">{title}</h3>
                            <h5 className="mb-1 text-base font-bold tracking-tight text-gray-900 dark:text-white font-mono">{name}</h5>
                            <div>
                                <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 mr-8" style={{ fontSize: 15 }}>{info}</p>
                                <p style={{ fontSize: 11 }} className='text-right font-bold'>{date}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </>

    )
}
}


export default Events