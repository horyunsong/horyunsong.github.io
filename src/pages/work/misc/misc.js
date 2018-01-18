import React, { Component } from 'react';
import "./misc.css";
import ImageZoom from 'react-medium-image-zoom';

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";
import Next from "../../../components/credit/next";

import Title from '../../../components/work/mini/title';

import kkori from '../../../img/work/misc/kkori.jpg';
import boo from '../../../img/work/misc/boo.png';
import capn from '../../../img/work/misc/capn.png';
import cocoa from '../../../img/work/misc/cocoa.png';
import corn from '../../../img/work/misc/corn.png';
import count from '../../../img/work/misc/count.png';
import cover from '../../../img/work/misc/cover.jpg';
import franken from '../../../img/work/misc/franken.png';
import froot from '../../../img/work/misc/froot.png';
import lucky from '../../../img/work/misc/lucky.png';
import oreo from '../../../img/work/misc/oreo.png';
import rice from '../../../img/work/misc/rice.png';
import tony from '../../../img/work/misc/tony.png';
import trix from '../../../img/work/misc/trix.png';

class Misc extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="underlined container small">
          <Title
            title="Miscellaneous"
            category="Msic."
            type="Design"
          />
          <p className="title">Tail</p>
          <p><i>Cable organizer</i></p>
          <p>Tail is <b>always attached to the cable</b>, clinging like ivy. The small metal strip inside the rubber coating holds it tightly but is malleable enough that <b>simple grabbing</b> can change the shape. Unwinding it is even simpler, just open it to bring it back to its original shape.</p>
          <div className=" center">
            <ImageZoom
              image={{
                src: kkori,
                alt: "Tail"
              }}
              zoomImage={{
                src: kkori,
                alt: "Tail"
              }}
            />
          </div>
          <br/><br/><br/>

          <div className="flex justify-between align-bottom">

            <div className="sixty">
              <p className="title">Adventurous Calendar</p>
              <p><i>Concept Calendar</i></p>
              <p>Cereal boxes are not regular cardboard boxes. Brilliant characters, excitement, sweetness, and joy all combine, to make a cereal box. Each of the twelve months are represented by these cereal boxes.</p>
            </div>
            <div className="forty">
              <ImageZoom
                image={{
                  src: cover,
                  alt: "cover of calendar"
                }}
                zoomImage={{
                  src: cover,
                  alt: "cover of calendar"
                }}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="quarter">
              <ImageZoom
                image={{
                  src: tony,
                  alt: "January Frosted Flakes"
                }}
                zoomImage={{
                  src: tony,
                  alt: "January Frosted Flakes"
                }}
              />
            </div>
            <div className="quarter">
              <ImageZoom
                image={{
                  src: trix,
                  alt: "February Trix"
                }}
                zoomImage={{
                  src: trix,
                  alt: "February Trix"
                }}
              />
            </div>
            <div className="quarter">
              <ImageZoom
                image={{
                  src: rice,
                  alt: "March Rice Krispies"
                }}
                zoomImage={{
                  src: rice,
                  alt: "March Rice Krispies"
                }}
              />
            </div>
            <div className="quarter">
              <ImageZoom
                image={{
                  src: corn,
                  alt: "April Corn Flakes"
                }}
                zoomImage={{
                  src: corn,
                  alt: "April Corn Flakes"
                }}
              />
            </div>
            <div className="quarter">
              <ImageZoom
                image={{
                  src: franken,
                  alt: "May Frankenberry"
                }}
                zoomImage={{
                  src: franken,
                  alt: "May Frankenberry"
                }}
              />
            </div>
            <div className="quarter">
              <ImageZoom
                image={{
                  src: froot,
                  alt: "June Froot Loops"
                }}
                zoomImage={{
                  src: froot,
                  alt: "June Froot Loops"
                }}
              />
            </div>
            <div className="quarter">
              <ImageZoom
                image={{
                  src: capn,
                  alt: "July Capn Crunch"
                }}
                zoomImage={{
                  src: capn,
                  alt: "July Capn Crunch"
                }}
              />
            </div>
            <div className="quarter">
              <ImageZoom
                image={{
                  src: oreo,
                  alt: "August Oreo Oz"
                }}
                zoomImage={{
                  src: oreo,
                  alt: "August Oreo Oz"
                }}
              />
            </div>
            <div className="quarter">
              <ImageZoom
                image={{
                  src: cocoa,
                  alt: "September Cocoa puffs"
                }}
                zoomImage={{
                  src: cocoa,
                  alt: "September Cocoa puffs"
                }}
              />
            </div>
            <div className="quarter">
              <ImageZoom
                image={{
                  src: count,
                  alt: "October Count Chocula"
                }}
                zoomImage={{
                  src: count,
                  alt: "October Count Chocula"
                }}
              />
            </div>
            <div className="quarter">
              <ImageZoom
                image={{
                  src: boo,
                  alt: "November Booberry"
                }}
                zoomImage={{
                  src: boo,
                  alt: "November Booberry"
                }}
              />
            </div>
            <div className="quarter">
              <ImageZoom
                image={{
                  src: lucky,
                  alt: "December Lucky Charms"
                }}
                zoomImage={{
                  src: lucky,
                  alt: "December Lucky Charms"
                }}
              />
            </div>
          </div>

        </div>
        <Next
          leftItem="Nail Polish Design"
          leftLink="/bunny"
          rightItem="Documentation"
          rightLink="/docs"
        />

        <Credit/>
      </div>
    )
  }
}
export default Misc;
