import React, { Component } from 'react';
import "./home.css";
import Work from "../work/work";
import Credit from "../../components/credit/credit";
import {Link} from "react-router";
import ImageZoom from 'react-medium-image-zoom';
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
import boo from '../../img/work/misc/boo.png';
import capn from '../../img/work/misc/capn.png';
import cocoa from '../../img/work/misc/cocoa.png';
import corn from '../../img/work/misc/corn.png';
import count from '../../img/work/misc/count.png';
import cover from '../../img/work/misc/cover.jpg';
import franken from '../../img/work/misc/franken.png';
import froot from '../../img/work/misc/froot.png';
import lucky from '../../img/work/misc/lucky.png';
import oreo from '../../img/work/misc/oreo.png';
import rice from '../../img/work/misc/rice.png';
import tony from '../../img/work/misc/tony.png';
import trix from '../../img/work/misc/trix.png';

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
              <Link to="/">
              <img src={icon} />
              </Link>
            </div>

          <div className="half home-left">
            <div className="profile-container">
              <div className="fixed third">
                <div className="profile-img">
                <ImageZoom
                  image={{
                    src: people,
                    alt: "Self portrait"
                  }}
                  zoomImage={{
                    src: people,
                    alt: "Self portrait"
                  }}
                />
                </div>
                <div className="">
                  <h1 className="profile-name">Horyun Song</h1>
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
          </div>
          <div className="half">
            <Work />

            <div id="about">
              <div className="seventy center about-inner">
                <p className="sans">Hello! <br/>
                  Thank you for scrolling down this far, or clicking 'About' to get to know me.<br/><br/>
                  I'm a MS-HCI student at Georgia Tech with &#x1F525;curiosity on how to bring new technology to design and everyday life. I'm particularly interested in people's interaction with tech and each other in community settings.
                 <br/><br/>
                  I often use my drawing skill to communicate ideas<br/>
                  ... and paint cereal box characters.
                </p>
                <div className="flex justify-between cereal">
                  <div className="quarter">
                    <ImageZoom
                      image={{
                        src: tony,
                        alt: "January Frosted Flakes"
                      }}
                      zoomImage={{
                        src: tony,
                        alt: "January Frosted Flakes"
                      }}
                    />
                  </div>
                  <div className="quarter">
                    <ImageZoom
                      image={{
                        src: lucky,
                        alt: "December Lucky Charms"
                      }}
                      zoomImage={{
                        src: lucky,
                        alt: "December Lucky Charms"
                      }}
                    />
                  </div>

                  <div className="quarter">
                    <ImageZoom
                      image={{
                        src: franken,
                        alt: "May Frankenberry"
                      }}
                      zoomImage={{
                        src: franken,
                        alt: "May Frankenberry"
                      }}
                    />
                  </div>
                  <div className="quarter">
                    <ImageZoom
                      image={{
                        src: froot,
                        alt: "June Froot Loops"
                      }}
                      zoomImage={{
                        src: froot,
                        alt: "June Froot Loops"
                      }}
                    />
                  </div>
                  <div className="quarter">
                    <ImageZoom
                      image={{
                        src: capn,
                        alt: "July Capn Crunch"
                      }}
                      zoomImage={{
                        src: capn,
                        alt: "July Capn Crunch"
                      }}
                    />
                  </div>
                  <div className="quarter">
                    <ImageZoom
                      image={{
                        src: rice,
                        alt: "March Rice Krispies"
                      }}
                      zoomImage={{
                        src: rice,
                        alt: "March Rice Krispies"
                      }}
                    />
                  </div>

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

