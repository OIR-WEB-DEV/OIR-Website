import ReactDOM from "react-dom";
import { RxCross1 } from "react-icons/rx";
import { eventsData } from "./eventsData";

// Date Time Button
const DTbtn = ({date,time}) => {
    return ( 
        <a >
            <button className="rounded-full border py-1 px-2 text-oirOrange  border-oirOrange font-bold text-xs hover:bg-gray-200/90">
                {`${date} | ${time}`}
            </button>
        </a>
     );
}

// Register Button
const RegisteBtn = () => {
    return ( 
        <a >
            <button className="rounded-full py-1 px-2 border text-white border-oirPurple bg-oirPurple font-bold text-xs hover:bg-white hover:text-oirPurple">
                Register Now
            </button>
        </a>
     );
}


const Card = ({title,description,image,date,time}) => {
    return ( 
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] my-3 rounded-md">
            <div className="">
                <img className="object-cover w-full rounded-3xl md:rounded-none" src={image} alt={title} />
            </div>
            <div className="flex flex-col justify-between ml-4">
                <div className="">
                    <h1 className="font-bold text-xl">{title}</h1>
                    <p className="font-bold text-oirGray opacity-75 text-sm">{description}</p>
                </div>
                <div className="flex justify-between pt-2">
                    <DTbtn date={date} time={time}/>
                    <RegisteBtn/>
                </div>

            </div>
        </div>
     )
}
 

// moal component
const Modal = ({closeModal}) => {
    return ReactDOM.createPortal( 
        <div onClick={closeModal} className="fixed inset-0 backdrop-blur bg-black/40 align-middle z-50 font-Montserrat flex items-center justify-center">
            <div onClick={(e)=>e.stopPropagation()} className="bg-white rounded-lg p-4 w-[80%] lg:overflow-y-hidden h-[80%] overflow-auto lg:h-[73%] lg:w-[55%] border ">
                {/* header */}
                <div className="flex justify-between">
                    <div className="">
                        <h1 className=" font-extrabold text-oirBrown text-2xl">Get excited for our upcoming events! </h1>
                        <p className="font-semibold text-oirGray opacity-75 text-base">Join us for unforgettable experiences and make new memories. From lively sessions to informative workshops.</p>
                    </div>
                    <div className=""><span onClick={closeModal} className="cursor-pointer"><RxCross1/> </span> </div>
                </div>
                {/* heading */}
                <h1 className="font-bold mt-2 text-xl text-oirOrange">A can't-miss event is approaching!</h1>
                {/* card */}
                {
                    eventsData.map((item)=>(
                        <Card 
                            key={item.id}
                            title={item.title}
                            description={item.description} 
                            date={item.date}
                            time={item.time} 
                            image={item.image}
                        />

                    ))
                }
            </div>
        </div>,
        document.getElementById("modal")
     );
}
 
export default Modal;