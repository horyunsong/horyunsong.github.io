import React, { Component } from 'react';

class Heading extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    content: React.PropTypes.string
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
