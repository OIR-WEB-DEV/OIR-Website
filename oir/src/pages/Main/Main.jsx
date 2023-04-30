import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Modal from "../../Components/Modal/Modal";
import NavBar from "../../Components/NavBar/NavBar";
import { loginUser } from "../../Redux/Actions/AuthActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Main = (props) => {
  const [showModal, setShowModal] = useState(false);
  // const userDetails = props.loginUser();
  // function to show modal after 2.5 second
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true);
  //   }, 2500);
  // }, []);

  // function to close modal
  // console.log(userDetails)
  function closeModal() {
    setShowModal(false);
  }
  const navbarData = [
    {
      key: 1,
      text: "Home",
      link: "",
      hasSubmenu:false
    },
    {
      key: 2,
      text: "Internships",
      link: "/internships",
      hasSubmenu:false,
    },
    {
      key: 3,
      text: "Events and Activities",
      link: "/events",
      hasSubmenu:false,
    },
    {
      key: 4,
      text: "Contact Us",
      link: "/contact",
      hasSubmenu:false,
    },
    {
      key: 5,
      text: "Dashboard",
      link: "/dashboard",
      hasSubmenu: true,
      submenuItems: [
        { id: 6, title: "Event Registration", link: "event_section" },
        { id: 7, title: "Alumni Connect", link: "alumni_connect" },
        { id: 8, title: "Student Co-ordinator", link: "student_coordinator" },
      ]
    },
  ]
  // console.log(props.AuthLogin.loginAuth.data)
  // YAAT SAGLA DATA store kela aahe ha use kr token and session storage 
  // Yaat kahi changes kru nko jast bagh kasa ani he comments delete kr nantr. 
  return (
    <>
      <NavBar navbarData={navbarData} />
      <Suspense>
        <Outlet>
          
        </Outlet>
      </Suspense>
      <Footer />
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
};

const mapStateToProps = (state) => ({ AuthLogin: state.AuthLogin });

const mapDispatchToProps = (dispact) => {return {
  loginUser: bindActionCreators(loginUser,dispact)  ,
}};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
