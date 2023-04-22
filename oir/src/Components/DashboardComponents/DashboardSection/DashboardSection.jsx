import { SmallHeading } from "../../Heading/Heading";

export const QaSection = ({id,heading,subheading,children}) => {
    return ( 
        <>
            <SmallHeading id={id} heading={heading} />
            <p className="p-2 text-base text-gray-600">{subheading}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 ">
                {/* QA card */}
                {children}
            </div>
        </>
     );
}
 

const DashboardSection = ({id, heading, subheading, children }) => {
    return (
        <>
            <SmallHeading id={id} heading={heading}/>           
            <div className="flex flex-row justify-between items-center ">
                <p className="text-base text-gray-600">{subheading}</p>
                <div className="p-2 border rounded-full flex justify-center items-center text-xs lg:text-sm hover:bg-gray-200 cursor-pointer">View All</div>
            </div>
            <div className="flex snap-x overflow-x-scroll custom-scrollbar py-3 w-[90vw] lg:w-[70vw]">
                {/* cards */}
                {children}
            </div>
        </>
    );
}

export default DashboardSection;