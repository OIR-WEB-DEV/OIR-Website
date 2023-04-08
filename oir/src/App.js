
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
const MainPage = React.lazy(() => import('./pages/Main/Main'))
const HomePage = React.lazy(() => import('./pages/Home/Home'))
const EventsPage = React.lazy(() => import('./pages/Events'))
const InternshipPage = React.lazy(() => import('./pages/Internship'))
const LoginPage = React.lazy(() => import('./pages/login'))
const ContactPage = React.lazy(() => import('./pages/Contact'))
const ForgotPage = React.lazy(() => import('./pages/ForgotPass'))
const SignUpPage = React.lazy(()=> import('./pages/Signup'))

const StudentDashboard = React.lazy(() => import('./pages/Dashboard/Student/StudentDashboard'))
const AlumniDashboard = React.lazy(() => import('./pages/Dashboard/Alumni/AlumniDashboard'))
const FacultyDashboard = React.lazy(() => import('./pages/Dashboard/Faculty/FacultyDashboard'))

function App() {

  return (
    <>
      <div className="font-Montserrat overflow-x-hidden">
        
        <BrowserRouter>
          <Suspense>
            <Routes>
              
              <Route path='/' element={ <MainPage />}>
                <Route path='' element={ <HomePage />}/> 
                <Route path='events' element={ <EventsPage />}/> 
                <Route path='login' element={ <LoginPage />}/> 
                <Route path='internships' element={ <InternshipPage />}/> 
                <Route path='dashboard' element={ <StudentDashboard />}/> 
                <Route path='alumniDashboard' element={ <AlumniDashboard/>}/> 
                <Route path='facultyDashboard' element={ <FacultyDashboard/>}/> 
                <Route path='contact' element={ <ContactPage />}/> 
                <Route path='forgot' element={ <ForgotPage />}/> 
                <Route path='login' element={ <LoginPage/> }/> 
                <Route path='signup' element={ <SignUpPage/> }/> 
              </Route> 
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
