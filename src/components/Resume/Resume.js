import React from 'react'
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaCss3Alt,FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {TbBrandBootstrap} from 'react-icons/tb'
import {SiTailwindcss,SiMaterialdesignicons,SiLaravel ,SiRedux ,SiPython ,SiDjango} from 'react-icons/si'
import {DiSass,DiPhp} from 'react-icons/di'
// import {} from 'react-icons/si'
import Header from '../Header/Header'
import './Resume.scss'
const Resume = () => {
  return (
    <div className='Resume' id='resume'>
        <Header text={'my Learn steps'}  textback={'Mohammed'}/>
      <div className='container'>
        {
        resume.map((a,i)=>{
                return(  
                  <ResumeBox key={i} icon={a.icon} delay={i} name={a.name} span={a.span} date={a.date} des={a.des} />
            )
            })
        }

      </div>
    </div>
  )
}

export default Resume

function ResumeBox({icon,date,name,span,des,delay}){
  return(
    <div 
      className="box"
        data-aos="fade-up"
        data-aos-delay={`${delay}000`}
        duration='400'
        easing='ease'
       	// offset='400'
      >
      <div className='left'>
          <div className='icon'>{icon}</div>
      </div>
      <div className='right'>
          <h5 className='shadow'>{date}</h5>
          <h3>{name} <span>{span}</span></h3>
          <p>{des.substr(0, 71)   } </p>
          
          
      </div>
  </div>
  )
}

let resume = [
  {icon:<AiOutlineHtml5/>,date:'22-3-2019',name:'HyperText Markup Language',span:'html5',des:'HTML is a markup language used for creating web pages and applications.'},
  {icon:<FaCss3Alt/>,date:'10-4-2019',name:' Cascading Style Sheets ',span:'css3',des:'CSS is used to style HTML documents and control their visual appearance. CSS3 introduces new features for creating animations and advanced layouts.HTML is a markup language used for creating web pages and applications.'},
  {icon:<IoLogoJavascript/>,date:'22-5-2019',name:'javascript',span:'js',des:'JS is a programming language used to create dynamic and interactive web pages and applications. It can be used both on the client-side and server-side.'},
  {icon:<TbBrandBootstrap/>,date:'29-6-2019',name:'Bootstrap 5',span:'bt5',des:'Bootstrap is a popular front-end framework used for building responsive and mobile-first web pages and applications. It includes pre-built components and utilities for designing and customizing layouts.'},
  {icon:<SiTailwindcss/>,date:'3-7-2019',name:'Tailwind CSS: A utility-first CSS framework',span:'Tailwind css',des:'Tailwind CSS is a popular utility-first CSS framework that aims to simplify the process of building responsive, customizable, and scalable user interfaces. With Tailwind, developers can easily design and style UI elements by composing reusable utility classes, without having to write custom CSS from scratch.'},
  {icon:<SiMaterialdesignicons/>,date:'10-7-2019',name:'Material UI: A popular React component library',span:'Material UI css',des:' Material UI is a popular React component library that provides a rich set of customizable UI components based on Googles Material Design guidelines. With Material UI, developers can easily build modern and responsive web applications by leveraging pre-built components, themes, and other powerful features. Material UI also provides a flexible and extensible API for creating custom UI components.'},
  {icon:<DiSass/>,date:'20-7-2019',name:' A powerful CSS preprocessor',span:'Sass',des:'Sass is a popular CSS preprocessor that extends the capabilities of traditional CSS, allowing developers to write more maintainable, modular, and reusable stylesheets. With Sass, developers can use variables, functions, mixins, and other powerful features to streamline their CSS workflow and create more flexible and scalable styles.'},
  {icon:<FaReact/>,date:'20-8-2019',name:'A JavaScript Library for Building User Interfaces',span:'ReactJS',des:'ReactJS is a popular JavaScript library used for building user interfaces. It allows developers to create reusable UI components and manage the state of their application in an efficient way'},
  {icon:<SiRedux/>,date:'20-9-2019',name:'A JavaScript Library for Building User Interfaces',span:'ReactJS',des:'ReactJS is a popular JavaScript library used for building user interfaces. It allows developers to create reusable UI components and manage the state of their application in an efficient way'},
  {icon:<DiPhp/>,date:'15-10-2019',name:' A server-side scripting language',span:'php',des:'Sass is a popular CSS preprocessor that extends the capabilities of traditional CSS, allowing developers to write more maintainable, modular, and reusable stylesheets. With Sass, developers can use variables, functions, mixins, and other powerful features to streamline their CSS workflow and create more flexible and scalable styles.'},
  {icon:<SiLaravel/>,date:'25-11-2019',name:'A PHP Web Application Framework',span:'Laravel',des:'Sass is a popular CSS preprocessor that extends the capabilities of traditional CSS, allowing developers to write more maintainable, modular, and reusable stylesheets. With Sass, developers can use variables, functions, mixins, and other powerful features to streamline their CSS workflow and create more flexible and scalable styles.'},
  {icon:<SiPython/>,date:'25-11-2019',name:'A High-Level, Interpreted Programming Language',span:'Python',des:'Python is a high-level, interpreted programming language. It is known for its simplicity, ease of use, and versatility, making it a popular choice for everything from web development to scientific computing.'},
  {icon:<SiDjango/>,date:'25-11-2019',name:'A High-Level Python Web Framework',span:'Django',des:'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It provides developers with a set of tools and libraries for building web applications quickly and efficiently.'},
]
