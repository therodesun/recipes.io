import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import TablePage from "./TablePage/TablePage";
import Home from "./Home/Home";
import history from './history';
import RecipePage from './RecipePage/RecipePage';
import ShoppingCart from './ShoppingCart/ShoppingCart';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/RecipeTable" component={TablePage} />
                    <Route path="/RecipePage" component={RecipePage} />
                    <Route path="/ShoppingCart" component={ShoppingCart} />
                </Switch>
            </Router>
        )
    }
}
