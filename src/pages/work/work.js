import React, { Component } from 'react';
import './work.css';

import Nav from "../../components/nav/nav";
import Credit from "../../components/credit/credit";

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
              <Link to="/bslide">
                <Piece
                  title="B-SLIDE"
                  description="B-slide is a personal curator on lock-screen. By swiping vertically, user can browse bookmarked contents; by swiping horizontally, user can get new contents based on current content."
                  image={bslide}
                />
              </Link>
              <Link to="/logue">
                <Piece
                  title="LOGUE"
                  type="Research, Design & Prototype"
                  description="Logue is a unit of stories contained in a standardized card. Logue breaks the linearity of story to view it differently using three factors: category, perspective, and route."
                  image={logue}
                />
              </Link>
              <Link to="/underlined">
                <Piece
                  title="UNDERLINED"
                  category="UX"
                  type="Design"
                  description="Underlined is a context-based vocabulary aid application that allows children to learn new vocabulary naturally by reading stories of their interest."
                  image={underlined}
                />
              </Link>
              <Link to="/recaffeine">
                <Piece
                  title="RE-CAFFEINE"
                  category="UX"
                  type="Research, Design & Prototype"
                  description="Re-Caffeine is gamification of the recycling system. By recycling, user is rewarded with water points to grow virtual trees. As community, users can cultivate virtual mountain."
                  image={recaffeine}
                />
              </Link>
              <Link to="/urack">
                <Piece
                  title="U-RACK"
                  description="U-rack is the easiest way to safely lock your bike. Mount this special U-lock to the smart bike rack, and off you go. U-rack will look after it. "
                  image={urack}
                />
              </Link>
              <Link to="/bunny">
                <Piece
                  title="BUNNY NAIL"
                  category="Product"
                  type="Design"
                  description="Really, glitter nail polish should not come with brush, but scooper. Bunny Nail has just right applicator for each nail polish. "
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
