
import './Header.scss'

const Header = ({text, textback ,}) => {
 
  return (
    <h2  
    
      className='mainHeader' 
      data-text={textback}
      // aos trigger
      data-aos="fade-down"
      // data-aos-delay={`2000`}
      duration='400'
      easing='ease'
      offset='400'
    >
      <span>{text}</span>
    </h2>
  )
}

export default Header