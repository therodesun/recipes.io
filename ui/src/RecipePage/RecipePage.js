import React, { Component } from "react";
import { Button, Image } from 'react-bootstrap';
import './RecipePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import axios from "axios";


export default class RecipePage extends Component {
  
  // getting recipe data
  componentDidMount() {
      axios.get('http://localhost:5000/recipe')
      .then(res => {
        const recipe = res.data;
        const ingredients = recipe.ingredients;
        const name = recipe.name;
        const steps = recipe.steps;
        const time = recipe.time;
        const imageURL = recipe.imageURL;
        this.setState({ ingredients: ingredients, name: name, steps: steps, time: time, imageURL: imageURL, response: true });
      })
      .catch(function (error) {
        //Not handling the error. Just logging into the console.
        console.log(error);
      });
  }

  state = {
        ingredients: [],
        steps: [],
        name: "",
        time: "",
        imageURL: "",
        response:false,
  }

  render() {
    // prevent page from loading prematurely
    if (!this.state.response){
      return <div>(   Loading...  )</div>
    }
    const {ingredients, steps, name, time, imageURL} = this.state;

    return (
      <div className="RecipePage">
        <div className="lander">
          <span>
            <h1 id="title">{name}</h1>
            <Button variant="btn btn-success" id="shopping" onClick={() => {sendIngredients(ingredients, this.state)}}>Add to Shopping Cart</Button>
            <Button variant="btn btn-success" id="editBtn" onClick={() => {sendName(name)}}>Edit Recipe</Button>
            <Button variant="btn btn-success" id="deleteBtn" onClick={() => {deleteRecipe(name)}}>Delete Recipe</Button>
          </span>
          <span>
            <div id="ingredients">
              <h3 id="ingr_title">Ingredients</h3>
              <em id="timeamt">{time}</em>
              <FontAwesomeIcon icon={faClock} id="timeicon"/>
              <IngredientsList recipeData={ingredients}/>
            </div>
            <div id="right">
              <img src={imageURL} id="image"></img>
            </div>
          </span>
          <div id="instructions">
            <h3 id="instr_title">Instructions</h3>
              <InstructionsList recipeData={steps}/>
          </div>
        </div>
      </div>
    );
  }
}

// shopping cart function
function sendIngredients(ingredients, recipe) {
    // add to user ingredient list
    axios.post('http://localhost:5000/shopping', {"ingredients":ingredients})
        .then(res => {
          console.log("success");
        })
        .catch(function (error) {
          //Not handling the error. Just logging into the console.
          console.log(error);
        });
       
    // add to user recipe list
    axios.post('http://localhost:5000/myrecipes', recipe)
        .then(res => {
          console.log("success");
          window.location.href = "http://localhost:3000/ShoppingCart";
        })
        .catch(function (error) {
          //Not handling the error. Just logging into the console.
          console.log(error);
        });  
}

// load recipe into cache for edit recipe
function sendName(name) {
   const nameURL = encodeURIComponent(name);
   axios.get('http://localhost:5000/recipes/' + nameURL)
       .then(res => {
         console.log("success");
         window.location.href = "http://localhost:3000/EditRecipe";
       })
       .catch(function (error) {
         //Not handling the error. Just logging into the console.
         console.log(error);
       });
}

function deleteRecipe(name) {
  const nameURL = encodeURIComponent(name);
   axios.delete('http://localhost:5000/recipes/' + nameURL)
       .then(res => {
         console.log("success");
         window.location.href = "http://localhost:3000/RecipeTable";
       })
       .catch(function (error) {
         //Not handling the error. Just logging into the console.
         console.log(error);
       });
}
