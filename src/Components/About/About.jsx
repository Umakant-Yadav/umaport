import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import pic_user from '../../assets/pic-2.png'



const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={pic_user} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am Umakant Yadav, a passionate Java Full Stack Developer with a B.Sc in IT. With a strong foundation in software development, I am dedicated to building innovative and efficient solutions. I thrive on solving complex problems and continuously learning new technologies to enhance my skills.</p>
          </div>
          <div className="about-skills">
            <h1>Skills</h1>
            <div className="about-skill"><p>Core Java </p><hr style={{ width: "85%" }} /></div>
            <div className="about-skill"><p>SpringBoot</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>SQL-MySQL</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>ReactJS</p><hr style={{ width: "50%" }} /></div>
            <div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default About
