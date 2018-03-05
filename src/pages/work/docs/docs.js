import React, { Component } from 'react';
import "./docs.css";

import ImageZoom from 'react-medium-image-zoom';


import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";
import Next from "../../../components/credit/next";
import Title from '../../../components/work/mini/title';
import Process from '../../../components/work/mini/process';
import Heading from '../../../components/work/mini/heading';

import self from '../../../img/work/docs/self.jpeg';
import docsExamples from '../../../img/work/docs/docs-example.png';
import docsHeader from '../../../img/work/docs/docs-header.png';
import pic1 from '../../../img/work/docs/1.png';
import pic13 from '../../../img/work/docs/13.png';
import pic40 from '../../../img/work/docs/40.png';
import stickies from '../../../img/work/docs/stickies.jpg';
import piechart from '../../../img/work/docs/piechart.png';
import edits from '../../../img/work/docs/edits.png';
import recommend1 from '../../../img/work/docs/recommend1.png';
import recommend2 from '../../../img/work/docs/recommend2.png';
import recommend3 from '../../../img/work/docs/recommend3.jpeg';
import recommend4 from '../../../img/work/docs/recommend4.png';
import recommend5 from '../../../img/work/docs/recommend5.jpg';
import recommend6 from '../../../img/work/docs/recommend6.jpg';
import brevity from '../../../img/work/docs/brevity.jpg';
import independence from '../../../img/work/docs/indepdent.jpg';
import expand from '../../../img/work/docs/expand.jpg';
import motivation from '../../../img/work/docs/motivation.jpg';
import challenge from '../../../img/work/docs/challenge.jpg';
import nudge from '../../../img/work/docs/nudge.jpg';
import sunset from '../../../img/work/docs/sunset2.jpg';

import spark from '../../../img/home/spark.png';


class Docs extends Component {

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
        <div className="bg-gradient">
          <img src={docsHeader} />
        </div>

        <div className=" container">
          <Title
            title="Collaborative Documentation"
            role="User Research Internship at Stack Overflow"
          />

          <div className="flex justify-between meta">
            <div className="third">
              <p className="meta-head">Methods</p>
              <p className="first">Competitive Analysis, Internal User Interview, Focus Group, Expert Interview, Analysis, Design Recommendation</p>
              <p className="meta-head">Tools</p>
              <p className="second">Google Hangout, Docs and Slides, Mural.ly</p>
            </div>
            <div className="third">
              <p className="meta-head">My Contribution</p>
              <ul className="second">
                <li>Initiated and presented feature comparison</li>
                <li>Defined research questions from stakeholder interviews</li>
                <li>Recruited and conducted interviews</li>
                <li>Ethnographic research approach</li>
                <li>Analyzed findings</li>
                <li>Presented design recommendations to engineering team and VP of Product</li>
              </ul>
            </div>
            <div className="third">
              <p className="meta-head">Team</p>
              <p className="first">I was part of Documentation Product Team as a sole UX researcher and was supervised by Kristina Lustig (UX Researcher)</p>
              <p className="meta-head">Publication</p>
              <p><a className="link" href="https://medium.com/@horyunsong/life-as-a-stack-overflow-user-research-intern-ff9ce133996a">Medium Article "Life as a Stack Overflow User Research Intern"</a></p>
            </div>
          </div>

