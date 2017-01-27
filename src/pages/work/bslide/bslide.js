import React, { Component } from 'react';
import "./bslide.css";

import Collapse from 'react-collapse';

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";
import Next from "../../../components/credit/next";
import Title from '../../../components/work/mini/title';
import Process from '../../../components/work/mini/process';
import Heading from '../../../components/work/mini/heading';

import read from '../../../img/work/bslide/read.png';
import curate from '../../../img/work/bslide/curate.png';
import interviewees from '../../../img/work/bslide/interviewees.png';
import interviewECoding from '../../../img/work/bslide/interview-E-coding.png';
import interviewOrganizing from '../../../img/work/bslide/interview-organizing.png';
import interviewPurpose from '../../../img/work/bslide/interview-purpose.png';
import acorn from '../../../img/work/bslide/acorn.png';
import birds from '../../../img/work/bslide/migratory-birds.png';
import shortcut from '../../../img/work/bslide/shortcut.png';
import primary from '../../../img/work/bslide/primary.jpg';
import matrix from '../../../img/work/bslide/requirement-matrix.png';
import scenario from '../../../img/work/bslide/identify-context-scenario.png';
import primary1 from '../../../img/work/bslide/primary1.png';
import primary2 from '../../../img/work/bslide/primary2.jpg';
import primary3 from '../../../img/work/bslide/primary3.jpg';
import primary4 from '../../../img/work/bslide/primary4.jpg';
import primaryRequirements from '../../../img/work/bslide/primary-requirements.png';
import secondaryRequirements from '../../../img/work/bslide/secondary-requirements.png';
import journeyMap from '../../../img/work/bslide/journey-map.png';
import useOrganize from '../../../img/work/bslide/use-case-organize-double.png';
import useRead from '../../../img/work/bslide/use-case-read.png';
import useRecommend from '../../../img/work/bslide/use-case-recommendation.png';
import siteMap from '../../../img/work/bslide/site-map.png';
import taskFlowRead from '../../../img/work/bslide/task-flow-read.png';
import taskFlowRecommend from '../../../img/work/bslide/task-flow-recommend.png';
import uiScenario1 from '../../../img/work/bslide/ui-scenario.png';
import uiScenario2 from '../../../img/work/bslide/ui-scenario2.png';
import uiMap from '../../../img/work/bslide/ui-map.png';
import spark from '../../../img/home/spark.png';


class Bslide extends Component {

  constructor(props) {
    super(props);
    this.state = {
      interview: false,
      persona: false,
      require: false,
      ia: false,
      wire: false
    };

    this.personaClick = this.personaClick.bind(this);
    this.interviewClick = this.interviewClick.bind(this);
    this.requireClick = this.requireClick.bind(this);
    this.iaClick = this.iaClick.bind(this);
    this.wireClick = this.wireClick.bind(this);

  }

  personaClick() {
    this.setState(prevState => ({
      persona: !prevState.persona
    }));
  }
  interviewClick() {
    this.setState(prevState => ({
      interview: !prevState.interview
    }));
  }
  requireClick() {
    this.setState(prevState => ({
      require: !prevState.require
    }));
  }
  iaClick() {
    this.setState(prevState => ({
      ia: !prevState.ia
    }));
  }
  wireClick() {
    this.setState(prevState => ({
      wire: !prevState.wire
    }));
  }

