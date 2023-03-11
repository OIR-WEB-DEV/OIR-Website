import map from '../../assets/map.png'
import backDesign from '../../assets/back-design.png'
import { FiCircle } from "react-icons/fi";
import FacultySection from './FacultySection/FacultySection';
import AboutSection from './AboutSection/AboutSection';
import HeroSection from './HeroSection/HeroSection';
import EventSection from './EventsSection/EventsSection';
import PartnersSection from './PartnersSection/PartnersSection';


const Divider = () => {
    return (
        <hr className='bg-gradient-to-r from-oirYellow to-oirBrown w-full h-2' />
    );
}

const Bullets = ({ text, color }) => {
    return (
        <div className='p-2 flex items-center'>
            <h1 className=' flex items-center font-semibold text-xl lg:text-xl'> <span className={`${color} font-extrabold text-xl lg:text-2xl mr-3`}><FiCircle /></span>{text}</h1>
        </div>
    );
}

const Home = () => {
    const BulletData = [
        {
            key:1,
            color: 'text-oirOrange',
            text: "Student and Faculty Exchange",
        },
        {
            key:2,
            color: 'text-oirOrange',
            text: "Study Tours",
        },
        {
            key:3,
            color: 'text-oirPurple',
            text: "Cooperative research and development activities",
        },
        {
            key:4,
            color: 'text-oirBrown',
            text: "Cooperative design of courses, conferences, symposia, short courses, or academic programs",
        },
        {
            key:5,
            color: 'text-oirYellow',
            text: "Summer school Programs",
        },
        {
            key:6,
            color: 'text-oirYellow',
            text: "Admission to master's and doctoral Programs",
        },
        {
            key:7,
            color: 'text-oirBrown',
            text: "Exchange of academic or scientific material and publications.",
        },
        {
            key:8,
            color: 'text-oirPurple',
            text: "Joint research activities",
        },
    ]
    document.title = "OIR | Home"
    return (
        <>
            <div className='mt-20'>

                {/* Hero section having slider */}

                <Divider />
                <HeroSection />
                <Divider />

                {/* Past and upcoming events section */}
                <EventSection/>

                {/* about section */}
                <AboutSection />
                
                <div className="">

                    {/* International partners */}
                    <PartnersSection/>


                    {/* map and text section */}
                    <div className="overflow-x-hidden relative flex flex-col justify-center before:content-[''] before:w-96 before:h-1 before:bg-oirBrown before:right-0 after:content-[''] after:w-96 after:h-1 after:bg-oirBrown after:flex after:self-end">

                        <div className="flex justify-center items-center relative">
                            <img src={map} className="flex justify-center w-screen overflow-x-hidden h-60 object-cover" alt="map" />

                            <div className="absolute w-11/12"><h1 className='font-bold text-xl lg:text-3xl text-center'>VIIT has collaborated with various Universities agreeing to pursue the following forms of cooperation, within areas that are mutually acceptable.</h1></div>
                        </div>
                    </div>

                    {/* bullets section */}
                    <div className="">
                        <div className=" overflow-x-hidden">
                            <div className="flex justify-center relative items-center overflow-x-hidden">
                                <img src={backDesign} className="hidden  md:h-[33rem]  md:flex justify-center w-screen object-cover" alt="back-design" />
                                <div className="flex md:absolute w-11/12 md:flex items-center justify-center">
                                    <div className="w-[80%] my-7 grid grid-cols-1 md:grid-cols-2 grid-rows-8 gap-1">
                                        {
                                            BulletData.map((item) => (
                                                <Bullets key={item.key} color={item.color} text={item.text} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* faculty card section  */}
                    <FacultySection />
                </div>

            </div>
        </>
    );
}

export default Home;