import React, { Component } from 'react';

class Title extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    category: React.PropTypes.string,
    type: React.PropTypes.string,
    role: React.PropTypes.string
  }

  static defaultProps = {
    title: "undefined",
    category: "UX",
    type: "Research & Design",
  }


  render() {
    return (
      <div className="bigTitle">
        <p className="type"><span>{this.props.category}</span> {this.props.type}</p>
        <div className="text-center">
          <h1>{this.props.title}</h1>
          <p className="subtitle"><i>{this.props.role}</i></p>
        </div>
      </div>
    )
  }
}

export default Title;
