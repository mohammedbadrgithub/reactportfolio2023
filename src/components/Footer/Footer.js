import React from 'react'
import './footer.scss'
import {BsFillSuitHeartFill} from 'react-icons/bs'
function Footer() {
  return (
    <footer>
       <div className='container'>
        <div className='News-footer'>

<p className='N-text'>
<marquee direction='left'>
 <a> created with love  <BsFillSuitHeartFill />  by Mohammed Badr </a>
 
 <span>

 &copy; 
 
</span>

in 2023

  </marquee>
</p>
</div>   
</div>  
    </footer>
  )
}

export default Footer