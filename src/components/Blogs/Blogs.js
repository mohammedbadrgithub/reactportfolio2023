import React from 'react'
import './blogs.scss'
const Blogs = () => {
  return (
<div className="wrapper">
    <div className="outer">
      <div className="card" style={{"--delay":-1}}>
        <div className="content">
          <div className="img"><img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt="" /></div>
          <div className="details">
            <span className="name">Mohammed Yousef
</span>
            <p>Frontend Developer</p>
          </div>
        </div>
        {/* <a href="#">Follow</a> */}
      </div>
      <div className="card" style={{"--delay":0}}>
        <div className="content">
          <div className="img"><img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt=""/></div>
          <div className="details">
            <span className="name">Mohammed 
</span>
            <p>YouTuber & Blogger</p>
          </div>
        </div>
        {/* <a href="#">Follow</a> */}
      </div>
      <div className="card" style={{"--delay":1}}>
        <div className="content">
          <div className="img"><img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt=""/></div>
          <div className="details">
            <span className="name"> Yousef
</span>
            <p>Freelancer & Vlogger</p>
          </div>
        </div>
        {/* <a href="">Follow</a> */}
      </div>
      <div className="card" style={{"--delay":2}}>
        <div className="content">
          <div className="img"><img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt=""/></div>
          <div className="details">
            <span className="name">Ahmed Yousef
</span>
            <p>Backend Developer</p>
          </div>
        </div>
        {/* <a href="#">Follow</a> */}
      </div>
      <div className="card" style={{"--delay":2}}>
        <div className="content">
          <div className="img"><img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt=""/></div>
          <div className="details">
            <span className="name">hamada Yousef
</span>
            <p>Teacher & Advertiser</p>
          </div>
        </div>
        {/* <a href="#">Follow</a> */}
      </div>
    </div>
</div>
  )
}

export default Blogs
