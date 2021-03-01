import React, { Component } from 'react'

class Form2 extends Component {
  initialState = {
    step: '',
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
  const { step } = this.state;

  return (
    <form>
      <label htmlFor="step">Step</label>
      <input
        type="text"
        name="step"
        id="step"
        value={step}
        onChange={this.handleChange} />
      <input type="button" value="Add" onClick={this.submitForm} />
    </form>
  );
}

}
export default Form2;

