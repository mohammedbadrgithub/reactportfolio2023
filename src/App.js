
import './App.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from "react";
import Loader from './components/loader/loader'
import Navbar from './components/navbar/navbar';
import { BrowserRouter } from "react-router-dom";
// import Blog from './components/BLOG/Blog';
import Services from './components/Services/Services';
// import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer'
import ChatBotHelper from './components/Chatbot/Chatbot.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

import {CgScrollV} from 'react-icons/cg'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    AOS.init()
    let gxNfOK = document.querySelector('.gxNfOK')
    if(gxNfOK){
      gxNfOK.style.cssText = 'right: 57px !important;'
    }
  },[])
  useEffect(() => {
    // Your data loading code here
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
 
  return (
    <>
     <div className="app" >
     {isLoading ? <Loader /> : <BrowserRouter> 
     
     <ToastContainer /> 
     <Navbar />
     <Landing/>
     <About/>
     <Services />
     <Projects/>
     <Resume/>
  
     <Contact/>
     <Footer/>
     
     <div className='up'>
      <Link
       to="up"
       smooth={true}
       duration={1500}
       offset={80}
      
      > <CgScrollV />  </Link> 
     </div>
     <div className='centerscreen'>
       <ChatBotHelper/>
     </div>
     
     
      </BrowserRouter>}
      
     
      
      </div>
    </>


  )
}

export default App;