import React, { Component } from 'react';
import "./home.css";
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
        <div className="container small">
          <div className="flex align-bottom">
            <div className="full">



            </div>
            <div className="im">
              <img src={people} alt="My name is Horyun Song, I'm a UX Researcher and Designer"/>
            </div>
          </div>
          <div className="flex justify-center align-center">
            <div className="mouse">
              <img src={mouse} role="presentation"/>
            </div>
            <div className="find">
              <h3 className="text-center">Hi! My name is Horyun Song. I research&nbsp;
                <TextLoop
                  springConfig={{ stiffness: 100, damping: 10 }}
                  children={[
                    "User Experience",
                    "Online Communities",
                  ]}
                >
                </TextLoop>.
              </h3>
              {/*
              <h3>You can find more about me
                <br/>on my <a className="link" href={process.env.PUBLIC_URL+"/Horyun_Song_Resume.pdf"}>resume</a> or <a className="link" href="http://linkedin.com/in/horyunsong">linkedin</a>,
                <br/>or even better, from</h3>
                */}
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

