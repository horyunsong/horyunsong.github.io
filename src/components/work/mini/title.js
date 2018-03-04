import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Title extends Component {
  static propTypes = {
    title: PropTypes.string,
    category: PropTypes.string,
    type: PropTypes.string,
    role: PropTypes.string
  }

  static defaultProps = {
    title: "undefined",
    category: "UX",
    type: "Research & Design",
  }


  render() {
    return (
      <div className="bigTitle">
        <div className="text-center">
          <h1>{this.props.title}</h1>
          <p className="subtitle"><i>{this.props.role}</i></p>
        </div>
      </div>
    )
  }
}

export default Title;
