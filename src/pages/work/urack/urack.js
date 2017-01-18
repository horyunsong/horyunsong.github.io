import React, { Component } from 'react';
import "./urack.css";

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";

import Title from '../../../components/work/mini/title';
import Process from '../../../components/work/mini/process';
import Heading from '../../../components/work/mini/heading';

import intro from '../../../img/work/urack/Urack.gif';
import thumb from '../../../img/work/thumb/urack-sprite.jpg';
import storyboard from '../../../img/work/urack/storyboard.jpg';
import gopro from '../../../img/work/urack/gopro.png';
import affinity from '../../../img/work/urack/affinity.jpeg';
import concepts from '../../../img/work/urack/concepts.jpg';
import sensor from '../../../img/work/urack/sensor.png';
import modular from '../../../img/work/urack/modular.png';
import sketch1 from '../../../img/work/urack/sketch1.jpg';
import prototype1 from '../../../img/work/urack/prototype1.jpg';
import requirements from '../../../img/work/urack/requirements.png';
import wireframe from '../../../img/work/urack/wireframe.jpeg';
import wireframe1 from '../../../img/work/urack/Map_TSRB.png';
import wireframe2 from '../../../img/work/urack/Map_select_from_list.png';
import wireframe3 from '../../../img/work/urack/Bike_lock_now_1.png';
import wireframe4 from '../../../img/work/urack/Bike_map_view.png';
import wireframe5 from '../../../img/work/urack/alert.png';
import wireframe6 from '../../../img/work/urack/remove.png';
import pilot from '../../../img/work/urack/pilot.png';
import med from '../../../img/work/urack/med.png';
import spark from '../../../img/home/small/spark.png';


