import React, { Component } from 'react';
import './logue.css';

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";

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
import spark from '../../../img/home/small/spark.png';

class Logue extends Component {
  render() {
    return(
      <div>
        <Nav />
        <div className="logue container small">
          <Title
            title="Logue"
            subtitle="Prototype Iteration"
            role="Personal Project"
          />
          <div className="problem">
            <p className="title">Target User</p>
            <p>Story co-creators and readers who enjoy co-created stories</p>
            <p className="title">Problem</p>
            <p>Co-creators rely on various services to collaborate —Twitter, blog, forum and custom websites. However, they do not  perfectly suit the needs of co-creators and readers.</p>
            <p  className="title">Solution</p>
            <p> In order to accommodate versatile nature of co-creation, stories are unitized to small pieces. Logue is a unit of stories contained in a <b>standardized card</b> — a certain part of a story, categories and characters of the part. Logue breaks linearity and co-creators and readers can <b>rearrange cards to approach the story in various ways.</b></p>
            <div className="video-wrapper">
              <iframe src="https://player.vimeo.com/video/141978956?portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
            <br/>
          </div>
          <div className="spark-wrapper">
            <h3 className="heading" >Process</h3>
            <div className="spark">
              <img src={spark} />
            </div>
          </div>
          <Process
            processes={["1st Prototype: Flow", "2nd Prototype: Story Deck", "Image Mapping",
              "Focus Group", "3rd Prototype:  Logue", "User Testing", "4th Prototype: Timeline"]}
            names={["Interview", "Creating", "Defining", "Journey", "Use", "Information", "Wireframe"]}
          />
          <div id="1st">
            <Heading
              title="1st Prototype: Flow"
              content="I designed visual representation of existing stories to start thinking stories as organic forms, shifting position as authors and readers wish. (e.g. Readers reading selective episodes.)"
            />
            <p>I realized that story does not necessarily follow the written date. It is especially so in co-creation. Even if I write first, the other piece of story written by colleagues may come before, according to the plot. Flow is an UI designed to show overall flow of the plot and where each character stands in his perspective with episode cards.</p>
            <div className="full">
              <img src={flow} />
              <p className="caption">Contents adapted from Cartoon Network’s animation Adventure Time</p>
            </div>
          </div>
          <div id="2nd">
            <Heading
              title="2nd Prototype: Story Deck (Re-designing Twitter Fiction)"
            />
            <p>As I researched various tools, I found that Twitter Fiction worked as dynamic modular storytelling with Twitter handles and word limitation. I adapted <a className="link" href="https://storify.com/penguinpress/elliotholt-s-twitterfiction-story">Elliot Holt’s Twitterfiction “Evidence”</a> to maximize modular story reading experience.</p>
            <p>Horizontal assortments mean characters, and the vertical position means chronological flow. Each card contains the name of the character and his thought or conversation. Reading cards of one column will peak into one character’s perspective. The Story Deck is designed to show the relationship that the cards have.</p>
            <div className="full">
              <img src={storydeck} />
              <p className="caption">Contents adapted from Elliot Holt’s Twitterfiction “Evidence”</p>
            </div>
          </div>
          <div id="Image">
            <Heading
              title="Image Mapping"
              content="After exploring design possibilities of modular storytelling, I went back to the core of story creation—how is the story written?"
            />
            <p>There are a number of creative writing and storytelling software programs, as well as artifacts and online services. In order to understand the standing of each platform as a story creation or delivery machine, I mapped the existing tools on a coordinate system with an x-axis ranging from the narrative (author’s dictation) to the interactive (reader as part of co-creation) and a y-axis ranging from the simple to the sophisticated.</p>
            <div className="flex justify-between">
              <div className="half center">
                <img src={image1} />
                <p className="caption">Initial image mapping</p>
              </div>
              <div className="half center">
                <img src={image2} />
                <p className="caption">Simplified image mapping</p>
              </div>
            </div>
          </div>
          <div id="Focus">
            <Heading
              title="Focus Group"
            />
            <div>
              <p className="title">Design Assumption</p>
              <p><b>By breaking down stories to units and giving them affiliation such as storyline, characters, and locations, creators would be able to compile story according to their needs.</b> Then, considering how these units should be practiced in order to support the complexity of multi-author and multi-plot fictions, I conducted focus group interview with amateur co-creators.</p>
            </div>
            <div>
              <p className="title">Recruits</p>
              <ul>
                <li>Via a co-creator online forum</li>
                <li>4 co-creators (four females, ages 20-29)</li>
                <li>10 years of experience as amateur co-creators</li>
                <li><b>2 with diverse platform experience (Twitter, forum, and custom website); 2 with single platform preference </b></li>
              </ul>
            </div>
            <div>
              <p className="title">Session</p>
              <p>For 2 hours, they were prompted with neutral topics (e.g., how do you plan plots with other co-creators?)</p>
            </div>
            <div>
              <p className="title">Analysis</p>
              <p>To analyze the findings, a single coder manually coded the data based on the transcribed interview results. Open, axial, and selective coding in order were used to identify issues and themes across the participants. The main themes drawn from the focus group interview were as follows: </p>
              <ul>
                <li><b>Context of episode</b></li>
                <li><b>Relationship between characters and settings</b></li>
                <li>Archiving dispersed episodes</li>
                <li>Communication between co-creators</li>
              </ul>
            </div>
          </div>
          <div id="3rd">
            <Heading
              title="3rd Prototype: Logue"
              content=""
            />
            <div className="full">
              <div className="sixty center">
                <img src={card}/>
                <p className="caption">One Logue</p>
              </div>
              <div className="">
                <p>In order to utilize modular storytelling, Louge was defined as a unit of complex fictional stories. <b>The basic rule of a Logue is to embody the smallest meaningful unit of content.</b> The creator breaks down fiction into units upon creating stories and tags them with metadata, such as the storyline category, the characters appearing in the unit, and any other subjective grouping (e.g., affiliation, location)</p>
              </div>
            </div>
            <div className=" justify-between align-start">
              <div className="sixty center">
                <img src={screens} />
                <p className="caption">Screens from Logue Beta</p>
              </div>
              <div className="full">
                <p className="title">Logue beta</p>
                <p><a className="link" href="http://logue.co.kr/beta-eng"> Logue Beta</a> is a WordPress theme designed specifically for authors and co-authors who want to venture into a new type of storytelling.</p>
              </div>
            </div>
            <div className=" justify-between align-start">
              <div className="sixty center">
                <img src={storymap} />
                <p className="caption">Logue Story Map</p>
              </div>
              <div className="full">
                <p className="title">Story Map</p>
                <p>While Logue Beta is for authorship using Logue, <a className="link" href="http://logue.co.kr/handg-en">Story Map</a> is designed for better reader experience. It uses categories, perspectives and routes as the starting point of directions. Readers can choose which flow of the story they would prefer to read.</p>
              </div>
            </div>
          </div>
          <div id="User">
            <Heading
              title="User Testing"
            />
            <p className="title">How</p>
            <p>Two teams from online forum were recruited to participate in the evaluation study with Logue Beta. Each team had a Wordpress site set up and uploaded original contents for two weeks. Each member chose to have one character except for moderator with Non Playing Character (NPC) though it was possible to own more than one.</p>
            <p className="title">Why</p>
            <p>To examine how co-creators perceived the affordances of the metadata and utilized the functions Logue provided.</p>
            <p className="title">Who</p>
            <p>Recruits had similar demographic as focus group</p>
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
            <div>
              <p className="title">Evaluation</p>
              <p>How: semi-structured post-interview. Evaluation focused on the holistic system of Logue.</p>
              <p>Finding: </p>
              <p>1. Notable changes recruits experienced from unstructured co-creation to practicing Logue system:</p>
              <ul>
                <li>Using routes to visualize the structure of story</li>
                <li>From creator-centered to character-centered collaboration</li>
                <li>Indexical connection enabled via tags</li>
              </ul>
              <p>2. <b>Each team was asked to draw Story Maps based on their knowledge of Logue</b> and explain the structure to determine whether the co-creators’ understanding of Logue was congruent with Logue system. Team B was especially surprised at how simple their story map was using Logue.</p>
              <div className="flex justify-around team">
                <div className="third center">
                  <img src={teamA} />
                  <p className="caption">Team A story map</p>
                </div>
                <div className="third center">
                  <img src={teamB} />
                  <p className="caption">Team B story map</p>
                </div>
              </div>

            </div>
          </div>
          <div id="4th">
            <Heading
              title="4th Prototype: Timeline (Working in Progress)"
            />
            <p>Up until now, Logue has focused on delivery of stories, in other words, readers. Creative Timeline is a tool for creators who write creative contents in Logue format.
              Creators create stories in utilizable units and collaborate vigorously via <b>branches (versions)</b>. Also, there is <b>no creator-reader relationship</b>. Anyone can be a participant.</p>
            <div className="full">
              <img src={timeline} />
            </div>
          </div>
        </div>
        <Credit/>
      </div>
    )
  }
}
export default Logue;
