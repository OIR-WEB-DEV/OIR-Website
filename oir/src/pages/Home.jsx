import map from './../assets/map.png'
import backDesign from './../assets/back-design.png'
import { FiCircle } from "react-icons/fi";
import FacultySection from '../Components/FacultySection/FacultySection';
import AboutSection from '../Components/AboutSection/AboutSection';
import HeroSection from '../Components/HeroSection/HeroSection';

const Divider = () => {
    return (
        <hr className='bg-gradient-to-r from-oirYellow to-oirBrown w-full h-2' />
    );
}

const Bullets = ({ text, color }) => {
    return (
        <div className='p-2 flex items-center'>
            <h1 className=' flex items-center font-semibold text-xl'> <span className={`${color} font-extrabold text-2xl mr-3`}><FiCircle /></span>{text}</h1>
        </div>
    );
}

const Home = () => {
    const BulletData = [
        {
            color: 'text-oirOrange',
            text: "Student and Faculty Exchange",
        },
        {
            color: 'text-oirOrange',
            text: "Study Tours",
        },
        {
            color: 'text-oirPurple',
            text: "Cooperative research and development activities",
        },
        {
            color: 'text-oirBrown',
            text: "Cooperative design of courses, conferences, symposia, short courses, or academic programs",
        },
        {
            color: 'text-oirYellow',
            text: "Summer school Programs",
        },
        {
            color: 'text-oirYellow',
            text: "Admission to master's and doctoral Programs",
        },
        {
            color: 'text-oirBrown',
            text: "Exchange of academic or scientific material and publications.",
        },
        {
            color: 'text-oirPurple',
            text: "Joint research activities",
        },
    ]
   
    return (
        <div className='mt-20'>

            {/* Hero section having slider */}

            <Divider />
            <HeroSection/>
            <Divider/>
            
            <div className="">
                {/* about section */}
                <AboutSection/>

                {/* map and text section */}
                <div className="overflow-x-hidden relative flex flex-col justify-center before:content-[''] before:w-96 before:h-1 before:bg-oirBrown before:right-0 after:content-[''] after:w-96 after:h-1 after:bg-oirBrown after:flex after:self-end">
                    <div className="flex justify-center items-center relative">
                        <img src={map} className="flex justify-center w-screen overflow-x-hidden h-60 object-cover" alt="map" />

                        <div className="absolute w-11/12"><h1 className='font-bold text-3xl text-center'>VIIT has collaborated with various Universities agreeing to pursue the following forms of cooperation, within areas that are mutually acceptable.</h1></div>
                    </div>
                </div>

                {/* bullets section */}
                <div className="">
                    <div className="relative overflow-x-hidden">
                        <div className="flex justify-center items-center relative  overflow-x-hidden">
                            <img src={backDesign} className="flex justify-center w-screen overflow-x-hidden h-1/3 object-cover" alt="back-design" />
                            <div className="absolute w-11/12 flex items-center justify-center">
                                <div className="w-[80%] grid grid-cols-2 grid-rows-4 gap-1">
                                    {
                                        BulletData.map((item, index) => (
                                            <Bullets key={index} color={item.color} text={item.text} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* faculty card section  */}
                <FacultySection/>
            </div>

        </div>
    );
}

export default Home;