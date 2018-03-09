import React, { Component } from 'react';
import "./emotion.css";

import ImageZoom from 'react-medium-image-zoom';
import Headroom from 'react-headroom';

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";
import Next from "../../../components/credit/next";
import Title from '../../../components/work/mini/title';
import Process from '../../../components/work/mini/process';
import Heading from '../../../components/work/mini/heading';
import spark from '../../../img/home/spark.png';

import humancomputer from '../../../img/work/emotion/human-computer.png';
import heartbeat from '../../../img/work/emotion/heartbeat.png';
import computing from '../../../img/work/emotion/computing.png';
import lang from '../../../img/work/emotion/lang.png';
import framework from '../../../img/work/emotion/framework.png';
import methods from '../../../img/work/emotion/methods.png';
import excited from '../../../img/work/emotion/excited.png';
import circumplex from '../../../img/work/emotion/circumplex.jpg';
import elated from '../../../img/work/emotion/elated.png';
import survey from '../../../img/work/emotion/survey-click.png';
import rated from '../../../img/work/emotion/rated.png';
import nlp from '../../../img/work/emotion/nlp.png';
import total from '../../../img/work/emotion/total.png';
import tie from '../../../img/work/emotion/tie.png';
import years from '../../../img/work/emotion/years.png';
import gender from '../../../img/work/emotion/gender.png';
import compare from '../../../img/work/emotion/compare.png';
import nograph from '../../../img/work/emotion/nograph.png';
import hero from '../../../img/work/emotion/emo-hero.png';
import heroMobile from '../../../img/work/emotion/emo-hero-mobile.png';


class Emotion extends Component {


