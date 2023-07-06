
import React from 'react'
import { intern } from './data'
import Button from '../Components/Button/Button'
import Heading from '../Components/Heading/Heading'

const InternshipCards = ({ pdf, name, image, text }) => {
   
    return (

        <div className=" border border-oirBrown h-[32rem] rounded-sm shadow relative hover:border-oirOrange ease-in duration-150 hover:shadow-2xl cursor-pointer hover:shadow-orange-300">
            <div className="h-[50%] overflow-hidden ">
                <img className=" object-cover h-full w-full hover:scale-125 ease-in duration-100 cursor-pointer brightness-50 hover:brightness-100" alt={name} src={image} />
            </div>
            <div className=" w-full flex justify-center items-center absolute min-h-[7rem] top-[40%]">
                <div className="bg-white w-[70%] p-3 lg:p-6 shadow-lg flex items-center justify-center">
                    <h3 className="mb-2 text-lg lg:text-2xl font-bold tracking-tight text-gray-900 ">{name}</h3>
                </div>
            </div>
            <div className="py-5 px-8 mt-16 flex flex-col justify-between items-center">
                <p className="mb-3 font-normal line-clamp-3 text-gray-700 ">{text}</p>
                <a target='_blank' rel='noreferrer' href={pdf}><Button text={"Download PDF"} /></a>

            </div>
        </div>

    );
}


const Internship = () => {
    document.title = "OIR | Internships"
    return (

        <div className="m-5 lg:m-24 pt-24 lg:pt-20">
            <Heading text={"Internships & Projects"} />
            <div className='mt-5 lg:mt-16 grid grid-cols-1 md:grid-cols-2 md:gap-x-20 lg:gap-x-32 lg:gap-y-14 md:gap-y-8 gap-y-4'>

                {intern.map((item) => {
                    const { image, name, text, id, pdf } = item;
                    return (
                       <InternshipCards key={id} image={image} name={name} text={text} pdf={pdf} />
                        
                    )
                })}



            </div>
        </div>

    )
}

export default Internship;