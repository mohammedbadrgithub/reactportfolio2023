
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import './Count.scss'
const Countup = ({countValue,title ,delay}) => {
  const [isVisible, setIsVisible] = useState(false);
const [val,setVal] = useState(0)
  const onVisibilityChange = (visible) => {
    if (visible) {
      setIsVisible(true);
      setVal(countValue)
    }else{
        setVal(0)
    }
  };
 
  return (
    <VisibilitySensor onChange={onVisibilityChange}>
      <div className='count shadow'  
        data-aos="fade-up"
        data-aos-delay={`${delay}000`}
        duration='400'
        easing='ease'
        offset='400'
        
        >
        {isVisible ? (<span className='countSpan'>
        
          <CountUp start={0} end={val} delay={2} duration={10} />
          +
          
          </span>
        ) : (
          0
        )}
        <h3>{title}</h3>
      </div>
    </VisibilitySensor>
  );
};

export default Countup;