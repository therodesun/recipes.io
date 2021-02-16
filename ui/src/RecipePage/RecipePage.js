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
              <h3 id="ingr_title">Ingredients</h3>
              <ul id="ingr_list">
                <li>1 lb ground beef</li>
                <li>1 zucchini</li>
                <li>2 cups spinach</li>
                <li>0.5 lb noodles</li>
                <li>24 oz marinara</li>
              </ul>
            </div>
            <div id="right">
              <img src="spaghetti.jpg" id="image"></img>
            </div>
          </span>
          <div id="instructions">
            <h3 id="instr_title">Instructions</h3>
              <ol id="ingr_list">
                <li>Demo step 1</li>
                <li>Demo step 2</li>
                <li>Demo step 3</li>
                <li>Demo step 4</li>
                <li>Demo step 5</li>
              </ol>
          </div>
        </div>
      </div>
    );
  }
}
