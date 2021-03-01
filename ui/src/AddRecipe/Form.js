import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    ingredient: '',
    amount: '',
  }

  state = this.initialState

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
  const { ingredient, amount } = this.state;

  return (
    <form>
      <label htmlFor="ingredient">Ingredient</label>
      <input
        type="text"
        name="ingredient"
        id="ingredient"
        value={ingredient}
        onChange={this.handleChange} />
      <label htmlFor="amount">Amount</label>
      <input
        type="text"
        name="amount"
        id="amount"
        value={amount}
        onChange={this.handleChange} />
      <input type="button" value="Add" onClick={this.submitForm} />
    </form>
  );
}

}
export default Form;

