import React, { Component } from 'react';
import Table from './RecipeTable';
import './index.css'

class TablePage extends Component {
   render() {
      const recipes = [
      {
         image: 1,
         name: 'Pizza',
         time: '30 minutes',
      },
      {
         image: 2,
         name: 'Chicken',
         time: '45 minutes',
      }
    ]
      return (
         <div className="container">
            <h1>Recipe Table</h1>
            <Table recipeData = {recipes} />
         </div>
      )
   }
}

export default TablePage
