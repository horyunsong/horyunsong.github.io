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
              <img src={im} />
            </div>
            <div className="hi">
              <img src={hi} />
            </div>
          </div>
          <div className="flex justify-between box-wrapper">
            <div className="forty box research">
              <img src={ruff} />
            </div>
            <div className="forty box sniff">
              <img src={sniff} />
            </div>
          </div>
          <div className="flex justify-center align-center">
            <div className="mouse">
              <img src={mouse} />
            </div>
            <div className="find">
              <h3>You can find more about me
                <br/>on my <a className="link" href={process.env.PUBLIC_URL+"/Horyun_Song_Resume.pdf"}>resume</a> or <a className="link" href="http://linkedin.com/in/horyunsong">linkedin</a>,
                <br/>or even better, from</h3>
            </div>
            <div className="pencil">
              <img src={pencil} />
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default Home;

