import { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from 'swiper';
import {BsCodeSlash} from 'react-icons/bs'
import {MdOutlineDesignServices,MdTrolley,MdAutoFixHigh} from 'react-icons/md'

import { Swiper ,SwiperSlide} from 'swiper/react';
import './Services.scss'
import Countup from '../Countup/CountUp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from '../Header/Header';
// import { text } from 'd3';
// import 'swiper/css/scrollbar';
const Services = () => {
  return (
    <div className='services' id='services'>
        <div 
        className='container'
        data-aos="fade-down"
        data-aos-delay={`4000`}
        duration='400'
        easing='ease'
       offset='400'
        >
          <Header text={'services'}  textback={'Mohammed'}/>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
             }}
          >
           {servicesarr.map((a,i)=>{
            return(
              <SwiperSlide 
              key={i} 
              className='slide shadow'
             
              >
                <h3>{a.icon}</h3>
                <h2>{a.title}</h2>
                <p>{a.des}</p>
              </SwiperSlide>
            
            )
           })}
           
          
          </Swiper>
        </div>
        <div className='container statis'>
        {
          statistic.map((a,i)=>{
            return(
            <Countup delay={i} key={i} countValue={a.num} title={a.title} />
            
            )
          })
        }
        </div>
    </div>
  )
}

export default Services

let servicesarr = [
  {icon:<BsCodeSlash /> ,title:'coding' , des:'I will convert your figma design into code'},
  {icon:<MdOutlineDesignServices /> ,title:'designing' , des:'I will design your website and make it responsive on all media screenss'},
  {icon:<MdTrolley /> ,title:'marketing' , des:'I will share your servic on all my social media accounts'},
  {icon:<MdAutoFixHigh /> ,title:'fix code' , des:'If you have errors on your responsive or any other erros I will fix it for you'},

]
let statistic = [
  {num:9,title:'completed projects'},
  {num:6,title:'our clients'},
  {num:4,title:'frontend projects'},
  {num:4,title:'backend projects'}
]