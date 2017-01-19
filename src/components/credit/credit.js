import React, { Component } from 'react';
import "./credit.css";

import bye from "../../img/home/bye.png";



class Credit extends Component {


  render() {

    return(
      <div id="credit" className="">
        <div className="container small">
          <div className="bye center">
            <img src={bye} />
          </div>
        </div>
      </div>
    )
  }

}
export default Credit;

/**
 * Created by horyunsong on 17/01/2017.
 */
