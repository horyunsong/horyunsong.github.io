import React, { Component } from 'react';
import "./home.css";

import hi from "../../img/home/hi.png";
import im from "../../img/home/im.png";
import ruff from "../../img/home/ruff.png";
import sniff from "../../img/home/sniff.png";
import mouse from "../../img/home/mouse.png";
import pencil from "../../img/home/pencil.png";

class Home extends Component {

  render() {
    return(
      <div id="home">
        <div className="container small">
          <div className="flex align-bottom">

            <div className="im">
              <img src={im} alt="My name is Horyun Song, I'm a UX Researcher and Designer"/>
            </div>
            <div className="hi">
              <img src={hi} alt="And an artist!"/>
            </div>
          </div>
          <div className="flex justify-between box-wrapper">
            <div className="forty box research">
              <img src={ruff} alt="I research, design and build."/>
            </div>
            <div className="forty box sniff">
              <img src={sniff} alt="I believe in teamwork and fun."/>
            </div>
          </div>
          <div className="flex justify-center align-center">
            <div className="mouse">
              <img src={mouse} role="presentation"/>
            </div>
            <div className="find">
              <h3>You can find more about me
                <br/>on my <a className="link" href={process.env.PUBLIC_URL+"/Horyun_Song_Resume.pdf"}>resume</a> or <a className="link" href="http://linkedin.com/in/horyunsong">linkedin</a>,
                <br/>or even better, from</h3>
            </div>
            <div className="pencil">
              <img src={pencil} role="presentation"/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default Home;

