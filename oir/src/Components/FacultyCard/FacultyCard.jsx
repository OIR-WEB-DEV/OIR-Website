import image1 from '../../assets/images/sir.png'
import { BsFillRecordFill } from "react-icons/bs";

const FacultyCard = ({ image, name, position, email }) => {
    return (
        <div className=" mx-auto mt-12 relative mb-0 before:content[''] before:absolute before:w-48 before:h-2 before:bg-oirBrown before:-z-50 before:top-[50%] before:-left-28 after:content[''] after:absolute after:w-28 after:h-2 after:bg-oirBrown after:top-[50%] after:-right-28">

            <div className="relative grid grid-cols-[0.5fr_1fr] border py-4 border-oirBrown max-w-[550px] min-h-[260px] before:content[''] before:absolute before:-left-4 before:-top-4 before:w-[calc(100%-20px)] before:h-full before:border-t-[16px] before:border-oirBrown before:border-l-[16px] after:content-[''] after:absolute after:-top-4 after:right-6 after:h-[15px] after:w-16 after:bg-oirYellow">
                <div className="">
                    <img src={image1} className='h-full object-cover faculty-card-radius' alt="sir" />
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