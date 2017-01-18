import React, { Component } from 'react';
import "./home.css";

import hi from "../../img/home/small/hi.png";
import im from "../../img/home/small/im.png";
import ruff from "../../img/home/small/ruff.png";
import sniff from "../../img/home/small/sniff.png";
import mouse from "../../img/home/small/mouse.png";
import pencil from "../../img/home/small/pencil.png";

class Home extends Component {

  render() {
    return(
      <div id="home">
        <div className="container small">
          <div className="flex">
            <div className="hi">
              <img src={hi} />
            </div>
            <div className="im">
              <img src={im} />
            </div>
          </div>
          <div className="flex justify-between box-wrapper">
            <div className="forty box research">
              <h4>I research, design and build.</h4>
              <img src={ruff} />
            </div>
            <div className="forty box sniff">
              <h4>I believe in teamwork and fun.</h4>
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

