/**
 * Created by horyunsong on 19/01/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./credit.css";

import {Link} from "react-router";

import left from "../../img/nav/left.png";
import right from "../../img/nav/right.png";

class Next extends Component {
  static propTypes = {
    leftItem: PropTypes.string,
    leftLink: PropTypes.string,
    rightItem: PropTypes.string,
    rightLink: PropTypes.string
  }
  static defaultProps = {
    leftItem: "left",
    leftLink: "/",
    rightItem: "right",
    rightLink: "/"
  }
  render() {

    return(
      <div id="credit" className="">
        <br/>
        <div className="container small flex justify-between">
          <Link to={this.props.leftLink}>
            <div className="next left flex align-center">
                <img src={left} alt="left"/>
                <p>{this.props.leftItem}</p>
            </div>
          </Link>
          <Link to={this.props.rightLink}>
            <div className="next right flex align-center">
              <p>{this.props.rightItem}</p>
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
