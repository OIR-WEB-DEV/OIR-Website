import Heading from "../../../Components/Heading/Heading";
import pin from "../../../assets/pin.png"
import CardImage from "../../../assets/cardImage.png"
import EventSlider from "../EventSlider/EventSlider";
import { PastEventData } from "./PastEventData";
import PurpleButton from '../../../Components/PurpleButton/PurpleButton'
// upcoming event data
const UpcomingEventData={
   image:CardImage,
   description:"Meet the top business, hospitality, engineering schools etc and attend informative sessions on scholarships, studying in France and French language under one roof.",
   link:""
}


// upcomming event data card
const UpcomingEventCard = ({EventData}) => {
    return (
        
        <div className="mt-10 flex items-end">
            
            <div className=" border shadow-xl relative">
                <div className="h-3 absolute left-[50%] -top-5"><img src={pin} alt="pin" /></div>
                <div className="h-full flex flex-col items-center p-4">
                    <img className="object-cover rounded-xl h-44" src={EventData.image} alt="card" />
                    <h1 className="font-medium text-base leading-tight my-4">{EventData.description}</h1>
                    <a href={EventData.link}> <PurpleButton text={"Register Now"} /></a>

                </div>
            </div>
        </div>

    );
}


const EventSection = () => {
    return (
        <div className="m-5 lg:m-24">
            {/* heading */}
            <Heading text={"Office of International Relations"} />
            {/* event sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-36 mt-6">
                {/* upcoming events */}
                <div className="">
                    <h1 className="font-bold text-2xl">Upcoming Events</h1>
                    <UpcomingEventCard EventData={UpcomingEventData}/>
                </div>
                {/* past event */}
                <div className="">
                    <h1 className="font-bold text-2xl">Past Events</h1>
                    <div className=""><EventSlider SliderData={PastEventData} /></div>
                </div>

            </div>
        </div>
    );
}

export default EventSection;