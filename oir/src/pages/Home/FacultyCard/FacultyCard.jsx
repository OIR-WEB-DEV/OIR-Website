const FacultyCard = () => {
    return ( 
        <div className="relative bg-gray-700 block w-80 min-h-[90px] p-4 mt-[calc(50vh-30px)] mx-auto mb-0 before:content[''] before:absolute before:-left-1 before:-top-1 before:w-[calc(100%-25px)] before:h-[calc(100%-10px)] before:border-t-[5px] before:border-oirBrown before:border-l-4 after:content-[''] after:absolute after:-top-1 after:right-3 after:h-1 after:w-6 after:bg-oirOrange">

<<<<<<< HEAD:oir/src/Components/FacultyCard/FacultyCard.jsx
=======
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
>>>>>>> e584253365bb8447af6dfdf9fe9f21eb5d96cd81:oir/src/pages/Home/FacultyCard/FacultyCard.jsx
        </div>

     );
}
 
export default FacultyCard;