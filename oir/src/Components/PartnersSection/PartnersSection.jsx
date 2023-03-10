import Heading from "../Heading/Heading";
import { Logos } from "./Logos";

const PartnersSection = () => {
    return ( 
        <div className="m-24">
            <Heading text={"International Partners"}/>
        <div className="grid grid-cols-4 gap-9 mt-10">
            {
                Logos.map((item)=>(
                    <div key={item.id} className="flex p-4 border-2 hover:shadow-2xl cursor-pointer hover:shadow-orange-300 hover:border-oirOrange grayscale  hover:grayscale-0 items-center justify-center transition ease-in-out delay-100 duration-300">
                    <img className=" h-20 " src={item.src} alt="" /></div>
                ))
            }
        </div></div>
     );
}
 
export default PartnersSection;