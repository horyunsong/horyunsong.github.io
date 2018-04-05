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

import hero from '../../../img/work/bslide/bslide-hero.png';
import heroMobile from '../../../img/work/bslide/bslide-hero-mobile.png';
import solution from '../../../img/work/bslide/solution.gif';

import siteMap from '../../../img/work/bslide/sitemap.png';


import coding from '../../../img/work/bslide/Interview-coding.png';
import primary from '../../../img/work/bslide/Primary-Persona.png';
import patterns from '../../../img/work/bslide/Patterns.png';
import constraints from '../../../img/work/bslide/constraints.png';
import later from '../../../img/work/bslide/later.png';
import contextScenario from '../../../img/work/bslide/context-scenario.png';
import storyboard from '../../../img/work/bslide/storyboard.png';
import contactpoint from '../../../img/work/bslide/contactpoint.png';
import journeyMap from '../../../img/work/bslide/Journeymap.png';

import base from '../../../img/work/bslide/mockups/base.png';
import down from '../../../img/work/bslide/mockups/down.png';
import contents from '../../../img/work/bslide/mockups/contentsbutton.png';
import UI from '../../../img/work/bslide/mockups/UI.png';
import List from '../../../img/work/bslide/mockups/List.png';
import Discover from '../../../img/work/bslide/mockups/Discover.png';
import DiscoverFilter from '../../../img/work/bslide/mockups/Discover-Filter.png';
import LockView from '../../../img/work/bslide/mockups/LockscreenView.png';
import Activity from '../../../img/work/bslide/mockups/Activity.png';
import Recommendations from '../../../img/work/bslide/mockups/LockscreenRec.png';
import RecommendationsOpen from '../../../img/work/bslide/mockups/LockscreenRec-open.png';
import LockViewOpen from '../../../img/work/bslide/mockups/LockscreenView-open.png';
import LockViewExpand from '../../../img/work/bslide/mockups/LockscreenView-expand.png';
import LockViewShort from '../../../img/work/bslide/mockups/LockscreenView-short.png';