  render() {
    return (
      <div>
        <Headroom>
          <Next
            rightItem="Crowdsourcing Documentation"
            rightLink="/docs"
          />
        </Headroom>

        <div className="hero-desktop">
          <img src={hero} />
        </div>
        <div className="hero-mobile">
          <img src={heroMobile} />
        </div>
        <div className="container">
          <Title
            title="Detecting Emotions"
            role="Who's better? Friends vs. Strangers vs. Computer"
          />
          <div className="flex justify-between meta">
            <div className="third">
              <p className="meta-head">Methods</p>
              <p className="first">Survey, Amazon Mechanical Turk, Image Processing</p>
              <p className="meta-head">Tools</p>
              <p className="second">Qualtrics, Python, Tableau, Google API</p>
            </div>
            <div className="third">
              <p className="meta-head">My Contribution</p>
              <ul>
                <li>Designed a customized survey</li>
                <li>Distributed survey to friends and strangers (Amazon Mechanical Turkers)</li>
                <li>Visualzed findings: scatter plots/correlation and p-value</li>
              </ul>
            </div>
            <div className="third">
              <p className="meta-head">Team</p>
              <ul>
                <li><a className="link" href="https://www.linkedin.com/in/jung-wook-park-1061099b/">Jung Wook Park</a> (Team Lead, Study framework, Image Processing)</li>
                <li><a className="link" href="https://www.linkedin.com/in/ashwin-bhide-86196b102/">Ashwin Bhide</a> (Statistical Analysis, Natural Language Processing)</li>
              </ul>
            </div>
          </div>
          <div className="container small">
            <div className="sixty center ">
              <p className="title">Problem</p>
              <p>Emotion is an important measure to tell one's health. To detect emotions, researchers employ different research methods such as measuring physiological signals or computing language. However, <b>current methods come with critical shortcomings</b>, calling for a new method to detect emotions more conveniently and timely. </p>
            </div>
            <div className="sixty center">
              <p  className="title">Solution</p>
              <p>We hypothesized that <b>people are better at telling a person's emotions from digital artifacts than computational methods .</b> Thus, we proposed a Human Sensor, a detection method more capable of making contextual and holistic judgment on projected emotions. We prove this by <b>comparing its accuracy to a subject's self-report emotions on Facebook posts.</b></p>
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
                <span>Image Mapping</span>
                <span>Focus Group</span>
              </div>
            </div>
            <div className="fifth">
              <h4>Design</h4>
              <div className="spans">
                <span>Research Framework Design</span>
                <span>Survey Design</span>
              </div>
            </div>
            <div className="fifth">
              <h4>Collecting Data</h4>
              <div className="spans">
                <span>Survey</span>
                <span>Natural Language Processing</span>
                <span>Image Processing</span>
              </div>
            </div>
            <div className="fifth">
              <h4>Validate</h4>
              <div className="spans">
                <span>Correlation Coefficient</span>
                <span>Hypothesis Testing (p-value)</span>
              </div>
            </div>
            <div className="fifth">
              <h4>Deliver</h4>
              <div className="spans">
                <span>Presentation</span>
                <span>Academic Paper (Work in Progress)</span>
              </div>
            </div>
          </div>
          <div id="Background" className="section">
            <Heading
              title="Background & Motivation"
            />
            <div>
              <div className="sixty center">
                <p className="title">Background</p>
                <p>Emotion recognition is used in various fields, but most notably to detect health problems. With the emergence of social media, we are also witnessing possible ways of <b>utilizing social media artifacts to detect emotions.</b> For instance, depression can be predicted through emotions and other behavioral cues displayed on tweets. (De Choudhury et al., 2013)
                </p>
                <p className="title">Motivation</p>
                <p>We speculate current emotion detection methods are lacking for below reasons and find there is a need for more accurate and dependable method that accounts complex human emotion in given contexts.
                </p>
              </div>
              <div className="flex justify-between motivation">
                <div className="third">
                  <img className="smaller-img" src={heartbeat} alt="physiological" />
                  <p><b>Using physiological signals</b> is challenging to measure in a daily life because of its obstructiveness. - Wagner et al. (2005)</p>
                </div>
                <div className="third">
                  <img className="smaller-img" src={computing} alt="machine learning" />
                  <p>The latest <b>machine learning</b> techniques only achieved an accuracy of 80 percent. - Poria et al. (2016)</p>
                </div>
                <div className="third">
                  <img className="smaller-img" src={lang} alt="language" />
                  <p>“For the typical user, <b>dictionary-based sentiment analysis tools (LIWC)</b> may not be sufficient to infer how they truly feel.” - Beasley and Mason (2015)</p>
                </div>

              </div>
            </div>
          </div>
          <div id="Human" className="section space-up">
            <Heading
              title="Human Sensor"
            />
            <div className="sixty center">
              <p ><span className="">Thus, we propose a new technique of emotion measurement called Human sensor. </span></p>
              <ul>
                <li><b>Human sensor is an informant that provides his or her observation and perception regarding target persons or situations.</b></li>
                <li>Human sensor is more capable of making a contextual and holistic judgement than any other methods.
                </li>
              </ul>
            </div>
          </div>
          <div id="Research" className="section">
            <Heading
              title="Research Questions"
            />
            <div className="sixty center">
              <ul>
                <li>How can a participant’s <b>Facebook friends</b> function as sensors of her emotion?</li>
                <li>Can we <b>trust friends’ perceptions</b> compared to other sensing methods?</li>
                <li>How can the <b>tie strength / number of year / gender</b> affect the accuracy of friend sensors?</li>
                <li>What is the correlation between the accuracy of sensors and the continuous scale of tie strength?</li>
              </ul>
            </div>
          </div>

          <div id="Framework" className="section">
            <Heading
              title="Framework"
            />
            <div>
              <ImageZoom
                image={{
                  src: framework,
                  alt: "framework"
                }}
                zoomImage={{
                  src: framework,
                  alt: "framework"
                }}
              />
              <p className="title">I. Survey & Computing</p>
              <ol className="space-up">
                <li><b>Survey a subject’s Facebook friends</b> to get their evaluation of her emotion projected on each Facebook post.</li>
                <li><b>Survey Amazon Mechanical Turkers (strangers)</b> on all three subjects' surveys.</li>
                <li><b>Use computational methods</b> (Natural Language Processing and Image Processing) to get machine results</li>
              </ol>
              <p className="title">II. Correlation & Comparison</p>
              <ol>
                <li>Find a correlation between the continuous scale of tie strength and the accuracy of friends’ evaluation.</li>
                <li>Find a correlation between the years of friendship and the accuracy of friends’ evaluation.</li>
                <li>Compare the results of friends' and Amazon Mechanical Turkers' (strangers) survey answers</li>
                <li>Compare the results of computational methods and human surveys(both friends and Amazon Mechanical Turkers)</li>
              </ol>
            </div>
          </div>
          <div id="Collecting" className="section">
            <Heading
              title="Collecting Data"
            />
            <div>
              <p className="title bg-grey">I. Circumplex Model of Emotion</p>
              <div className="flex justify-between justify-start">
                <div className="sixty">
                  <p className="inner">To measure emotions, we used the Circumplex Model of Emotion. On this model, each emotion was understood as a linear combination of these <b>two dimensions: valence (positive/pleasant and negative/unpleasant) and arousal (magnitude/activation)</b></p>
                </div>
                <div className="forty">
                  <ImageZoom
                    image={{
                      src: circumplex,
                      alt: "circumplex"
                    }}
                    zoomImage={{
                      src: circumplex,
                      alt: "circumplex"
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="title bg-grey">II. Survey Design</p>
              <p className="inner">Each participant's <b>Facebook post</b> was followed by a <b>clickable Circumplex Model of Emotion.</b> Her friends and Amazon Mechanical Turkers clicked an emotion they guessed from the post. Surveys for friends collected personal questions of name to identify years of freindship and tie-strength. <br/>
                Tie-strength was self-identified by a subject: 0 =  stranger, 0.25 = acquaintance, 0.5 = friends, 0.75 = close friends, 1.0 = best friends</p>
              <div className="flex justify-between">
                <div className="half">
                  <ImageZoom
                    image={{
                      src: elated,
                      alt: "elated"
                    }}
                    zoomImage={{
                      src: elated,
                      alt: "elated"
                    }}
                  />
                </div>
                <div className="half">
                  <ImageZoom
                    image={{
                      src: survey,
                      alt: "survey"
                    }}
                    zoomImage={{
                      src: survey,
                      alt: "survey"
                    }}
                  />
                </div>
              </div>
              <p className="title space-up">Survey Demographics</p>
              <div className="flex justify-between">
                <div className="half">
                  <p className=""><span className="bg-grey">Friends </span></p>
                  <ul>
                    <li>Distributed to Facebook friends</li>
                    <li>54 friends answered one out of three survey</li>
                    <li>Female 22: Male 32</li>
                    <li>Years have known: min:1, max: 18, avg 7.7 years</li>
                    <li>Tie-Strength: min: 0.25,	max: 1, avg 0 .72</li>

                  </ul>
                </div>
                <div className="half">
                  <p className=""><span className="bg-grey">Strangers</span></p>
                  <ul>
                    <li>Recruited from Amazon Mechanical Turk</li>
                    <li>20 strangers answered three surveys</li>
                    <li>Female 10: Male 10</li>
                    <li>Years have known: 0 year</li>
                    <li>Tie-strength: 0</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="Analysis" className="section">
            <Heading
              title="Analysis"
            />
            <p className="title bg-grey">I. Survey</p>
            <p>Once we collected data from the surveys (AMT and our friends), we assigned each emotion a (x, y) value where the X-axis corresponds to the valence scale and the Y-axis corresponds to the arousal scale. Both axes had a range from -4 to +4. We then converted the answer key for each survey as well as participants’ responses into the (x,y) score. Using this (valence, arousal) score, we computed the <b>error of each response.</b> To do this, we computed the <b>distance of a participant' response from the self-assessment response. </b></p>

            <div className="flex justify-between">
              <div className="half">

                <p>If a participant said a Facebook post was “happy”, that would be assigned an (4, 1). If the self-report assessment for that post was “calm”, that would be assigned an (1, -4). To get the <b>valence error</b> we use
                  <span className="indent">
                    | x<sub>self-report</sub> - x<sub>participant</sub> | =
                    <br/>| 1 - 4 | = 3.
                  </span>
                  Similarly, the <b>arousal error</b> is
                  <span className="indent">
                    | y<sub>self-report</sub> - y<sub>participant</sub> | =
                    <br/>| -4 - 1 |= 5.
                  </span>
                  To get the <b>total error</b>, we used the <b>manhattan distance</b>, so for this example, it will be
                  <span className="indent">
                  5 + 3 = 8
                  </span>
                  We developed a script to parse the CSV file exported by Qualtrics, and calculate the valence, arousal and total error of each participant's response.</p>
              </div>
              <div className="half">
                <ImageZoom
                  image={{
                    src: rated,
                    alt: "rated"
                  }}
                  zoomImage={{
                    src: rated,
                    alt: "rated"
                  }}
                />
              </div>
            </div>
            <p className="title bg-grey">II. NLP + IP</p>
            <div className="flex justify-between">
              <div className="">

                <ul>
                  <li>Google Cloud Natural Language (GCNL) API </li>
                  <li>Image Processing - Google Vision (GV) API</li>
                </ul>
                <p>GV API can classify images into thousands of categories and extract labels of individual objects and scenes from the images. The outcome of the GV API was a list of labels which then were converted to numerical values of score and magnitude by GCNL API. If a post did not contain any visual artifacts, sentiments expressed in text were analyzed by GCNL. The ranges of score and magnitude are -1 to 1 and 0 to ∞, respectively. They were <b>converted to from -4 to 4 scales.</b></p>
              </div>
            </div>
          </div>
            <div id="Outcome" className="section">
              <Heading
                title="Outcome"
              />
              <div className="flex justify-between">
                <div className="half">
                  <img src={nograph}/>
                </div>
                <p className="half">Unfortunately, the interesting outcome we have found cannot be shared at this time because we are working on an academic paper.<br/>
                  To give you a little more info, my friends who took the survey were NOT pleased with the outcome. </p>
                {/*
                <div className="full">
                  <p className="title">What we expected</p>
                  <p>When we designed the research, we hypothesized that <b>the human sensors would yield a better result than computer and tie strength will scale the accuracy of emotion detection.</b> We rationalized, because a human expression is a result of complex factors, rather than a simple positive-negative magnitude, we needed humans to tell the emotion based on the artifacts. Therefore, one’s history and background need to be considered at all times. On this note, we believed that one’s friends would be more accurate because they share a timeline beyond survey. Strangers lack this extra hand when making a judgment, therefore would have to see each Facebook post on the survey as a standalone artifact.</p>
                    <p className="title">What we got instead</p>
                    <p>However, the research outcome told otherwise. <b>While humans sensors―friends and strangers―did better (44.64) than the computer (65.2) (p-value &lt; 0.01), there was no difference between in the performance of friends and strangers.</b> We reason that this is because the "perception of knowing" does not necessarily translate to "truly knowing." This is further backed by years of friendship and tie-strength graphs. </p>
                </div>
                <div className="half">
                  <img src={compare} alt="compare" />
                  <p className="caption">Human and Computer Error Comparison</p>
                </div>
                <div className="half">
                  <img src={total} alt="total" />
                  <p className="caption">Friends, Amazon Mechanical Turk and Computer Error Comparison</p>
                </div>
                <div className="full">
                  <p><b>Longer years of friendship did not translate to fewer errors.</b> If the number of years did not mean that a friend has been close to one for all these years, the self-identified tie strength should have had a negative correlation with errors, as in the higher tie strength, fewer errors. Again, tie-strength also did not have negative correlation with errors, meaning <b>self-identified close friends were not better than strangers.</b></p>
                </div>
                <div className="half">
                  <img src={years} alt="years" />
                  <p className="caption">Years of Friendship and Error Correlation</p>
                </div>
                <div className="half">
                  <img src={tie} alt="tie" />
                  <p className="caption">Tie-Strength and Error Correlation</p>
                </div>
                <div className="full">
                  <p>Not part of our hypothesis, but an interesting outcome: <b>Females were better than males at detecting emotions.</b></p>
                  <img src={gender} alt="gender" />
                </div>
                */}
              </div>



            </div>
        </div>
        <Credit/>
      </div>
    )
  }
}
export default Emotion;
