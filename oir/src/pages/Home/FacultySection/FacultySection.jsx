import FacultyCard from "../FacultyCard/FacultyCard";
import Heading from "../../../Components/Heading/Heading";
import { facultyData } from "./FacultyData";

const FacultySection = () => {

    return (
        <div className=" mx-5 lg:mx-24 my-32">
            {
                facultyData.map((faculty) => (
                    <div key={faculty.id}>
                        <div className="mt-10 mb-10"><Heading text={faculty.heading} /></div>
                        <div className="flex mb-20">
                            <FacultyCard                                
                                image={faculty.image}
                                name={faculty.name}
                                position={faculty.position}
                                email={faculty.email}
                            />
                        </div>
                    </div>
                ))
            }

            {/* <div className="mt-40 mb-20"><Heading text={"Our Visionary"}/></div>
            <div className="flex mb-64">
                        <FacultyCard
                            key={faculty.id}
                            image={faculty.image}
                            name={faculty.name}
                            position={faculty.position}
                            email={faculty.email}
                        />
            </div> */}
        </div>
    );
}

export default FacultySection;