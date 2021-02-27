import React, { Component } from 'react'

const ListBody2 = props => {
   const rows = props.recipeData.map((row, index) => {
      return (
        <li>{row}</li>
      )
   })

   return <ol id="instr_list">{rows}</ol>
}

class InstructionsList extends Component {
   render() {
      // Should temporarily be a fixed list on front end
      const { recipeData } = this.props // Using recipeData as variable name to pass through data from databases

      return (
         <ListBody2 recipeData = {recipeData} />
      )
   }
}

export default InstructionsList

// Put in display page
// return (
//  <div className="container">
//    <Table recipeData={recipes} />
//  </div>
//)
