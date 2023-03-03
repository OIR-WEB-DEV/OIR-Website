import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

const Main = () => {
    const navbarData = [
        {
          text: "Home",
          link: "",
        },
        {
          text: "Internships",
          link: "/internships",
        },
        {
          text: "Events and Activities",
          link: "/events",
        },
        {
          text: "Contact Us",
          link: "/contact",
        },
      ]
    return ( 
        <>
        <NavBar navbarData={navbarData}/>
        <Outlet/>
        <Footer/>
        </>
     );
}
 
export default Main;