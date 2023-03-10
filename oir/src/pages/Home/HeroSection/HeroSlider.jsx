
import { Swiper, SwiperSlide } from 'swiper/react'
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
        className="h-[50%] w-[90%] sm:h-[86%] sm:w[90%] md:h-[90%] lg:w-[80%] border-2 border-oirOrange rounded-md shadow-oirOrange object-cover drop-shadow-2xl"
    >
        {
            SliderImages.map((slide)=>(
                <SwiperSlide key={slide.id}>                    
                    <img className='object-cover' src={slide.url} alt={slide.id} />
                </SwiperSlide>
            ))
        }
    </Swiper>
     );
}
 
export default HeroSlider;