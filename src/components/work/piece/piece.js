import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./piece.css";

class Piece extends Component {
  static propTypes = {
    image: PropTypes.string,
    category: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    filters: PropTypes.array,
    projectName: PropTypes.string
  }

  static defaultProps = {
    image: "undefined",
    category: "UX",
    type: "Research & Design",
    title: "undefined",
    description: "undefined",
    filters: ["Research", "Design", "Prototype"],
    projectName: ""
  }

  render() {
    var filterString = " ";
    {
      this.props.filters.map(function(filter) {
        return filterString = filterString + filter + " ";
      })
    }

    return(
      <div className={this.props.projectName + " piece"} >
        <div className="piece-img">
          <img className="work-img" src={this.props.image} alt="thumbnail"/>
        </div>
        <div className="piece-summary">
          <div className="summary-bottom meta text-center">
            <h3 className="piece-title">{this.props.title}</h3>
            <p className="piece-tag"><span>{this.props.category}</span> {this.props.type}</p>
          </div>
        </div>
      </div>
    )
  }

}
export default Piece;
