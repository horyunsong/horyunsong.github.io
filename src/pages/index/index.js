import React, { Component } from 'react';
import "./index.css";
import Work from "../work/work";
import Home from "../home/home";
import Nav from "../../components/nav/nav";

class Index extends Component {
  render() {
    return (
      <div>

        <Nav />
        <Home />
        <Work />

      </div>
    )
  }
}
export default Index;
