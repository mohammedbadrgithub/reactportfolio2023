import React from 'react'
import { Link } from 'react-scroll';
import './navbar.scss'
import { useEffect } from 'react'



const Navbar = () => {


  function checkActive() {
    let selectedLink = document.querySelector(".selectedLink");
  document.querySelectorAll("nav li").forEach((item) => {
    if (item.dataset.active === "true") {
      selectedLink.style.transform = `translateX(${item.offsetLeft + item.offsetWidth / 2 - 24 + "px" })`;
      
    }
  }); 
}
window.onresize = ()=>{
  checkActive()
}

useEffect(()=>{
  document.querySelectorAll("nav li").forEach((item) => {
    
    item.addEventListener("click", (e) => {
      document.querySelectorAll("nav li").forEach((i) => {
        i.dataset.active = "false";
        i.className = ''
      });
      e.currentTarget.dataset.active = "true";
      e.currentTarget.className = 'active'
      checkActive(); 
    });
  });
  checkActive()
},[]) 
  return (
    <nav className='shadow'>
        <div className='container'>
        <div className='logo'>
            M<span>T</span>M
        </div>
        <ul className=''>
          <div className="selectedLink">
            <div className="side left"></div>
            <div className="side right"></div>
            <div className="outside left"></div>
            <div className="outside right"></div>
            <div className="dot"></div>
  

          </div>
          <li data-active="true" className='active'><Link 
          
          
          to="about"
          smooth={true}
          duration={1500}
          offset={50}
          
          >about</Link></li>
          <li data-active="false"><Link 
          
          to="services"
          smooth={true}
          duration={1500}
          offset={80}
          
          >services</Link></li>
          <li data-active="false"><Link 
          to="projects"
          smooth={true}
          duration={1500}
          offset={80}
          
          >projects</Link></li>
          <li data-active="false"><Link 
           to="resume"
           smooth={true}
           duration={1000}
           offset={80}
          >resume</Link></li>
          {/* <li data-active="false"><Link to="#">blogs</Link></li> */}
          <li data-active="false"><Link
           to="Contact"
           smooth={true}
           duration={1500}
           offset={50}
          >Contact</Link></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar