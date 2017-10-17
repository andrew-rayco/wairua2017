import React from 'react'

const FormParent = () => {
  return (
    <fieldset className="fieldset-parent">
      <legend>Parent</legend>

      <div className="form-section-container">

        <div className="input-section">
          <label htmlFor="ParentCaregivername" id="ParentCaregivername-ariaLabel">Parent / Caregiver name
            <input id="ParentCaregivername" name="ParentCaregivername" type="text" aria-labelledby="ParentCaregivername-ariaLabel" className="required" title="Parent / Caregiver name. This is a required field"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Emailaddress" id="Emailaddress-ariaLabel">Email address
            <input id="Emailaddress" name="Emailaddress" type="email" aria-labelledby="Emailaddress-ariaLabel" className="required" title="Email address. This is a required field"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Fulladdress" id="Fulladdress-ariaLabel">Full address
            <input id="Fulladdress" name="Fulladdress" type="text" aria-labelledby="Fulladdress-ariaLabel" className="required" title="Full address. This is a required field"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Homephone" id="Homephone-ariaLabel">Home phone
            <input id="Homephone" name="Homephone" type="tel" aria-labelledby="Homephone-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Workphone" id="Workphone-ariaLabel">Work phone
            <input id="Workphone" name="Workphone" type="tel" aria-labelledby="Workphone-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Cellphone" id="Cellphone-ariaLabel">Cell phone
            <input id="Cellphone" name="Cellphone" type="tel" aria-labelledby="Cellphone-ariaLabel" className="required" title="Cell phone. This is a required field"/>
          </label>
        </div>

      </div>

    </fieldset>
  )
}

export default FormParent
