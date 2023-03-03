import map from '../../Assets/map.png'
import HeroSlider from './HeroSlider';
import { SliderImages } from './SliderImages';

const HeroSection = () => {
    return (
        <div className="overflow-x-hidden relative flex flex-col justify-center before:content-[''] before:w-[72%] before:h-[3px] before:bg-oirBrown before:absolute before:right-0 before:top-8 after:content-[''] after:w-[72%] after:h-1 after:bg-oirBrown after:absolute after:left-0 after:bottom-8">
            <div className="flex justify-center items-center relative">
                <img src={map} className="flex justify-center w-screen overflow-x-hidden h-[80vh] object-cover" alt="map" />

                <div className="absolute w-11/12  h-[80%]">
                    {/* heading */}
                    <h1 className='text-5xl opacity-75 text-oirBrown text-center font-extrabold'>Office of International Relations VIIT Pune</h1>
                    {/* slider */}
                    <div className="h-[90%] flex items-center">
                        <HeroSlider SliderImages={SliderImages}/>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;