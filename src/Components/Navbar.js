import React, { Component, useState } from "react";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const showHideNavbar = () => {
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
      <a
        className="mobile-btn"
        title="Show navigation"
        onClick={showHideNavbar}
      >
        Show navigation
      </a>
      <ul id="nav" className="nav">
        <li>
          <a href="#home" onClick={showHideNavbar}>
            Whoami
          </a>
        </li>
        <li>
          <a href="#resume" onClick={showHideNavbar}>
            Resume
          </a>
        </li>
        <li>
          <a href="#projects" onClick={showHideNavbar}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={showHideNavbar}>
            Contact
          </a>
        </li>
        <li className="hire-me">
          <a href="#contact" onClick={showHideNavbar}>Hire me</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationBar;
