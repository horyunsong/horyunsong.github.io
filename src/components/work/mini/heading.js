import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Heading extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  }

  static defaultProps = {
    title: "undefined"
  }

  render() {
    return (
      <div>
        <h3 className="heading" >{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
export default Heading;
