import React, { Component } from 'react';
import "./bslide.css";

import Collapse from 'react-collapse';
import ImageZoom from 'react-medium-image-zoom';
import Headroom from 'react-headroom';
import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";
import Next from "../../../components/credit/next";
import Title from '../../../components/work/mini/title';
import Process from '../../../components/work/mini/process';
import Heading from '../../../components/work/mini/heading';

import read from '../../../img/work/bslide/read.png';
import curate from '../../../img/work/bslide/curate.png';
import bGif from '../../../img/work/bslide/bslideGif.gif';
import interviewees from '../../../img/work/bslide/interviewees.png';
import interviewECoding from '../../../img/work/bslide/interview-E-coding.png';
import interviewOrganizing from '../../../img/work/bslide/interview-organizing.png';
import interviewPurpose from '../../../img/work/bslide/interview-purpose.png';
import acorn from '../../../img/work/bslide/acorn.png';
import birds from '../../../img/work/bslide/migratory-birds.png';
import shortcut from '../../../img/work/bslide/shortcut.png';
import matrix from '../../../img/work/bslide/requirement-matrix.png';
import scenario from '../../../img/work/bslide/identify-context-scenario.png';
import primary1 from '../../../img/work/bslide/primary1.png';
import primary2 from '../../../img/work/bslide/primary2.jpg';
import primary3 from '../../../img/work/bslide/primary3.jpg';
import primary4 from '../../../img/work/bslide/primary4.jpg';
import imageMap from '../../../img/work/bslide/imageMapping.png';
import whyLockscreen from '../../../img/work/bslide/why-lockscreen.png';
import siteMap from '../../../img/work/bslide/site-map.png';
import taskFlowRead from '../../../img/work/bslide/task-flow-read.png';
import taskFlowRecommend from '../../../img/work/bslide/task-flow-recommend.png';
import uiScenario1 from '../../../img/work/bslide/ui-scenario.png';
import uiScenario2 from '../../../img/work/bslide/ui-scenario2.png';
import uiMap from '../../../img/work/bslide/ui-map.png';
import spark from '../../../img/home/spark.png';
import wireframeUp from '../../../img/work/bslide/wireframe-up.png';
import wireframeLeft from '../../../img/work/bslide/wireframe-left.png';
import wireframeStar from '../../../img/work/bslide/wireframe-star.png';
import wireframeRead from '../../../img/work/bslide/wireframe-read.png';
import wireframeHome from '../../../img/work/bslide/wireframe-home.png';

