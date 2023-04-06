
import { BsFillRecordFill } from "react-icons/bs";

const FacultyCard = ({ image, name, position, email }) => {
    return (
        <div className="ml-4 mt-4 relative mb-0">

            <div className="relative grid grid-cols-[0.5fr_1fr] border py-4 border-oirBrown max-w-[550px] min-h-[260px] before:content[''] before:absolute before:-left-4 before:-top-4 before:w-[calc(100%-20px)] before:h-full before:border-t-[16px] before:border-oirBrown before:border-l-[16px] after:content-[''] after:absolute after:-top-4 after:right-6 after:h-[15px] after:w-16 after:bg-oirYellow">
                <div className="">
                    <img src={image} className='h-full object-cover faculty-card-radius' alt={name} />
                </div>
                <div className="flex items-center p-3">
                    <div className="">
                        <h1 className='font-bold text-xl'>{name}</h1>
                        <div className="my-3">
                            <p className='font-bold text-sm '>{position}</p>
                            <p className='text-sm font-medium '>Email id: {email}</p>
                        </div>
                        <div className="flex justify-center text-lg text-oirYellow">
                            <BsFillRecordFill />
                            <BsFillRecordFill />
                            <BsFillRecordFill />
                        </div>
                    </div>
                </div>
                {/* */}


            </div>
        </div>

     );
}
 
export default FacultyCard;