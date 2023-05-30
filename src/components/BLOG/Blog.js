import React from 'react'
import Header from '../Header/Header'
import './Blog.scss'
import {AiFillFacebook} from 'react-icons/ai'
const Blog = () => {
  return (
    <div className='Blogs'>
        <Header text={'my blogs'}  textback={'Mohammed'}/>
        <div className='container'>
            {arr.map((a,i)=>{
                return(  
                <div 
                class="box shadow" 
                data-aos="flip-left"
                data-aos-delay={`${i + 1}000`}
                duration='400'
                easing='ease'
                offset='400'
                key={i}>
                <div class="box__head">
                  <img src={a.img}   alt={a.h1} />
                </div>
                <div class="box__content">
                    <h4>{a.date}</h4>
                  <h2>{a.h1}</h2>
                  <p>{a.des}</p>
                </div>
                <div class="box__social">
                  <AiFillFacebook />
                  <i class="fa-brands fa-twitch"></i>
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-twitter"></i>
                </div>
              </div>)
            })}
            
        </div>
      
    </div>
  )
}

export default Blog
let arr = [
    {img:'https://source.unsplash.com/XP9JF6jyRGc/400x400',date:'2023-5-18',h1:'Contrary to popular belief, Lorem Ipsum is not simply',des:'It is a long established fact that a reader will be distracted by the readable'},
    {img:'https://source.unsplash.com/LFVBohYmtgc/400x400',date:'2023-5-18',h1:'Contrary to popular belief, Lorem Ipsum is not simply',des:'It is a long established fact that a reader will be distracted by the readable'},
    {img:'https://source.unsplash.com/EOAKUQcsFIU/400x400',date:'2023-5-18',h1:'Contrary to popular belief, Lorem Ipsum is not simply',des:'It is a long established fact that a reader will be distracted by the readable'}
]