          <div className="container small">
            <div className="sixty center ">
              <p className="title">Problem</p>
              <p>Stack Overflow had a product called <b>Documentation, which was a collaborative writing space for technical reference material.</b> Nine months after the beta launch, the company has identified some key problems and decided to <a className="link" href="https://meta.stackoverflow.com/questions/349410/tearing-down-the-structure-of-documentation">redesign the product.</a>
                <ul>
                  <li>Overtly focused on examples</li>
                  <li>Content artifact: one size didn’t fit all</li>
                  <li>Low quality, scattered content and poor findability </li>
                </ul>
              </p>
              <div className="eighty center">
                <ImageZoom
                  image={{
                    src: docsExamples,
                    alt: "docs examples",
                  }}
                  zoomImage={{
                    src: docsExamples,
                    alt: "docs examples"
                  }}
                />
                <p className="caption">Original Documentation UI. Image from Stack Overflow Blog.</p>
              </div>
            </div>
            <div className="sixty center">
              <p  className="title">Solution</p>
              <p>In order to design a tool that enabled everyone to write online documentation together, we had to learn how technical writers—the professionals—wrote both individually and collaboratively. <b>I took the lead on gathering insights from technical writers and delivered six design recommendations based on the findings from semi-structured interviews.</b></p>
            </div>
          </div>
        </div>
        <div className="bslide container small">
          <div className="spark-wrapper">
            <h3 className="heading" >Process</h3>
            <div className="spark">
              <img src={spark} role="presentation"/>
            </div>
          </div>
          <Process
            processes={["Background", "Research Questions", "Interviews",
              "Analysis", "Findings", "Design Recommendations", "Impact"]}
            names={["Background", "Research Questions", "Interviews", "Analysis", "Findings", "Design Recommendations", "Impact"]}
          />
          <div id="stakeholder" className="section">
            <Heading
              title="Stakeholder Interview"
            />
            <div className="sixty center">
              <p>To scope the interview questions for technical writers, I conducted <b>stakeholder interviews with VP of Product, VP of Stack Overflow and Creative Director.</b> Among the questions were...</p>
              <ul>
                <li>What is Documentation (Docs) supposed to be?</li>
                <li>Who are the users?</li>
                <li>What worries you about?</li>
                <li>How will you define the success of Docs?</li>
              </ul>
            </div>
          </div>
          <div id="Research" className="section">
            <Heading
              title="Research Questions"
            />
            <div className="sixty center">
              <p>From stakeholder interviews, I synthesized <b>three overarching research questions to answer from technical writer interviews.</b></p>
              <ul>
                <li>How do the technical writers define technical documentation? What characteristics should it have?</li>
                <li>How do the they write documentations and what kind of tools do they use?</li>
                <li>How do they collaborate with other writers, developers and stakeholders?</li>
              </ul>
            </div>
          </div>
          <div id="Interviews" className="section">
            <Heading
              title="Expert Interview"
            />
            <div className="sixty center">
              <p>All interviews were <b>semi-structured</b> and conducted <b>remotely</b>, using Google Hangouts. Most of the interviews  <b>shared their screens</b> to show how they used their writing or collaboration tools.</p>
            </div>
            <div className="flex justify-between">
              <div className="third">
                <img className="" src={pic1} alt="1" />
                <ul>
                  <li>1 hour interivew</li>
                  <li>1 moderator</li>
                  <li>1 notetaker</li>
                </ul>
              </div>
              <div className="third">
                <img className="" src={pic13} alt="13" />
                <ul>
                  <li>13 interviewees</li>
                  <li>5 different countries: US, Germany, Australia, Mongolia, and South Africa</li>
                </ul>
              </div>
              <div className="third">
                <img className="" src={pic40} alt="upto 40" />
                <li>Interviewees' experience ranged from 2 to 40 years</li>
                <li>Mean: 9 years</li>
                <li>Median: 5 years</li>
              </div>
            </div>

          </div>
          <div id="Analysis" className="section">
            <Heading
              title="Analysis"
            />
            <div className="sixty center">
              <ol className="no-padding-start">
                <li>Coded interview notes based on the keywords I found from <a className="link" href="http://opensourcesurvey.org/2017/">Github Open Source Survey</a> to reflect current developer community's language and concerns</li>
                <li><b>Bright Yellow Notes:</b> Transfered the interview notes (yellow) to sticky notes</li>
                <li><b>Pink Notes:</b> Grouped them according to the codes </li>
                <li><b>Blue Notes:</b> Grouped the pink notes according to the underlying values within research question (e.g. what motivates collaboration in RQ3) </li>
                <li><b>Big Light Yellow Notes:</b> Grouped blue notes to each research question. If the group was too big, I divded them into two.</li>
              </ol>
              <p><i>Limitation: I was the only coder and organizer. There is chance of my bias creeping in.</i></p>
            </div>
            <div className="full">
              <ImageZoom
                image={{
                  src: stickies,
                  alt: "stickies",
                  className: "space-up"
                }}
                zoomImage={{
                  src: stickies,
                  alt: "stickies"
                }}
              />
            </div>
          </div>
          <div id="Findings" className="section">
            <Heading
              title="Findings"
            />
            <div className="sixty center">
              <p className="title bg-grey">1. What is technical documentation?</p>
                  <p>Technical documentation is a type of reference material where users can find solutions to their problems on a particular technology.<br/>
                    <b>A successful documentation is a living product</b> that grows along with the technology and adapts to user needs.</p>
            </div>
            <div className="full">
              <div className="flex justify-between">
                <div className="third">
                  <img src={brevity} />
                  <p className="text-center bold"><b>Brevity</b></p>
                  <ul>
                    <li>Concise explanation</li>
                    <li>Users can find solutions easily.</li>
                    <li><i>"Users are here to get an answer and leave."</i></li>
                  </ul>
                </div>
                <div className="third">
                  <img src={independence} />
                  <p className="text-center bold"><b>Independence</b></p>
                  <ul>
                    <li>Users should not need an external help.</li>
                    <li>It should not require users to read from beginning to end.</li>
                  </ul>
                </div>
                <div className="third">
                  <img src={expand} />
                  <p className="text-center bold"><b>Expandability</b></p>
                  <ul>
                    <li>Ability to go in-depth or beyond</li>
                    <li>Each page should be a stand-alone (independent), but it should lead to the related information if needed.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sixty center">
              <p className="title bg-grey">2. Process of creating a technical documentation</p>
              <div className="inner">
                <div>
                  <p className=""><span className="bg-grey">STEP 1:</span> <b>Plan</b> what this documentation is trying to achieve, aka Docs Spec: who, why, and what.</p>
                  <div className="">
                    <img className="" src={piechart} alt="pie chart"/>
                    <p className="inner"><i>“The writing is usually 2-4 hours a day, the rest is figuring out what to work on and how you need to change it." </i></p>
                  </div>
                </div>
                <div className="">
                  <p className=""><span className="bg-grey">STEP 2:</span> <b>Outline</b> in every level.</p>
                  {/*
                  <p className="inner">Outlining determines logical order and groups.</p>
                  <ul>
                    <li>Table of contents</li>
                    <li>Headers and subheaders (sections)</li>
                  </ul>
                  */}
                </div>
                <div className="">
                  <p className=""><span className="bg-grey">STEP 3:</span> Start <b>writing</b> (and use templates!).</p>
                  {/*<p className="inner">Templates define what kind of sections should be included according to each type of the docs. <i>Madcap Flare</i> and <i>Confluence</i> were mentioned as good tools for keeping templates.</p>*/}
                </div>
                <div className="">
                  <p className=""><span className="bg-grey">STEP 4:</span> Go through multiple <b>editing phases</b> and if possible, keep all the versions.</p>
                  <div className="flex justify-between">
                    {/*
                    <div className="forty">
                      <ul>
                        <li>Version control system (Confluence and SharePoint)</li>
                        <li>Branching (Github)</li>
                        <li>Phase tracking (Trello)</li>
                      </ul>
                    </div>*/}
                    <div className="">
                      <img className="" src={edits} alt="editing"/>
                      <p className="inner"><i>
                        “We separated it into <b>two phases</b> [contents or editorial] because people don’t see an entire unnecessary paragraph, but instead get caught up in the typos.”</i></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="sixty center space-up">
              <p className="title bg-grey">3. Open source documentation</p>
            </div>
            <div className="full flex justify-between">
              <div className="third">
                <img src={motivation} />
                <p className=" bold text-center"><b>Motivation</b></p>
                <ul>
                  <li>Intrinsic values</li>
                  <li>Career opportunities</li>
                </ul>
              </div>
              <div className="third">
                <img src={challenge} />
                <p className=" bold text-center"><b>Challenge</b></p>
                <ul>
                  <li>Intimidation</li>
                  <li>Bystander effect</li>
                </ul>
              </div>
              <div className="third">
                <img src={nudge} />
                <p className=" bold text-center"><b>Nudge</b></p>
                  <ul>
                    <li>Ability to take baby steps</li>
                    <li>Sense of ownership</li>
                    <li>Welcoming community</li>
                  </ul>
              </div>
            </div>
            </div>
            <div id="Design" className="section">
              <Heading
                title="Design Recommendations"
              />
              <div className="sixty center">
                <p>Because my audience included those who were unfamiliar with the product, I used a story to deliver design recommendations. <b>By comparing collaborative contents writing to being part of discussion in a conference room, I explained what it takes to build a successful open source documentation.</b></p>
              </div>

