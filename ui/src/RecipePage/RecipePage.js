import React, { Component } from "react";
import { Button, Image } from 'react-bootstrap';
import './RecipePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import axios from "axios";


export default class RecipePage extends Component {
  componentDidMount() {
    axios.get('http://localhost:5000/recipe')
     .then(res => {
       const recipe = res.data;
       this.setState({ recipe });
       this.render();
     })
     .catch(function (error) {
       //Not handling the error. Just logging into the console.
       console.log(error);
     });
 }

  state = {
    recipe: {
      response: false
    }
  }

  render() {
    if (!this.state.recipe.response){
      return <div>(   Loading...  )</div>
    }
    const {ingredients, steps, name, time, imageURL} = this.state.recipe;

    return (
      <div className="RecipePage">
        <div className="lander">
          <span>
            <h1 id="title">{name}</h1>
            <Button variant="btn btn-success" id="shopping">Add to Shopping Cart</Button>
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
