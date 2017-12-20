import React, { Component } from 'react';
import "./docs.css";

import Collapse from 'react-collapse';

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
        <Nav />

        <div className="bslide container small">
          <Title
            title="Collaborative Documentation"
            type="Research"
            role="User Research Internship at Stack Overflow"
          />


          <div className="flex justify-between">
            <div className="problem sixty">
              <p className="title">Problem</p>
              <p><b>Stack Overflow had a product called Documentation, which was a collaborative writing space for technical reference material.</b> Nine months after the beta launch, the company has identified some key problems and decided to <a className="link" href="https://meta.stackoverflow.com/questions/349410/tearing-down-the-structure-of-documentation">redesign the product.</a></p>
              <p  className="title">Solution</p>
              <p>In order to design a tool that enabled everyone to write online documentation together, we had to learn how technical writers—the professionals—wrote both individually and collaboratively. <b>I took the lead on gathering insights from technical writers and delivered six design recommendations based on the findings from semi-structured interviews.</b></p>

            </div>
            <div className="forty">
              <p className="title">My role</p>
              <ul>
                <li>Define research questions</li>
                <li>Plan the research</li>
                <li>Recruit interviewees</li>
                <li>Conduct interviews</li>
                <li>Analyze interviews</li>
                <li>Deliver design recommendations</li>
              </ul>
              <div className="smaller-self" >
                <img src={self} alt="self portrait"/>
                <p><a className="link" href="https://medium.com/@horyunsong/life-as-a-stack-overflow-user-research-intern-ff9ce133996a">Medium Article "Life as a Stack Overflow User Research Intern"</a></p>
              </div>

            </div>
            <div className="full">
              <br/>
              <img className="center" src={docsHeader} alt=""/>
              <p className="caption">Original Documentation Header. Image from Stack Overflow.</p>
            </div>
          </div>

          <br/>
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
          <div id="Background" className="section">
            <Heading
              title="Background"
            />
            <div>
              <p>Stack Overflow has launched a product called Documentation in July 2016. It was <b>a collaborative writing space for technical reference material</b>. Although it addressed some problems in traditional technical documentation, the participation has constantly decreased since the beta launch. In April 2017, Stack Overflow has <a className="link" href="https://meta.stackoverflow.com/a/348087"> released the analysis of the situation:</a></p>

              <div className="flex justify-between">

                <div className="half bare-right">
                  <ul>
                    <li>Overtly focused on examples</li>
                    <li>Content artifact: one size didn’t fit all</li>
                    <li>Low quality, scattered content and poor findability </li>
                  </ul>
                  <p className="space-up">Seeing that these issues could not be addressed with minor adjustments, the company decided to <a className="link" href="https://meta.stackoverflow.com/questions/349410/tearing-down-the-structure-of-documentation">redesign the product</a>. <br/><br/>
                    If we were to design a tool that enabled everyone to write online documentation together, first we had to learn how they wrote both individually and collaboratively. <b>As a User Researcher, I researched technical writers and delivered 6 design recommendations based on the findings.</b></p>
                </div>
                <div className="half">
                  <img src={docsExamples} alt=" "/>
                  <p className="caption">Original Documentation UI. Image from Stack Overflow Blog.</p>
                </div>
              </div>
            </div>
          </div>
          <div id="Research" className="section">
            <Heading
              title="Research Questions"
            />
            <div>
              <ul>
                <li>How do the technical writers <b>define technical documentation</b>? What <b>characteristics</b> should it have?</li>
                <li>How do the they <b>write</b> documentations and what kind of <b>tools</b> do they use?</li>
                <li>How do they <b>collaborate</b> with other writers, developers and stakeholders?</li>
              </ul>
              <p><span className="bg-grey">In order to answer these questions, I decided that there was a need for in-depth conversations on one's experience as a technical writer. Therefore, I conducted semi-structured interviews.</span></p>
            </div>
          </div>
          <div id="Interviews" className="section">
            <Heading
              title="Interviews"
            />
            <p>All interviews were <b>semi-structured</b> and conducted <b>remotely</b>, using Google Hangouts. Most of the interviews  <b>shared their screens</b> to show how they used their writing or collaboration tools.</p>
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
            <div>
              <p>I coded the interview notes and transferred them to sticky notes. <b>After organizing them in an affinity diagram, I connected the themes, referring back to the specific quotes that each sticky note was linked to.</b></p>
              <img className="" src={stickies} />
            </div>
          </div>
          <div id="Findings" className="section">
            <Heading
              title="Findings"
            />
            <div>
              <p className="title bg-grey">1. What is technical documentation?</p>
              <div className="flex justify-between justify-start">
                <div className="half">
                  <p>Technical documentation is a type of reference material where users can find solutions to their problems on a particular technology.</p>
                </div>
                <div className="half">
                  <p><b>A successful documentation is a living product that grows along with the technology and adapts to user needs.</b></p>
                </div>
              </div>
              <div>
                <p className="text-center bold inner"><span className="bg-grey">CHARACTERISTICS</span></p>
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
            </div>
            <div>
              <p className="title bg-grey">2. Process of creating a technical documentation</p>
              <div className="inner">
                <div>
                  <p className="bold"><span className="bg-grey">STEP 1:</span> <b>Plan</b> what this documentation is trying to achieve, aka Docs Spec.</p>
                  <div className="flex justify-between">
                    <div className="forty">
                      <ul>
                        <li>Who is the audience of the docs?</li>
                        <li>Why will they come to the docs?</li>
                        <li>What will they get out of the docs? </li>
                      </ul>
                    </div>
                    <div className="sixty">
                      <img className="" src={piechart} alt="pie chart"/>
                      <p className="caption">
                        “The writing is usually 2-4 hours a day, the rest is figuring out what to work on and how you need to change it.”
                    </p>
                    </div>
                  </div>
                </div>
                <div className="upper">
                  <p className="bold"><span className="bg-grey">STEP 2:</span> <b>Outline</b> in every level.</p>
                  <p className="inner">Outlining determines logical order and groups.</p>
                  <ul>
                    <li>Table of contents</li>
                    <li>Headers and subheaders (sections)</li>
                  </ul>
                </div>
                <div className="upper">
                  <p className="bold"><span className="bg-grey">STEP 3:</span> Start <b>writing</b> (and use templates!).</p>
                  <p className="inner">Templates define what kind of sections should be included according to each type of the docs. <i>Madcap Flare</i> and <i>Confluence</i> were mentioned as good tools for keeping templates.</p>
                </div>
                <div className="upper">
                  <p className="bold"><span className="bg-grey">STEP 4:</span> Go through multiple <b>editing phases</b> and if possible, keep all the versions.</p>
                  <div className="flex justify-between">
                    <div className="forty">
                      <ul>
                        <li>Version control system (Confluence and SharePoint)</li>
                        <li>Branching (Github)</li>
                        <li>Phase tracking (Trello)</li>
                      </ul>
                    </div>
                    <div className="sixty">
                      <img className="" src={edits} alt="editing"/>
                      <p className="caption">
                        “We separated it into <b>two phases</b> [contents or editorial] because people don’t see an entire unnecessary paragraph, but instead get caught up in the typos.”</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div>
              <p className="title bg-grey">3. Open source documentation</p>
              <div className="flex justify-between">
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
            </div>
            <div id="Design" className="section">
              <Heading
                title="Design Recommendations"
              />
              <p>I knew that my audience would not be just the Documentation and Design teams. There would be people who are not familiar with the Documentation product. In preparation, I decided to deliver the design recommendations using a story. I asked the audience to imagine that they were walking into a unfamiliar conference room. What do they see? Chairs? Where would they sit? What would nudge them to sit in the first place? <b>By comparing collaborative contents writing to being part of discussion in a conference room, I delivered six design recommendations for collaborative documentation.</b></p>
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
                  <p>Don’t talk before the person is properly seated. <b>Showing  others the current editing phase  ensures a community understanding of what is important to address at the moment, instead of focusing on the grammar of a draft, it’s more important to consider if some content is relevant or not.</b></p>
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
                  <p>Recognize who spoke what. <b>The sense of appreciation will give the speaker, or the documentation contributor, a boost.</b> Even a micro-contribution, like fixing a typo, is still a contribution. <b>Anyone can do it, but not everyone does it.</b></p>
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
              <p>Sadly, the Documentation is being sunsetted. <a className="link" href="https://meta.stackoverflow.com/questions/354217/sunsetting-documentation">The public announcement from Stack Overflow</a> stated, <br/></p>
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
export default Docs;
