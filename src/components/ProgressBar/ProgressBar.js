import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar"
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import {useState} from 'react'
import './progressbar.scss'
const ProgressBarCom = ({name,parcent}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [val,setVal] = useState(0)
    const onVisibilityChange = (visible) => {
      if (visible) {
        setIsVisible(true);
        setVal(parcent)
      }else{
          setVal(0)
      }
    };
  return (
    <VisibilitySensor onChange={onVisibilityChange}>
    <div className='progress'>
 
    <div className='titleandpercent'>
      <h3>{name}</h3>
      <span><CountUp start={0} end={val}  duration={10} />%</span>
    </div>
    <ProgressBar 
    completed={isVisible ? val : 0}
    isLabelVisible={true}
    transitionDuration='10s'
    transitionTimingFunction='ease-in-out'
    maxCompleted={100}
    bgColor='hsl(34.25deg 100% 50.2%)'
    initCompletedOnAnimation={100}
    animateOnRender={true}
     />
    
  </div>
  </VisibilitySensor>  
  )
}

export default ProgressBarCom