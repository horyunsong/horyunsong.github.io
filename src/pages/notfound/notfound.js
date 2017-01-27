/**
 * Created by horyunsong on 27/01/2017.
 */
import React, { Component } from 'react';
import {Link} from "react-router";

class Not extends Component {

  render() {

    return (
      <div className="notfound container small">
        <div className="align-center">
          <br/>
          <br/>
          <br/>
          <h2>Oh no! It seems like you are lost. Let's go back
            <Link to="/">
              <b> home</b>.
            </Link>
          </h2>
        </div>
      </div>
    )
  }
}

export default Not;