import sketch1 from '../../../img/work/bslide/sketch/sketch1.jpeg';
import sketch2 from '../../../img/work/bslide/sketch/sketch2.jpeg';
import sketch3 from '../../../img/work/bslide/sketch/sketch3.jpeg';



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
          <Next
            rightItem="Modular Storytelling"
            rightLink="/logue"
          />
        </Headroom>
        <div className="hero-desktop">
          <img src={hero} />
        </div>
        <div className="hero-mobile">
          <img src={heroMobile} />
        </div>

        <div className=" container">
          <Title
            title="Bookmark Slide (B-slide)"
            role="A friendly nudge to read bookmarked contents on lockscreen"
          />

          <div className="flex justify-between meta">
            <div className="third">
              <p className="meta-head">Methods</p>
              <p className="first">Interview, Persona & Scenario, Journey Map, Site Map, Task Flow, Wireframe, Prototype</p>
              <p className="meta-head">Tools</p>
              <p className="second">Balsamiq, Adobe Illustrator, Sketch, Principle</p>
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
              <p>B-slide (Bookmark Slide) shows users <b>their bookmarked contents on mobile lockscreens</b> during notification time period. Users can browse the list of contents by sliding horizontally and select one to read. Or they can pull down an action area to mark it as read, or push it for later.</p>
              <img src={solution} />
            </div>
          </div>
        </div>
        <div className="container small section">
          <Heading
            title="Process"
          />
          <div className="full flex justify-between process">
            <div className="fifth">
              <h4>Research</h4>
              <div className="spans">
                <span>Interview</span>
                <span>Literature Review</span>
              </div>

            </div>
            <div className="fifth">
              <h4>Explore</h4>
              <div className="spans">
                <span>Persona</span>
                <span>Needs Assessment</span>
              </div>
            </div>
            <div className="fifth">
              <h4>Ideate</h4>
              <div className="spans">
                <span>Contact Point</span>
                <span>Storyboard</span>
              </div>
            </div>
            <div className="fifth">
              <h4>Design</h4>
              <div className="spans">
                <span>Journey Map</span>
                <span>Site Map</span>
                <span>Sketch</span>
              </div>
            </div>
            <div className="fifth">
              <h4>Prototype</h4>
              <div className="spans">
                <span>Wireframe</span>
                <span>Conclusion</span>
              </div>
            </div>
          </div>

          <div id="Interview" className="section">
            <Heading
              title="Interview"
            />
            <div className="center sixty">
              <ImageZoom
                image={{
                  src: coding,
                  alt: "interview transcript coding example"
                }}
                zoomImage={{
                  src: coding,
                  alt: "interview transcript coding example"
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
              title="Persona"
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
          <div id="Needs" className="section">
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
          <div id="Ideation" className="section">
            <Heading
              title="Ideation"
            />
            <div className="sixty center">
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

          </div>
          <div id="Design" className="section">
            <Heading
              title="Design"
            />
            <div className="sixty center">
              <p className="title">Journey Map (Primary Persona)</p>
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
            <div className="sixty space-up center">
              <p className="title ">Site Map</p>
              <p>There are two sides of the experience: application and lockscreen. User mainly reads from lockscreen, but configures in the app such as linking accounts to contents bookmark sources (e.g. Medium).</p>
            </div>
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
          <div className="sixty space-up center">
            <p className="title ">Sketch</p>
            <p>With paper sketches, we asked other student designers to look at them and do a quick Heuristic Evaluation. Number of low-hanging issues were found.</p>
          </div>
          <div className="full">
            <div className="flex justify-between">
              <div className="third">
                <ImageZoom
                  image={{
                    src: sketch1,
                    alt: "usketch 1"
                  }}
                  zoomImage={{
                    src: sketch1,
                    alt: "sketch 1"
                  }}
                />
              </div>
              <div className="third">
                <ImageZoom
                  image={{
                    src: sketch2,
                    alt: "sketch 2"
                  }}
                  zoomImage={{
                    src: sketch2,
                    alt: "sketch 2"
                  }}
                />
              </div>
              <div className="third">
                <ImageZoom
                  image={{
                    src: sketch3,
                    alt: "sketch 3"
                  }}
                  zoomImage={{
                    src: sketch3,
                    alt: "sketch 3"
                  }}
                />
              </div>
            </div>
          </div>
            <div id="Wireframe" className="section">
              <Heading
                title="Wireframe"
              />
              <div className="full flex justify-between">
                <div className="quarter">
                  <ImageZoom
                    image={{
                      src: LockView,
                      alt: "Lockscreen view"
                    }}
                    zoomImage={{
                      src: LockView,
                      alt: "Lockscreen view"
                    }}
                  />
                </div>
                <div className="quarter">
                  <ImageZoom
                    image={{
                      src: List,
                      alt: "List view"
                    }}
                    zoomImage={{
                      src: List,
                      alt: "List view"
                    }}
                  />
                </div>
                <div className="quarter">
                  <ImageZoom
                    image={{
                      src: Discover,
                      alt: "Discover tab"
                    }}
                    zoomImage={{
                      src: Discover,
                      alt: "Discover tab"
                    }}
                  />
                </div>
                <div className="quarter">
                  <ImageZoom
                    image={{
                      src: Activity,
                      alt: "Activity tab"
                    }}
                    zoomImage={{
                      src: Activity,
                      alt: "uActivity tab"
                    }}
                  />
                </div>
              </div>
              <div className="sixty center  space-up">
                <div className="full">
                  <p className="title">1. Lockscreen: Action</p>
                  <p>A user's <b>list of bookmarks shows up on her lockscreen during her preferred reading time.</b> She can slide left and right to browse her list. Once she selects and reads one, she can expand the card and <b>tap "Mark as Read" or "Remind Me Later" to dismiss from the list. </b></p>
                </div>
              </div>
              <div className="eighty center">
                <div className="flex justify-between">
                  <div className="third">
                    <ImageZoom
                      image={{
                        src: LockViewShort,
                        alt: "Lockscreen slider "
                      }}
                      zoomImage={{
                        src: LockViewShort,
                        alt: "Lockscreen slider "
                      }}
                    />
                  </div>
                  <div className="third">
                    <ImageZoom
                      image={{
                        src: LockViewExpand,
                        alt: "Lockscreen slider expanded"
                      }}
                      zoomImage={{
                        src: LockViewExpand,
                        alt: "Lockscreen slider expanded"
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="sixty center space-up">
                <div className="full">
                  <p className="title">2. Lockscreen: Recommendations</p>
                  <p>A user may view the <b>personalized recommendations</b> by choosing the "Recommendations" menu. Each recommendation content card has an expanded action area like bookmark cards. The actions are different: it comes with <b>"Bookmark"</b> instead of "Remind Me Later".</p>
                </div>
              </div>
              <div className="eighty center">
                <div className="flex justify-between">
                  <div className="third">
                    <ImageZoom
                      image={{
                        src: LockViewOpen,
                        alt: "Lockscreen with contents slider"
                      }}
                      zoomImage={{
                        src: LockViewOpen,
                        alt: "Lockscreen with contents slider"
                      }}
                    />
                  </div>
                  <div className="third">
                    <ImageZoom
                      image={{
                        src: RecommendationsOpen,
                        alt: "Recommendations on lockscreen"
                      }}
                      zoomImage={{
                        src: RecommendationsOpen,
                        alt: "Recommendations on lockscreen"
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="sixty center space-up">
                <div className="full">
                  <p className="title">3. My List</p>
                  <p>A user's list of bookmarked contents. The list is divided into two categories with a toggle button on top: <b>To Read and Read.</b> User can swipe each list item to the left to mark it as read or swipe right to delete from the list.</p>
                </div>
                <div className="eighty center">
                  <ImageZoom
                    image={{
                      src: List,
                      alt: "List view"
                    }}
                    zoomImage={{
                      src: List,
                      alt: "List view"
                    }}
                  />
                </div>
              </div>
              <div className="sixty center space-up">
                <div className="full">
                  <p className="title">4. Discover</p>
                  <p>A user's <b>personalized recommendations.</b> She may <b>filter them by topic</b> by selecting or deselecting topic tags. The topic filter is divided into Interests and All. Interested topics are pre-selected in the on-boarding stage for priority recommendations.</p>
                </div>
              </div>
              <div className="eighty center">
                <div className="flex justify-between">
                  <div className="third">
                    <ImageZoom
                      image={{
                        src: Discover,
                        alt: "Discover"
                      }}
                      zoomImage={{
                        src: Discover,
                        alt: "Discover"
                      }}
                    />
                  </div>
                  <div className="third">
                    <ImageZoom
                      image={{
                        src: DiscoverFilter,
                        alt: "Discover Filter"
                      }}
                      zoomImage={{
                        src: DiscoverFilter,
                        alt: "Discover Filter"
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="sixty center space-up">
                <div className="full">
                  <p className="title">5. My Activity</p>
                  <p>A user's history of reading activity. She can view number articles, topics, and sources by weekly or monthly. The main purpose of Activity is <b>to motivate users by clearly showing the progress</b> (or lack of progress).</p>
                </div>
                <div className="eighty center">
                  <ImageZoom
                    image={{
                      src: Activity,
                      alt: "Activity"
                    }}
                    zoomImage={{
                      src: Activity,
                      alt: "Activity"
                    }}
                  />
                </div>
              </div>
              <div id="Wireframe" className="section">
                <Heading
                  title="Conclusion"
                />
              </div>
              <div className="sixty center">
                <p>We designed an interface to efficiently guide the users to return to the bookmarked contents by showing it on the lockscreen—the uppermost layer of a smartphone. While this might be a good solution to "read", it is questionable if this experience relates to a overall good experience in unlocking moments. From literature reviews, we found that there are <b>five guidelines for lockscreen design: </b></p>
                  <ul>
                    <li>Connectivity</li>
                    <li>Functionality</li>
                    <li>Entertainment</li>
                    <li>Personalization</li>
                    <li>Security</li>
                  </ul>
                <p>We believe that we answered the first four requirements. However, <b>security</b> remains largely unquestioned. In fact, by showing one's bookmarked contents, <b>the interface may be expsoing one's taste in contents unwillingly.</b> It's a question we wish to explore in future.</p>
              </div>



            </div>
        </div>

        <Credit/>
      </div>
    )
  }
}
export default Bslide;
