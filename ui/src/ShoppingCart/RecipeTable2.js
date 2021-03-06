import React, { Component } from 'react'
import axios from 'axios'

const TableHeader = () => {
   return (
      <thead>
         <tr>
            <th>Image</th>
            <th>Recipe Name</th>
            <th>Time to Make</th>
         </tr>
      </thead>
   )
}

const TableBody = props => {
   const rows = props.recipeData.map((row, index) => {
      return (
         <tr key = {index} id="clickable" onClick={() => sendName(row.name)}>
            <td><img src = {row.imageURL} class="table"></img></td>
            <td>{row.name}</td>
            <td>{row.time}</td>
         </tr>
      )
   })
   return <tbody>{rows}</tbody>
}

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

class Table extends Component {
   render() {
      // Should temporarily be a fixed list on front end
      const { recipeData } = this.props // Using recipeData as variable name to pass through data from databases

      return (
         <table>
            <TableHeader />
            <TableBody recipeData = {recipeData} />
         </table>
      )
   }
}

export default Table

// Put in display page
// return (
//  <div className="container">
//    <Table recipeData={recipes} />
//  </div>
//)
