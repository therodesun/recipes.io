import React, { Component } from "react";
import { Button, Image } from 'react-bootstrap';
import './RecipePage.css';

export default class RecipePage extends Component {
  render() {
    return (
      <div className="RecipePage">
        <div className="lander">
          <span>
            <h1 id="title">Recipe Name</h1>
            <Button variant="btn btn-success" id="shopping">Add to Shopping Cart</Button>
          </span>
          <span>
            <div id="ingredients">
              <p>Ingredient list goes here</p>
            </div>
            <div id="right">
              <Image id="photo"></Image>
            </div>
          </span>
          <div id="instructions"><p>Instructions go here</p></div>
        </div>
      </div>
    );
  }
}