import React from "react";
import "./aboutme.css";
import nader from "../../assets/image/nader.png";

const AboutMe = () => {
  return (
    <div className="app___about section__padding">
      <div className="app__aboutme-overlay flex__center ">
        <img src={nader} alt="nader rabhi" />
      </div>
      <div className="app__aboutme-content flex__center">
        <div className="app__aboutme-content_about">
          <h1 className="headtext__cormorant">About Me</h1>
          {/* <img src={images.spoon} alt="about_spoon" className='spoon__img' /> */}
          <p className="p__opensans">
            Hi, I am Nader. A passionate Fullstack Developer from Tunisia.
            Recently, I got a FULLSTACK MERN WEB DEVELOPER certificate from
            GOMYCODE Immersive Web Development Bootcamp. I am passionate about
            coding and solving problems through code, and I am excited to work
            alongside other amazing programmers and learn so much more! I am
            currently open to jobs. feel free to contact me.
          </p>
          <p className="p__opensans">Skills : HTML5, CSS3, JavaScript, ES6, Git, Github, React JS, Redux, Next JS, Node JS, Express, Mongoose, Mongo DB</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
