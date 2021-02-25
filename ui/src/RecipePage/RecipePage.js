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
            const ingredients = res.data.ingredients;
            const instructions = res.data.instructions;
            const name = res.data.name;
            const duration = res.data.duration
            this.setState({ ingredients, instructions, name, duration });
          })
          .catch(function (error) {
        //Not handling the error. Just logging into the console.
            console.log(error);
          });
  }

  state = {
    ingredients: [],
    instructions: [],
    name:"",
    duration:"",
  }      

  render() {
    const {ingredients, instructions, name, duration} = this.state;
    
    return (
      
      <div className="RecipePage">
        <div className="lander">
          <span>
            <h1 id="title">{name}</h1>
            <Button variant="btn btn-success" id="shopping">Add to Shopping Cart</Button>
            <div id="timer">
              <em id="timeamt">{duration}</em>
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




