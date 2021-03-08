import React, { Component } from 'react';
import Table from '../AddRecipe/Table';
import Form from '../AddRecipe/Form';
import Table2 from '../AddRecipe/Table2';
import Form2 from '../AddRecipe/Form2';
import axios from "axios";

class EditRecipe extends Component {
    // get all props from loaded recipe in database
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
        this.render();
      })
      .catch(function (error) {
        //Not handling the error. Just logging into the console.
        console.log(error);
      });
  }
    // update, then revert to recipe page
  	makePostCall(recipe){
      const { name } = this.state;
      return axios.post('http://localhost:5000/update', this.state)
                  .then(function (response) {
                      console.log(response);
                      if (response.status === 201) {
                        sendName(name);
                      } else {
                        return false;
                      }
                  })
                  .catch(function (error) {
                    console.log(error);
                    return false;
                  });
    }

    initialState = {
        ingredients: [],
        steps: [],
        name: "",
        time: "",
        imageURL: "",
        response:false,
    }
    // initially empty state
    state = this.initialState

    handleChange = event => {
      const { name, value } = event.target

      this.setState({
        [name]: value,
      })
    }
    
    removeInstruction = index => {
      const { steps } = this.state

      this.setState({
        steps: steps.filter((instruction, i) => {
          return i !== index
        }),
      })
    }
    
    removeIngredient = index => {
      const { ingredients } = this.state

      this.setState({
        ingredients: ingredients.filter((ingredient, i) => {
          return i !== index
        }),
      })
    }
  
    // submit ingredients
    handleSubmit = ingredient => {
      this.setState({ ingredients: [...this.state.ingredients, ingredient] });
    }
    
    // submit instructions
    handleSubmit2 = instruction => {
      this.setState({ steps: [...this.state.steps, instruction.step] });
    }
    
    // submit recipe changes
    handleSubmit3 = () => {
      this.makePostCall(this.state);
    }

    // delete ingredient
    handleDelete = (ingredient, index) => {
        this.removeIngredient(index);
    }
    
    // delete instruction
    handleDelete2 = (instruction, index) => {
        this.removeInstruction(index);
    }

    render() {
      //prevent page from prematurely attempting to access state variables
      if (!this.state.response){
        return <div>(   Loading...  )</div>
      }
      const { ingredients, steps, name, time, imageURL } = this.state;
      
      return (
        <div className="container">
          <form>
            <label htmlFor="name">Recipe Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange}
              readonly="readonly" />
            <label htmlFor="time">Duration</label>
            <input
              type="text"
              name="time"
              id="time"
              value={time}
              onChange={this.handleChange} />
            <label htmlFor="imageURL">Image Link</label>
            <input
              type="text"
              name="imageURL"
              id="imageURL"
              value={imageURL}
              onChange={this.handleChange} />
          </form>
          <h3>Ingredients</h3>
          <Table ingredientData={ingredients} remove={this.handleDelete} />
          <Form handleSubmit={this.handleSubmit} />
          <h3>Instructions</h3>
          <Table2 instructionData={steps} remove={this.handleDelete2} />
          <Form2 handleSubmit={this.handleSubmit2} />
          <button id="cancelButton" onClick={() => {goBack()}}>Cancel</button>
          <button id="submitButton" onClick={this.handleSubmit3}>Submit</button>
        </div>
      )
    }
}

// cancel button brings back to recipe page
function goBack() {
  window.location.href = "http://localhost:3000/RecipePage"
}

// load recipe into database cache for recipe page
function sendName(name) {
   const nameURL = encodeURIComponent(name);
   axios.get('http://localhost:5000/recipes/' + nameURL)
       .then(res => {
         console.log("success");
         window.location.href = "http://localhost:3000/RecipePage";
       })
       .catch(function (error) {
         //Not handling the error. Just logging into the console.
         console.log(error);
       });
}

export default EditRecipe
