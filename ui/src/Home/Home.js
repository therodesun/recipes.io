import React, { Component } from "react";
import "./Home.css";
import Search from "./Search.js"
import Carousel from "./Carousel.js"
import img from "./recipe.png"
export default class Home extends Component {
  
  render() {
    
    return (
      <div className="Home">
        <div className="lander">
          <h1 id="titleRecip">Welcome to Reci.p!</h1>
            <Search/>
            <Carousel/>
        </div>
        <div id = "logoImagediv">
        <img 
        id="imageLogo"
        src= {img} 
        alt="new"
      />
        </div>
       
      </div>
      
    );
  }
}