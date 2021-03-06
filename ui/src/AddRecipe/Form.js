import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    name: '',
    quantity: '',
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
  const { name, quantity } = this.state;

  return (
    <form>
      <label htmlFor="name">Ingredient</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={this.handleChange} />
      <label htmlFor="quantity">Amount</label>
      <input
        type="text"
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={this.handleChange} />
      <input type="button" value="Add" onClick={() => {this.submitForm()}} />
    </form>
  );
}

}
export default Form;

