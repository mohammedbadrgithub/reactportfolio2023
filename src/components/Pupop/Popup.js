
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import Iframe from '../Iframe/Iframe'
const PopupComponent = ({icon}) => {
  return (
    
    <Popup trigger={<div>{icon}</div>} position="left center" style={{width:'fit-content',    background: 'transparent',
    border: 'none'}} >
       <div className='container' style={{overflow:'hidden',width:'fit-content'}} >
       
          <iframe 
          width="460" 
          height="215" 
          src="https://www.youtube.com/embed/XpEGz3cBnzU" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
        </div>
    </Popup>
   
  )
}

export default PopupComponent
