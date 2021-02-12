import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Recipes from "./Recipes/Recipes";
import Home from "./Home/Home";
import history from './history';
import RecipePage from './RecipePage/RecipePage';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Recipes" component={Recipes} />
                    <Route path="/RecipePage" component={RecipePage} />
            
                </Switch>
            </Router>
        )
    }
}
