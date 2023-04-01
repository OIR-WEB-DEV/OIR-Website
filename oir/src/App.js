
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
const MainPage = React.lazy(() => import('./pages/Main/Main'))
const HomePage = React.lazy(() => import('./pages/Home/Home'))
const EventsPage = React.lazy(() => import('./pages/Events'))
const InternshipPage = React.lazy(() => import('./pages/Internship'))
const LoginPage = React.lazy(()=> import('./pages/login'))

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
                <Route path='internships' element={ <InternshipPage />}/> 
                <Route path='login' element={ <LoginPage/> }/> 

              </Route> 
              
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
