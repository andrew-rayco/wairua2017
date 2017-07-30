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
    for (var i = 1; i < totalChildren; i++) {
      children.push(<FormChild key={i} childNum={i + 1} totalChildren={totalChildren}/>)
    }
    return children
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Teen Adventure Camp</h1>
        <h2>Registration Form</h2>
        <form name="teen-camp" onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
          <FormParent/>
          <FormChild childNum={1} totalChildren={this.state.numberOfChildren}/> {(this.state.numberOfChildren > 1)
            ? this.addExtraChildren()
            : null}
          <button onClick={(e) => this.handleClick(e)}>Add child</button>
          <FormEmergency/>

          <div className="row">
            <input type="submit" value="Submit" className="submit"/>
          </div>

        </form>

      </div>
    )
  }
}
