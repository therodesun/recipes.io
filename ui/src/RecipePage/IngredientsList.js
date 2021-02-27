import React, { Component } from 'react'

const ListBody = props => {
   const rows = props.recipeData.map((row, index) => {
      return (
        <li>{row.quantity} {row.name}</li>
      )
   })

   return <ul id="ingr_list">{rows}</ul>
}

class IngredientsList extends Component {
   render() {
      // Should temporarily be a fixed list on front end
      const { recipeData } = this.props // Using recipeData as variable name to pass through data from databases

      return (
         <ListBody recipeData = {recipeData} />
      )
   }
}

export default IngredientsList

// Put in display page
// return (
//  <div className="container">
//    <Table recipeData={recipes} />
//  </div>
//)
