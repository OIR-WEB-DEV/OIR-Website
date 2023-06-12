
import second from '../assets/speakers.png'
import edfair from '../assets/edfair.png'
import arrow from '../assets/arrow.png'
import orange from '../assets/orangeNicee.png'
import React from 'react'
import image from '../assets/image.png'
import { guest } from './data'
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import Heading from '../Components/Heading/Heading'

const UniversityHeading = ({ text }) => {
    return (
        <h2 className='text-6xl mt-6 mb-1 text-oirOrange font-Fredericka'>{text}</h2>
    );
}

const UniversityBullets = ({ text }) => {
    return (
        <div className="text-lg mr-2 mt-2 text-black flex items-center justify-center px-2 py-1 border-2 rounded-md border-oirBrown">
            <div className="mr-3"><MdOutlineRadioButtonChecked /></div>
            {text}
        </div>
    );
}

const EventsCard = ({image,title,info,date, name}) => {
    return (

        <div className="mt-36 mr-2">
            <div className=" border-oirBrown hover:border-oirOrange ease-in duration-150 hover:shadow-2xl cursor-pointer hover:shadow-orange-300 border-2 relative p-10 lg:p-7 pt-0 h-[17.6rem] lg:h-64 flex justify-center items-end ">
                <div className="absolute top-[-30%] lg:top-[-42%] w-[80%] overflow-hidden"><img className=' h-[55%] object-cover aspect-[3/2] w-[100%] max-w-[100%] mr-0 hover:scale-125 ease-in duration-100 cursor-pointer ' src={image} alt="" /></div>
                <div className="mt-[40%] lg:mt-[30%] ">
                    <h1 className='text-ellipsis text-sm font-bold line-clamp-2'>{title}</h1>
                    <h2 className='text-ellipsis text-sm font-medium mt-1'>{name}</h2>
                    <p className="font-normal text-[0.7rem] mt-1 line-clamp-3">{info}</p>
                    <p className="font-bold text-[0.7rem] self-end mt-2">{date}</p>

                </div>
            </div>

        </div>

    );
}



const Events = () => {

    document.title = "OIR | Events and Activities"

    const UniversityNames = {
        usa: ["Indiana University", "Purdue University", "University of Utah", "Colorado State University", "Arkansas State University", "Wellspring", "University of Arizona", "Louisville University"],
        uk_ireland: ["Queen's University Belfast", "Global University Systems", "University of Leeds", "Trinity College Dublin", "Technical University of Shanon"],
        canada_germany: ["Ontario Tech University", "Applyboard", "RWTH Aachen University"]
    }

    return (
        <div className="pt-20">
            <div className="m-5 lg:m-24 ">
                <Heading text={"Events & Activities"} />
                <h3 className='mt-5 lg:mt-16 font-bold text-3xl'>Global Education Fair</h3>
                <div className="grid grid-flow-row lg:grid-cols-[2.1fr_0.13fr_4fr]">
                    <div className=' overflow-auto '>
                        <div className="overflow-auto flex flex-row lg:flex-col">
                            <img src={second} ></img>
                            <img src={edfair} ></img>
                            <h3 className='mt-20 font-bold text-3xl'>International Webinar Series</h3>
                            <img src={image} ></img>
                        </div>

                    </div>


                    <div className=' hidden lg:flex lg:flex-col'>
                        <img src={arrow}></img>
                        <img src={orange}></img>
                    </div>
                    <div className='m-5 lg:ml-14 flex flex-col justify-between'>

                        <div>
                            <p className='mb-2 text-3xl font-medium'>Participating Universities</p>
                            <UniversityHeading text={"USA"} />
                            <div className='flex flex-row mb-3 flex-wrap'>
                                {
                                    UniversityNames.usa.map((item, index) => (
                                        <UniversityBullets key={index} text={item} />
                                    ))
                                }
                            </div>

                            <UniversityHeading text={"UK & IRELAND"} />
                            <div className='flex flex-row mb-3 flex-wrap'>
                                {
                                    UniversityNames.uk_ireland.map((item, index) => (
                                        <UniversityBullets key={index} text={item} />
                                    ))
                                }
                            </div>
                            <UniversityHeading text={"CANADA & GERMANY"} />
                            <div className='flex flex-row mb-3 flex-wrap'>
                                {
                                    UniversityNames.canada_germany.map((item, index) => (
                                        <UniversityBullets key={index} text={item} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className=" mb-8 mt-8 lg:mb-32 lg:mt-0">
                            <h3 className='text-3xl font-medium' >Most trending topics were discussed in the webinar</h3>

                            <ul className='list-disc leading-tight' >
                                <li className='mt-3'>Vishwakarma Institute of Information Technology organized a Webinar Series by International Distinguished Speakers from Top Institutes across the globe. </li>

                                <li className='mt-3'>The International Eminent Speakers invited for the webinar covered the most trending topics in Engineering.</li>

                                <li className='mt-3'>End-to-End Student Counselling: Free counselling for VIIT students aspiring to study abroad after graduation. </li>

                                <li className='mt-3'>The academic expert from institute's official partner CollegeDekho help aspirants evaluate their career and course choices accurately, tracking admission process while considering students educational background, strengths and skills.</li>

                            </ul>

                        </div>


                    </div>
                </div>

                <div className="mt-5 lg:mt-20">
                    <Heading text={"Guest Lectures and Visits"} />
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-5 ">
                        {guest.map((item) => {
                            const { id, name, title, info, date, image } = item;
                           
                            return <EventsCard key={id} title={title} image={image} name={name} info={info} date={date}/>
                        })}

                    </div>
                </div>
            </div>
        </div>

    )
}
// TODO: Add to assets to cloud { cloudinary }



export default Events