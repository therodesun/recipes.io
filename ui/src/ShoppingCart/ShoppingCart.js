import React, { Component } from "react";
import { Image } from 'react-bootstrap';
import './ShoppingCart.css';
import Table from './RecipeTable2';
import IngredientsList from '../RecipePage/IngredientsList'
import axios from "axios"

export default class ShoppingCart extends Component {
  
  // get my recipes list and ingredients list
  componentDidMount() {
    var recipes;
    var ingredients;
    axios.get('http://localhost:5000/myrecipes')
      .then(res => {
        recipes = res.data.recipes_list;
        // responseRecipes prevents from rendering before recipe data is loaded
        this.setState({recipes: recipes, responseRecipes: true});
      })
      .catch(function (error) {
        //Not handling the error. Just logging into the console.
        console.log(error);
      });
      
    axios.get('http://localhost:5000/shopping')
      .then(res => {
        ingredients = res.data.ingredients;
        // responseIngredients prevents from rendering before ingredient data is loaded
        this.setState({ingredients: ingredients, responseIngredients: true});
      })
      .catch(function (error) {
        //Not handling the error. Just logging into the console.
        console.log(error);
      });
  }
  
  state = {
    recipes:[],
    ingredients:[],
    responseRecipes:false,
    responseIngredients:false
  }
  
  render() {
    // prevent premature loading
    if (!(this.state.responseRecipes && this.state.responseIngredients)){
      return <div>(   Loading...  )</div>
    }
    const {ingredients, recipes} = this.state;
    console.log(this.state);
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
