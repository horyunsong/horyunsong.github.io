import React, { Component } from 'react';
import "./home.css";
import Work from "../work/work";
import Credit from "../../components/credit/credit";
import Nav from '../../components/nav/nav';
import TextLoop from 'react-text-loop';

import hi from "../../img/home/hi.png";
import im from "../../img/home/im.png";
import ruff from "../../img/home/ruff.png";
import sniff from "../../img/home/sniff.png";
import mouse from "../../img/home/mouse.png";
import pencil from "../../img/home/pencil.png";
import people from "../../img/home/people.png";
import icon from "../../img/home/icon.png";

class Home extends Component {

  //Boolean state for filtering//
  constructor(props) {
    super(props);
    this.state = {
      portfolio: false,
      about: false,
    };

    this.portfolioClick = this.portfolioClick.bind(this);
    this.aboutClick = this.aboutClick.bind(this);
  }

  //Filter functions bound to buttons//

  portfolioClick() {
    this.setState(prevState => ({
      portfolio: true,
      about: false
    }));
  }
  aboutClick() {
    console.log("about clicked");
    this.setState({
      portfolio: false,
      about: true,
    })
  }


  render() {

    return(
      <div id="home">
        <div className="flex">
          <div className="icon">
            <img src={icon} />
          </div>
          <div className="half home-left">
            <div className="profile-container">
              <div className="fixed">
                <h1 className="profile-name"><i>Horyun Song</i></h1>
                <h1 className="profile-text">
                  A curious UX researcher and designer
                </h1>
                <div className="menus">
                  <span className="menu-item filter">
                    <a href={window.location.pathname === "/" ? "#portfolio" : "/#portfolio"}


                    ><p className={this.state.portfolio ? "focused" : ""}><span>Portfolio</span></p></a>
                  </span>
                    <span className="menu-item filter">
                    <a href={window.location.pathname === "/" ? "#about" : "/#about"}><p><span>About</span></p></a>
                  </span>
                    <span className="menu-item filter">
                    <a href={process.env.PUBLIC_URL+"/Horyun_Song_Resume.pdf"}><p><span>Resume</span></p></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="half">
            <Work />

            <div id="about">
              <div className="seventy center about-inner">
                <p className="sans">Hello! <br/>
                  Thank you for scrolling down this far, or clicking 'About' to get to know me.<br/><br/>
                  I'm a MS-HCI student at Georgia Tech with &#x1F525;curiosity on how to bring new technology to design. These days, I'm particularly interested in applying Machine Learning to user experience research and design. &#x1F914;
                 <br/><br/>
                </p>
                  <div className="">
                    <img src={people} />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <Credit/>
      </div>
    )
  }

}
export default Home;

