/**
 * Created by horyunsong on 19/01/2017.
 */
import React, { Component } from 'react';
import "./credit.css";

import {Link} from "react-router";

import left from "../../img/nav/left.png";
import right from "../../img/nav/right.png";

class Next extends Component {
  static propTypes = {
    leftItem: React.PropTypes.string,
    leftLink: React.PropTypes.string,
    rightItem: React.PropTypes.string,
    rightLink: React.PropTypes.string
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
        <div className="container small flex justify-between">
          <Link to={this.props.leftLink}>
          <div className="next left flex">
            <div className="">
              <img src={left} />
            </div>
            <div className="">
              <p className="title">{this.props.leftItem}</p>
            </div>
          </div>
          </Link>
          <div className="next right">
            <Link to={this.props.rightLink}>
              <img src={right} />
              <p className="title">{this.props.rightItem}</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }

}
export default Next;

/**
 * Created by horyunsong on 17/01/2017.
 */
