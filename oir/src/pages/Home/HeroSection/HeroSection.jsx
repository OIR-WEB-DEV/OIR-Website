import HeroSlider from './HeroSlider';
import { SliderImages } from './SliderImages';

const HeroSection = () => {
    return (
        <div className="overflow-x-hidden relative flex flex-col justify-center before:content-[''] before:w-[72%] before:h-[3px] before:bg-white before:z-10 before:absolute before:right-0 before:top-2 md:before:top-6 after:content-[''] after:w-[72%] after:h-1 after:bg-white after:z-10 after:absolute after:left-0 after:bottom-2 md:after:bottom-6">
            <div className="flex justify-center items-center ">
                <div className="w-full relative">
                    {/* heading */}
                    <h1 className='text-lg sm:text-xl flex absolute bottom-3 px-3 rounded-md bg-black/30 left-3 md:bottom-10 md:left-10 z-10 md:text-5xl text-white text-center font-extrabold shadow-sm drop-shadow-2xl animate-pulse'>Office of International Relations - VIIT Pune</h1>
                    {/* slider */}
                    <div className=" object-cover flex items-center">
                        <HeroSlider SliderImages={SliderImages}/>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;