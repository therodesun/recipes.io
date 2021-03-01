import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Step</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.instructionData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.step}</td>
        <td>
          <button onClick={() => props.remove(row, index)}>Delete</button>
        </td>
      </tr>)
  })
  return <tbody>{rows}</tbody>
}

const Table2 = props => {
  const { instructionData, remove } = props
  return (
    <table>
      <TableHeader />
      <TableBody instructionData={instructionData} remove={remove} />
    </table>
  )
}

export default Table2