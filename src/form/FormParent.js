import React from 'react'

const FormParent = () => {
  return (
    <fieldset className="fieldset-parent">
      <legend>Parent</legend>
      <div className="row">
        <div className="four columns">
          <label for="ParentCaregivername" id="ParentCaregivername-ariaLabel">Parent / Caregiver name</label>
          <input id="ParentCaregivername" name="ParentCaregivername" type="email" aria-labelledby="ParentCaregivername-ariaLabel" className="required u-full-width" title="Parent / Caregiver name. This is a required field"/>
        </div>
        <div className="four columns">
          <label for="Emailaddress" id="Emailaddress-ariaLabel">Email address</label>
          <input id="Emailaddress" name="Emailaddress" type="text" aria-labelledby="Emailaddress-ariaLabel" className="required" title="Email address. This is a required field"/>
        </div>
        <div className="four columns">
          <label for="Fulladdress" id="Fulladdress-ariaLabel">Full address</label>
          <textarea id="Fulladdress" name="Fulladdress" type="text" aria-labelledby="Fulladdress-ariaLabel" className="required" title="Full address. This is a required field"/>
        </div>
      </div>
      <div className="row">
        <div className="four columns">
          <label for="Homephone" id="Homephone-ariaLabel">Home phone</label>
          <input id="Homephone" name="Homephone" type="text" aria-labelledby="Homephone-ariaLabel"/>
        </div>
        <div className="four columns">
          <label for="Workphone" id="Workphone-ariaLabel">Work phone</label>
          <input id="Workphone" name="Workphone" type="text" aria-labelledby="Workphone-ariaLabel"/>
        </div>
        <div className="four columns">
          <label for="Cellphone" id="Cellphone-ariaLabel">Cell phone</label>
          <input id="Cellphone" name="Cellphone" type="text" aria-labelledby="Cellphone-ariaLabel" className="required" title="Cell phone. This is a required field"/>
        </div>
      </div>
    </fieldset>
  )
}

export default FormParent
