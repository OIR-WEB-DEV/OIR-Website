import PurpleButton from "../../PurpleButton/PurpleButton";

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
export const AlumniCard = ({ name,image, college, location }) => {
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