              <div className="flex justify-between">
                <div className="half">
                  <p className="title bg-grey">1. Provide a place to plan and outline</p>
                  <img src={recommend1} />
                  <p className="caption">Chaos vs. Organization</p>
                  <p>What kind of situation is easier to voluntarily sit down? <b>Early organization gives solid direction and a placeholder for contribution gives even those hesitant a chance to participate.</b></p>
                </div>
                <div className="half">
                  <p className="title bg-grey">2. Go Modular</p>
                  <img src={recommend2} />
                  <p className="caption">Bench vs. One-person chairs</p>
                  <p>One-person chairs are easier to adjust to various situations: grouping and moving. <b>If the content is modular like these chairs, it will be be easier to adapt.</b></p>
                </div>
                <div className="half">
                  <p className="title bg-grey">3. Utilize Modules for Templating</p>
                  <img src={recommend3} />
                  <p>As chairs can be grouped, <b> modules can be grouped to make templates.</b> A template would be a set of well matched chairs. They don’t have to stay together, but they are provided as a recommendation.</p>
                </div>
                <div className="half">
                  <p className="title bg-grey">4. Label phases of editing</p>
                  <img src={recommend4} />
                  <p className="caption">Talking ASAP vs. Waiting for them to sit</p>
                  <p>Don’t talk before the person is properly seated. <b>Showing others the current editing phase ensures a community understanding of what is important to address at the moment.</b> Instead of focusing on the grammar of a draft, it’s more important to consider if some content is relevant or not.</p>
                  <ul>
                    <li>Placeholder for TBD</li>
                    <li>Need content contributions</li>
                    <li>Ready for contents or editorial review</li>
                  </ul>
                </div>
                <div className="half">
                  <p className="title bg-grey">5. Welcome the newcomers</p>
                  <img src={recommend5} />
                  <p><b>Welcoming community is a good start for contribution.</b> A newcomer may walk in and ask, “what are we talking about?” The answer may be too obvious for you, but try to give a nice answer. The person will feel encouraged to join in.</p>
                </div>
                <div className="half">
                  <p className="title bg-grey">6. Help every contribution matter</p>
                  <img src={recommend6} />
                  <p>Recognize who spoke what. <b>The sense of appreciation</b> will give the speaker, or the documentation contributor, a boost. Even a micro-contribution, like fixing a typo, is still a contribution. <b>Anyone can do it, but not everyone does it.</b></p>
                </div>
              </div>
            </div>
            <div id="Impact" className="section">
              <Heading
                title="Impact"
              />
              <div className="third center">
                <img src={sunset} />
              </div>
              <div className="eighty center">
                <p>Sadly, the Documentation is being sunsetted. <a className="link" href="https://meta.stackoverflow.com/questions/354217/sunsetting-documentation">The public post from Stack Overflow</a> stated, <br/></p>
                <p className="eighty center">
                  <i>"The results were encouraging in the sense that <b>we know a lot more about what makes for great documentation and how we might support that effort</b>. But it was also clear <b>fixing Documentation would require a significantly larger team</b>. [...] Unfortunately, we can't afford to work on the problem at the moment."</i>
                </p>
                <p>However, it has changed the way Stack Overflow works.</p>
                <p className="eighty center bigP">
                  <i>"[After Documentation, we have] <span className="bg-grey">changed our approach to product development across the company</span>."</i>
                </p>
                <p>
                  This is a leap from Stack Overflow’s more traditional “develop a new product and see how it goes” process. I am proud that I was part of the Documentation team who made an impact on the entire company, and all the developers out there.</p>
              </div>
            </div>
        </div>
        <Next
          leftItem="Miscellaneous Designs"
          leftLink="/misc"
          rightItem="Co-creation Tool"
          rightLink="/logue"
        />
        <Credit/>
      </div>
    )
  }
}
export default Docs;
