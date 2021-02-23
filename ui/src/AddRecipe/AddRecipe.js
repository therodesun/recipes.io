import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class AddRecipe extends Component {

    state = {
      ingredients: [],
    }

    removeCharacter = index => {
      const { ingredients } = this.state

      this.setState({
        ingredients: ingredients.filter((ingredient, i) => {
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

   handleDelete = (ingredient, index) => {
      this.removeIngredient(index);
   }

    render() {
      const { ingredients } = this.state

      return (
        <div className="container">
          <Table ingredientData={ingredients} remove={this.handleDelete} />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      )
    }
}

export default AddRecipe