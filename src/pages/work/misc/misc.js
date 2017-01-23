import React, { Component } from 'react';
import "./misc.css";

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";
import Next from "../../../components/credit/next";

import Title from '../../../components/work/mini/title';
import Heading from '../../../components/work/mini/heading';

import kkori from '../../../img/work/misc/kkori.jpg';
import boo from '../../../img/work/misc/boo.png';
import capn from '../../../img/work/misc/capn.png';
import cocoa from '../../../img/work/misc/cocoa.png';
import corn from '../../../img/work/misc/corn.png';
import count from '../../../img/work/misc/count.png';
import cover from '../../../img/work/misc/cover.jpg';
import franken from '../../../img/work/misc/franken.png';
import froot from '../../../img/work/misc/froot.png';
import lucky from '../../../img/work/misc/lucky.png';
import oreo from '../../../img/work/misc/oreo.png';
import rice from '../../../img/work/misc/rice.png';
import tony from '../../../img/work/misc/tony.png';
import trix from '../../../img/work/misc/trix.png';

class Misc extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="underlined container small">
          <Title
            title="Design and Art"
            category="Misc"
            type="ellaneous"
          />
          <p className="title">Kkori (Tail)</p>
          <p><i>Cable organizer</i></p>
          <p>Kkori is <b>always attached to the cable</b>, clinging like ivy. The small metal strip inside the rubber coating holds it tightly but is malleable enough that <b>simple grabbing</b> can change the shape. Unwinding it is even simpler, just open it to bring it back to its original shape.</p>
          <div className=" center">
            <img src={kkori} alt="Kkori (Tail)"/>
          </div>
          <br/><br/><br/>

          <div className="flex justify-between align-bottom">

            <div className="sixty">
              <p className="title">Adventurous Calendar</p>
              <p><i>Concept Calendar</i></p>
              <p>Cereal boxes are not regular cardboard boxes. Brilliant characters, excitement, sweetness, and joy all combine, to make a cereal box. Each of the twelve months are represented by these cereal boxes.</p>
            </div>
            <div className="forty">
              <img src={cover} />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="quarter">
              <img src={tony} />
            </div>
            <div className="quarter">
              <img src={trix} />
            </div>
            <div className="quarter">
              <img src={rice} />
            </div>
            <div className="quarter">
              <img src={corn} />
            </div>
            <div className="quarter">
              <img src={franken} />
            </div>
            <div className="quarter">
              <img src={froot} />
            </div>
            <div className="quarter">
              <img src={capn} />
            </div>
            <div className="quarter">
              <img src={oreo} />
            </div>
            <div className="quarter">
              <img src={cocoa} />
            </div>
            <div className="quarter">
              <img src={count} />
            </div>
            <div className="quarter">
              <img src={boo} />
            </div>
            <div className="quarter">
              <img src={lucky} />
            </div>
          </div>

        </div>
        <Next
          leftItem="Bunny Nail"
          leftLink="/bunny"
          rightItem="B-slide"
          rightLink="/bslide"
        />

        <Credit/>
      </div>
    )
  }
}
export default Misc;
