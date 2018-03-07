/**
 * Created by horyunsong on 19/01/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./credit.css";

import {Link} from "react-router";
import Headroom from "react-headroom";

import left from "../../img/nav/left.png";
import right from "../../img/nav/right-arrow.png";
import icon from "../../img/home/icon.png";

class Next extends Component {
  static propTypes = {
    leftItem: PropTypes.string,
    leftLink: PropTypes.string,
    rightItem: PropTypes.string,
    rightLink: PropTypes.string,
    bg: PropTypes.string
  }
  static defaultProps = {
    leftItem: "left",
    leftLink: "/",
    rightItem: "right",
    rightLink: "/",
    bg: "white"
  }
  render() {

    return(
      <div id="" className="" style={{'background-color':this.props.bg}}>
        <div className="next-wrapper flex justify-between align-center">
          <Link to="/">
            <div className="toHome">
              <img src={icon} />
            </div>
          </Link>

          <Link to={this.props.rightLink}>
            <div className="next right flex align-center">
              <h4 className="home">{this.props.rightItem}</h4>
              <img src={right} alt="right"/>
            </div>
          </Link>
        </div>
      </div>
    )
  }

}
export default Next;

/**
 * Created by horyunsong on 17/01/2017.
 */
