import React, { Component } from 'react';
import "./recaffeine.css";

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";

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
  render() {
    return (
      <div>
        <Nav />
        <div className="underlined container small">
          <Title
            title="Re-caffeine"
            role="In class project"
          />
          <div className="problem">
            <p className="title">Target User</p>
            <p>Coffee shop clients who use disposable cups</p>
            <p className="title">Problem</p>
            <p>Disposable cups are wasted in alarming numbers. Incentives are given to those who bring own mugs and tumblers, but it has limits. People will continue to use disposable cups. Then, how can we motivate people to recycle?</p>
            <p  className="title">Solution</p>
            <p>Re-Caffeine is <b>gamification of the recycling system</b>. When a user approaches, her nickname appears on the screen and the recycle bin asks if she wants to recycle. She gets a point for recycling and the point is used to grow their virtual farm. The growth is immediately shown on the recycle screen. She can also use the mobile application to check her personal farm and forest as groups.</p>
            <div className="video-wrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DLvaFa6lycU" frameborder="0" allowfullscreen></iframe>
            </div>
            <br/>
          </div>
          <div id="">
            <Heading
              title="How to change the world"
            />
            <p>Re-caffeine focuses on <b>individuals’ behavior of disposing cups in cafe context in order to impact the community behavior as whole</b>. All it takes is one user, one coffee cup, and one cheerful recycling bin. Social change does not need big, organized movement, but small actions.</p>

          </div>
          <div id="scenario">
            <Heading
              title="Scenario"
            />
            <div className="flex justify-between">
              <div className="third">
                <img src={scenario1}/>
                <p className="">User “Hottie” drinks her coffee in a cafe.</p>
              </div>
              <div className="third">
                <img src={scenario2}/>
                <p className="">When she approaches the Re-Caffeine recycle bin, it asks if she wants to recycle.</p>
              </div>
              <div className="third">
                <img src={scenario3}/>
                <p className="">“Sure!” Hottie recycles the plastic cup.</p>
              </div>
              <div className="third">
                <img src={scenario4}/>
                <p className="">Re-Caffeine recycle bin gives Hottie +1 Water Point.</p>
              </div>
              <div className="third">
                <img src={scenario5}/>
                <p className="">Hottie checks her points and her team’s Water Points.</p>
              </div>
              <div className="third">
                <img src={scenario6}/>
                <p className="">The water point drops on her choice of tree in her farm.</p>
              </div>
              <div className="third">
                <img src={scenario7}/>
                <p className="">Ta-da! Her little orange tree grows.</p>
              </div>
              <div className="third">
                <img src={scenario8}/>
                <p className="">Hottie has fun recycling and brags to her friends about her orange tree.</p>
              </div>
            </div>
          </div>

          <div id="">
            <Heading
              title="Prototype"
            />
            <div className="sixty center">
              <img src={system} />
              <p className="caption">Prototype system design</p>
            </div>
            <div className="flex justify-between">
              <div className="third">
                <img src={mac}/>
                <ul>
                  <li>Bluetooth Light Energy: Closeness of the iPhone</li>
                  <li>Camera Detect: Light source threshold</li>
                  <li>Wi-fi: Send interactive information to iPad and iPhone</li>
                </ul>
              </div>
              <div className="third">
                <img src={ipad}/>
                <ul>
                  <li>Interface: User interaction</li>
                  <li>Wi-fi: Receive interactive information from MacBook</li>
                </ul>
              </div>
              <div className="third">
                <img src={iphone}/>
                <ul>
                  <li>Bluetooth Light Energy: Activate the system by closeness</li>
                  <li>Wi-fi: Receive interactive information</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="">
            <Heading
              title="User Testing Post-Interview"
            />
            <div className="video-wrapper">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/1zgZH9E32HY" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <Credit/>
      </div>
    )
  }
}
export default Recaffeine;