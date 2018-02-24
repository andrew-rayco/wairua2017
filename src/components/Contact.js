import React from 'react'

class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('The result to be sending is as follows: \n', this.state);
  }

  logState() {
    console.log(this.state)
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value }, this.logState)
  }

  render() {
    return (
      <section className="contact">
        <h3 className="title">Stay Connected</h3>
        <p>Stay up to date with our newsletter, exclusive offers, upcoming adventures and more!</p>
        <hr/>
        <form onChange={this.handleInput.bind(this)}>
          <input type="text" name="firstName" placeholder="First Name" defaultValue={this.state.firstName} />
          <input type="text" name="lastName" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email" autoComplete="email" />
          <a href="submit-form" onClick={this.handleSubmit.bind(this)} className="btn">Sign up</a>
        </form>
      </section>
    )
  }
}

export default Contact