  render() {
    return (
      <div>
        <Nav />

        <div className="bslide container small">
          <Title
            title="B-slide"
            role="In class team project"
          />


          <div className="flex justify-between">
            <div className="problem half">
              <p  className="title">Target User Group</p>
              <p>University students in Korea, who bookmark in social media</p>
              <p className="title">Problem</p>
              <p>Students <b>bookmark useful contents</b> on a daily basis, thinking that they will organize and <b>read it later</b>. But, that later never comes.</p>
              <p  className="title">Solution</p>
              <p>B-slide prompts user by showing <b>bookmarked contents on the lock-screen</b> as compact cards. <b>By swiping vertically, user can browse bookmarked contents; by swiping horizontally, user can get new contents based on current content</b>.</p>
            </div>
            <div className="half">
              <p className="title">My role</p>
              <ul>
                <li>Team leader</li>
                <li>Prepared and conducting user interview</li>
                <li>Analyzed information through coding</li>
                <li>Lead persona development process</li>
                <li>Extracted requirements and applied them to use cases and UI map</li>
                <li>Planned journey map branches</li>
              </ul>
              <p className="title">Publication</p>
                <p><a className="link" href="http://dl.acm.org/citation.cfm?id=2903693">Smartphone Lockscreen Interface Design<br/> to Facilitate Return for Cross-service Bookmarks
                </a> <br/>
                  – Proceeding of HCI Korea 2016
                </p>
            </div>
          </div>
          <img className="eighty center" src={read} alt="Read the stuff that you always plan to but never do. We will notify you lock-screen hen it's good time to read."/>
          <img className="eighty center" src={curate} alt="Curate what you'll read. No haphazard recommendation. Get what you want."/>
          <br/>
          <div className="spark-wrapper">
            <h3 className="heading" >Process</h3>
            <div className="spark">
              <img src={spark} role="presentation"/>
            </div>
          </div>
          <Process
            processes={["Interview", "Creating Persona", "Requirements to Scenario",
              "Journey Map", "Use Cases", "Information Architecture", "Wireframe"]}
            names={["Interview", "Creating", "Requirements", "Journey", "Use", "Information", "Wireframe"]}
          />
          <div id="Interview" className="section">
            <Heading
              title="Interview"
            />
            <div className="flex justify-between">
              <div className="third">
                <p className="title">How</p>
                <p>We conducted <b>semi-structured interview with 7 university students</b>. Each interview session had one interviewer and one note taker. After interview, the interviewer ran debriefing session and we coded the responses as team.</p>
              </div>
              <div className="third">
                <p className="title">Why</p>
                <p>To learn about user's bookmarking experience and needs</p>
              </div>
              <div className="third">
                <p className="title">Finding</p>
                <p>Similar categories emerged: <b>the purpose of bookmarking</b>, how to organize, how to share and what device to use. There were varying degrees of purpose, but boookmarks were in general <b>for near future usage</b>. Limitation: Gender and age skewed interviewee demographic.</p>
              </div>
            </div>
            <div className="sixty center">
              <img src={interviewees} alt="7 interviewees.
                A 23 year old female, B 24 year old female, C 23 year old female, D 23 year old female
                E 27 year old male, F 21 year old female, G 25 year old female."/>
              <p className="caption">Interviewees</p>
            </div>
            <div className="button-wrapper">
              <button onClick={this.interviewClick} className="button expand center">
                {this.state.interview ? 'Close' : 'Show'} Coding and Summary
              </button>
            </div>
            <Collapse isOpened={this.state.interview}>
              <div className="flex justify-between">
                <div className="half center">
                  <img src={interviewECoding} alt="interview coding table"/>
                  <p className="caption"> Interviewee E coding </p>
                </div>
                <div className="half center padding10">
                  <p className="title">SUMMARY NOTES</p>
                  <p>
                    <i>Bookmarking expert filtered information</i><br/>
                    He prefers to bookmark filtered information, usually curated by experts via Facebook. <b>He saves them before fully reading them for two reasons: to read when he has time and to store and use them as an archive when needed.</b>
                    <br/><br/>
                    <i>Simple approach</i><br/>
                    Even though he experimented with many bookmarking aid services, it was still the simple Facebook “Save” function that he prefers. He said that aside from it providing filtered information, “saving” on Facebook is very simple to do and to approach later.
                    <br/><br/>
                    <i>Part voluntary, part involuntary</i><br/>
                    He tries to revisit the bookmarked information, but is not successful because he bookmarks more than he voluntarily reads. He finds there is a need for involuntary measures <b>to push him a little to read</b>, given they are not too forceful. Still, <b>in the end, it has to be him who decides to read.</b>
                  </p>
                </div>
              </div>
            </Collapse>
          </div>
          <div id="Creating" className="section">
            <Heading
              title="Creating Persona"
            />
            <div className="flex justify-between">
              <div className="sixty">
                <p className="title">How</p>
                <ul>
                  <li>Divided recurring themes into categories (e.g. Purpose of Bookmark) and subcategories (e.g. Frequented Websites)</li>
                  <li>Mapped interviewees on the scale of each subcategory and grouped them to three behavioral patterns</li>
                  <li>Created primary and secondary <b>personas were created based on two different behavioral pattern</b></li>
                </ul>
              </div>
              <div className="forty">
                <p className="title">Why</p>
                <p>We wanted to create personas that reflected our users based on behaviors. Later in design stage, we could <b>reason each other</b> by saying "oh no, she is <b>NOT THE TYPE to do that</b>."</p>
              </div>
            </div>
            <div className="button-wrapper">
              <button onClick={this.personaClick} className="button expand">
                {this.state.persona ? 'Close' : 'Show'} Pattern and Persona
              </button>
            </div>
            <Collapse isOpened={this.state.persona}>
              <p className="title">spotting interviewee patterns</p>
              <div className="flex justify-between">
                <div className="half center">
                  <img src={interviewOrganizing} alt="bookmark organizing pattern" />
                </div>
                <div className="half center">
                  <img src={interviewPurpose} alt="purpose of bookmarking pattern" />
                </div>
              </div>
              <div className="interviewee-pattern">
                <p className="title">INTERVIEWEE PATTERNS</p>
                <div className="flex justify-center">
                  <div className="third acorn-wrapper">
                    <div className="acorn">
                      <img src={acorn} role="presentation"/>
                    </div>
                    <p className="caption">Let’s collect’em first: Squirrels</p>
                    <ul>
                      <li>Bookmarks contents like a collection.</li>
                      <li>Bookmarks from diverse sources.</li>
                      <li>Bookmarks more than the sites they often visit.</li>
                      <li>Bookmarks so they can return later.</li>
                      <li>Just lets the bookmarks pile up and tends to not organize.</li>
                    </ul>
                  </div>
                  <div className="third acorn-wrapper">
                    <div className="acorn">
                      <img src={birds} role="presentation"/>
                    </div>
                    <p className="caption">Depending on the season: <br/>Migratory Birds</p>
                    <ul>
                      <li>Bookmarks the contents they need at the moment.</li>
                      <li>Uses varied browsers and services, but not too much.</li>
                      <li>Creates bookmark folders named after subject/need to organize.</li>
                      <li>Bookmarks when there is a need, so tends to not look when there isn’t a need.</li>
                      <li>Deletes the folders when there isn’t a need for them anymore.</li>
                    </ul>
                  </div>
                  <div className="third acorn-wrapper">
                    <div className="acorn">
                      <img src={shortcut} role="presentation"/>
                    </div>
                    <p className="caption">Shortcut for certain websites: Sprinter</p>
                    <ul>
                      <li>Rarely bookmarks.</li>
                      <li>Bookmarks only using their primary web browser.</li>
                      <li>Bookmarks in order to go to designated websites fast.</li>
                      <li>Does not care about the contents for later use.</li>
                      <li>Deletes bookmarks in order to keep the number small.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="primary-persona">
                <div>
                  <p className="title">PRIMARY PERSONA</p>
                  <div className="flex justify-start">
                    <div className="half">
                      <img src={primary} alt="A girl on the grass, looking at her phone."/>
                    </div>
                    <div className="half child-bottom primary-bio">
                      <p>Hyunjung Lee (23 years old, female)<br/>
                        Undergraduate student (Junior)<br/>
                        <i>Collector squirrel type</i></p>
                    </div>
                  </div>
                  <p>
                    <i>Narrative</i><br/>
                    …She asked her friends where they found useful reading materials on the web. They told her about a myriad of blogs, Facebook personnels and pages, and popular Twitterians to follow.
                    About six months have passed since she set foot in the collecting of IT news. Unlike in the beginning, the amount of useful contents, and thus <b>bookmarks have accumulated too much.</b> At some point, the bookmarks have gotten out of hand. She bookmarked more than she read and organized. It was not that she could not digest all of it, but it took great will power to conjure up the bookmarks, organize them and revisit the contents in order to read. <b>She knows that just bookmarking them does not help her much, but she still cannot bring herself to check through them all.</b>
                  </p>
                  <p>
                    <i>Goals</i></p>
                  <ul>
                    <li>She would like to <b>collect useful contents</b> based on her interests.</li>
                    <li>She wants her collection of bookmarks to be <b>organized with minimal effort.</b></li>
                    <li>She needs a <b>little push</b>—but not too much—to read the bookmarked contents.</li>
                  </ul>
                </div>
              </div>
            </Collapse>
          </div>
          <div id="Requirements" className="section">
            <Heading
              title="Requirements to Scenarios"
              content="... and scenarios to requirements, again."
            />
            <div className="flex justify-between">
              <div className="sixty">
                <p className="title">How</p>
                <ul>
                  <li><b>Extracted data needs, functional needs, product qualities and constraints</b> from primary and secondary personas’ scenario, mental model, goals, environment, skills and abilities. At this point, we did not specify scenario in order yet.
                  </li>
                  <li>Expanded persona pool and came up with diverse but less detailed personas to help <b>identify context scenario</b> and drew two persona’s context scenario.
                  </li>
                  <li><b>Extracted more user-focused requirements</b> from context scenarios.
                  </li>
                </ul>
              </div>
              <div className="forty">
                <p className="title">Why</p>
                <p>We <b>iterated requirement and scenario to not end up requirements only from system and needs or only from scenario</b>. Also, by expanding persona pool, we tried to catch missing requirements in case we are blinded by primary and secondary personas.</p>
              </div>
            </div>
            <div className="button-wrapper">
              <button onClick={this.requireClick} className="button expand">
                {this.state.require ? 'Close' : 'Show'} Requirement and Scenario
              </button>
            </div>
            <Collapse isOpened={this.state.require}>
              <div className="flex justify-between">
                <div className="half">
                  <img src={matrix} alt="Requirements matrix"/>
                  <p className="caption">Requirements matrix</p>
                </div>
                <div className="half">
                  <img src={scenario} alt="Identifying context scenario"/>
                  <p className="caption">Identifying context scenario</p>
                </div>
              </div>
              <div className="primary-scenario">
                <p className="title">PRIMARY CONTEXT SCENARIO</p>
                <div className="flex justify-between">
                  <div className="quarter">
                    <img src={primary1} role="presentation"/>
                    <p className="caption">In Bus</p>
                    <p>Hyunjung opens the B-slide application to <b>add her Facebook account</b> into the sync list. After adding the account, she notices that it is properly synced and all her Saved posts are archived in the application.</p>
                  </div>
                  <div className="quarter">
                    <img src={primary2} role="presentation"/>
                    <p className="caption">In Bus</p>
                    <p>She decides that it would be good to be prompted of this material in the evening so she will know that worth-reading content is waiting for her to read. She <b>sets push notification time</b> between 7 PM to 11PM.</p>
                  </div>
                  <div className="quarter">
                    <img src={primary3} role="presentation"/>
                    <p className="caption">At Home</p>
                    <p>At 7 PM, her phone vibrates and the <b>lock-screen shows a single card of the bookmarked contents</b>. The card contains the title Virtual Reality with Youtube, with a brief summary of the contents and one image.</p>
                  </div>
                  <div className="quarter">
                    <img src={primary4} role="presentation"/>
                    <p className="caption">At Home</p>
                    <p>She <b>recalls</b> adding this contents to FB save. Since it is after dinner and she has <b>time to read</b> until she goes to bed, she decides to read it. After 11PM, the <b>notification disappears</b>.</p>
                  </div>
                </div>
              </div>
              <div className="extracting">
                <p className="title">EXTRACTING REQUIREMENTS FROM SCENARIOS</p>
                <div className="flex justify-between">
                  <div className="half">
                    <img src={primaryRequirements} alt="Primary scenario requirements"/>
                    <p className="caption">Primary scenario requirements</p>
                  </div>
                  <div className="half">
                    <img src={secondaryRequirements} alt="Secondary scenario requirements"/>
                    <p className="caption">Secondary scenario requirements</p>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div id="Journey" className="section">
            <Heading
              title="Journey Map"
            />
            <p>We considered primary user journey first and what alternative choices user would make based on needs. Thus, this journey map <b>branches out when such choice is made</b>.</p>
            <img className="full" src={journeyMap} alt="journey map"/>
          </div>
          <div id="Use" className="section">
            <Heading
              title="Use Cases"
            />
            <p>We defined use cases based on user goals. Because B-slide draws bookmarked information from <b>other bookmarking services</b> and user interacts both directly and indirectly with them, we included them as the <b>third actor</b>. </p>
            <div className="flex justify-between">
              <div className="third">
                <img src={useRead} alt="use case diagram 1"/>
                <p className="caption">User Goal : Read bookmarked contents</p>
              </div>
              <div className="third">
                <img src={useRecommend} alt="use case diagram 2"/>
                <p className="caption">User Goal: Get recommendation</p>
              </div>
              <div className="third">
                <img src={useOrganize} alt="use case diagram 3"/>
                <p className="caption">User Goal : Organize bookmarks</p>
              </div>
            </div>
          </div>
          <div id="Information" className="section">
            <Heading
              title="Information Architecture"
            />
            <p>We built site map in relation of application and lock-screen. Then, we planned <b>task flows based on user goals (use cases) and functional requirements</b>.</p>
            <div className="button-wrapper">
              <button onClick={this.iaClick} className="button expand">
                {this.state.ia ? 'Close' : 'Show'} Site Map and Task Flow
              </button>
            </div>
              <Collapse isOpened={this.state.ia}>
                <div className="site-map">
                  <p className="title">Site Map</p>
                  <img className="full" src={siteMap} alt="site map"/>
                </div>
                <div>
                  <p className="title">Task Flow</p>
                  <div className="flex justify-between">
                    <div className="half">
                      <img src={taskFlowRead} alt="task flow 1 about selecting bookmark to read"/>
                    </div>
                    <div className="half">
                      <img src={taskFlowRecommend} alt="task flow 2 about getting recommendation"/>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
            <div id="Wireframe" className="section">
              <Heading
                title="Wireframe"
              />
              <p>Based on task flow from information architecture, we <b>specified UI scenarios</b>. Then finally, the UI map of entire system was drawn.</p>
              <div className="button-wrapper">
                <button onClick={this.wireClick} className="button expand">
                  {this.state.wire ? 'Close' : 'Show'} UI Scenario and Map
                </button>
              </div>
              <Collapse isOpened={this.state.wire}>
                <div className="full">
                  <img src={uiScenario1} alt="ui scenario 1"/>
                  <img src={uiScenario2} alt="ui scenario 2"/>
                </div>
                <div className="ui-map">
                  <p className="title">Ui Map</p>
                  <img src={uiMap} alt="ui map"/>
                </div>
              </Collapse>
              <br/>
            </div>
        </div>
        <Next
          leftItem="Bunny Nail"
          leftLink="/bunny"
          rightItem="Logue"
          rightLink="/logue"
        />
        <Credit/>
      </div>
    )
  }
}
export default Bslide;
