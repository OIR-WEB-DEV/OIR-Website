
import './App.css';
import Home from './pages/Home';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
const HomePage = React.lazy(() => import('./pages/Home'))

function App() {

  

  return (
    <>
      <div className="font-Montserrat overflow-x-hidden">
        <BrowserRouter>
          <Suspense>
            <Routes>
              <Route path='/' element={ <Home />}/> 
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
