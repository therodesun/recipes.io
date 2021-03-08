import React, { Component } from 'react';

class Search extends Component {
    state = {  }
    render() { 
        return ( 
        <form action="RecipeTable/" method="get">
            <label id="searchTitle" htmlFor="header-search">
                Search Recipes
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search recipes"
                name="s" 
            />
            <button type="submit" id="searchSubmit">Search</button>
        </form> 
        );
    }
}
 
export default Search;