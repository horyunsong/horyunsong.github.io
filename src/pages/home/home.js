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
          <div className="half">
            <div className="profile-text ">
              <h1 className="hi">
                Hi, I'm Horyun Song.
              </h1>
              <p className="intro">I am a researcher and designer passionate about enhancing user experience with power of people and technology. (Especially crowdsourcing, collaboration and machine learning.)
              <br/><br/>
                Scroll down to my key projects, or check my <a className="highlight" href={process.env.PUBLIC_URL+"/Horyun_Song_Resume.pdf"}>resume</a> for a quick summary.

              </p>
            </div>
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

