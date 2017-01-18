import React, { Component } from 'react';
import "./piece.css";

class Piece extends Component {
  static propTypes = {
    image: React.PropTypes.string,
    category: React.PropTypes.string,
    type: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string
  }

  static defaultProps = {
    image: "undefined",
    category: "UX",
    type: "Research & Design",
    title: "undefined",
    description: "undefined"
  }

  render() {
    return(
    <div className="piece flex full">
      <div className="piece-half">
        <img className="work-img" src={this.props.image} />
      </div>
      <div className="piece-half piece-summary">
        <p><span>{this.props.category}</span> {this.props.type}</p>
        <div className="summary-bottom">
          <h3 className="piece-title">{this.props.title}</h3>
          <p className="">{this.props.description}</p>
        </div>
      </div>
    </div>
    )
  }

}
export default Piece;
