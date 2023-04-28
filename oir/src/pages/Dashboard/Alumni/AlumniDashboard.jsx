import { AlumniCard, EventCard, QaCard } from "../../../Components/DashboardComponents/Cards/Cards";
import DashboardSection,{QaSection} from "../../../Components/DashboardComponents/DashboardSection/DashboardSection";
import { AlumniProfile } from "../../../Components/DashboardComponents/Profile/Profile";
import { Sidebar, SidebarItem } from "../../../Components/Sidebar/Sidebar";

const AlumniDashboard = () => {
    const menus = [
        { id: 1, title: "Event Registration", link: "event_section" },
        { id: 2, title: "Alumni Connect", link: "alumni_connect" },
        { id: 3, title: "Q & A", link: "q_a" },
    ]

    document.title = "Alumni Dashboard"
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
            <div className="ml-0 lg:ml-64 p-5 lg:p-12">

                {/* profile header */}
                <div className="flex flex-row items-center">
                    {/* profile photo */}
                    <AlumniProfile name={"Ketty Bruno"} isUpdated={true} country={"India"} email={"ketti.bruno@company.in"} passYear={2022}/>
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


                {/* student cordinator section*/}
                <DashboardSection id={"student_coordinator"} heading={"Student Co-ordinator"} subheading={"Connect with student co-ordinators"}>
                    <AlumniCard />
                    <AlumniCard />
                    <AlumniCard />
                </DashboardSection>

                {/* QA section*/}
                <QaSection id={"q_a"} heading={"Q & A"}
                    subheading={"Ask questions to your alumni"}>
                        
                    <QaCard 
                    name={"Jenny Keller"} 
                    question={"Are there any opportunities in Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque ut ipsa facilis exercitationem, atque cum quod fuga deserunt molestias quo, neque sapiente, inventore nisi. Similique unde nam ullam placeat?"}/>
                   
                    <QaCard 
                    name={"Jenny Keller"} 
                    question={"Are there any opportunities in Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque ut ipsa facilis exercitationem, atque cum quod fuga deserunt molestias quo, neque sapiente, inventore nisi. Similique unde nam ullam placeat?"}/>
                   
                    <QaCard 
                    name={"Jenny Keller"} 
                    question={"Are there any opportunities in Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque ut ipsa facilis exercitationem, atque cum quod fuga deserunt molestias quo, neque sapiente, inventore nisi. Similique unde nam ullam placeat?"}/>
                   

                    <QaCard 
                    name={"Jenny Keller"} 
                    question={"Are there any opportunities in Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque ut ipsa facilis exercitationem, atque cum quod fuga deserunt molestias quo, neque sapiente, inventore nisi. Similique unde nam ullam placeat?"}/>
                   
                    <QaCard 
                    name={"Jenny Keller"} 
                    question={"Are there any opportunities in Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque ut ipsa facilis exercitationem, atque cum quod fuga deserunt molestias quo, neque sapiente, inventore nisi. Similique unde nam ullam placeat?"}/>
                   
                    <QaCard 
                    name={"Jenny Keller"} 
                    question={"Are there any opportunities in Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque ut ipsa facilis exercitationem, atque cum quod fuga deserunt molestias quo, neque sapiente, inventore nisi. Similique unde nam ullam placeat?"}/>

                    {/* view all */}
                    <div className="text-base font-medium mt-10 text-blue-700 underline cursor-pointer">View All</div>
                   
                </QaSection>

            </div>

        </div>
    );
}
// new comment added

export default AlumniDashboard;