import React, { Component } from 'react';
import "./urack.css";

import Collapse from 'react-collapse';

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";
import Next from "../../../components/credit/next";
import Title from '../../../components/work/mini/title';
import Process from '../../../components/work/mini/process';
import Heading from '../../../components/work/mini/heading';

import storyboard from '../../../img/work/urack/storyboard.jpg';
import gopro from '../../../img/work/urack/gopro.png';
import concepts from '../../../img/work/urack/concepts.jpg';
import sensor from '../../../img/work/urack/sensor.png';
import modular from '../../../img/work/urack/modular.png';
import sketch1 from '../../../img/work/urack/sketch1.jpg';
import prototype1 from '../../../img/work/urack/prototype1.jpg';
import wireframe1 from '../../../img/work/urack/Map_TSRB.png';
import wireframe2 from '../../../img/work/urack/Map_select_from_list.png';
import wireframe3 from '../../../img/work/urack/Bike_lock_now_1.png';
import wireframe4 from '../../../img/work/urack/Bike_map_view.png';
import pilot from '../../../img/work/urack/pilot.png';
import med from '../../../img/work/urack/med.png';
import spark from '../../../img/home/spark.png';
import locking from '../../../img/work/urack/locking-explained.png';

class Urack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interview: false,
      design: false,
      prototype: false,
      ia: false,
      wire: false
    };

    this.interviewClick = this.interviewClick.bind(this);
    this.designClick = this.designClick.bind(this);
    this.prototypeClick = this.prototypeClick.bind(this);
    this.iaClick = this.iaClick.bind(this);
    this.wireClick = this.wireClick.bind(this);

  }

  designClick() {
    this.setState(prevState => ({
      design: !prevState.design
    }));
  }
  interviewClick() {
    this.setState(prevState => ({
      interview: !prevState.interview
    }));
  }
  prototypeClick() {
    this.setState(prevState => ({
      prototype: !prevState.prototype
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
        <div className="underlined container small">
          <Title
            title="U-rack"
            subtitle="UX research and prototype iteration"
            role="In class team project"
          />
          <div className="flex justify-between align-bottom">
            <div className="half">
              <p className="title">User Group</p>
              <p>Student cyclists on Georgia Tech (GT) campus</p>
              <p className="title">Problem</p>
              <p>Not enough bike rack pushes cyclists to lock bikes to unassigned area can impede walkways and make it easier for bike thieves to take the bikes.</p>
              <p  className="title">Solution</p>
              <p>U-Rack is modular bike storage system that consists of three parts: <b>the rack, the U-lock, and the app</b>. Just prop up the smart bike rack, <b>push the U shaped steel bar of lock through the handle, mount the lock to the rack</b> and off you go! The mobile app will take care of the rest: <b>lock and unlock easily with proximity, give real-time information about the available storage, your bike location and security</b>.</p>
            </div>
            <div className="half">
              <img src={storyboard} alt="storyboard"/>
            </div>
          </div>
          <div className="problem">
            <div className="flex justify-between">
              <div className="quarter">
                <img src={wireframe1} alt="wireframe 1"/>
                <p className="caption">Map view: default</p>
              </div>
              <div className="quarter">
                <img src={wireframe2} alt="wireframe 2"/>
                <p className="caption">Map view: choose from list</p>
              </div>
              <div className="quarter">
                <img src={wireframe3} alt="wireframe 3"/>
                <p className="caption">My bike view: lock now</p>
              </div>
              <div className="quarter">
                <img src={wireframe4} alt="wireframe 4"/>
                <p className="caption">My bike view: locked and standby</p>
              </div>
            </div>
          </div>
          <p className="title">My Role</p>
          <ul>
            <li>Preparing and conducting user research including survey and interview</li>
            <li>Recruiting student cyclists to participate for interview and contextual interview</li>
            <li>Analyzing information using affinity diagram and data coding</li>
            <li>Generating and sketching ideas</li>
            <li>Storyboarding for three design concepts</li>
            <li>Prototyping mobile application wireframe</li>
          </ul>
          <br/>
          <div className="spark-wrapper">
            <h3 className="heading" >Process</h3>
            <div className="spark">
              <img src={spark} role="presentation"/>
            </div>
          </div>
          <Process
            processes={["Defining Problem Space",
              "Affinity Diagram", "Design Concepts", "Expert Interview", "Low-fid Prototype", "High-fid Prototype", "User Testing"]}
          />
          <div id="Defining" className="section">
            <Heading
              title="Defining Problem Space"
              content=""
            />
            <div className="flex justify-between">
              <div className="third">
                <p className="title">How</p>
                <ul>
                  <li><b>Semi-structured interview with stakeholder</b> (Georgia Tech Police Department)</li>
                  <li><b>In-person survey with users at bike racks</b></li>
                  <li>Semi-structured interview with users</li>
                  <li>Think aloud videos</li>
                </ul>
              </div>
              <div className="third">
                <p className="title">Why</p>
                <p>To define problem space from different angles: stakeholder, users and observers. We conducted <b>in-person survey to use the session as impromptu interview</b> when users were willing to talk more about question.</p>
              </div>
              <div className="third">
                <p className="title">Finding</p>
                <p>Stakeholder considered <b>bike theft</b> as the biggest issue. However, users, cyclists did not agree. They felt relatviely safe, but concerned with <b>bike storage and traffic safety</b>. From think-aloud videos, we discovered that not only finding the bike storage, but <b>maneuvering at bike rack</b> was also problem.</p>
              </div>
            </div>
            <div className="button-wrapper">
              <button onClick={this.interviewClick} className="button expand center">
                {this.state.interview ? 'Close' : 'Show'} Interview Details
              </button>
            </div>
            <Collapse isOpened={this.state.interview}>
              <div>
                <p className="title">Stakeholder Interview</p>
                <p>We conducted <b>semi-structured interview</b> with two police officers and one crime analyst from Georgia Tech Police Department(GTPD) because GTPD has the most accurate perspective of the actual breadth of student and bicycle safety. We Learned about the prevalence of bicycle theft on Georgia Tech’s campus, including reasons for theft, locations of frequent theft, bike registration, crime prevention implementations, and ways to locate stolen bicycles.</p>
              </div>
              <div>
                <p className="title">Users: In-person survey at bike racks</p>
                <p>Rather than distributing online survey or conducting formal interviews, we conducted quick and dirty <b>in-person surveys that led to mini interview sessions</b> when students wanted to elaborate their answer or we wanted to know more.<br/>
                  We found out that only few students surveyed thought that bike theft was an issue on campus, which was the biggest issue GTPD addressed. Among them were students who had or knew of someone who had a bike stolen in the past year. But they answered that traffic (both cars and pedestrian) safety and storage were big issue on campus.</p>
              </div>
              <div>
                <p className="title">Users: Semi-structured interview</p>
                <p>We asked same questions across all interviewees and prepared number of special questions for those who had experienced personal bike theft. The interviews ran around 30 minutes. The outcome confirmed what we found out from surveys.</p>
              </div>
              <div className="flex justify-between">
                <div className="forty center gopro">
                  <img src={gopro} alt="screenshot of user's view"/>
                </div>
                <div className="sixty">
                  <p className="title">Users: “Think-aloud” with GoPro</p>
                  <p>To get <b>contextual data</b>, we asked student cyclists to wear a GoPro attached to a helmet as they rode their bike on campus during a normal day while using the “think-aloud” technique. <br/>
                  They were very alert when they were driving near pedestrians and cars. And they let out exasperated sighs when they could not find empty rack near by their buildings. Also, <b>though no one has mentioned it in survey and interviews, they found it very frustrating when they had to unlock the bike from crowded and tangled bike racks.</b></p>
                </div>
              </div>
            </Collapse>
          </div>
          <div id="Affinity" className="section">
            <Heading
              title="Affinity Diagram"
              content="Excerpts from our various data collections were coded on sticky notes then placed on a wall where they were able to be rearranged based on similarity and power of other related excerpts. The clusters were "
            />
            <div className="flex justify-start">
              <div className="half">
                <p className="">Infrastructure</p>
                <ul>
                  <li>Difficulty  maneuvering in traffic</li>
                  <li>storage redesign</li>
                </ul>
              </div>
              <div className="half">
                <p className="">Theft prevention</p>
                <ul>
                  <li>Prevention and subversion</li>
                  <li>Lack of faith in GTPD process</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="Design" className="section">
            <Heading
              title="Design Concepts"
            />
            <div className="flex justify-between">
              <div className="third">
                <p  className="title">How</p>
                <p>Placed our design ideas onto a whiteboard to create a diagram based on <b>Feasibility vs. Usability</b></p>
              </div>
              <div className="third">
                <p className="title">Why</p>
                <p>to help us define which ideas were not only the most useful to our user group, but also the most practical to implement</p>
              </div>
              <div className="third">
                <p className="title">Finding</p>
                <p>Two ideas based on the clusters: <b>modular storage</b> and <b>sensor for pedestrian</b></p>
              </div>
            </div>
            <div className="button-wrapper">
              <button onClick={this.designClick} className="button expand center">
                {this.state.design ? 'Close' : 'Show'} Design Concept Details
              </button>
            </div>
            <Collapse isOpened={this.state.design}>
              <br/>
              <div className="sixty center">
                <img src={concepts} alt="concept diagram"/>
              </div>
              <div className="flex">
                <div className="half modular center">
                  <img src={modular} role="presentation"/>
                  <p className="caption">Modular storage storyboard</p>
                  <p className="text-center"><b>Bike rack is flushed to the ground when not in use.</b></p>
                </div>
                <div className="half center sensor">
                  <img  src={sensor} role="presentation"/>
                  <p className="caption">Traffic sensor storyboard</p>
                </div>
              </div>
            </Collapse>
          </div>
          <div id="Expert" className="section">
            <Heading
              title="Expert Interview"
            />
            <div className="flex justify-between">
              <div className="half">
                <p  className="title">How</p>
                <p>Interviewed <b>four experts</b> with our preliminary design storyboards</p>
                <ul>
                  <li>Researcher on cyclists in Atlanta</li>
                  <li>Landscape architect at GT Space Management Department</li>
                  <li>Staff member at GT Starter Bike (student club)</li>
                  <li>Staff member at Performance Bike in Atlanta (off-campus shop)</li>
                </ul>
              </div>
              <div className="half">
                <p className="title">Why</p>
                <p><b>To get an insight on how to implement the design on bike and infrastructure</b></p>
                <p className="title">Finding</p>
                <ul>
                  <li>There is no universal part of bike except for frame</li>
                  <li>Kickstand area is easily removable</li>
                  <li>Strong magnets could be dangerous to people with certain medical condition</li>
                  <li>Impracticality of traffic sensor due to visual/auditory impairment</li>
                  <li>Expandable to off-campus</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="Low-fid" className="section">
            <Heading
              title="Low-fid Prototype"
            />
            <p>Based on storyboard and feedback, we sketched detailed designs and extracted requirements. We built <b>physical prototype and designed wireframes</b>.</p>
            <div className="button-wrapper">
              <button onClick={this.prototypeClick} className="button expand center">
                {this.state.prototype ? 'Close' : 'Show'} Prototype Details
              </button>
            </div>
            <Collapse isOpened={this.state.prototype}>
              <div className="flex justify-between">
                <div className="half">
                  <p className="title">Lock: Sketches</p>
                  <img src={sketch1} role="presentation"/>
                </div>
                <div className="half">
                  <p className="title">Lock: low-fid prototype</p>
                  <img src={prototype1} role="presentation"/>
                  <p className="caption">Used pink foam, dowels, and paper</p>
                </div>
              </div>
            </Collapse>
            <div>
              <p className="title">Pilot Testing</p>
              <div className="flex align-start">
                <div className="forty">
                  <img src={pilot} role="presentation"/>
                  <p className="caption">User locking bike to the rack</p>
                </div>
                <div className="sixty">
                  <p>How:<br/>
                    Two users were given below tasks. <b>Structured interviews</b> were asked before and after testing.
                  </p>
                  <ol>
                    <li>Register your bike and smart lock</li>
                    <li>Find an available space and lock your bike</li>
                    <li>Unlock your bike</li>
                  </ol>
                  <p>Why:<br/>
                    To find low-hanging issues with interaction and <b>quickly iterate</b>
                  </p>
                  <p>Finding:</p>
                  <ul className="pilot">
                    <li><b>+</b> Fluidity of locking bicycle</li>
                    <li><b>+</b> Constant monitor of bike creates a feeling of security</li>
                    <li><b>+</b> GPS/Location feature decreases the time it takes for students to find their bike</li>
                    <li><b>-</b> Having the phone in hand while locking the bike with the app could be cumbersome</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="High-fid" className="section">
            <Heading
              title="High-fid Prototype"
            />
            <p>We built a medium fidelity prototype of the rack using plywood, metal poles, and a 3D printed smart lock. The lock used small round magnets (magnet concept courtesy of our classmate, Noah Posner) <b>to simulate locking function</b>. We also revised our app and locking process based on the pilot testing findings.</p>
            <div className="eighty center">
              <img src={locking} role="presentation"/>
              <p className="caption">Lock & Rack: 3D model</p>
            </div>
          </div>
          <div id="User" className="section">
            <Heading
              title="User Testing"
            />
            <div className="">
              <div className="half center">
                <img src={med} role="presentation"/>
                <p className="caption">Lock & Rack: Locked state</p>
              </div>
              <div className="full">
                <p>We tested our high fidelity prototype of the U-lock, the rack and the app on users. App was <a className="link" href="https://invis.io/NQ9J06CZE"> clickable (InVision)</a> and the rest of system was done using <b>wizard-of-oz method.</b></p>

              </div>
            </div>
            <div className="">
              <p className="title">How</p>
              <p>Two participant brought his/her own bike and was given the same four tasks near Tech Square Research Building (TSRB). Task was run with two moderators with participant doing Think-aloud. Pre-task and post-task interviews were given.</p>
              <ol>
                <li><b>Registration</b>: You are a first time user of this application. Please register your bike.</li>
                <li><b>Find</b>: You are about to head to TSRB. Please look for an available spot.</li>
                <li><b>Lock</b>: You are now at TSRB. Please lock your bike.</li>
                <li><b>Unlock</b>: Please unlock your bike.</li>
              </ol>
              <p className="title">Finding</p>
              <ul className="pilot">
                <li><b>+</b> All: The system is easy to learn and to get started on.</li>
                <li><b>+</b> Unlock: Do not need keys to unlock the bike from the smart rack.</li>
                <li><b>+</b> Lock: Nice to be able to check the status of your bike when you are not physically there.</li>
                <li><b>-</b> Registration: Many students buy used bikes, and the bikes may not have a serial number.</li>
                <li><b>-</b> Find: Heat-map style of showing open bike racks on the app is confusing</li>
                <li><b>-</b> Lock: Some students may want to leave their bike in one location for longer than a month.</li>
              </ul>
            </div>
          </div>
        </div>
        <Next
          leftItem="Logue"
          leftLink="/logue"
          rightItem="Underlined"
          rightLink="/underlined"
        />
        <Credit/>
      </div>
    )
  }
}
export default Urack;