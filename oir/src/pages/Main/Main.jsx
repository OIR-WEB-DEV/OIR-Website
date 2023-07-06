import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Modal from "../../Components/Modal/Modal";
import NavBar from "../../Components/NavBar/NavBar";
import { loginUser } from "../../Redux/Actions/AuthActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Spinner = () => {
  return (

    <div className="my-60 text-center" role="status">
      <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-oirOrange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  );
}



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
      hasSubmenu: false
    },
    {
      key: 2,
      text: "Internships",
      link: "/internships",
      hasSubmenu: false,
    },
    {
      key: 3,
      text: "Events and Activities",
      link: "/events",
      hasSubmenu: false,
    },
    {
      key: 4,
      text: "Contact Us",
      link: "/contact",
      hasSubmenu: false,
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
      <Suspense fallback={<Spinner/>}>
        <Outlet>

        </Outlet>
      </Suspense>
      <Footer />
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
};

const mapStateToProps = (state) => ({ AuthLogin: state.AuthLogin });

const mapDispatchToProps = (dispact) => {
  return {
    loginUser: bindActionCreators(loginUser, dispact),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
