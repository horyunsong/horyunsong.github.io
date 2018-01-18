import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './mini.css';

class Process extends Component {
  static propTypes = {
    processes: PropTypes.array,
    names: PropTypes.array
  }

  static defaultProps = {
    processes: ['first', 'second', 'third']
  }


  render() {



    return (
      <div className="process">
        <div items={this.props.names} className="arrow-wrapper">
          {
              this.props.processes.map(function(process) {
                return <div className="arrow"><a href={"#" + {process}.process.split(" ")[0]}>{process}</a></div>
              })
          }
        </div>
      </div>
    )
  }
}
/**/
export default Process;
