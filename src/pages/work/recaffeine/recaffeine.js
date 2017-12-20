import React, { Component } from 'react';
import "./recaffeine.css";

import Collapse from 'react-collapse';

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";
import Next from "../../../components/credit/next";
import Title from '../../../components/work/mini/title';
import Heading from '../../../components/work/mini/heading';

import scenario1 from '../../../img/work/recaffeine/scenario1.png';
import scenario2 from '../../../img/work/recaffeine/scenario2.png';
import scenario3 from '../../../img/work/recaffeine/scenario3.png';
import scenario4 from '../../../img/work/recaffeine/scenario4.png';
import scenario5 from '../../../img/work/recaffeine/scenario5.png';
import scenario6 from '../../../img/work/recaffeine/scenario6.png';
import scenario7 from '../../../img/work/recaffeine/scenario7.png';
import scenario8 from '../../../img/work/recaffeine/scenario8.png';
import mac from '../../../img/work/recaffeine/mac.png';
import ipad from '../../../img/work/recaffeine/ipad.png';
import iphone from '../../../img/work/recaffeine/iphone.png';
import system from '../../../img/work/recaffeine/system.png';


class Recaffeine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scenario: false,
      prototype: false
    };

    this.scenarioClick = this.scenarioClick.bind(this);
    this.prototypeClick = this.prototypeClick.bind(this);
  }

  scenarioClick() {
    this.setState(prevState => ({
      scenario: !prevState.scenario
    }));
  }

  prototypeClick() {
    this.setState(prevState => ({
      prototype: !prevState.prototype
    }));
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="underlined container small">
          <Title
            title="Re-caffeine"
            role="In class project"
            category="UX"
            type="Design & Prototype"
          />
          <div className="problem">
            <p className="title">Target User</p>
            <p>Coffee shop clients who use disposable cups</p>
            <p className="title">Problem</p>
            <p>Disposable cups are wasted in alarming numbers. Incentives are given to those who bring own mugs and tumblers, but it has its limits. People will continue to use disposable cups. Then, how can we <b>motivate people to recycle</b>?</p>
            <p  className="title">Solution</p>
            <p>Re-Caffeine is <b>gamification of the recycling system</b>. When a user approaches, her nickname appears on the screen of recycle bin and it asks if she wants to recycle. She is <b>rewarded a Water Point</b> for recycling and the point is used to <b>grow her virtual tree</b>. The growth is immediately shown on the recycle screen. She can also <b>cultivate mountain as community</b>.</p>
            <div className="video-wrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DLvaFa6lycU" frameborder="0" allowfullscreen></iframe>
            </div>
            <br/>
          </div>
          <div id="" className="section">
            <Heading
              title="How to change the world"
            />
            <p>Re-caffeine focuses on <b>individuals’ behavior of disposing cups in cafe context in order to impact the community behavior as whole</b>. All it takes is one user, one coffee cup, and one cheerful recycling bin. Social change does not need big, organized movement, but small actions.</p>

          </div>
          <div id="scenario" className="section">
            <Heading
              title="Scenario"
              content="User nickname Hottie's interaction with Re-caffeine. Because I wanted to be called Hottie for once."
            />
            <div className="button-wrapper">
              <button onClick={this.scenarioClick} className="button expand center">
                {this.state.scenario ? 'Close' : 'Show'} Scenario
              </button>
            </div>
            <Collapse isOpened={this.state.scenario}>
              <div className="flex justify-between">
                <div className="half">
                  <img src={scenario1} role="presentation"/>
                  <p className="">User “Hottie” drinks her coffee in a cafe.</p>
                </div>
                <div className="half">
                  <img src={scenario2} role="presentation"/>
                  <p className="">When she approaches the Re-Caffeine recycle bin, it asks if she wants to recycle.</p>
                </div>
                <div className="half">
                  <img src={scenario3} role="presentation"/>
                  <p className="">“Sure!” Hottie recycles the plastic cup.</p>
                </div>
                <div className="half">
                  <img src={scenario4} role="presentation"/>
                  <p className="">Re-Caffeine recycle bin gives Hottie +1 Water Point.</p>
                </div>
                <div className="half">
                  <img src={scenario5} role="presentation"/>
                  <p className="">Hottie checks her points and her team’s Water Points.</p>
                </div>
                <div className="half">
                  <img src={scenario6} role="presentation"/>
                  <p className="">The water point drops on her choice of tree in her farm.</p>
                </div>
                <div className="half">
                  <img src={scenario7} role="presentation"/>
                  <p className="">Ta-da! Her little orange tree grows.</p>
                </div>
                <div className="half">
                  <img src={scenario8} role="presentation"/>
                  <p className="">Hottie has fun recycling and brags to her friends about her orange tree.</p>
                </div>
              </div>
            </Collapse>
          </div>

          <div id="" className="section">
            <Heading
              title="Prototype"
            />
            <div className="flex justify-between">
              <div className="half center">
                <img src={system} role="presentation"/>
                <p className="caption">Prototype system design</p>
              </div>
              <div className="half">
                <p><i>Technical help, Juwan Yoo</i></p>
                <ol>
                  <li>User "Hottie" approaches the recycling bin</li>
                  <li>Computer gets Bluetooth Light Energy signal from Hottie's phone (application)</li>
                  <li>Hottie pushes cup into the recycling bin (light source)</li>
                  <li>Camera (computer) detects the light threshold</li>
                  <li>Computer sends +1 water point to recycling bin interactive surface (iPad) and Hottie's app</li>
                  <li>Hottie chooses which tree to water</li>
                  <li>The tree grows!</li>
                </ol>
              </div>
            </div>
            <div className="button-wrapper">
              <button onClick={this.prototypeClick} className="button expand center">
                {this.state.prototype ? 'Close' : 'Show'} Prototype Details
              </button>
            </div>
            <Collapse isOpened={this.state.prototype}>
              <div className="flex justify-between">
                <div className="third">
                  <img src={mac} alt="macbook"/>
                  <ul>
                    <li>Bluetooth Light Energy: Closeness of the iPhone</li>
                    <li>Camera Detect: Light source threshold</li>
                    <li>Wi-fi: Send interactive information to iPad and iPhone</li>
                  </ul>
                </div>
                <div className="third">
                  <img src={ipad} alt="ipad"/>
                  <ul>
                    <li>Interface: User interaction</li>
                    <li>Wi-fi: Receive interactive information from MacBook</li>
                  </ul>
                </div>
                <div className="third">
                  <img src={iphone} alt="iphone"/>
                  <ul>
                    <li>Bluetooth Light Energy: Activate the system by closeness</li>
                    <li>Wi-fi: Receive interactive information</li>
                  </ul>
                </div>
              </div>
            </Collapse>
          </div>
          <div id="" className="section">
            <Heading
              title="User Testing Interview"
            />
            <div className="video-wrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/1zgZH9E32HY" frameborder="0" allowfullscreen></iframe>
            </div>
            <br/>
          </div>
        </div>
        <Next
          leftItem="U-Rack"
          leftLink="/urack"
          rightItem="Bunny Nail"
          rightLink="/bunny"
        />
        <Credit/>
      </div>
    )
  }
}
export default Recaffeine;