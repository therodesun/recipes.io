import React, { Component } from 'react';
import Table from './RecipeTable';
import './index.css'
import axios from "axios";

class TablePage extends Component {
   state = {
      recipes: [],
    }
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
     /* const recipes = [
      {
         image: "https://static.toiimg.com/photo/53110049.cms",
         link: "https://www.google.com/",
         name: 'Pizza',
         time: '30 minutes',
      },
      {
         image: "https://www.stickees.com/files/food/food-and-drinks/3859-chicken-sticker.png",
         link: "https://www.youtube.com/",
         name: 'Chicken',
         time: '45 minutes',
      }
    ]*/
    const {recipes} = this.state
      return (
       
         <div className="container">
            <h1>Recipe Table</h1>
            <Table recipeData = {recipes} />
         </div>
      )
   }
}

export default TablePage
