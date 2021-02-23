import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import TablePage from "./TablePage/TablePage";
import Home from "./Home/Home";
import history from './history';
import RecipePage from './RecipePage/RecipePage';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import AddRecipe from './AddRecipe/AddRecipe';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/RecipeTable" component={TablePage} />
                    <Route path="/RecipePage" component={RecipePage} />
                    <Route path="/ShoppingCart" component={ShoppingCart} />
                    <Route path="/AddRecipe" component={AddRecipe} />
                </Switch>
            </Router>
        )
    }
}
