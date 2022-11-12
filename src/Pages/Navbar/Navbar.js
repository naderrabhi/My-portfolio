import React, { useState } from "react";
import { FaHome, FaInfo, FaBrain, FaFileAlt, FaPhoneAlt } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = ({ sx }) => {
  const [toggle, setToggle] = useState(false);
 
  const Pages = [
    { title: "Home",path : "/", icon: <FaHome /> },
    { title: "About",path : "/about", icon: <FaInfo /> },
    { title: "Skills",path : "/skills", icon: <FaBrain /> },
    {title : 'Portfolio',path : "/portfolio", icon : <FaFileAlt />},
    {title : 'Contact',path : "/contact", icon : <FaPhoneAlt />},
  ];
  
  return (
    <aside
      className={
        sx < 600 ? "sideMenuShow" : toggle ? "sideMenuShow" : "sideMenuHide"
      }
      onMouseEnter={() => {
        setToggle(true);
      }}
      onMouseLeave={() => {
        setToggle(false);
      }}
    >
      <ul className="navbar">
        {Pages.map(({title,path,icon}, index) => (
          <Link
            key={index}
            className="navbarItem"
            to={path}
          >
            <span>
              {icon}
              {toggle ? title : null}
            </span>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Navbar;
