
import './App.css';
import Footer from './Components/Footer/Footer';
import Heading from './Components/Heading/Heading';
import NavBar from './Components/NavBar/NavBar';
import Home from './pages/Home';

function App() {

  const navbarData = [
    {
      text: "Home",
      link: "",
    },
    {
      text: "Internships",
      link: "/Internships",
    },
    {
      text: "Events and Activities",
      link: "/Events and Activities",
    },
    {
      text: "Contact Us",
      link: "/Contact Us",
    },
  ]

  return (
    <>
      <div className="font-Montserrat">
        <NavBar navbarData={navbarData} />
        <Heading text={"About Us"}/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
