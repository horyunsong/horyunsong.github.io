import React, { Component } from 'react';
import './work.css';

import Nav from "../../components/nav/nav";
import Credit from "../../components/credit/credit";

import Piece from '../../components/work/piece/piece';
import {Link} from "react-router";

import bslide from "../../img/work/thumb/bslide.png";
import logue from "../../img/work/thumb/logue.png";
import urack from "../../img/work/thumb/urack-sprite.jpg";
import recaffeine from "../../img/work/thumb/re-caffeine.png";
import bunnynail from "../../img/work/thumb/bunnynail.jpg";
import underlined from "../../img/work/thumb/underlined.png";
import misc from "../../img/work/thumb/misc.jpg";
import docs from "../../img/work/thumb/docs_thumb.png";
import emo from "../../img/work/thumb/emotion_thumb.png";


class Work extends Component {
  /////Filter/////

  //Boolean state for filtering//
  constructor(props) {
    super(props);
    this.state = {
      research: true,
      design: true,
      prototype: true
    };

    this.allClick = this.allClick.bind(this);
    this.researchClick = this.researchClick.bind(this);
    this.designClick = this.designClick.bind(this);
    this.prototypeClick = this.prototypeClick.bind(this);
  }

  //Filter functions bound to buttons//
  allClick() {
    console.log("all clicked");
    this.setState({
      research: true,
      design: true,
      prototype: true
    })
  }
  researchClick() {
    console.log("research clicked");
    this.setState({
      research: true,
      design: false,
      prototype: false
    })
  }
  designClick() {
    console.log("design clicked");
    this.setState({
      research: false,
      design: true,
      prototype: false
    })
  }
  prototypeClick() {
    console.log("prototype clicked");
    this.setState({
      research: false,
      design: false,
      prototype: true
    })
  }


  render() {

    return (
      <div>
        <Nav />
        <div id="work">
          <div className="work-wrapper container small">
            <div className="myworks">
              <h3 className="title"><span>My Works</span></h3>
            </div>
              <div className="filter-wrapper flex justify-center">

                <button className="filter" onClick={this.allClick}>
                  <p className={this.state.research && this.state.design && this.state.prototype ? "focused" : ""}><span>All</span></p>
                </button>
                <button className="filter" onClick={this.researchClick}>
                  <p><span>Research</span></p>
                </button>
                <button className="filter" onClick={this.designClick}>
                  <p><span>Design</span></p>
                </button>
                <button className="filter" onClick={this.prototypeClick}>
                  <p><span>Prototype</span></p>
                </button>
              </div>
            <div className="flex justify-center">
              <div>
              </div>

              <Link to="/docs">
                <Piece
                  title="Collaborative Documentation"
                  type="Research"
                  description="Stack Overflow Documentation was a collaborative writing space for technical reference material. I took the lead on gathering insights for a redesign of the product."
                  image={docs}
                  filters={["Research", (this.state.research ? "active" : "") ]}
                />
              </Link>
              <Link to="/bslide">
                <Piece
                  title="Bookmark Curator"
                  type="Research, Design & Prototype"
                  description="B-slide is a personal curator on lock-screen. By swiping vertically, user can browse bookmarked contents; by swiping horizontally, user can get new contents based on current content."
                  image={bslide}
                  filters={
                    ["Research", "Design", "Prototype", (this.state.research || this.state.design || this.state.prototype ? "active" : "") ]
                  }
                />
              </Link>
              <Link to="/logue">
                <Piece
                  title="Co-creation Tool"
                  type="Research, Design & Prototype"
                  description="Logue is a unit of stories contained in a standardized card. It enables co-creators to view a story  differently from different perspectives ."
                  image={logue}
                  filters={["Research", "Design", "Prototype", (this.state.research || this.state.design || this.state.prototype ? "active" : "") ]}
                />
              </Link>
              <Link to="/urack">
                <Piece
                  title="U-lock + Bike Rack"
                  category="UX"
                  type="Research, Design & Prototype"
                  description="U-rack is the easiest way to safely lock your bike. Mount this special U-lock to the smart bike rack, and off you go. U-rack will look after it. "
                  image={urack}
                  filters={["Research", "Design", "Prototype", (this.state.research || this.state.design || this.state.prototype ? "active" : "")]}
                />
              </Link>

              <Link to="/emotion">
                <Piece
                  title="Detecting Emotions"
                  category="Social Computing"
                  type="Research"
                  description="Who can tell my emotion better? Friends, strangers or computer? The short answer: people are better than computer, but there is no difference between friends and strangers."
                  image={emo}
                  filters={["Research", (this.state.research ? "active" : "") ]}
                />
              </Link>
              {/*
              <Link to="/bunny">
                <Piece
                  title="Nail Polish Design"
                  category="Industrial"
                  type="Design"
                  description="Really, glitter nail polish should not come with a brush, but a scooper. Bunny Nail provides a just right applicator for each nail polish. "
                  image={bunnynail}
                  filters={["Design", (this.state.design ? "active" : "")]}
                />
              </Link>
              <Link to="/misc">
                <Piece
                  title="Miscellaneous Designs"
                  category="Misc."
                  type="Design"
                  description="Tail (cable organizer) and Adventurous Cereal (concept calendar)"
                  image={misc}
                  filters={["Design", (this.state.design ? "active" : "")]}
                />
              </Link>
              */}
            </div>
          </div>

      </div>
        <Credit/>
      </div>

    )
  }
}
export default Work;
/*underlined: Underlined is a context-based vocabulary aid application that allows children to learn new vocabulary naturally by reading stories of their interest.
Re-Caffeine is gamification of the recycling system. By recycling, user is rewarded with water points to grow virtual trees. As community, users can cultivate virtual mountain.
 */
