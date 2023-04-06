import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import React, { useState } from 'react'
import { images } from '../pages/data'
const Slider = () => {
    const [index,setIndex] = useState(0)
    const {id,image} = images[index];
    const checkNumber = (number) =>{
        if(number>images.length-1){
          return 0;
        }
        if(number<0){
          return images.length-1;
        }
        return number;
      }
      const random = () =>{
        let newNumber = Math.floor(Math.random()*images.length);
        setIndex(newNumber);
      }
      const nextImage = () =>{
        setIndex((index)=>{
          let newIndex = index +1;
          return checkNumber(newIndex);
        });
      }
      const prevImage = () =>{
        setIndex((index)=>{
          let newIndex = index -1;
          return checkNumber(newIndex);
        });
      }
  return (
    <article className='review'>
    <div className=''>
      <img src={image} alt="MSD" className='image'></img>
    </div>
    <div className='button-container'>
    <button className='b1' onClick={prevImage}>
        <FaChevronLeft />
      </button>
      <button className='b2' onClick={nextImage}>
        <FaChevronRight />
      </button>
    </div>
  </article>
  )
}

export default Slider