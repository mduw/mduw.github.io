import React from "react";
import ProfileImg from "../assets/images/profile.jpg";
import NavigationBar from "./Navbar";

const Header = ({ data }) => {
  const { main, social } = data;

  return (
    <>
      <header id="home">
        <NavigationBar />
        <div className="row banner">
          <div className="profile-container">
            <a href={social[0].url} target="blank">
              <img src={ProfileImg} alt="Avatar" className="profile-pic" />
              <div className="overlay">
                <div className="text">View Mitchell's LinkedIn</div>
              </div>
            </a>
          </div>

          <h3>{main.description}</h3>
          <hr />
          <h5 className="skills">{main.skills}</h5>
        </div>

        <a href="#resume" title="scroll down">
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </a>
      </header>
    </>
  );
};

export default Header;
