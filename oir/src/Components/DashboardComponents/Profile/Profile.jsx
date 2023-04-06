
import { MdOutlineModeEditOutline, MdOutlineCheckCircleOutline, MdPerson } from "react-icons/md";
import { BsDot } from "react-icons/bs";

// student profile
export const StudentProfile = ({name,image,isUpdated,currentYear,sessionsAttended}) => {
    return (
        <>
            <div className="flex flex-row items-center">
                {/* profile photo */}
                <img className="object-cover w-24 h-24 rounded-full border-4 border-oirYellow" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="avatar" />
                {/* data */}
                <div className="ml-3">
                    <div className="flex items-center"><h1 className="text-2xl font-bold text-oirBrown mr-2">{name}</h1><MdOutlineModeEditOutline /> 
                    {isUpdated && (<div className="flex items-center text-green-500 ml-2"> <MdOutlineCheckCircleOutline /><p className="ml-1 text-xs font-bold ">Updated</p> </div>)}</div>
                    <div className="flex items-center text-base font-medium text-gray-600"><BsDot />{currentYear}<BsDot />Student</div>
                    <div className=" text-oirOrange flex items-center "><MdPerson /><p className="text-xs ml-1"> Attended {sessionsAttended} {sessionsAttended>1 ?' sessions':' session'}</p></div>
                </div>
            </div>
        </>
    );
}
