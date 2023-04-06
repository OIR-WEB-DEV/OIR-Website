
import { AlumniCard, EventCard } from "../../../Components/DashboardComponents/Cards/Cards";
import DashboardSection from "../../../Components/DashboardComponents/DashboardSection/DashboardSection";
import { StudentProfile } from "../../../Components/DashboardComponents/Profile/Profile";
import  { SidebarItem,Sidebar} from "../../../Components/Sidebar/Sidebar";



const StudentDashboard = () => {

    const menus=[
        {id:1, title:"Event Registration", link:"event_section" },
        {id:2, title:"Alumni Connect", link:"alumni_connect" },
        {id:3, title:"Student Co-ordinator", link:"student_coordinator" },
    ]

    return (

        <div className="flex flex-row mt-20">
            <div className="hidden lg:flex">
                <Sidebar name={"Ketty Bruno"} email={"kettybruno@viit.ac.in"}>
                {
                    menus.map((item)=>(
                        <>
                            <SidebarItem key={item.id} title={item.title} link={item.link}/>
                        </>
                    ))
                }
            </Sidebar></div>
            

            {/* aside */}
            <div className="ml-0 lg:ml-64 p-5 lg:p-12">

                {/* profile header */}
                <div className="flex flex-row items-center">
                    {/* profile photo */}
                    <StudentProfile  name={"Ketty Bruno"} isUpdated={true} currentYear={"TY"} sessionsAttended={3} />
                </div>

                {/*  events section */}
                <DashboardSection
                    id={"event_section"}
                    heading={"Events"}
                    subheading={"Upcomming events"}>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </DashboardSection>

                {/* alumni connect section*/}
                <DashboardSection id={"alumni_connect"} heading={"Alumni Connect"}
                    subheading={"Alumni Connect / Mentorship session"}>
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                </DashboardSection>


                {/* student cordinator section*/}
                <DashboardSection id={"student_coordinator"} heading={"Student Co-ordinator"} subheading={"Connect with student co-ordinators"}>
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                </DashboardSection>


            </div>

            {/* events */}



        </div>
    );
}

export default StudentDashboard;