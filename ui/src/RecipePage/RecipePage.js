import React, { Component } from "react";
import { Button, Image } from 'react-bootstrap';
import './RecipePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'


export default class RecipePage extends Component {
  render() {
    
    const ingredients = [
      {
        amount: "1 lb",
        item: "ground beef",
      }, 
      {
        amount: "1 whole",
        item: "zucchini",
      }, 
      {
        amount: "2 cups",
        item: "spinach",
      }, 
      {
        amount: "0.5 lb",
        item: "noodles",
      }, 
      {
        amount: "24 oz",
        item: "marinara",
      }, 
    ]
    
    const instructions = [
      {
        step: "Boil noodles until soft",
      },
      {
        step: "Slice zucchini, steam for 10 minutes",
      },
      {
        step: "Cook ground beef until browned",
      },
      {
        step: "Mix in marinara and zucchini",
      },
    ]
    
    return (
      
      <div className="RecipePage">
        <div className="lander">
          <span>
            <h1 id="title">Spaghetti</h1>
            <Button variant="btn btn-success" id="shopping">Add to Shopping Cart</Button>
            <div id="timer">
              <em id="timeamt">30 minutes</em>
              <FontAwesomeIcon icon={faClock} id="timeicon"/>
            </div>
          </span>
          <span>
            <div id="ingredients">
              <h3 id="ingr_title">Ingredients</h3>
              <IngredientsList recipeData={ingredients}/>
            </div>
            <div id="right">
              <img src="https://c.ndtvimg.com/2020-01/n7thfo2o_spaghetti_625x300_28_January_20.jpg" id="image"></img>
            </div>
          </span>
          <div id="instructions">
            <h3 id="instr_title">Instructions</h3>
              <InstructionsList recipeData={instructions}/>
          </div>
        </div>
      </div>
    );
  }
}
