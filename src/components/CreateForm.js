import React from 'react'

class CreateForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      details: ''
    }
  }

  logState() {
    console.log(this.state)
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value }, this.logState)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('The result to be sending is as follows: \n', this.state);
  }

  render() {
    return (
      <form onChange={this.handleInput.bind(this)}>
        <input type="text" name="name" placeholder="Name" defaultValue={this.state.firstName} />
        <input type="email" name="email" placeholder="Email" autoComplete="email" />
        <textarea name="details" cols="30" rows="7" placeholder="Details: dates, locations, included activities etc."></textarea>
        <a href="submit-form" onClick={this.handleSubmit.bind(this)} className="btn">Submit</a>
      </form>
    )
  }
}

export default CreateForm
