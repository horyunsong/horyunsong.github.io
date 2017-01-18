import React, { Component } from 'react';
import './about.css';

import bear1 from "../../img/about/bear1.png";
import bear2 from "../../img/about/bear2.png";
import bear3 from "../../img/about/bear3.png";

class About extends Component {
  render() {
    return(
        <div id="about">
          <div className="container small">
            <div className="row profile">
              <h3 className="red">HORYUN SONG</h3>
              <div className="profile-summary eighty center">
                <div className="links"><a href="https://www.linkedin.com/in/horyunsong">linkedin</a> | <a href="#">resume</a> | <a href="mailto:horyunsong@gatech.edu">e-mail</a></div>
                <p className="">I have BS degree in Information and Interaction Design and currently pursuing Master’s degree in Human Computer Interaction at Georgia Institute of Technology. With solid foundation in research and design, I am currently looking for 2017 summer internship. </p>
              </div>
            </div>
            <div className="skill-set flex justify-center ">
              <div className="third">
                <img className="" src={bear1} />
                <h4>UX Research</h4>
                <p>I know how to use card sorting, contextual inquiry, focus group… the list is long. But more importantly, I know <span className="bold">when</span> and <span className="bold">why</span> to use them.</p>
              </div>
              <div className="third">
                <img className="" src={bear2} />
                <h4>UX Design</h4>
                <p>I know how to use card sorting, contextual inquiry, focus group… the list is long. But more importantly, I know <span className="bold">when</span> and <span className="bold">why</span> to use them.</p>
              </div>
              <div className="third">
                <img className="" src={bear3} />
                <h4>UX Research</h4>
                <p>I know how to use card sorting, contextual inquiry, focus group… the list is long. But more importantly, I know <span className="bold">when</span> and <span className="bold">why</span> to use them.</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
};

export default About;
