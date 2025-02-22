import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import '../css/style.css'
import HomePage from '../pages/HomePage/HomePage.jsx'
import './App.css'
import AboutPage from '../pages/AboutPage/AboutPage.jsx';
import JobPage from '../pages/JobPage/JobPage.jsx';
import CoursePage from '../pages/CoursePage/CoursePage.jsx';
import SignPage from '../pages/SignPage/SignPage.jsx';
import LoginPage from '../pages/LoginPage/LoginPage.jsx';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route  path="/*" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/job' element={<JobPage />} />
        <Route path='/course' element={<CoursePage />} />
        <Route path='/sign' element={<SignPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
