import pin from "../../assets/pin.png"
import CardImage from "../../assets/cardImage.png"

import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Button from "../Button/Button";


const PastEventCard = () => {
    return (
        <div className="h-[25rem] flex items-end ">
            <div className="h-[23rem] relative border border-r-2 ">
                <div className="h-3 absolute left-[50%] -top-5"><img src={pin} alt="pin" /></div>
                <div className="h-full flex flex-col items-center p-4">
                    <img className="object-cover rounded-xl h-[54%]" src={CardImage} alt="Past_Event" />
                    <h1 className="font-medium text-base leading-tight my-4">Meet the top business, hospitality, engineering schools etc and attend informative sessions on scholarships, studying in France and French language under one roof.</h1>
                    <a className="underline underline-offset-2 decoration-1 decoration-white" href=""><Button text={"View Post"} /></a>
                    
                </div>
            </div>
        </div>
    );
}


const EventSlider = ({SliderData}) => {
    return (
        <Swiper
            spaceBetween={20}
            grabCursor={true}
            centeredSlides={true}
            navigation={true}
            modules={[Navigation]}
            className="flex items-end"
        >


            <SwiperSlide>
                <PastEventCard/>
            </SwiperSlide>
            <SwiperSlide>
                <PastEventCard/>
            </SwiperSlide>

        </Swiper>
    );
}

export default EventSlider;