import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import AboutMe from './Pages/AboutMe/AboutMe';
import MyCertificate from './Pages/MyCertificate/MyCertificate';
import MyProjects from './Pages/MyProjects/MyProjects';
import Footer from './Pages/Footer/Footer';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';


function App() {  
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/my-projects' element={<MyProjects />} />
        <Route path='/my-certif' element={<MyCertificate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
