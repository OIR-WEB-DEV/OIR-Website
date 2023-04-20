import React from "react";

const MainPage = React.lazy(() => import('../pages/Main/Main'))
const HomePage = React.lazy(() => import('../pages/Home/Home'))
const EventsPage = React.lazy(() => import('../pages/Events'))
const StudentDashboard = React.lazy(() => import('../pages/Dashboard/Student/StudentDashboard'))
const InternshipPage = React.lazy(() => import('../pages/Internship'))
const LoginPage = React.lazy(() => import('../pages/login'))
const ContactPage = React.lazy(() => import('../pages/Contact'))
const ForgotPage = React.lazy(() => import('../pages/ForgotPass'))
const SignUpPage = React.lazy(() => import('../pages/Signup'))
const Profile = React.lazy(() => import('../pages/Profile'))
const NewPassword = React.lazy(() => import('../pages/NewPassword'))
const Validation = React.lazy(() => import('../pages/validation'))
const OTP = React.lazy(() => import('../pages/OtpPage'))


const components = {
    HomePage: {
		path: "/",
		name: "HomePage",
		element: <HomePage />,
	},
    EventsPage: {
		path: "/events",
		name: "EventsPage",
		element: <EventsPage />,
	},
    LoginPage: {
		path: "/login",
		name: "LoginPage",
		element: <LoginPage />,
	},
    InternshipPage: {
		path: "/internships",
		name: "InternshipPage",
		element: <InternshipPage />,
	},
    StudentDashboard: {
		path: "/dashboard",
		name: "StudentDashboard",
		element: <StudentDashboard />,
	},
    ContactPage: {
		path: "/contact",
		name: "ContactPage",
		element: <ContactPage />,
	},
    ForgotPage: {
		path: "/forgot",
		name: "ForgotPage",
		element: <ForgotPage />,
	},
    SignUpPage: {
		path: "/signup",
		name: "SignUpPage",
		element: <SignUpPage />,
	},
    NewPassword: {
		path: "/new",
		name: "NewPassword",
		element: <NewPassword />,
	},
    Profile: {
		path: "/profile",
		name: "Profile",
		element: <Profile />,
	},
    Validation: {
		path: "/validation",
		name: "Validation",
		element: <Validation />,
	},
    OTP: {
		path: "/otp",
		name: "OTP",
		element: <OTP />,
	},
}

const rolesConfig = {
	Admin: {
		routes: [
            
		],
	},
	Student: {
		routes: [

        ],
	},
    Alumini: {
		routes: [

        ],
	},
    Teacher: {
		routes: [

        ],
	},
};
const BasicRoutesConfig = [
    
];
export { rolesConfig, BasicRoutesConfig };