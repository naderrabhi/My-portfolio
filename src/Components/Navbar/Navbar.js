import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Social from "../Social/Social";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo p__opensans">
        <Link to='/'>NR</Link>
      </div>
      <ul className="app___navbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans">
          <Link to="/about">About</Link>
        </li>
        <li className="p__opensans">
          <Link to="/my-project">My Project</Link>
        </li>
        <li className="p__opensans">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="app___navbar-social flex__center">
        <Social />
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="app___navbar-smallscreen_overlay flex__content slide-bottom">
            <MdClose
              className="overlay__close"
              fontSize={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app___navbar-smallscreen-links">
              <li className="p__opensans">
                <Link to="/">Home</Link>
              </li>
              <li className="p__opensans">
                <Link to="/about">About</Link>
              </li>
              <li className="p__opensans">
                <Link to="/my-project">My Project</Link>
              </li>
              <li className="p__opensans">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
