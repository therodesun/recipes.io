import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from './../history';
import axios from 'axios'



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



class Carousel extends Component {
    state = {
        recipes: []
      }
     componentDidMount() {
        axios.get('http://localhost:5000/recipes')
         .then(res => {
           const recipes = res.data.recipes_list;
           this.setState({ recipes });
         })
         .catch(function (error) {console.log(error);}
         );
     }
     
    render() { 
        const {recipes} = this.state
        return ( 
            <div>
                <h2 id = "recommend">
                    Recommended Recipes
                </h2>
                <Button  variant="btn btn-success" onClick={() => sendName(recipes[Math.random() * recipes.legnth].name)}>
                    <div id = "carousel">
                        <img class = "class" alt = 'https://c.ndtvimg.com/2020-01/n7thfo2o_spaghetti_625x300_28_January_20.jpg' src = {recipes[Math.random() * recipes.legnth].imageURL} id="image"></img>
                    </div>
                </Button>
                <Button  variant="btn btn-success" onClick={() => sendName(recipes[Math.random() * recipes.legnth].name)}>
                    <div id = "carousel">
                        <img class = "class" alt = 'https://static.toiimg.com/photo/53110049.cms' src = {recipes[Math.random() * recipes.legnth].imageURL} id="image"></img>
                    </div>
                </Button>
            </div>
         );
    }
}
 
export default Carousel;