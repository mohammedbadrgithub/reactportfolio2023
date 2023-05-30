import React from 'react'
import './about.scss'
import img from '../../images/1.png'
import {MdOutlineSlowMotionVideo} from 'react-icons/md'
import PopupComponent from '../Pupop/Popup'
// import ProgressBar from "@ramonak/react-progress-bar";
// import Progress from '../Progress/Progress'
import ProgressBarCom from "../ProgressBar/ProgressBar"
import Header from '../Header/Header'
import Button from '../Button/Button'
import {AiOutlineCloudDownload} from 'react-icons/ai'

const About = () => {
  return (
    <div className='about' id='about'>
      <Header text={'about'}  textback={'Mohammed'}/>
      <div className='container'>
        <div 
          className='left'
          
          data-aos="fade-left"
          data-aos-delay={`1000`}
          duration='0'
          easing='ease'
         //  offset='400'
        
        
        >
          <div className='image'>
            <img src={img} alt=''/>
           
          </div>
          <div className='video'>
              
              <PopupComponent icon={<MdOutlineSlowMotionVideo/>}/>
          </div>
          <div className='card'></div>
        </div>
        <div 
          className='right'
          data-aos="fade-right"
          data-aos-delay={`1000`}
          duration='0'
          easing='ease'
          >
          <h2>about me </h2>
          <p> <ul>  <li>Hi this is Mohammed badr and i work as a teacher and web developer .
first I graduated from faculty of education department of english with 
very good grade . and I have worked for 5 years as an english teacher .</li> 
<li>
two months ago , I graduated from iti (information technology institute)
I took intensive course for 4 months as fullstack developer using React.js and Django framework .  I built many projects with python like 
programme that can download videos from youtube , database management GUI that can made crude operation . also with reactjs I built many projects like react-movie-tv , e-commerce using axios and firebase  and fullstack project Medical tourism using reactjs and Django .
</li>
</ul> </p>
          <div className='progresscontainer'>
          {arr.map((a,i)=>{
            return(
              <ProgressBarCom key={i} name={a.name} parcent={a.par} />
            )

          })}
            
          </div>
          <Button 
           text='download my cv' 
          
           down = 'false'
          icon={<AiOutlineCloudDownload/>} 
          />
          
        </div>
      </div>

    </div>
  )
}

export default About
let arr = [
  {name:'Design',par:40},
  {name:'Programming',par:80},
  {name:'marketing',par:60},
]