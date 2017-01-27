import React, { Component } from 'react';
import "./underlined.css";

import Nav from "../../../components/nav/nav";
import Credit from "../../../components/credit/credit";
import Next from "../../../components/credit/next";

import Title from '../../../components/work/mini/title';
import Heading from '../../../components/work/mini/heading';

import intro from '../../../img/work/underlined/intro.png';
import filter from '../../../img/work/underlined/filter.png';
import myList from '../../../img/work/underlined/myList.png';
import words from '../../../img/work/underlined/words.png';
import old from '../../../img/work/underlined/old.png';
import newform from '../../../img/work/underlined/new.png';
import menu from '../../../img/work/underlined/menu.png';

class Underlined extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="underlined container small">
          <Title
            title="Underlined"
            role="In class project"
          />
          <div className="problem">
            <p className="title">Target User</p>
            <p>Children who are learning new words (<b>Customer</b>: Their parents!) </p>
            <p className="title">Problem</p>
            <p>Memorizing new words manually is not exactly fun. Children need to be motivated enough to learn without adults educating them with force, such as quizzing them on daily vocabulary list. However, it is not possible to be motivated with <b>sterile, single line vocabulary examples</b>.</p>
            <p  className="title">Solution</p>
            <p>Underlined is a <b>context-based vocabulary aid application</b> that allows children to learn new vocabulary naturally by <b>reading stories of their interest</b>. Sentences with same underlined words from various books accumulate in Word List, for children and parents to <b>repeat those sentences and recall the word and meaning from the context.</b></p>
            <img className="eighty center" src={intro} alt="one unit of underlined system"/>
            <br/>
          </div>
          <div id="" >
            <div className="flex justify-between">
              <div className="third">
                <p className="title">Filter Books</p>
                <img src={filter} role="presentation"/>
                <p className="">The book list is filtered by difficulty (age) and genre according to children’s interest.</p>
              </div>
              <div className="third">
                <p className="title">Underlined Words</p>
                <img src={words} role="presentation"/>
                <p className="">Words that children of recommended ages need to know are underlined in stories.</p>
              </div>
              <div className="third">
                <p className="title">My Word List</p>
                <img src={myList} role="presentation"/>
                <p className="">Word, meaning, and example sentences from various books make one unit of list.</p>
              </div>
            </div>
          </div>
          <div id="" className="section">
            <Heading
              title="How vocabulary is memorized"
              content="Underlined changes 'from word to sentence' pattern to 'from context to word'"
            />
            <div className="flex justify-between">
              <div className="half">
                <img src={old} role="presentation"/>
                <p className="title">Old Fashioned: From word to sentence</p>
                <p>A list of words. And each word gets a unique example sentence that are <b>too general</b> to be called context or not memorable at all because it <b>cannot answer to each child’s interest.</b></p>
              </div>
              <div className="half">
                <img src={newform} role="presentation"/>
                <p className="title">Underlined: From context to word</p>
                <p>A child will read <b>new words from stories that she is actually interested in</b>. By reading them, she will at least get the gist, or possibly exact meaning. If not, it’s okay because <b>she will see those words from other fun stories again.</b></p>
              </div>
            </div>
          </div>
          <div id="" className="section">
            <Heading
              title="Menu Relations"
            />
            <div className="full">
              <img src={menu} alt="menu items and relation diagram"/>
            </div>
          </div>
        </div>
        <Next
          leftItem="u-rack"
          leftLink="/urack"
          rightItem="Re-caffeine"
          rightLink="/recaffeine"
        />
        <Credit/>
      </div>
    )
  }
}
export default Underlined;