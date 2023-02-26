import FacultyCard from "../FacultyCard/FacultyCard";
import sir from '../../assets/images/sir.png'
import Heading from "../Heading/Heading";

const FacultySection = () => {
    const facultyData = [
        {
            image: { sir },
            name: "Prof. Devika Verma",
            position: "Faculty Coordinator, Office of International Relations",
            email: "voir@viit.ac.in  |  devika.verma@viit.ac.in ",
        },
        {
            image: { sir },
            name: "Prof. Dr. Vivek.S.Deshpande",
            position: "Hon'ble  Director, Vishwakarma Institute of Information Technology",
            email: "vivek.deshpande@viit.ac.in",
        },
    ]
    return (
        <div className="">
            <div className="ml-[5rem] mt-40 mb-20"><Heading text={"Our Faculty"}/></div>
            <div className="flex mb-64">
                {
                    facultyData.map((faculty, index) => (
                        <FacultyCard
                            key={index}

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