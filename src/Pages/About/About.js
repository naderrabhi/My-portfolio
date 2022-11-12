import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="container" id='about'>
        <div className="row about">
            <div className="col-md-12 about--wrapper">
                <p className='about--me'>About Me</p>
                <p className='about--info'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                <div className="about--card">
                    <p>Hi, I am Nader. A passionate Fullstack Developer from Tunisia. 
                    Recently, I got a FULLSTACK MERN WEB DEVELOPER certificate from 
                    GOMYCODE Immersive Web Development Bootcamp. I am passionate 
                    about coding and solving problems through code, and I am excited 
                    to work alongside other amazing programmers and learn so much more! 
                    I am currently open to jobs. feel free to <a className='about--contact' href="#contact">contact me.</a></p>
                    <p><span>Skills</span> : HTML5, CSS3, JavaScript, ES6, Git, Github, 
                    React JS, Redux, Next JS, Node JS, Express, Mongoose, Mongo DB
                    </p>
                </div>
                <div className="about-certificate">
                        <div className="certificate--card">
                            <img src="./image/certificate.jpg" alt="certificate" />
                        </div>
                        <div className="certificate--card">
                            <img src="./image/certificate.jpg" alt="certificate" />
                        </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About