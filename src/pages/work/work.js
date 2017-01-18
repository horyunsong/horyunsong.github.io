import React, { Component } from 'react';
import './work.css';

import Nav from "../../components/nav/nav";
import Credit from "../../components/credit/credit";

import Slider from 'react-slick';
import Collapse from 'react-collapse';
import Piece from '../../components/work/piece/piece';
import {Link} from "react-router";
import Process from '../../components/work/mini/process';

import bslide from "../../img/work/thumb/bslide.png";
import logue from "../../img/work/thumb/logue.png";
import urack from "../../img/work/thumb/urack-sprite.jpg";
import recaffeine from "../../img/work/thumb/re-caffeine.png";
import bunnynail from "../../img/work/thumb/bunnynail.jpg";
import underlined from "../../img/work/thumb/underlined.png";


class Work extends Component {/*
  toggle = (e) => {
    this.setState({
      flag: !this.state.flag
    })
    console.log(this.state);
  }


  state = {
    flag: false
  }*/

  render() {

    return (
      <div>
        <Nav />
        <div id="work">
          <div className="work-wrapper container small">
            <div className="myworks">
              <h3 className="title"><span>My <b>works</b></span></h3>
            </div>
            <div className="flex justify-center">
              <div>
              </div>
              <Link to="/work/bslide">
                <Piece
                  title="B-SLIDE"
                  description="B-slide is a bookmark curation application that organizes bookmarks from various services and facilitates user's return for bookmarked contents by prompting on lock-screen."
                  image={bslide}
                />
              </Link>
              <Link to="/work/logue">
                <Piece
                  title="LOGUE"
                  type="Research, Design & Prototype"
                  description="Logue is a unit of stories contained in a standardized card. Logue breaks the linearity of story to view a story differently using three factors: category, perspective, and route."
                  image={logue}
                />
              </Link>
              <Link to="/work/underlined">
                <Piece
                  title="UNDERLINED"
                  category="UX"
                  type="Design"
                  description="Underlined is a vocabulary aid application that allows children to learn new words in context they have interest in."
                  image={underlined}
                />
              </Link>
              <Link to="/work/recaffeine">
                <Piece
                  title="RE-CAFFEINE"
                  description="Re-Caffeine is gamification of the recycling system. By recycling, user can get water point to grow virtual trees. As community, users can even cultivate mountain."
                  image={recaffeine}
                />
              </Link>
              <Link to="/work/urack">
                <Piece
                  title="U-RACK"
                  description="U-rack is the easiest way to safely lock your bike. Mount this awesome U-lock to the bike rack, and off you go."
                  image={urack}
                />
              </Link>
              <Link to="/work/bunny">
                <Piece
                  title="BUNNY NAIL"
                  category="Product"
                  type="Design"
                  description="Really, glitter nail polish should not with brush, but scooper. Bunny Nail has just right applicator for each bottle. "
                  image={bunnynail}
                />
              </Link>
            </div>
          </div>
          {/*
          <div className="work-square content">
            <img className="square square-0" data-index="0" src={logue}/>
            <img className="square square-1" data-index="1" src={logue2}/>
            <img className="square square-2" data-index="2" src={logue3}/>
            <img className="square square-3" data-index="3" src={logue4}/>
            <img className="square square-4" data-index="4" src={logue5}/>
          </div>
          <div className="work-summary container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <h4><span>B-slide</span></h4>
                <br/>
                <p>B-slide is a bookmark curation application that automatically organizes bookmarks from various services in a simple, easy way and facilitates the return for curated bookmarked contents through concise lock-screen notification cards.</p>
                <br/>
                <button className="button" id="tellme" type="button" onClick={this.toggle}>
                  Tell me more!
                </button>
              </div>
            </div>
          </div>

        </div>

        <Collapse isOpened={this.state.flag}>
        <div id="work-more">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <h5>Target User Group</h5>
                <p>University students in Korea, who bookmark in social media </p>
                <img className="" data-index="" src="./img/logue5.png"/>
              </div>
            </div>
          </div>
        </div>
        </Collapse>
        */}

      </div>
        <Credit/>
      </div>

    )
  }
}
export default Work;
