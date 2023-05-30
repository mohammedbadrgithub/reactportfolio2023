import React from 'react'
import './button.scss'
const Button = ({link,icon,text ,down}) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('../../cv/cv.pdf').then(response => {
      console.log(response)
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.querySelector('.buttonComponent');
            alink.href = fileURL;
            alink.download = 'myCv.pdf';
            alink.click();
            console.log('donwload')
        })
    })
}
  return (
    <a 
    href={link} 
    download={down ? down : 'false'}
    onClick={down && onButtonClick}
    target='blank' 
    className='shadow buttonComponent'

    data-aos="fade-up"
    data-aos-delay={`1000`}
    duration='400'
    easing='ease'
    // offset='300'
     
     
     >
       <span>{icon}</span> 
        <span>
            {text}
        </span>

    </a> 
  )
}

export default Button
