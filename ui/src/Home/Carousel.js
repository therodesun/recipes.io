import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from './../history';

class Carousel extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>
                    Recommended Recipes
                </h2>
                <Button class = "carousel_button" variant="btn btn-success" onClick={() => history.push('/RecipePage')}>
                    <img src = "https://c.ndtvimg.com/2020-01/n7thfo2o_spaghetti_625x300_28_January_20.jpg" id="image" height = {300} width = {300}></img>
                </Button>
                <Button class = "carousel_button" variant="btn btn-success" onClick={() => history.push('/RecipePage')}>
                    <img src = "https://static.toiimg.com/photo/53110049.cms" id="image" height = {300} width = {300}></img>
                </Button>
            </div>
         );
    }
}
 
export default Carousel;