import mockup from '../../../img/work/bslide/mockup.jpg';
import coding from '../../../img/work/bslide/Interview-coding.png';
import primary from '../../../img/work/bslide/Primary-Persona.png';
import patterns from '../../../img/work/bslide/Patterns.png';
import constraints from '../../../img/work/bslide/constraints.png';
import later from '../../../img/work/bslide/later.png';
import contextScenario from '../../../img/work/bslide/context-scenario.png';
import storyboard from '../../../img/work/bslide/storyboard.png';
import contactpoint from '../../../img/work/bslide/contactpoint.png';
import journeyMap from '../../../img/work/bslide/Journeymap.png';


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
      <div className="bslide">
        <Headroom>
          <Next/>
        </Headroom>
        <div className="bg-gradient">
          <img src={mockup} />
        </div>

        <div className=" container">
          <Title
            title="B-slide"
            role="Your contents curator on lock-screen"
          />

          <div className="flex justify-between meta">
            <div className="third">
              <p className="meta-head">Methods</p>
              <p className="first">Interview, Persona & Scenario, Journey Map, Site Map, Task Flow, Wireframe, Usability Test, Prototype</p>
              <p className="meta-head">Tools</p>
              <p className="second">Balsamiq, Adobe Illustrator, Sketch</p>
            </div>
            <div className="third">
              <p className="meta-head">My Contribution</p>
              <ul className="second">
                <li>Prepared and conducting interview</li>
                <li>Coded and analyzed data</li>
                <li>Led persona development process</li>
                <li>Extracted requirements</li>
                <li>Designed information architecture and prototype</li>
              </ul>
            </div>
            <div className="third">
              <p className="meta-head">Team</p>
              <p className="first">Horyun Song (Team Lead), Yein Jo, Sugyo Han, Hyunjoo Lee, advised by Huijung, Kwon, Ph.D.</p>
              <p className="meta-head">Publication</p>
              <p className="second">Song, H., et al. (2016) &nbsp;<a className="link" href="http://dl.acm.org/citation.cfm?id=2903693">Smartphone Lockscreen Interface Design to Facilitate Return for Cross-service Bookmarks.</a> <i>HCI Korea</i>
              </p>
            </div>
          </div>

          <div className="container small">
            <div className="sixty center ">

              <p className="title">Problem</p>
              <p>Users bookmark useful contents on a daily basis from news, blogs, social media, etc., believing that they will <b>read it later</b>. But, that later doesn't seem like it's coming anytime soon.</p>
              <div className="eighty center space-up">
                <img src={later} />
              </div>
            </div>
            <div className="sixty center">
              <p  className="title">Solution</p>
              <p>B-slide prompts users by showing <b>their bookmarked contents on mobile lock-screen</b> as compact cards. By swiping vertically, user can browse bookmarked contents; by swiping horizontally, user can get new contents related to the contents.</p>

            </div>
          </div>
        </div>
        <div className="full">



        </div>
        <div className="container small">
          <br/>
          <div className="spark-wrapper">
            <h3 className="heading" >Process</h3>
            <div className="spark">
              <img src={spark} role="presentation"/>
            </div>
          </div>
          <Process
            processes={["Interview", "Creating Persona", "Requirements to Lock-screen",
              "Interaction Design", "Information Architecture", "Wireframe", "Prototype"]}
            names={["Interview", "Creating", "Requirements", "Interaction Design", "Information", "Wireframe", "Prototype"]}
          />
          <div id="Interview" className="section">
            <Heading
              title="Interview"
            />
            <div className="center sixty">
              <ImageZoom
                image={{
                  src: coding,
                  alt: "interview coding table"
                }}
                zoomImage={{
                  src: coding,
                  alt: "interview coding table"
                }}
              />
              <p className="caption">A snippet from interview transcript coding</p>
            </div>
            <div className="flex justify-between">
              <div className="half">
                <p className="title">How</p>
                <p>We conducted semi-structured interview with 7 target users <b>to gain insights on user's contents bookmarking behavior and needs.</b> Transcripts were coded and organized into summary notes.</p>
              </div>
              <div className="half">
                <p className="title">Finding</p>
                <p>Interviewees wanted to get filtered information, <b>save it to read later,</b> organize, and share.</p>
              </div>
            </div>
          </div>
          <div id="Creating" className="section">
            <Heading
              title="Personas"
            />
            <div className="sixty center">
              <img src={patterns}/>
              <p>We created <b>three behavior patterns from interviews.</b> Each pattern named after most distinctive behavior―the Collectors (Primary User), the Organizers (Secondary User), and the Shortcut Seekers (Anti-User).</p>
            </div>
            <div className="primary-persona">
              <div>
                <div className="full">
                    <ImageZoom
                      image={{
                        src: primary,
                        alt: "primary persona"
                      }}
                      zoomImage={{
                        src: primary,
                        alt: "primary persona"
                      }}
                    />
                </div>
              </div>
            </div>
          </div>
          <div id="Requirements" className="section">
            <Heading
              title="Needs Assessment"
            />
            <div className="sixty center">
              <p>This process included three careful synthesizing steps―<b>Requirements Matrix, Context Scenario, and Prioritization List.</b> I present only a couple of snippets here, so please contact me for the full process report!</p>
              <p className="title space-up">From Requirements Matrix</p>
              <ImageZoom
                image={{
                  src: constraints,
                  alt: "constraints"
                }}
                zoomImage={{
                  src: constraints,
                  alt: "constraints"
                }}
              />

              <p className="no-space-up">We synthesized that <b>there was a need for a nudge</b> that reminds the users for forgotten bookmarks while not harrassing them too much.</p>
            </div>
            <div className="sixty center space-up">
              <p className="title">From Context Scenario</p>
              <ImageZoom
                image={{
                  src: contextScenario,
                  alt: "context scenario"
                }}
                zoomImage={{
                  src: contextScenario,
                  alt: "context scenario"
                }}
              />
              <p className="no-space-up">As one of our interviewees preferred to read during his 'chill time' usually after dinner, we concluded that <b>a certain time frame</b> chosen by a user to be reminded will be not too instrusive but enough of a nudge.</p>
            </div>



          </div>
          <div id="Interaction" className="section">
            <Heading
              title="Ideation"
            />
            <div className="space-up sixty center">
              <p className="title">Lock Screen as Contact Point</p>
            </div>
            <div className="eighty center">
              <ImageZoom
                image={{
                  src: contactpoint,
                  alt: "contactpoint"
                }}
                zoomImage={{
                  src: contactpoint,
                  alt: "contactpoint"
                }}
              />
            </div>
            <div className="sixty center space-up">
              <p>After exploring various appplication, notification, and nudging ideas, we realized that the key for taking action was motivation. If the article is visible and enticing to users, they will be more likely to read it. We combined the "notification and browsing to read" step by adopting <b>displaying the bookmarked contents directly on the lockscreen.</b></p>
              <p className="title space-up">Primary Persona Storyboard</p>
            </div>
            <div className="primary-scenario">

              <div className="full">
                <ImageZoom
                  image={{
                    src: storyboard,
                    alt: "storyboard"
                  }}
                  zoomImage={{
                    src: storyboard,
                    alt: "storyboard"
                  }}
                />
              </div>
            </div>
            <div className="sixty center space-up">
              <p className="title">Journey Map</p>
              <p>We mapped a user journey from the moment a user realizes her problem to the satisfiaction she finds after reading number of bookmarked contents. </p>
            </div>
            <div className="full">
              <ImageZoom
                image={{
                  src: journeyMap,
                  alt: "journey map"
                }}
                zoomImage={{
                  src: journeyMap,
                  alt: "journey map"
                }}
              />
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
                  <ImageZoom
                    image={{
                      src: siteMap,
                      alt: "site map",
                      className: "full"
                    }}
                    zoomImage={{
                      src: siteMap,
                      alt: "site map"
                    }}
                  />
                </div>
                <div>
                  <p className="title">Task Flow</p>
                  <div className="flex justify-between">
                    <div className="half">
                      <ImageZoom
                        image={{
                          src: taskFlowRead,
                          alt: "task flow 1 about selecting bookmark to read"
                        }}
                        zoomImage={{
                          src: taskFlowRead,
                          alt: "task flow 1 about selecting bookmark to read"
                        }}
                      />
                    </div>
                    <div className="half">
                      <ImageZoom
                        image={{
                          src: taskFlowRecommend,
                          alt: "task flow 2 about getting recommendation"
                        }}
                        zoomImage={{
                          src: taskFlowRecommend,
                          alt: "task flow 2 about getting recommendation"
                        }}
                      />
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
              <div className="full">
                <ImageZoom
                  image={{
                    src: uiScenario1,
                    alt: "ui scenario 1"
                  }}
                  zoomImage={{
                    src: uiScenario1,
                    alt: "ui scenario 1"
                  }}
                />
                <ImageZoom
                  image={{
                    src: uiScenario2,
                    alt: "ui scenario 2"
                  }}
                  zoomImage={{
                    src: uiScenario2,
                    alt: "ui scenario 2"
                  }}
                />
              </div>
              <div className="button-wrapper">
                <button onClick={this.wireClick} className="button expand">
                  {this.state.wire ? 'Close' : 'Show'} UI Map
                </button>
              </div>
              <Collapse isOpened={this.state.wire}>
                <div className="ui-map">
                  <p className="title">Ui Map</p>
                  <ImageZoom
                    image={{
                      src: uiMap,
                      alt: "ui map"
                    }}
                    zoomImage={{
                      src: uiMap,
                      alt: "ui map"
                    }}
                  />
                </div>
              </Collapse>
            </div>
            <div id="Prototype" className="section">
              <Heading
                title="Prototype"
              />
              <div className="half center">
                <p className="title">Default lock-screen UI</p>
                <ImageZoom
                  image={{
                    src: wireframeHome,
                    alt: "Wireframe default"
                  }}
                  zoomImage={{
                    src: wireframeHome,
                    alt: "Wireframe default"
                  }}
                />
              </div>
              <div className="flex justify-between">
                <div className="half">
                  <p className="title">Swipe up to explore</p>
                  <ImageZoom
                    image={{
                      src: wireframeUp,
                      alt: "Wireframe up"
                    }}
                    zoomImage={{
                      src: wireframeUp,
                      alt: "Wireframe up"
                    }}
                  />
                </div>
                <div className="half">
                  <p className="title">Double tap to read</p>
                  <ImageZoom
                    image={{
                      src: wireframeRead,
                      alt: "Wireframe read"
                    }}
                    zoomImage={{
                      src: wireframeRead,
                      alt: "Wireframe read"
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="half">
                  <p className="title">Swipe left to get recommendation</p>
                  <ImageZoom
                    image={{
                      src: wireframeLeft,
                      alt: "Wireframe left"
                    }}
                    zoomImage={{
                      src: wireframeLeft,
                      alt: "WWireframe left"
                    }}
                  />
                </div>
                <div className="half">
                  <p className="title">Favorite recommendation</p>
                  <ImageZoom
                    image={{
                      src: wireframeStar,
                      alt: "Wireframe star"
                    }}
                    zoomImage={{
                      src: wireframeStar,
                      alt: "Wireframe star"
                    }}
                  />
                </div>
              </div>
              <br/>
            </div>
        </div>
        <Next
          leftItem="Detecting Emotions"
          leftLink="/emotion"
          rightItem="U-lock + Bike Rack"
          rightLink="/urack"
        />
        <Credit/>
      </div>
    )
  }
}
export default Bslide;
