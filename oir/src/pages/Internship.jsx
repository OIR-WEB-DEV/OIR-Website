
import React from 'react'
import { intern } from './data'
import Button from '../Components/Button/Button'
import Heading from '../Components/Heading/Heading'

const Internship = () => {
    document.title="OIR | Internships"
    return (

        <div className="m-5 lg:m-24 pt-24 lg:pt-14">
        <Heading text={"Internships & Projects"}/>
        <div>
        <div className="grid mt-32 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 mb-36  ">

            {intern.map((item) => {
                const { image, name, text ,id} = item;
                return (
                    <div key={id} className=" bg-white border border-black-500/100 rounded-lg shadow dark:bg-gray-800 dark:border-black-700 ">
                        <img className="rounded-t-lg object-cover h-48 w-full" alt={name} src={image} />
                        <div className="p-5">
                            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
                            <Button text={"Download PDF"} className="self-end" />
                        </div>
                    </div>
                )
            })}
       
            </div>
        </div>
        </div>
        
    )
}

export default Internship;