import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Modal from "../../Components/Modal/Modal";
import NavBar from "../../Components/NavBar/NavBar";

const Main = () => {
  const [showModal, setShowModal] = useState(false)

  // function to show modal after 2.5 second
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 2500)
  }, [])

  // function to close modal
  function closeModal() {
    setShowModal(false)
  }
  const navbarData = [
    {
      key: 1,
      text: "Home",
      link: "",
    },
    {
      key: 2,
      text: "Internships",
      link: "/internships",
    },
    {
      key: 3,
      text: "Events and Activities",
      link: "/events",
    },
    {
      key: 4,
      text: "Contact Us",
      link: "/contact",
    },
    {
      key: 5,
      text: "Dashboard",
      link: "/dashboard",
      hasSubmenu: true,
      submenuItems: [
        { id: 1, title: "Event Registration", link: "event_section" },
        { id: 2, title: "Alumni Connect", link: "alumni_connect" },
        { id: 3, title: "Student Co-ordinator", link: "student_coordinator" },
      ]
    },
  ]
  return (
    <>
      <NavBar navbarData={navbarData} />
      <Outlet />
      <Footer />
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
}

export default Main;