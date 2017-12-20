import React, { Component } from 'react';

import './mini.css';

class Process extends Component {
  static propTypes = {
    processes: React.PropTypes.array,
    names: React.PropTypes.array
  }

  static defaultProps = {
    processes: ['first', 'second', 'third']
  }


  render() {



    return (
      <div className="process">
        <ul items={this.props.names} currentClassName="active">
          {
              this.props.processes.map(function(process) {
                return <li><a href={"#" + {process}.process.split(" ")[0]}>{process}</a></li>
              })
          }
        </ul>
      </div>
    )
  }
}
/**/
export default Process;
