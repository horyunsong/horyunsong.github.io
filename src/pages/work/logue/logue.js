import React, { Component } from 'react';
import './logue.css';

import Collapse from 'react-collapse';
import ImageZoom from 'react-medium-image-zoom';


import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";
import Next from "../../../components/credit/next";
import Title from '../../../components/work/mini/title';
import Process from '../../../components/work/mini/process';
import Heading from '../../../components/work/mini/heading';

import flow from '../../../img/work/logue/flow.png';
import storydeck from '../../../img/work/logue/storydeck.png';
import image1 from '../../../img/work/logue/imageMapping1.png';
import image2 from '../../../img/work/logue/imageMapping2.png';
import screens from '../../../img/work/logue/screens.png';
import storymap from '../../../img/work/logue/storymap.png';
import timeline from '../../../img/work/logue/timeline.png';
import card from '../../../img/work/logue/card.png';
import teamA from '../../../img/work/logue/TeamA.png';
import teamB from '../../../img/work/logue/TeamB.png';
import spark from '../../../img/home/spark.png';

class Logue extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prototype: false,
      testing: false
    };

    this.prototypeClick = this.prototypeClick.bind(this);
    this.testingClick = this.testingClick.bind(this);
  }

  prototypeClick() {
    this.setState(prevState => ({
      prototype: !prevState.prototype
    }));
  }
  testingClick() {
    this.setState(prevState => ({
      testing: !prevState.testing
    }));
  }

  render() {
    return(
      <div>
        <Nav />
        <div className="logue container small">
          <Title
            title="Logue"
            subtitle="Prototype Iteration"
            role="Personal project"
          />
          <div className="problem flex justify-between">
            <div className="sixty">
              <p className="title">Target User</p>
              <p>Story co-creators and readers who enjoy co-created stories</p>
              <p className="title">Problem</p>
              <p>Co-creators rely on various services to collaborate —Twitter, blog, forum and custom websites. However, they do not  perfectly suit the needs of co-creators and readers.</p>
              <p  className="title">Solution</p>
              <p>To accommodate versatile nature of co-creation, stories are unitized to small pieces. Logue is a unit of stories contained in a standardized card—a certain part of a story, categories and characters of the part. Logue breaks linearity and co-creators and readers can <b>rearrange cards to approach the story in various ways.</b></p>

              <br/>
            </div>
            <div className="forty">
              <p className="title">Publication</p>
              <p><b>Song, H. </b>& Jun, S. (2017) <a className="link" href="https://dl.acm.org/citation.cfm?id=3064663.3064761">Logue: Unitizing Interactive Fictions for Co-creation</a> <br/>
                – ACM Conference on the Designing Interactive Systems (DIS '17).
              </p>
            </div>
          </div>
          <div className="video-wrapper">
            <iframe src="https://player.vimeo.com/video/141978956?portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
          <div className="spark-wrapper">
            <h3 className="heading" >Process</h3>
            <div className="spark">
              <img src={spark} role="presentation"/>
            </div>
          </div>
          <Process
            processes={["Image Mapping", "1st Prototype: Flow", "2nd Prototype: Story Deck",
              "Focus Group", "3rd Prototype:  Logue", "User Testing", "Finding"]}
            names={["Image", "Flow", "Story", "Focus", "Logue", "User", "Finding"]}
          />
          <div id="Image" className="section">
            <Heading
              title="Image Mapping"
            />
            <div className="flex justify-between">
              <div className="third">
                <p className="title">How</p>
                <p><b>Mapped 19 creative writing and storytelling applications, online platforms and tools</b> on a coordinate system with an x-axis ranging from the narrative (author’s dictation) to the interactive (reader as part of co-creation) and a y-axis ranging from the simple to the sophisticated</p>
              </div>
              <div className="third">
                <p className="title">Why</p>
                <p>To understand how each artifact functions as a story creation or delivery machine and what their key UX/UI component is</p>
              </div>
              <div className="third">
                <p className="title">Finding</p>
                <p>The more sophisticated the system is, it adopted the <b>simpler unit</b> (e.g. card, tweet) for base and used diverse <b>categories and handles</b> (e.g. timeline, Twitter handle) to nagivate.</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="half center">
                <ImageZoom
                  image={{
                    src: image1,
                    alt: "Initial image mapping"
                  }}
                  zoomImage={{
                    src: image1,
                    alt: "Initial image mapping"
                  }}
                />
                <p className="caption">Initial image mapping</p>
              </div>
              <div className="half center">
                <ImageZoom
                  image={{
                    src: image2,
                    alt: "Simplified image mapping"
                  }}
                  zoomImage={{
                    src: image2,
                    alt: "Simplified image mapping"
                  }}
                />
                <p className="caption">Simplified image mapping</p>
              </div>
            </div>
          </div>
          <div id="1st" className="section">
            <Heading
              title="1st Prototype: Flow"
            />
            <div className="flex justify-between">
              <div className="third">
                <p className="title">How</p>
                <p><b>Wireframed flow of the story with episode cards</b> from cartoon (Adventure Time) and chapters from classic (Pride & Prejudice)</p>
              </div>
              <div className="third">
                <p className="title">WHy</p>
                <p>To think <b>stories as organic matter</b>, shifting as authors and readers wish (e.g. only reading chapters with certain character, only watching favorite episodes)</p>
              </div>
              <div className="third">
                <p className="title">Finding</p>
                <p>Story does not necessarily flow chronologically nor are created and received in certain order. <br/><i>Question:</i> What kind of system can <b>support organic story creation and reception?</b></p>
              </div>
            </div>
            <div className="full">
              <ImageZoom
                image={{
                  src: flow,
                  alt: "flow"
                }}
                zoomImage={{
                  src: flow,
                  alt: "flow"
                }}
              />
              <p className="caption">Contents adapted from Cartoon Network’s animation Adventure Time</p>
            </div>
          </div>
          <div id="2nd" className="section">
            <Heading
              title="2nd Prototype: Story Deck (Re-designing Twitter Fiction)"
            />
            <div className="flex justify-between">
              <div className="third">
                <p className="title">How</p>
                <p>Adapted <a className="link" href="https://storify.com/penguinpress/elliotholt-s-twitterfiction-story">Elliot Holt’s Twitterfiction “Evidence”</a> and wireframed the story tweets in x-axis (character) and y-axis (time) frame. And I conducted <b>guerilla user testing with 10 students followed by informal interviews</b> on campus about the prototype webpage.</p>
              </div>
              <div className="third">
                <p className="title">Why</p>
                <p>Twitter Fiction is a <b>dynamic modular storytelling</b> with Twitter handles, word limitation and reader's participation. However, with Twitter's typical linear delivery, it is hard to see the relation of story tweets. To maximize modular story reading experience, I adopted plane frame.</p>
              </div>
              <div className="third">
                <p className="title">Finding</p>
                <p> I found out that most of users (readers) perceived it as <b>new form of chatting or social network service, not storytelling</b>. It could be interpreted to two ways: because the content is purely in narration and dialogue or it <b>really does not look like anything storytelling</b>.</p>
              </div>
            </div>
            <div className="full">
              <ImageZoom
                image={{
                  src: storydeck,
                  alt: "storydeck"
                }}
                zoomImage={{
                  src: storydeck,
                  alt: "storydeck"
                }}
              />
              <p className="caption">Contents adapted from Elliot Holt’s Twitter Fiction “Evidence”</p>
            </div>
          </div>

          <div id="Focus" className="section">
            <Heading
              title="Focus Group"
            />
            <div className="flex justify-between">
              <div className="third">
                <p className="title">How</p>
                <p>For 2 hours, recruits were prompted with neutral topics about co-creation experience (e.g., how do you plan plots with other co-creators?)</p>
              </div>
              <div className="third">
                <p className="title">Who</p>
                <ul>
                  <li>Recruited via a co-creator online forum</li>
                  <li>4 co-creators (four females, ages 20-29)</li>
                  <li>10 years of experience as amateur co-creators</li>
                  <li><b>2 with diverse platform experience (Twitter, forum, and custom website); 2 with single platform preference </b></li>
                </ul>
              </div>
              <div className="third">
                <p className="title">Why</p>
                <p>Considering how units and relations of them played role in story creation and storytelling tools, I needed to clarify if <b> such system equally support the complexity of multi-author and multi-plot fictions</b> and if not, what are the other driving factors.</p>
              </div>
            </div>
            <div>
              <p className="title">Finding</p>
              <p><b>Open, axial, and selective coding in order were used</b> to identify issues and themes across the participants. The main themes drawn from the focus group interview were as follows: </p>
              <ul>
                <li><b>Context of episode</b> (e.g. Is the character aware of this scheme?) </li>
                <li><b>Relationship between characters and settings</b> (e.g. Where is he from and how does it affect him?)</li>
                <li>Archiving dispersed episodes (Many co-creators and stand-alones conflict archiving)</li>
                <li>Communication between co-creators</li>
              </ul>
            </div>
          </div>
          <div id="3rd" className="section">
            <Heading
              title="3rd Prototype: Logue"
              content=""
            />
            <div className="full">
              <div className="sixty center">
                <ImageZoom
                  image={{
                    src: card,
                    alt: "Logue card components: category, characters, story"
                  }}
                  zoomImage={{
                    src: card,
                    alt: "Logue card components: category, characters, story"
                  }}
                />
                <p className="caption">One Logue</p>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <p className="title">How</p>
                  <p>Louge was defined as a <b>unit of complex fictional stories</b>. The basic rule of a Logue is to embody the smallest meaningful portion of <b>content and metadata</b> the content should entail.</p>
                </div>
                <div className="">
                  <p className="title">Why</p>
                  <p>By breaking down stories to units and giving them affiliation such as storyline, characters, and locations, creators would be able to compile story according to their needs.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between prototype">
                <div className="half">
                  <div className="center">
                    <ImageZoom
                      image={{
                        src: screens,
                        alt: "screens of logue beta"
                      }}
                      zoomImage={{
                        src: screens,
                        alt: "screens of logue beta"
                      }}
                    />
                    <p className="caption">Screens from Logue Beta</p>
                  </div>
                  <div className="">
                    <p className="title">Prototype 1: Logue beta</p>
                    <p>Logue Beta is a WordPress theme designed specifically for authors and co-authors who want to venture into a new type of <b>storytelling by tagging metadata</b>.</p>
                  </div>
                </div>
                <div className="half">
                  <div className="sixty center">
                    <ImageZoom
                      image={{
                        src: storymap,
                        alt: "sample of storymap"
                      }}
                      zoomImage={{
                        src: storymap,
                        alt: "sample of storymap"
                      }}
                    />
                    <p className="caption">Logue Story Map</p>
                  </div>
                  <div className="full">
                    <p className="title">Prototype 2: Story Map</p>
                    <p>While Logue Beta is for authorship using Logue, Story Map is designed for better <b>reader experience</b>. It uses categories, perspectives and routes as the starting point of directions. <b>Readers can choose which flow of the story</b> they would prefer to read.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="User" className="section">
            <Heading
              title="User Testing"
            />
            <div className="flex justify-between">
              <div className="half">
                <p className="title">How</p>
                <p><b>Two teams, total 11 prospect users</b> from Twitter sub-culture creator network, were recruited to participate in the evaluation study with Logue Beta. Each team had a Wordpress site set up and <b>created original contents for two weeks</b>. Each member chose to have one character except for moderator with Non Playing Character (NPC) though it was possible to own more than one.</p>
              </div>
              <div className="half">
                <p className="title">Why</p>
                <p>To examine how co-creators perceived the affordances of the metadata and utilized the functions Logue provided.</p>
                <p className="title">Who</p>
                <p>Recruits had similar demographic as focus group</p>
              </div>
            </div>
            <div className="button-wrapper">
              <button onClick={this.testingClick} className="button expand center">
                {this.state.testing ? 'Close' : 'Show'} Team Details
              </button>
            </div>
            <Collapse isOpened={this.state.testing}>
              <p className="title">Teams</p>
              <div className="flex justify-between flex-start">
                <div className="half">
                  <p><b>Team A</b></p>
                  <ul>
                    <li>Genre: Western fantasy, original</li>
                    <li>Members: 7 (4 writers and 3 artists; 1 moderator and 6 participants)</li>
                    <li>Structure: Moderator posts mission prompt and participants respond with mission Logues. Most of Logues involved more than two characters</li>
                  </ul>
                </div>
                <div className="half">
                  <p><b>Team B</b></p>
                  <ul>
                    <li>Genre: Harry Potter universe</li>
                    <li>Members: 4 (all artists, no moderator)</li>
                    <li>Structure: Spontaneous, short stories in diverse settings (few outside of Harry Potter universe). Most stories involved all of the characters</li>
                  </ul>
                </div>
              </div>
            </Collapse>
          </div>
          <div id="Finding" className="section">
            <div>
              <Heading
                title="Finding"
              />
              <p>After two weeks of testing, <b>semi-structured interviews and participatory design session</b> were conducted. Evaluation focused on the holistic system of Logue. As the last part of interview, <b>each team was asked to draw Story Maps based on their knowledge of Logue</b> and explain the structure to determine whether the co-creators’ understanding of Logue was congruent with Logue system. </p>
              <div className="flex justify-between">
                <div className="half">
                  <p>1. Notable changes recruits experienced from unstructured co-creation to practicing Logue system:</p>
                  <ul>
                    <li>Visualize the structure of story and keep the <b>team aware of each other's creation</b></li>
                    <li>From creator-centered to <b>character-centered collaboration</b></li>
                    <li><b>Indexical connection</b> of story enabled via tags</li>
                  </ul>
                </div>
                <div className="half">
                  <p>2. Things to improve</p>
                  <ul>
                    <li><b>Lower the entry bar</b>: setting up and tagging metadata</li>
                    <li><b>Prevent errors</b>: let users know if their Logue is missing information</li>
                    <li><b>Integrate Logue Beta with Story Map</b>: auto-generate story map</li>
                  </ul>
                </div>
              </div>

              <p>3. Participatory Design: <br/>
                Both teams could draw story map without a hesitation. As they explained their own story map, they said that thinking in terms of Logue helps them to approach the structure from holistic view. By drawing and explaining, they came up with <b>ideas that would help novice guide through this new system and also advanced features they want</b>.</p>
              <div className="flex justify-around team">
                <div className="third center">
                  <ImageZoom
                    image={{
                      src: teamA,
                      alt: "team A story map"
                    }}
                    zoomImage={{
                      src: teamA,
                      alt: "team A story map"
                    }}
                  />
                  <p className="caption">Team A story map</p>
                </div>
                <div className="third center">
                  <ImageZoom
                    image={{
                      src: teamB,
                      alt: "team B story map"
                    }}
                    zoomImage={{
                      src: teamB,
                      alt: "team B story map"
                    }}
                  />
                  <p className="caption">Team B story map</p>
                </div>
              </div>

            </div>
          </div>
          {/*
          <div id="4th" className="section">
            <Heading
              title="4th Prototype: Timeline (Working in Progress)"
            />
            <p>Improving based on the findings from user testing, Logue system wil take a step further and <b>blur the line of creator and audience</b>. Via <b>branches (version control)</b> and easier Logue usage, anyone will be able to a participant.</p>
            <div className="full">
              <img src={timeline} alt="timeline"/>
            </div>
          </div>
          */}
        </div>
        <Next
          leftItem="Documentation"
          leftLink="/docs"
          rightItem="Detecting Emotions"
          rightLink="/emotion"
        />
        <Credit/>
      </div>
    )
  }
}
export default Logue;
