import img from '../../assets/team.png'
import timeline from '../../assets/timeline.png'
import { BsFillRecordFill } from "react-icons/bs";
const AboutSection = () => {
    return ( 
        <div className="">
            <div className="grid grid-cols-[1.2fr_1fr] w-full h-[65vh] mt-24">
                <div className="px-24">
                    <h1 className="font-bold text-2xl mt-10">About Us</h1>
                    <p className="font-medium text-black leading-tight text-lg  mt-3">Office of International Relations, VIIT assists master's aspirants who wish to study abroad. With a focus on guidance and resources, the team organizes seminars and career guidance sessions and offers support to help students achieve their academic and career goals with a chance to connect and get guidance from our own alumni.</p>
                    <p className="font-medium text-black leading-tight text-lg mt-2">The cell is dedicated to provide students with all the information and support they need to succeed in their journey to study abroad.</p>
                </div>
                <div className=" p-5 flex items-center justify-center">
                
                <div className="relative flex">
                    <img src={img} className='h-80 relative border border-gray-400 rounded-r-full rounded-l-[74rem] object-cover' alt="img" />
                    <div className="w-56 text-white font-medium h-24 absolute -bottom-5 -left-28 rounded-full flex items-center justify-center bg-oirPurple text-2xl shadow-oirPurple drop-shadow-2xl ">Our Team</div>
                    <div className="grid grid-cols-3 grid-rows-3 w-10 h-10 absolute top-0 right-10 text-oirYellow text-3xl gap-6">
                    <BsFillRecordFill /><BsFillRecordFill /><BsFillRecordFill />
                    <BsFillRecordFill /><BsFillRecordFill /><BsFillRecordFill />
                    <BsFillRecordFill /><BsFillRecordFill /><BsFillRecordFill />
                    </div>
                </div>
                  
                </div>
            </div>
            <div className="px-5 my-12">
                <img src={timeline} className="w-full object-cover" alt="timeline" />
            </div>
        </div>
     );
}
 
export default AboutSection;