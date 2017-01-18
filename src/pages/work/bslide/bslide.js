import React, { Component } from 'react';
import "./bslide.css";

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";

import Title from '../../../components/work/mini/title';
import Process from '../../../components/work/mini/process';
import Heading from '../../../components/work/mini/heading';
import ImgCaption from '../../../components/work/mini/imgCaption';

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
import moodBoard from '../../../img/work/bslide/mood-board.png';
import wordCloud from '../../../img/work/bslide/word-cloud.png';
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
import spark from '../../../img/home/small/spark.png';


class Bslide extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="bslide container small">
          <Title
            title="B-slide"
            role="Team project as UX researcher and team leader"
          />
          <a className="paper text-right" href="http://dl.acm.org/citation.cfm?id=2903693">
            <p>Smartphone Lockscreen Interface Design to Facilitate Return for Cross-service Bookmarks
              <br/>
              – Proceeding of HCI Korea 2016
            </p>
          </a>
          <div className="problem">
            <p  className="title">Target User Group</p>
            <p>University students in Korea, who bookmark in social media</p>
            <p className="title">Problem</p>
            <p>Students <b>bookmark useful contents</b> on a daily basis, thinking that they will organize and <b>read it later</b>. But, that later never comes.</p>
            <p  className="title">Solution</p>
            <p>B-slide draws such forgotten bookmarked information from various services such as Facebook save, Twitter like, etc. When it is a good time to read, B-slide prompts by showing <b>bookmarked contents on the lock-screen as compact cards</b>. By swiping vertically, user can browse bookmarked contents; by swiping horizontally, he can get new contents based on current content.</p>
            <img className="eighty center" src={read}/>
            <img className="eighty center" src={curate}/>
            <br/>
          </div>
          <div className="spark-wrapper">
            <h3 className="heading" >Process</h3>
            <div className="spark">
              <img src={spark} />
            </div>
          </div>
          <Process
            processes={["Interview & Modeling", "Creating Persona", "Defining Requirements",
              "Journey Map", "Use Cases", "Information Architecture", "Wireframe"]}
            names={["Interview", "Creating", "Defining", "Journey", "Use", "Information", "Wireframe"]}
          />
          <div id="Interview">
            <Heading
              title="Interview & Modeling"
            />
            <div className="sixty center">
              <ImgCaption
                img={interviewees}
                caption="Interviewees"
              />
            </div>
            <div className="flex justify-between">
              <div className="half center">
                <ImgCaption
                  img={interviewECoding}
                  caption="Interviewee E coding"
                />
              </div>
              <div className="half center padding10">
                <p className="title">SUMMARY NOTES</p>
                <p>
                  <i>Bookmarking filtered information</i><br/>
                  He prefers to bookmark filtered information, usually curated by experts via Facebook. He saves them before fully reading them for two reasons: to read when he has time and to store and use them as an archive when needed.
                  <br/><br/>
                  <i>Simple approach</i><br/>
                  Even though he experimented with many bookmarking aid services, it was still the simple FB “Save” function that he prefers. He said that aside from it providing filtered information, “saving” on FB is very simple to do and approach later.
                  <br/><br/>
                  <i>Part voluntary, part involuntary</i><br/>
                  He tries to revisit the bookmarked information, but is not successful because he bookmarks more than he voluntarily reads. He finds there is a need for involuntary measures to push his will a little to read, given they are not too forceful. Still, in the end, it has to be him who decides to read.
                </p>
              </div>
            </div>
          </div>
          <div id="Creating">
            <Heading
              title="Creating Persona"
            />
            <p className="title">spotting interviewee patterns</p>
            <div className="flex justify-between">
              <div className="half center">
                <img src={interviewOrganizing} />
              </div>
              <div className="half center">
                <img src={interviewPurpose} />
              </div>
            </div>
            <div className="interviewee-pattern">
              <p className="title">INTERVIEWEE PATTERNS</p>
              <div className="flex justify-center">
                <div className="third acorn-wrapper">
                  <div className="acorn">
                    <img src={acorn}/>
                  </div>
                  <p className="caption">Let’s collect’em first: Squirrels</p>
                  <p>Bookmarks contents like a collection.
                    Bookmarks from diverse sources.
                    Bookmarks more than the sites they often visit.
                    Bookmarks so they can return later.
                    Just lets the bookmarks pile up and tends to not organize.</p>
                </div>
                <div className="third acorn-wrapper">
                  <div className="acorn">
                    <img src={birds}/>
                  </div>
                  <p className="caption">Depending on the season: <br/>Migratory Birds</p>
                  <p>Bookmarks the contents they need at the moment.
                    Uses varied browsers and services, but not too much.
                    Creates bookmark folders named after subject/need to organize.
                    Bookmarks when there is a need, so tends to not look when there isn’t a need.
                    Deletes the folders when there isn’t a need for them anymore.</p>
                </div>
                <div className="third acorn-wrapper">
                  <div className="acorn">
                    <img src={shortcut}/>
                  </div>
                  <p className="caption">Shortcut for certain websites: Sprinter</p>
                  <p>Rarely bookmarks.
                    Bookmarks only using their primary web browser.
                    Bookmarks in order to go to designated websites fast.
                    Does not care about the contents for later use.
                    Deletes bookmarks in order to keep the number small.</p>
                </div>
              </div>
            </div>
            <div className="primary-persona">
              <div>
                <p className="title">PRIMARY PERSONA</p>
                <div className="flex justify-start">
                  <div className="half">
                    <img src={primary} />
                  </div>
                  <div className="half child-bottom primary-bio">
                    <p>Hyunjung Lee (23 years old, female)<br/>
                      Undergraduate student (Junior)<br/>
                      <i>Collector squirrel type</i></p>
                  </div>
                </div>
                <p>
                  <i>Narrative</i><br/>
                  … However, she, after <b>meeting the block of the IT news wall</b>, she questioned the effectiveness of search engines. So, on she went, asking her friends where they found useful reading materials on the web. They told her about a myriad of blogs, Facebook personnels and pages, and popular Twitterians to follow.
                  About six months have passed since she set foot in the collecting of IT news. Unlike in the beginning, the amount of useful contents, and thus <b>bookmarks of them have accumulated too much.</b> At some point, the bookmarks have gotten out of hand. She bookmarked more than she read and organized. It was not that she could not digest all of it, but it took great will power to conjure up the bookmarks, organize them and revisit the contents in order to read. <b>She knows that just bookmarking them do not help her much, but she still cannot bring herself to check through all of them.</b>
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
          </div>
          <div id="Defining">
            <Heading
              title="Defining Requirements"
            />
            <div className="flex justify-between">
              <div className="half">
                <img src={matrix} />
                <p className="caption">Requirements matrix</p>
              </div>
              <div className="half">
                <img src={scenario} />
                <p className="caption">Identifying context scenario</p>
              </div>
            </div>
            <div className="primary-scenario">
              <p className="title">PRIMARY CONTEXT SCENARIO</p>
              <div className="flex justify-between">
                <div className="quarter">
                  <img src={primary1} />
                  <p className="caption">In Bus</p>
                  <p>Hyunjung opens the B-slide application to add her Facebook account into the sync list. After adding the account, she notices that it is properly synced and all her Saved posts are archived in the application.</p>
                </div>
                <div className="quarter">
                  <img src={primary2} />
                  <p className="caption">In Bus</p>
                  <p>She decides that it would be good to be prompted of this material in the evening so she will know that worth-reading content is waiting for her to read. She sets her time for notification 7 PM to 11PM.</p>
                </div>
                <div className="quarter">
                  <img src={primary3} />
                  <p className="caption">At Home</p>
                  <p>At 7 PM, her phone vibrates and the lock-screen shows a single card of the bookmarked contents. The card contains the title Virtual Reality with Youtube, with a brief summary of the contents and one image.</p>
                </div>
                <div className="quarter">
                  <img src={primary4} />
                  <p className="caption">At Home</p>
                  <p>She recalls adding this to FB save. Since it is after dinner and she has time to read until she goes to bed, she decides to read it. After 11PM, the notification disappears.</p>
                </div>
              </div>
            </div>
            <div className="extracting">
              <p className="title">EXTRACTING REQUIREMENTS FROM SCENARIOS</p>
              <div className="flex justify-between">
                <div className="half">
                  <img src={primaryRequirements} />
                  <p className="caption">Primary scenario requirements</p>
                </div>
                <div className="half">
                  <img src={secondaryRequirements} />
                  <p className="caption">Primary scenario requirements</p>
                </div>
              </div>
            </div>
            <div className="experience">
              <p className="title">EXPERIENCE ATTRIBUTES</p>
              <p>Gather and categorize bookmarks that are all over the places, across the services.
                Simple and easy approach are everywhere. The user should not be told what to do. Stay friendly and efficient.
                Information should be readily delivered in a clear, concise fashion.
                Be useful by being providing just a little more than the user’s anticipation. Give appropriate recommendations. Be accommodating.</p>
              <div className="flex justify-between">
                <div className="half">
                  <img src={wordCloud} />
                  <p className="caption">Word cloud</p>
                </div>
                <div className="half">
                  <img src={moodBoard} />
                  <p className="caption">Mood board</p>
                </div>
              </div>
            </div>
          </div>
          <div id="Journey">
            <Heading
              title="Journey Map"
            />
            <img className="full" src={journeyMap} />
          </div>
          <div id="Use">
            <Heading
              title="Use Cases"
            />
            <div className="flex justify-between">
              <div className="third">
                <img src={useRead} />
                <p className="caption">User Goal : Read bookmarked contents</p>
              </div>
              <div className="third">
                <img src={useRecommend} />
                <p className="caption">User Goal: Get recommendation</p>
              </div>
              <div className="third">
                <img src={useOrganize} />
                <p className="caption">User Goal : Organize bookmarks</p>
              </div>
            </div>
          </div>
          <div id="Information">
            <Heading
              title="Information Architecture"
            />
            <div className="site-map">
              <p className="title">Site Map</p>
              <img className="full" src={siteMap} />
            </div>
            <div>
              <p className="title">Task Flow</p>
              <div className="flex justify-between">
                <div className="half">
                  <img src={taskFlowRead} />
                </div>
                <div className="half">
                  <img src={taskFlowRecommend} />
                </div>
              </div>
            </div>
          </div>
          <div id="Wireframe">
            <Heading
              title="Wireframe"
            />
            <div className="full">
              <img src={uiScenario1} />
              <img src={uiScenario2} />
            </div>
            <div className="ui-map">
              <p className="title">Ui Map</p>
              <img src={uiMap} />
            </div>
          </div>
        </div>
        <Credit/>
      </div>
    )
  }
}
export default Bslide;
