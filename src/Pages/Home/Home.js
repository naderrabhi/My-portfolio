import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import MyCertificate from "../MyCertificate/MyCertificate";
import MyProjects from "../MyProjects/MyProjects";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <>
      <Welcome />
      <AboutMe />
      <MyCertificate />
      <MyProjects />
    </>
  );
};

export default Home;
