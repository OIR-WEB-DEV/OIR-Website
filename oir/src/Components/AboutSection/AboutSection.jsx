import Heading from "../Heading/Heading";

const AboutSection = () => {
    return ( 
        <div className="">
            <div className="grid grid-cols-2 w-full h-[50vh]">
                <div className="bg-red-500">
                    <Heading text={"About Us"}/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, possimus dicta. Temporibus, provident voluptatibus. Aliquam molestias, ipsam ad ex natus neque deleniti est veritatis.</p>
                </div>
                <div className="bg-blue-500"></div>
            </div>
        </div>
     );
}
 
export default AboutSection;