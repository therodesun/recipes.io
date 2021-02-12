import React, { Component } from 'react';
import Table from './RecipeTable';

class TablePage extends Component {
   render() {
      const recipes = [
      {
         id: 1,
         name: 'Pizza',
         time: '30 minutes',
      },
      {
         id: 2,
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
