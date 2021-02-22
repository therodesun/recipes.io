import React, { Component } from "react";
import { Image } from 'react-bootstrap';
import './ShoppingCart.css';
import Table from '../TablePage/RecipeTable';
import IngredientsList from '../RecipePage/IngredientsList'

export default class ShoppingCart extends Component {
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
    const recipes = [
      {
         id: 1,
         name: 'Spaghetti',
         time: '30 minutes',
      },
    ]
    return (
      <div className="ShoppingCart">
        <div className="lander">
          <span>
            <h1 id="title">Shopping Cart</h1>
          </span>
          <span>
            <div id="ingredients2">
              <h3 id="ingr_title">Ingredients</h3>
              <IngredientsList recipeData={ingredients}/>
            </div>
            <div id="saved">
              <h3 id="saved_title">Saved Recipes</h3>
              <div id="tablediv">
                <Table recipeData= {recipes} />
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  }
}
