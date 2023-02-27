import FacultyCard from "../FacultyCard/FacultyCard";
import Heading from "../Heading/Heading";
import { facultyData } from "./FacultyData";

const FacultySection = () => {
   
    return (
        <div className="">
            <div className="ml-24 mt-40 mb-20"><Heading text={"Our Faculty"}/></div>
            <div className="flex mb-64">
                {
                    facultyData.map((faculty) => (
                        <FacultyCard
                            key={faculty.id}
                            image={faculty.image}
                            name={faculty.name}
                            position={faculty.position}
                            email={faculty.email}
                        />
                    ))
                    
                }
            </div>
        </div>
    );
}

export default FacultySection;