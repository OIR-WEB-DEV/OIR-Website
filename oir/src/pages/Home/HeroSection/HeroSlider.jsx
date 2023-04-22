
import { Swiper , SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const HeroSlider = ({SliderImages}) => {
    return ( 
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" shadow-oirOrange object-cover drop-shadow-2xl"
    >
        {
            SliderImages.map((slide)=>(
                <SwiperSlide key={slide.id}>                    
                    <img className='object-cover w-full opacity-100' src={slide.url} alt={slide.id} />
                </SwiperSlide>
            ))
        }
    </Swiper>
     );
}
 
export default HeroSlider;