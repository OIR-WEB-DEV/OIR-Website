
import React from 'react'
import {intern} from './data'
import Button from '../Components/Button/Button'

const Home = () => {
  return (
      <div  className="grid lg:grid-cols-2 gap-3 m-5 md:grid-cols-1 gap-3 m-5 lg:ml-20 mt-12">
        {intern.map((item)=>{
            const {image,name,text} = item;
            return (
        <div class="max-w-sm bg-white border border-black-500/100 rounded-lg shadow dark:bg-gray-800 dark:border-black-700 mt-4 mr-2">
           <img class="rounded-t-lg object-cover h-48 w-96" src={image} />
           <div class="p-5">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
            <Button text={"Download PDF"} />
       </div>
   </div>
            )
        })}
    </div>
  )
}

export default Home;