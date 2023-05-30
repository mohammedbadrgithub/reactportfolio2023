import React from 'react'
import {Circles} from 'react-loader-spinner'
import './loader.scss'
const Loader = () => {
  return (
    <div className='popup'>
      <Circles
        height="80"
        width="80"
        color="hsl(34.25deg 100% 50.2%)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    </div>
  )
}

export default Loader
