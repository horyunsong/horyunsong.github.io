import React, { Component } from 'react';
import "./bunny.css";

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";

import Title from '../../../components/work/mini/title';

import ppt from '../../../img/work/bunny/ppt.png';
import set from '../../../img/work/bunny/set.jpg';
import black from '../../../img/work/bunny/black.jpg';
import white from '../../../img/work/bunny/white.jpg';
import red from '../../../img/work/bunny/red.jpg';
import pink from '../../../img/work/bunny/pink.jpg';
import mint from '../../../img/work/bunny/mint.jpg';
import mintTip from '../../../img/work/bunny/mintTip.png';
import redTip from '../../../img/work/bunny/redTip.png';


class Bunny extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="underlined container small">
          <Title
            title="Bunny Nail"
            category="Product"
            type="Design"
            role="Industry collaboration"
          />
          <div className="problem">
            <p className="title">Target User</p>
            <p>Nail polish lovers</p>
            <p className="title">Problem</p>
            <p>When we paint nails, we often encounter the moment of needing particular size or type of brush. However, it is difficult to change the brush because most of polish bottles come with brush attached to the cap.</p>
            <p  className="title">Solution</p>
            <p>In the world of Bunny Nail, <b>each nail polish has an appropriate applicator</b>: scooper for glitter and smaller brush for french style. Don't settle on regular brush for every nail polish color and type.</p>
          </div>
          <div className="bunnyButton">
            <a href="http://www.etudehouse.com/index.php/sweet-idea-bunny-naiil.html" className="">
              <div className="button" id="tellme">
                Buy Bunny Nail
              </div>
            </a>
          </div>
          <div className="half center">
            <img  src={ppt}/>
            <p className="caption">Original idea</p>
          </div>
          <div className="flex">
            <div className="half">
              <img  src={redTip}/>
              <p className="caption">Regular and small brush</p>
            </div>
            <div className="half">
              <img  src={mintTip}/>
              <p className="caption">Silicon scooper and regular brush</p>
            </div>

          </div>
          <div id="">
            <div className="flex justify-between">
              <div className="third">
                <img  src={set}/>
              </div>
              <div className="third">
                <img src={black}/>
              </div>
              <div className="third">
                <img src={white}/>
              </div>
              <div className="third">
                <img src={red}/>
              </div>
              <div className="third">
                <img src={pink}/>
              </div>
              <div className="third">
                <img src={mint}/>
              </div>
            </div>
          </div>
        </div>
        <Credit/>
      </div>
    )
  }
}
export default Bunny;
