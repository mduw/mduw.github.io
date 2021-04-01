import React, { Component, useState } from "react";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const showNavbar = () => {
    const navbar = document.getElementById("nav");
    if (open) {
      navbar.style.display = "none";
      setOpen(!open);
    } else {
      navbar.style.display = "block";
      setOpen(!open);
    }
  };
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" title="Show navigation" onClick={showNavbar}>
        Show navigation
      </a>
      <ul id="nav" className="nav">
        <li>
          <a href="#home">
            Whoami
          </a>
        </li>
        <li>
          <a href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
        <li className="hire-me">
          <a href="#contact">
            Hire me
          </a>
        </li>
       
      </ul>
    </nav>
  );
};
export default NavigationBar;
