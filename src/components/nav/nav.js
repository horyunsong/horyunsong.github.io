import React, { Component } from 'react';
import {Link} from 'react-router';
import "./nav.css";

import email from "../../img/nav/email.png";
import linkedin from "../../img/nav/linkedin.png";
import home from "../../img/nav/home.png";
import portfolio from "../../img/nav/portfolio.png";
import resume from "../../img/nav/resume.png";


class Nav extends Component {


  render() {

    return(
      <div id="nav" className="nav">
        <div className="flex justify-between nav-wrapper">
          <div className="home">
            <Link to="/">
              <h4 className="name">Horyun Song</h4>
              <span className="job">UX Researcher · Designer</span>
            </Link>
          </div>
          <div className="nav-right">
            <h4 className="menu-item">
              <a href={window.location.pathname === "/" ? "#work" : "/#work"}>Portfolio</a>
            </h4>
            <h4 className="menu-item">
              <a href="">About</a>
            </h4>
            <h4 className="menu-item">
              <a href={process.env.PUBLIC_URL+"/Horyun_Song_Resume.pdf"}>Resume</a>
            </h4>

            {/*
            <a href="http://linkedin.com/in/horyunsong" className="icon">
              <p></p>
            </a>
            <a href="mailto:horyunsong@gatech.edu" className="icon">
              <div>
                  <img src={email} alt="email"/>
              </div>
            </a>*/}
          </div>
        </div>
      </div>
    )
  }

}
export default Nav;

