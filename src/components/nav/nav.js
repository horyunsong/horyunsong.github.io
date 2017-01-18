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
      <div id="nav" className="">
        <div className="flex justify-between nav-wrapper">
          <div className="nav-left flex">
            <Link to="/"  className="icon">
              <div>
                  <img src={home}/>
              </div>
            </Link>
            <a href={window.location.pathname === "/" ? "#work" : "/#work"} className="icon">
              <div>
                  <img src={portfolio}/>
              </div>
            </a>
          </div>
          <div className="nav-right flex">
            <a href={process.env.PUBLIC_URL+"/Horyun_Song_Resume.pdf"} className="icon">
              <div>
                  <img src={resume}/>
              </div>
            </a>
            <a href="http://linkedin.com/in/horyunsong" className="icon">
              <div>
                  <img src={linkedin}/>
              </div>
            </a>
            <a href="mailto:horyunsong@gatech.edu" className="icon">
              <div>
                  <img src={email}/>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }

}
export default Nav;

