import { AlumniCard, DashboardUpcomingEvent } from "../../../Components/DashboardComponents/Cards/Cards";
import DashboardSection from "../../../Components/DashboardComponents/DashboardSection/DashboardSection";
import { FacultyProfile } from "../../../Components/DashboardComponents/Profile/Profile";
import { SmallHeading } from "../../../Components/Heading/Heading";
import { Sidebar, SidebarItem } from "../../../Components/Sidebar/Sidebar";
import { Line } from 'react-chartjs-2'
// import 'chart.js/auto'
import { EventStats, options } from "./EventStats";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const FacultyDashboard = () => {
    const menus = [
        { id: 1, title: "Event Statistics", link: "event_statistics" },
        { id: 2, title: "University Reprentative", link: "university_reprentative" },
        { id: 3, title: "Alumni Connect", link: "alumni_connect" },
    ]
    document.title = "Faculty Dashboard"

    return (
        <div className="flex flex-row mt-20">
            <div className="hidden lg:flex">
                <Sidebar name={"Ketty Bruno"} email={"kettybruno@viit.ac.in"}>
                    {
                        menus.map((item) => (
                            <SidebarItem key={item.id} title={item.title} link={item.link} />
                        ))
                    }
                </Sidebar>
            </div>


            {/* aside */}
            <div className="ml-0 lg:ml-64 p-5 lg:p-12 flex flex-col">

                {/* profile header */}
                <div className="flex flex-row items-center">
                    {/* profile photo */}
                    <FacultyProfile name={"Ketty Bruno"} isUpdated={true} department={"Information Technology"} email={"ketti.bruno@viit.in"} />
                </div>

                {/*  Event Statistics section */}
                <div className="flex flex-col">
                    <SmallHeading id={"event_statistics"} heading={"Event Statistics"} />
                    <p className="p-2 text-base text-gray-600">{"Details about previous events"}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-[0.84fr_1fr] grid-row-3 lg:grid-rows-1 gap-x-5">

                        <div className=" grid grid-rows-2 gap-5">
                            {/* upcoming event card */}

                            <DashboardUpcomingEvent eventTitle={"Meet with French Institutes"} registered={128} date={"12 April 2023"} time={"12:15PM to 2:00PM"} cost={"Free"} />

                            <div className="border rounded-md">

                            </div>

                        </div>
                        {/* statistic line chart */}
                        <div className=" w-full border mt-4 p-1 py-3 lg:mt-0"><Line options={options} data={EventStats} />
                        </div>

                    </div>
                    {/* view all button */}
                    <div 
                    className=" cursor-pointer font-bold text-sm flex mt-10 w-28 py-2 px-4 rounded-full text-white  bg-oirBrown">
                        <p>View All</p>
                        <div className="flex items-center text-lg m-0 text-white"><MdOutlineKeyboardArrowRight/></div>
                        </div>

                </div>




                {/* University Reprentative section*/}
                <DashboardSection id={"university_reprentative"} heading={"University Reprentative"} subheading={"Contact with University Representatives"}>
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                </DashboardSection>

                {/* alumni connect section*/}
                <DashboardSection id={"alumni_connect"} heading={"Alumni Network"} subheading={"Connect with student Alumni"}>
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                </DashboardSection>


            </div>

        </div>
    );
}

export default FacultyDashboard;