class Urack extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="underlined container small">
          <Title
            title="U-rack"
            subtitle="UX research and prototype iteration"
            role="Team project as UX researcher and designer"
          />
          <div className="problem">
            <p className="title">User Group</p>
            <p>Student cyclists on Georgia Tech (GT) campus</p>
            <p className="title">Problem</p>
            <p>Even though there are designated bike parking racks, it is hard to find empty rack near busy places. Locking bikes to undesignated area can impede walkways and make it easier for bike thieves to take the bikes. And stolen bikes are scarcely recovered.</p>
            <p  className="title">Solution</p>
            <p>U-Rack is modular bike storage system that consists of three parts: the rack, the U-lock, and the app. Just push the U shaped steel bar of lock through the handle, prop up the smart bike rack, mount the lock to rack and off you go! The mobile app will take care of the rest: lock and unlock easily with proximity, give real-time information about the available storage, your bike location and security.</p>
            <div className="flex align-center">
              <div className="third">
                <img className="" src={thumb}/>
              </div>
              <div className="half">
                <img src={storyboard} />
              </div>
            </div>
          </div>
          <div className="spark-wrapper">
            <h3 className="heading" >Process</h3>
            <div className="spark">
              <img src={spark} />
            </div>
          </div>
          <Process
            processes={["Defining Problem Space",
              "Affinity Diagram", "Design Concepts", "Expert Interview", "Low-fid Prototype", "High-fid Prototype", "User Testing"]}
          />
          <div id="Defining">
            <Heading
              title="Defining Problem Space"
              content=""
            />
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
                <img src={gopro} />
              </div>
              <div className="sixty">
                <p className="title">Users: “Think-aloud” with GoPro</p>
                <p>To get <b>contextual data</b>, we asked student cyclists to wear a GoPro attached to a helmet as they rode their bike on campus during a normal day while using the “think-aloud” technique. <br/>
                They were very alert when they were driving near pedestrians and cars. And they let out exasperated sighs when they could not find empty rack near by their buildings. Also, <b>though no one has mentioned it in survey and interviews, they found it very frustrating when they had to unlock the bike from crowded and tangled bike racks.</b></p>
              </div>
            </div>
          </div>
          <div id="Affinity">
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
              <div className="full">
                <img src={affinity} />
              </div>
            </div>
          </div>
          <div id="Design">
            <Heading
              title="Design Concepts"
            />
            <div className="sixty center">
              <img src={concepts} />
            </div>
            <p>We placed our ideas onto a whiteboard to create a diagram based on <b>Feasibility vs. Usability</b>. The purpose of this diagram was to help us define which ideas were not only the most useful to our user group, but also the most practical to implement. We designed <b>two ideas based on the clusters: modular storage and sensor for pedestrian</b>. </p>
            <div className="flex">
              <div className="half modular center">
                <img src={modular} />
                <p className="caption">Modular storage storyboard</p>
              </div>
              <div className="half center sensor">
                <img  src={sensor} />
                <p className="caption">Traffic sensor storyboard</p>
              </div>
            </div>
          </div>
          <div id="Expert">
            <Heading
              title="Expert Interview"
            />
            <p><b>To get an insight on how to implement the design on bike and infrastructure</b>, We interviewed four experts with our preliminary design storyboards. We learned what is possible and impossible, as well as the modular storage implementation issues.</p>
            <ul>
              <li>Researcher on cyclists in Atlanta</li>
              <li>Landscape architect at GT Space Management Department</li>
              <li>Staff member at GT Starter Bike (student club)</li>
              <li>Staff member at Performance Bike in Atlanta (off-campus shop)</li>
            </ul>
            <div>
              <p className="title">Design decision</p>
              <p>Based on expert interview and quick informal user interviews, we decide to narrow down our concept to modular bike storage instead of traffic sensor for following reasons:</p>
              <ul>
                <li>Answer to users and stakeholders’ needs more closely</li>
                <li>Impracticality of traffic sensor due to visual/auditory impairment</li>
                <li>Expandable to off-campus</li>
              </ul>
              <p>Changes to make based on feedback:</p>
              <ul>
                <li>There is no universal part of bike except for frame</li>
                <li>Kickstand area is easily removable</li>
                <li>Strong magnets could be dangerous to people with certain medical condition</li>
              </ul>
            </div>
          </div>
          <div id="low-fid">
            <Heading
              title="Low-fid Prototype"
              content="Based on storyboard and feedback, we sketched detailed designs and specification of operation. "
            />
            <div className="flex justify-between">
              <div className="half">
                <p className="title">Lock: Sketches</p>
                <img src={sketch1} />
              </div>
              <div className="half">
                <p className="title">Lock: low-fid prototype</p>
                <img src={prototype1} />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="half">
                <p className="title">Application: Requirements</p>
                <img src={requirements} />
              </div>
              <div className="half">
                <p className="title">Application: Sketches </p>
                <img src={wireframe} />
              </div>
            </div>
            <p className="title">Application: Wireframe</p>
            <div className="flex justify-between">
              <div className="quarter">
                <img src={wireframe1} />
                <p className="caption">Map view: default</p>
              </div>
              <div className="quarter">
                <img src={wireframe2} />
                <p className="caption">Map view: choose from list</p>
              </div>
              <div className="quarter">
                <img src={wireframe3} />
                <p className="caption">My bike view: lock now</p>
              </div>
              <div className="quarter">
                <img src={wireframe4} />
                <p className="caption">My bike view: locked and standby</p>
              </div>
            </div>
            <div>
              <p className="title">Pilot Testing</p>
              <div className="flex align-start">
                <div className="forty">
                  <img src={pilot}/>
                  <p className="caption">User locking bike to the rack</p>
                </div>
                <div className="sixty">
                  <p>Tasks:</p>
                  <ol>
                    <li>Register your bike and smart lock</li>
                    <li>Find an available space and lock your bike</li>
                    <li>Unlock your bike</li>
                  </ol>
                  <p>Findings:</p>
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
          <div id="High-fid">
            <Heading
              title="High-fid Prototype"
            />
            <p>We built a medium fidelity prototype of the rack using plywood, metal poles, and a 3D printed smart lock. The lock used small round magnets (magnet concept courtesy of our classmate, Noah Posner) <b>to simulate an actual locking function</b>. We also revised our app and locking process based on the pilot testing findings.</p>
            <div className="flex">
              <div className="half">
                <img src={med} />
                <p className="caption">Med-fid Prototype</p>
              </div>
              <div className="quarter">
                <img src={wireframe5} />
                <p className="caption">Med-fid Prototype</p>
              </div>
              <div className="quarter">
                <img src={wireframe6} />
                <p className="caption">Med-fid Prototype</p>
              </div>
            </div>
          </div>
          <div id="User">
            <Heading
              title="User Testing"
            />
            <p>We tested our high fidelity prototype of the U-lock, the rack and the app on users. App was <a className="link" href="https://invis.io/NQ9J06CZE"> clickable (InVision)</a> and the rest of system was done using <b>wizard-of-oz method.</b></p>
            <p className="title">How</p>
            <p>Two participant brought his/her own bike and was given the same four tasks near Tech Square Research Building (TSRB). Task was run with two moderators with participant doing Think-aloud. Pre-task and post-task interviews were given.</p>
            <div className="">
              <p className="title">Tasks</p>
              <ol>
                <li><b>Registration</b>: You are a first time user of this application. Please register your bike.</li>
                <li><b>Find</b>: You are about to head to TSRB. Please look for an available spot.</li>
                <li><b>Lock</b>: You are now at TSRB. Please lock your bike.</li>
                <li><b>Unlock</b>: Please unlock your bike.</li>
              </ol>
              <p className="title">Findings</p>
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
        <Credit/>
      </div>
    )
  }
}
export default Urack;