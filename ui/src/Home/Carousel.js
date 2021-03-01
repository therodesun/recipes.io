import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from './../history';



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
    state = {  }
    render() { 
        return ( 
            <div>
                <h2 id = "recommend">
                    Recommended Recipes
                </h2>
                <Button  variant="btn btn-success" onClick={() => history.push('/RecipePage')}>
                    <div id = "carousel">
                        <img class = "class" alt = '' src = "https://c.ndtvimg.com/2020-01/n7thfo2o_spaghetti_625x300_28_January_20.jpg" id="image"></img>
                    </div>
                </Button>
                <Button  variant="btn btn-success" onClick={() => history.push('/RecipePage')}>
                    <div id = "carousel">
                        <img class = "class" alt = '' src = "https://static.toiimg.com/photo/53110049.cms" id="image"></img>
                    </div>
                </Button>
            </div>
         );
    }
}
 
export default Carousel;