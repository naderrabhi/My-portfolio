import React from "react";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="app___welcome section__padding" id="welcome">
      <h1 className="app___welcome-h1">Hi I'm Nader Rabhi</h1>
      <h5 className="app___welcome-h3">I'm FullStack Web Developer</h5>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        " I'm a web developer with a focus on the MERN stack, but still exploring
        other technologies and frameworks that catch my interest! if you're
        looking for a developer to add to your team, I'd love to hear from you! "
      </p>
    </div>
  );
};

export default Welcome;
