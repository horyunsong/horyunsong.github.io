import React, { Component } from 'react';
import "./home.css";
import Work from "../work/work";
import Nav from '../../components/nav/nav';
import TextLoop from 'react-text-loop';

import hi from "../../img/home/hi.png";
import im from "../../img/home/im.png";
import ruff from "../../img/home/ruff.png";
import sniff from "../../img/home/sniff.png";
import mouse from "../../img/home/mouse.png";
import pencil from "../../img/home/pencil.png";
import people from "../../img/home/people.png";

class Home extends Component {

  render() {

    return(
      <div id="home">
        <Nav/>
        <div className="profile-container flex">
          <div className="profile-img half">
            <img src={people} alt="profile image" />
          </div>
          <div className="profile-text half">
            <h1>
              Hi, I'm Horyun Song.
            </h1>
            <p>I'm a UX Researcher and Designer with love for collaboration</p>
          </div>
        </div>
        <div className="full worklist">
          <Work />
        </div>
      </div>
    )
  }

}
export default Home;

