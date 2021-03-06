import React, { Component } from 'react';

class Search extends Component {
    state = {  }
    render() { 
        return ( 
        <form action="RecipeTable/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden" id="searchTitle">Search recipes</span>
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