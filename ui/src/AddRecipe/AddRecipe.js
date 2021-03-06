import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Table2 from './Table2';
import Form2 from './Form2';
import axios from "axios";

class AddRecipe extends Component {

    makePostCall(recipe){
        return axios.post('http://localhost:5000/recipes', recipe)
                    .then(function (response) {
                       console.log(response);
                       if (response.status === 201) {
                          // change to recipe page
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
      instructions: [],
      name: "",
      time: "",
      imageURL: "",
      response:true,
    }
    
    state = this.initialState

    handleChange = event => {
      const { name, value } = event.target

      this.setState({
        [name]: value,
      })
    }

    removeInstruction = index => {
      const { instructions } = this.state

      this.setState({
        instructions: instructions.filter((instruction, i) => {
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

    handleSubmit = ingredient => {
      this.setState({ ingredients: [...this.state.ingredients, ingredient] });
    }
    
    handleSubmit2 = instruction => {
      this.setState({ instructions: [...this.state.instructions, instruction] });
    }
    
    handleSubmit3 = () => {
      this.makePostCall(this.state);
    }

    handleDelete = (ingredient, index) => {
        this.removeIngredient(index);
    }
    
    handleDelete2 = (instruction, index) => {
        this.removeInstruction(index);
    }

    render() {
      const { ingredients, instructions, name, duration, imageURL } = this.state

      return (
        <div className="container">
          <form>
            <label htmlFor="ingredient">Recipe Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange} />
            <label htmlFor="amount">Duration</label>
            <input
              type="text"
              name="time"
              id="time"
              value={duration}
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
          <Table2 instructionData={instructions} remove={this.handleDelete2} />
          <Form2 handleSubmit={this.handleSubmit2} />
          <button id="cancelButton">Cancel</button>
          <button id="submitButton" onClick={this.handleSubmit3}>Submit</button>
        </div>
      )
    }
}

export default AddRecipe
