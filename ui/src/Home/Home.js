import React, { Component } from "react";
import "./Home.css";
import Search from "./Search.js"
import Carousel from "./Carousel.js"

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Welcome to Reci.p!</h1>
            <Search/>
            <Carousel/>
        </div>
      </div>
    );
  }
}