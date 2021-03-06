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
        recipes: [],
        response:false
    }
     componentDidMount() {
        axios.get('http://localhost:5000/recipes')
         .then(res => {
           const recipes = res.data.recipes_list;
           this.setState({ recipes: recipes, response: true });
         })
         .catch(function (error) {console.log(error);}
         );
     }

    render() { 
        if (!(this.state.response)){
            return <div id="loadingbar">(   Loading...  )</div>
        }
        const {recipes} = this.state;
        var rand1 = Math.floor(Math.random() * (recipes.length));
        var rand2 = Math.floor(Math.random() * (recipes.length));
        if (rand1 == rand2) {
            if (rand1 + 1 < recipes.length) {
                rand1 = rand1 + 1;
            } else if (rand1 - 1 >= 0) {
                rand1 = rand1 - 1;
            }
        }
        return ( 
            <div>
                <h2 id = "recommend">
                    Recommended Recipes
                </h2>
                <Button id="carousel1" variant="btn btn-success" onClick={() => sendName(recipes[rand1].name)}>
                    <div id = "carousel">
                        <img class = "class" alt = 'https://c.ndtvimg.com/2020-01/n7thfo2o_spaghetti_625x300_28_January_20.jpg' src = {recipes[rand1].imageURL} id="image"></img>
                    </div>
                </Button>
                <Button id="carousel2" variant="btn btn-success" onClick={() => sendName(recipes[rand2].name)}>
                    <div id = "carousel">
                        <img class = "class" alt = 'https://static.toiimg.com/photo/53110049.cms' src = {recipes[rand2].imageURL} id="image"></img>
                    </div>
                </Button>
            </div>
         );
    }
}
 
export default Carousel;