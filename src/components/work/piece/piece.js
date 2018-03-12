import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./piece.css";

class Piece extends Component {
  static propTypes = {
    image: PropTypes.string,
    hover: PropTypes.string,
    category: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    filters: PropTypes.array,
    projectName: PropTypes.string,
  }

  static defaultProps = {
    image: "undefined",
    hover: "undefined",
    category: "UX",
    type: "Research & Design",
    title: "undefined",
    description: "undefined",
    filters: ["Research", "Design", "Prototype"],
    projectName: "",
  }

  render() {
    var filterString = " ";
    {
      this.props.filters.map(function(filter) {
        return filterString = filterString + filter + " ";
      })
    }

    return(
      <div className={this.props.projectName + " piece full"} >
        <div className="hover-wrapper">
          <div className="full image-wrapper">
            <div className="piece-img">
              <img className="work-img original" src={this.props.image} alt="thumbnail"/>
              <img className="work-img hover" src={this.props.hover} alt="thumbnail"/>
            </div>
          </div>

          <div className="piece-summary">
            <div className="summary-bottom text-center">
              <h2 className="piece-title">{this.props.title}</h2>
              <p className="piece-tag">{this.props.type}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }

}
export default Piece;
