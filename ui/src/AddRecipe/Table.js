import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Ingredient</th>
        <th>Amount</th>
      </tr>
    </thead>
  )
}

// fill out with ingredient data
const TableBody = props => {
  const rows = props.ingredientData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.quantity}</td>
        <td>
          <button onClick={() => props.remove(row, index)}>Delete</button>
        </td>
      </tr>)
  })

  return <tbody>{rows}</tbody>
}

const Table = props => {
  const { ingredientData, remove } = props

  return (
    <table>
      <TableHeader />
      <TableBody ingredientData={ingredientData} remove={remove} />
    </table>
  )
}

export default Table
