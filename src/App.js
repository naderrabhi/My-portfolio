import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import About from './Pages/About/About';
// import Skills from './Pages/Skills/Skills';
// import Contact from './Pages/Contact/Contact';
import Welcome from './Pages/Welcome/Welcome';
import AboutMe from './Pages/AboutMe/AboutMe';
import MyCertificate from './Pages/MyCertificate/MyCertificate';
import MyProjects from './Pages/MyProjects/MyProjects';
import Footer from './Pages/Footer/Footer';


function App() {
  const [width, setWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
      console.log(width)
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(width)

  
  return (
    <div className='App'>
      <Navbar />
      <Welcome />
      <AboutMe />
      <MyCertificate />
      <MyProjects />
      <Footer />
      {/* <Routes>
        <Route path='/' element={ <div className="app"><Home /><About /><Skills /><Contact /></div> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/skills' element={ <Skills /> }/>
        <Route path='/contact' element={ <Contact /> }/>
      </Routes> */}
    </div>
  );
}

export default App;
