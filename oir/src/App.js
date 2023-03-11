
import './App.css';
import Footer from './Components/Footer/Footer';
import Heading from './Components/Heading/Heading';
import NavBar from './Components/NavBar/NavBar';
import Home from './pages/Home';
import Events from './pages/Events';
import Signup from './pages/Signup';
import Login from './pages/login';
import Internships from './pages/Internships'

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
      <div className="font-Montserrat overflow-x-hidden" id="mystyle">
        <NavBar navbarData={navbarData} />
        <Internships />
        <Signup />
        <Footer />
      </div>
    </>
  );
}

export default App;
