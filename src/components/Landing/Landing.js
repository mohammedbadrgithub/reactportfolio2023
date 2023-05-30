// import React , {useRef} from 'react'
import './Landing.scss'
// import img1 from "../../images/1.png";
// import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
// import Face  from '../Face/Face';
import {FaFacebookF,FaLinkedinIn,FaStackOverflow} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'
import {SiTwitter} from "react-icons/si"
import {AiOutlineGithub} from 'react-icons/ai'
import {BsRocketTakeoff} from 'react-icons/bs'
import Socialmedia from '../SocialMedia/Socialmedia'
import Button from '../Button/Button';
import Typed from 'typed.js';
import {useEffect, useRef } from 'react'

  
const Landing = () => {
  const el = useRef()
  useEffect(() => {
    if (el.current) {
      // create a new Typed.js instance
  
      const typed = new Typed(el.current, {
            strings: ['I am Mohammed Badr'  ,'I am a Teacher','and web developer'],
            
        // typeSpeed: 100,
        // backSpeed: 40,
        // loop: true
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        smartBackspace: true,
        loop: true,
        showCursor: true,
        // cursorChar: "!"
      });
      
      // destroy the Typed.js instance when the component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []);
  return (
    <header className='landing' id='up'>
      <div 
      className='container'
        // aos trigger
        
      >
          <div 
          className='image shadow'
          data-aos="zoom-in"
          data-aos-delay={`1000`}
          duration='400'
          easing='ease'
          offset='300'
          
          >
              <img src={img3} alt='name' />
              {
                socialmedia.map((a,i)=>{
                  return(
                    <Socialmedia key={i} delay={i} link={a.href} icon={a.icon} />
                  )
                })
              }
          </div>	
          <h1
             data-aos="fade-down"
             data-aos-delay={`1000`}
             duration='400'
             easing='ease'
            //  offset='400'
          ><span>Hi !</span  > <span ref={el} ></span></h1>
          <Button 
           
             text='hire me' 
             link='https://khamsat.com/programming/css-html/2570396-%D8%AA%D9%86%D8%B3%D9%8A%D9%82-%D9%85%D9%88%D9%82%D8%B9%D9%83-%D8%A8%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-bootstrap-css-%D9%85%D8%AA%D9%88%D8%A7%D9%81%D9%82-%D9%85%D8%B9-%D8%AC%D9%85%D9%8A%D8%B9-%D8%A7%D9%84%D8%A7%D8%AC%D9%87%D8%B2%D8%A9' 
             icon={<BsRocketTakeoff/>} />
      </div>
    </header>
      
    
  )
}

export default Landing


let socialmedia=[
  {href:'https://www.facebook.com/profile.php?id=100008220488277',icon:<FaFacebookF/>},
  {href:'https://web.whatsapp.com/send?phone=+201102396165',icon:<ImWhatsapp/>},
  {href:'https://twitter.com/home',icon:<SiTwitter/>},
  {href:'https://www.linkedin.com/in/mohamme-badr-dev/',icon:<FaLinkedinIn/>},
  {href:'https://github.com/mohammedbadrgithub',icon:<AiOutlineGithub/>},
  {href:'https://stackoverflow.com/users/20875136/',icon:<FaStackOverflow/>},
  

]
