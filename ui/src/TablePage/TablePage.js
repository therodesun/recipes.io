import React, { Component } from 'react';
import Table from './RecipeTable';
import './index.css'
import axios from "axios";

class TablePage extends Component {
   state = {
      recipes: [],
    }
    
    // get all recipes
   componentDidMount() {
      axios.get('http://localhost:5000/recipes')
       .then(res => {
         const recipes = res.data.recipes_list;
         this.setState({ recipes });
       })
       .catch(function (error) {
         //Not handling the error. Just logging into the console.
         console.log(error);
       });
   }
   render() {
      const {recipes} = this.state
      const param = new URLSearchParams(window.location.search).get('s');
      if (param != null) {
         return (
            <div className="container">
               <h1>Recipe Table</h1>
               <Table recipeData = {recipes.filter(function(recipe) {
                  return recipe["name"].toLowerCase().includes(param.toLowerCase());
               })} />
            </div>
         )
      } else {
         return (
            <div className="container">
               <h1>Recipe Table</h1>
               <Table recipeData = {recipes} />
            </div>
         )
      }
   };
      
}


export default TablePage
