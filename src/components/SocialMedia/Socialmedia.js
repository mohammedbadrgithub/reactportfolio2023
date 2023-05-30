import React from 'react'

const Socialmedia = ({link,icon,delay}) => {
  return (
<span style={{'--i':delay}}>
    <a href={link} className='shadow' target='blank' >{icon}</a>
</span>
  )
}

export default Socialmedia
