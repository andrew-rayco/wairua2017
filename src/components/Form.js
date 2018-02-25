import React from 'react'

import FormParent from './form/FormParent'
import FormChild from './form/FormChild'
import FormEmergency from './form/FormEmergency'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      numberOfChildren: 1
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({
      numberOfChildren: this.state.numberOfChildren + 1
    })
  }

  addExtraChildren() {
    let totalChildren = this.state.numberOfChildren
    let children = []
    for (var i = 0; i < totalChildren; i++) {
      children.push(<FormChild key={i} childNum={i + 1} totalChildren={totalChildren}/>)
    }
    return children
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitted on: ', e.target)
    console.log(this.state)
  }

  render() {
    return (
      <section className="registration-form top-margin">
        <h3 className="title">Registration Form</h3>
        <p>We'll need the below details to get the adventure started (and to make sure everyone's safe, happy and tickety boo).</p>
        <p><a href="/#">Contact us</a> if you have any questions of your own.</p>
        <hr/>
        <form name="teen-camp" onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
          <FormParent />
          {this.addExtraChildren()}
          <button type="button" onClick={(e) => this.handleClick(e)}>Add additional child</button>
          <FormEmergency/>

          <input type="submit" value="Submit" className="submit"/>

        </form>
      </section>
    )
  }
}
