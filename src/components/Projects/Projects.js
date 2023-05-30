import React ,{useEffect, useRef} from 'react'
import './Projects.scss'
import Header from '../Header/Header'
import {AiFillGithub} from 'react-icons/ai'
import {FaRegEye} from 'react-icons/fa'
import Image from './image'

const Projects = () => {
	const arrshuffle = useRef([])
	
	const shuffle = (e)=>{
		console.log(e.target.dataset.shuffle)
		arrshuffle.current.forEach(a=>{
		
			if(e.target.dataset.shuffle === 'all')
			{
				a.classList.add('show');
			}else{
				if(e.target.dataset.shuffle === a.dataset.shuffle )
				{	a.dataset.aos="fade-up"
					a.classList.add('show');
					
				}else{
					a.dataset.aos=""
					a.classList.remove('show');
					
				}
			}
			
	})}
  return (
    <div className='projects' id='projects' >
		<Header text={'my projects'}  textback={'Mohammed'}/>
		<div className='container shuffle'>
			<div className="btn" 
			 data-aos="fade-up"
			 data-aos-delay={`1000`}
			 duration='400'
			 easing='ease'
			offset='400'
			
			><a data-shuffle='all' onClick={(e)=>shuffle(e)}>all</a></div>
			<div className="btn"
			 data-aos="fade-up"
			 data-aos-delay={`2000`}
			 duration='400'
			 easing='ease'
			offset='400'
			
			><a  data-shuffle='html' onClick={(e)=>shuffle(e)}>html</a></div>
			<div className="btn"
			
			data-aos="fade-up"
			data-aos-delay={`3000`}
			duration='400'
			easing='ease'
		   offset='400'
			><a data-shuffle='react' onClick={(e)=>shuffle(e)}>react</a></div>
		</div>
	<div className='container'>
      {arrproject.map((a,i)=>{
		return(
		<div 

		className="image-area shadow" 
		ref={el => arrshuffle.current[i] = el} 
		data-shuffle={a.sort} 
		key={i}

		data-aos="fade-up"
        data-aos-delay={`${i}000`}
        duration='400'
        easing='ease'
       	offset='400'

		   
		   
		>
		<div className="img-wrapper">
			<Image alt={a.name} />
			<h2>{a.name}</h2>
			<ul>
				<li><a href={a.src} target='blank'><AiFillGithub/></a></li>
				<li><a href={a.page} target='blank'><FaRegEye/></a></li>
			
			</ul>
		</div>
	</div >)
	  })}
	</div>
    </div>
  )
}
let arrproject = [
	{name:'Potfolio',src:'https://github.com/T-W-mohammed/My_Potfolio_pure',page:'https://t-w-mohammed.github.io/My_Potfolio_pure/',sort:'html'},
	{name:'Potfolio2',src:'https://github.com/T-W-mohammed/My_Project_plugin',page:'https://t-w-mohammed.github.io/My_Project_plugin/',sort:'html'},
	{name:'Landing Page',src:'https://github.com/T-W-mohammed/El-Zero1',page:'https://react-landingage-website.netlify.app/',sort:'react'},
	{name:'islamic',src:'https://github.com/T-W-mohammed/islamic-style',page:'https://t-w-mohammed.github.io/islamic-style/',sort:'html'},
	{name:'project',src:'https://github.com/T-W-mohammed/El-Zero1',page:'https://t-w-mohammed.github.io/El-Zero1/',sort:'html'},
	{name:'react-Movie-Tv',src:'https://github.com/T-W-mohammed/El-Zero1',page:'https://movietvapi.netlify.app/',sort:'react'},
	{name:'landing page 2',src:'https://github.com/T-W-mohammed/ReactPortfolioSite',page:'https://react-landingage-website.netlify.app/',sort:'react'},
	{name:'website',src:'https://github.com/T-W-mohammed/El-Zero2', page:'https://t-w-mohammed.github.io/El-Zero2/',sort:'html'},
	{name:'website 2',src:'https://github.com/T-W-mohammed/El-Zero3', page:'https://t-w-mohammed.github.io/El-Zero3/',sort:'html'},
	{name:'website 3',src:'https://github.com/T-W-mohammed/El-Zero4', page:'https://t-w-mohammed.github.io/El-Zero4/',sort:'html'},
]

export default Projects
