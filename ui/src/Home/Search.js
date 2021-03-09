import React, { Component } from 'react';

class Search extends Component {
    state = {  }
    render() { 
        return ( 
        <form action="RecipeTable/" method="get">
            <label id="searchTitle" for="header-search">
                Search Recipes
            </label>
            <input
                type="text"
                id="header-search"
                name="s"
                placeholder="Enter Recipe Name"
            />
            <button type="submit" id="searchSubmit">Search</button>
        </form> 
        );
    }
}
 
export default Search;