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
        <div className="bg-gradient">
          <img src={card} />
        </div>
        <div className="container">
          <Title
            title="Logue"
            role="Modular collaborative storytelling"
          />
          <div className="flex justify-between meta">
            <div className="third">
              <p className="meta-head">Methods</p>
              <p className="first">Image Mapping, Focus Group, Iterative Design, Hallway Testing, Longitudinal Testing, Participatory Design</p>
              <p className="meta-head">Tools</p>
              <p className="second">Adobe Illustrator, Sketch, Wordpress</p>
            </div>
            <div className="third">
              <p className="meta-head">Personal Project</p>
              <ul>
                <li>Designed iteratively through quick tests and design critiques</li>
                <li>Conducted a longitudinal user testing with a functioning prototype</li>
                <li>Advised by Sujin Jun, PhD</li>
              </ul>
            </div>
            <div className="third">
              <p className="meta-head">Publication</p>
              <p className="second">Song, H. & Jun, S. (2017) &nbsp;<a className="link" href="https://dl.acm.org/citation.cfm?id=3064663.3064761">Logue: Unitizing Interactive Fictions for Co-creation.</a> <i>ACM Designing Interactive Systems (DIS)</i>
              </p>
            </div>
          </div>
          <div className="container small">
            <div className="sixty center ">
              <p className="title">Problem</p>
              <p>Co-creators rely on various platforms to tell a story―Twitter, blog, forum, etc. However, none of existing platforms provide a tailored experience for collaborative storytelling.</p>
            </div>
            <div className="sixty center">
              <p  className="title">Solution</p>
              <p>To accommodate dynamic nature of co-creation, <b>stories are modularized using Logue.</b> Logue is a unit of stories contained in a standardized card with metadata (characters, category, etc). Co-creators and readers can <b>rearrange Logues to approach the story differently </b>like character point of view.</p>
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
        </div>
        <div className="container small">
          <Process
            processes={["Image Mapping", "1st Prototype: Flow", "2nd Prototype: Story Deck",
              "Focus Group", "3rd Prototype:  Logue", "User Testing", "Finding"]}
            names={["Image", "Flow", "Story", "Focus", "Logue", "User", "Finding"]}
          />
          <div id="Image" className="section">
            <Heading
              title="Image Mapping"
            />
            <div className="">
              <div className="sixty center">
                <p className="title">How</p>
                <p><b>I mapped 19 storytelling applications, online platforms and tools</b> on a plane with an x-axis ranging from the narrative (author’s dictation) to the interactive (reader as part of co-creation) and a y-axis ranging from simple to sophisticated</p>
              </div>
              <div className="sixty center">
                <p className="title">Finding</p>
                <p>The more sophisticated a system was, it adopted <b>a simpler unit (e.g., card, tweet)</b>. And the more interactive a system was, it used more <b>communicative design affordances (e.g., comments, Twitter handle)</b> to navigate.</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="half center">
                <ImageZoom
                  image={{
                    src: image1,
                    alt: "Image mapping with examples"
                  }}
                  zoomImage={{
                    src: image1,
                    alt: "Image mapping with examples"
                  }}
                />
                <p className="caption">Image mapping with examples</p>
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
          <div id="2nd" className="section">
            <Heading
              title="Exploratory Design"
            />
            <div className="">
              <div className="sixty center">
                <p className="title">How</p>
                <p>To stand on a giant's shoulder, <b>I redeisnged one of Twitter Fictions,</b> which is a dynamic modular storytelling utilizing Twitter handles, word limitation and follower participation.</p>
                <p>I adopted <a className="link" href="https://storify.com/penguinpress/elliotholt-s-twitterfiction-story">Elliot Holt’s  “Evidence”</a> and reimagined the story in a character-time frame instead linear tweet timeline. I conducted <b> 10 hallway user testings</b> in school lobby.</p>
              </div>
              <div className="sixty center">
                <p className="title">Finding</p>
                <p> I found out that most of testers perceived the redesign as <b>a new form of social media, not a story</b>. There were two reasons: the content was purely in narration or dialogue and the form resembled an online chatroom.</p>
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
            <div className="sixty center">
              <p className="title">How</p>
              <p>I conducted <b>a 2-hour focus group interview with 4 co-creators.</b> They had 10 years of experience in collaborative storytelling on average. They were prompted with topics about co-creation experience (e.g., how do you plan plots with other co-creators?) and platform preferences.</p>
            </div>
            <div className="sixty center">
              <p className="title">Finding</p>
              <p><b>I used open, axial, and selective coding</b> to emerge issues and themes across the participants. The main themes drawn from the focus group interview were as follows: </p>
              <ul>
                <li><b>Context of episode</b> (Is the character aware of another event?) </li>
                <li><b>Relationship between characters and settings</b> (Where is he from and how does it affect him?)</li>
                <li><b>Reading order </b>(Point of view, chronological, setting-specific, etc.) </li>
                <li><b>Communication between co-creators</b></li>
              </ul>
            </div>
          </div>
          <div id="1st" className="section">
            <Heading
              title="Modular Design"
            />
            <div className="">
              <div className="sixty center">
                <p className="title">How</p>
                <p>Based on the foucs group interview, I designed a story timeline with episodic modules shared by characters, places and story arcs. I presented it to fellow student designers in <b>design critique sessions.</b></p>
              </div>
              <div className="sixty center">
                <p className="title">Finding</p>
                <p>While these modules visually showed the context of each episode (who and where), the structure was still too rigid to show the complexity of relationships. I needed to <b>consider more versatile modules to address different use cases.</b></p>
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



          <div id="3rd" className="section">
            <Heading
              title="Final Design: Logue"
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
                <p className="caption">A Logue</p>
              </div>
              <div className="">
                <div className="sixty center">
                  <p className="title">How</p>
                  <p>Louge was defined as a <b>unit of complex fictional stories</b>. The basic rule of a Logue was to embody the smallest meaningful portion of <b>content and metadata</b> the content should entail. Co-creators could rearrange stories according to their needs.</p>
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
              title="Longitudinal User Testing"
            />
            <div className="">
              <div className="sixty center">
                <p className="title">How</p>
                <p><b>Two teams</b>, total 11 prospect users from Twitter sub-culture creator network, were recruited to participate in the evaluation study for <b>two weeks by collaboratively creating a story.</b> Each member chose to have one character except for a moderator who had an additional Non-Playing Character.</p>
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
            <div className="sixty center">
              <p className="title">Finding</p>
              <p>After two weeks of testing, I conducted <b>semi-structured interviews with individual participants and participatory design sessions with each team.</b> For participatory design, the team members discussed, drew and explained their future story.
                {/*Evaluation focused on the holistic system of Logue. As the last part of interview, <b>each team was asked to draw Story Maps based on their knowledge of Logue</b> and explain the structure to determine whether the co-creators’ understanding of Logue was congruent with Logue system.*/} </p>
                <div className="">
                  <h4>1. Changes the participants experienced</h4>
                  <ul>
                    <li>They started to visualize the structure of their story. It helped the team to be aware of each other's creation.</li>
                    <li>They shifted from creator-centered to character-centered collaboration.</li>
                    <li>They could efficiently rearrange the story using metadata.</li>
                  </ul>
                </div>
                <div className="">
                  <h4>2. Things to improve</h4>
                  <ul>
                    <li>The entry bar was too high. It was hard to understand how to set up and use meatadata.</li>
                    <li>There was no error prevention. Even if some Logues were missing metadata, the prototype did not prompt the creators on it.</li>
                    <li>Comments under individual Logue are not sufficient way of communication. There should be a communication hub.</li>
                  </ul>
                </div>
              <div className="">
                <h4>3. Participatory design artifacts</h4>
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
          </div>
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
