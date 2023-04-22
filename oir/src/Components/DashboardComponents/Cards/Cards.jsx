import PurpleButton from "../../PurpleButton/PurpleButton";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// QA cards
export const QaCard = ({ name, question }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg border flex justify-between p-2 cursor-pointer my-2 w-full">
            <div className=" flex w-10/12">
                <img className="object-cover w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="avatar" />
                <div className="ml-2 w-10/12">
                    <h1 className="font-medium text-base text-gray-600" >{name}</h1>
                    <div className="text-xs font-semibold truncate ">{question}</div>
                </div>
            </div>
            <div className="flex items-center justify-center mx-2 "><MdOutlineKeyboardArrowRight /></div>
        </div>
    );
}


// event card

export const EventCard = () => {
    return (
        <div className="snap-center border ml-2 mt-4 mr-16 relative shadow-md min-w-[384px] before:content[''] before:absolute before:h-14 before:w-[0.29rem] before:-left-[0.29rem] before:top-0 before:bg-oirBrown bg-white">
            <div className="h-full flex flex-col items-center p-4 ">
                <img className="object-cover rounded-xl h-44" src='https://oir-website.vercel.app/images/events/event1.png' alt="card" />
                <h1 className="font-medium text-base leading-tight my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor!</h1>
                <PurpleButton text={"Register Now"} />
            </div>
        </div>
    );

}

// alumni card and student co-ordinator
export const AlumniCard = ({ name, image, college, location }) => {
    return (
        <div className="snap-center border ml-2 mt-4 mr-16 relative shadow-md min-w-[384px] before:content[''] before:absolute before:h-14 before:w-[0.29rem] before:-left-[0.29rem] before:top-0 before:bg-oirBrown bg-white">
            <div className="h-full flex flex-col items-start p-4 ">
                <img className="object-cover rounded-xl h-44" src='https://oir-website.vercel.app/images/events/event1.png' alt={name} />
                <div className="font-medium text-base leading-tight my-4">
                    <p>Digvijay Desai </p>
                    <p>USC - University of Southern California </p>
                    <p>Los Angeles</p>

                </div>
                <PurpleButton text={"Connect Now"} />
            </div>
        </div>
    );
}

export const DashboardUpcomingEvent = ({ eventTitle, registered, date, time, cost }) => {
    return (
        <div className="p-2 border rounded-md flex flex-col justify-between">
            <div className="flex items-center gap-3">
                <h1 className="text-base font-bold text-gray-800">{eventTitle}</h1>
                <div className="text-xs font-bold px-2 bg-green-500 text-white rounded-full my-2">Upcoming</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className=" flex flex-col">
                    <h1 className="font-bold text-xs text-gray-500">Registered</h1>
                    <div className="font-bold text-4xl text-oirBrown">{registered}</div>
                </div>
                <div className=" flex flex-col">
                    <h1 className="font-bold text-xs text-gray-500">Date/Time</h1>
                    <div className="font-bold text-xs text-gray-800">{date}</div>
                    <div className="font-normal text-xs text-gray-800">{time}</div>
                </div>
                <div className=" flex flex-col">
                    <h1 className="font-bold text-xs text-gray-500">Registration Cost</h1>
                    <div className="font-bold text-base text-green-500">{cost}</div>
                </div>


            </div>
        </div>
    );
}
