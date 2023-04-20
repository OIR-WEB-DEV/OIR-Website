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

{/* <Routes>              
              <Route path='/' element={ <MainPage />}>
                <Route path='' element={ <HomePage />}/> 
                <Route path='events' element={ <EventsPage />}/> 
                <Route path='login' element={ <LoginPage />}/> 
                <Route path='internships' element={ <InternshipPage />}/> 
                <Route path='dashboard' element={ <StudentDashboard />}/> 
                <Route path='contact' element={ <ContactPage />}/> 
                <Route path='forgot' element={ <ForgotPage />}/> 
                <Route path='login' element={ <LoginPage/> }/> 
                <Route path='signup' element={ <SignUpPage/> }/> 
                <Route path='new' element={<NewPassword />} />
                <Route path='profile' element={<Profile />} />
                <Route path='validation' element={<Validation />} />
                <Route path='otp' element={<OTP/>}/>
              </Route> 
            </Routes>
            <Routes> */}

const components = {
    Home: {
		path: "/",
		name: "home",
		element: <Home />,
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
    components.Home
];
export { rolesConfig, BasicRoutesConfig };