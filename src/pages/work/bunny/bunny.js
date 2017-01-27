import React, { Component } from 'react';
import "./bunny.css";

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";
import Next from "../../../components/credit/next";

import Title from '../../../components/work/mini/title';
import Heading from '../../../components/work/mini/heading';

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
            role="Industry collaboration with Etude House (Amore Pacific)"
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
            <img  src={ppt} alt="original idea presentation"/>
            <p className="caption">Original idea</p>
          </div>
          <div className="flex">
            <div className="half">
              <img  src={redTip} alt="actual product example 1"/>
              <p className="caption">Regular and small brush</p>
            </div>
            <div className="half">
              <img  src={mintTip} alt="actual product example 2"/>
              <p className="caption">Silicon scooper and regular brush</p>
            </div>
          </div>
          <div id="" className="section">
            <Heading
              title="How it came to be"
            />
            <p>The idea started out as a nail polish bottle that had two openings—instead of traditional one— for interchangeable applicators like brush and dotting tool. <b>After winning the first prize in the new cosmetics product idea competition, I collaborated with company product managers and engineers</b> to develop the product to be more plausible and marketable. In the development process, due to the limitation of glass bottle manufacturing, we decided to divide the bottle to two. <b>After 6 months of development, we launched the product</b>.</p>
          </div>
          <div id=""  className="section">
            <div className="flex justify-between">
              <div className="third">
                <img  src={set} alt="bunny nail set"/>
              </div>
              <div className="third">
                <img src={black} alt="bunny nail black"/>
              </div>
              <div className="third">
                <img src={white} alt="bunny nail white"/>
              </div>
              <div className="third">
                <img src={red} alt="bunny nail red"/>
              </div>
              <div className="third">
                <img src={pink} alt="bunny nail pink"/>
              </div>
              <div className="third">
                <img src={mint} alt="bunny nail mint"/>
              </div>
            </div>
          </div>
        </div>
        <Next
          leftItem="Re-Caffeine"
          leftLink="/recaffeine"
          rightItem="Miscellaneous"
          rightLink="/misc"
        />
        <Credit/>
      </div>
    )
  }
}
export default Bunny;
