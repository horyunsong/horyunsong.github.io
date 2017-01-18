import React, { Component } from 'react';
import "./index.css";
import Work from "../work/work";
import Home from "../home/home";
import Nav from "../../components/nav/nav";
import About from "../about/about";
import {Scrollspy} from "react-scrollspy";
import {Link} from "react-router";

import leftHand from '../../img/index/lefthand.png';
import rightHand from '../../img/index/righthand.png';

class Index extends Component {
  render() {
    return (
      <div>
        {/*<div id="nav" className="fixed-side-navbar">
        <div className="nav-list">
          <Scrollspy items={['home', 'about', 'work']} currentClassName="active">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
          </Scrollspy>
        </div>
      </div>
      <div id="home">
        <div className="hi">
          <div className="hi-box"></div>
          <h4 className="hi-message">Hi, I'm <span className="purple">Horyun Song</span>,<br/>UX Researcher + Designer.<br/>I look for answers in <span className="purple">people</span>.</h4>
        </div>
        <div className="hands">
          <img className="left" src={leftHand} />
          <img className="right" src={rightHand} />
        </div>
      </div>
        <About/>*/}
        <Nav />
        <Home />
        <Work />
        {/*
      <div id="tail">
        <div><h5>designed by <span className="bold">Horyun Song</span></h5></div>
      </div>
      */}

      </div>
    )
  }
}
export default Index;
