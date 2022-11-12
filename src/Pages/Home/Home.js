import React from 'react'
import './Home.css'
import { FaFacebook,FaInstagramSquare,FaLinkedin,FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className='container' id='home'>
        <div className="row home">
            <div className="col-md-7 col-lg-6 col-sm-12 home--wrapper">
                <div className="home--wrapper--content">
                    <p>Hi I'm Nader</p>
                    <p>FullStack Web Developer</p>
                    <p>I'm a web developer with a focus on the MERN stack, 
                        but still exploring other technologies and frameworks 
                        that catch my interest! if you're looking for a developer 
                        to add to your team, I'd love to hear from you!</p>
                        <div className="home--wrapper--icon">
                            <a href="/" className='icon--item'><FaFacebook /></a>
                            <a href="/" className='icon--item'><FaInstagramSquare /></a>
                            <a href="/" className='icon--item'><FaLinkedin /></a>
                            <a href="/" className='icon--item'><FaGithub /></a>
                        </div>
                        <div className="home--wrapper--download">
                            <button className='btn'>Download CV</button>
                        </div>
                </div>
            </div>
            <div className="col-md-5 col-lg-6 col-sm-12 home--wrapper">
                <div className="home--wrapper--img">
                    <img src="./image/nader.png" alt="nader" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home