import React from 'react'

const FormEmergency = () => {
  return (
    <fieldset className="fieldset-emergency">
      <legend>Emergency</legend>

      <div className="form-section-container">

        <div className="input-section">
          <label htmlFor="Emergency1-name" id="Emergencycontact1-ariaLabel">Emergency contact 1</label>
          <input id="Emergency1-name" name="Emergency1-name" type="text" aria-labelledby="Emergency1-name-ariaLabel" className="required" title="Emergency contact 1. This is a required field"/>
        </div>

        <div className="input-section">
          <label htmlFor="Emergency1-Relationshiptochild" id="Emergency1-Relationshiptochild-ariaLabel">Relationship to child</label>
          <input id="Emergency1-Relationshiptochild" name="Emergency1-Relationshiptochild" type="text" aria-labelledby="Emergency1-Relationshiptochild-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Emergency1-homephone" id="Emergency1-homephone-ariaLabel">Home phone</label>
          <input id="Emergency1-homephone" name="Emergency1-homephone" type="tel" aria-labelledby="Emergency1-homephone-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Emergency1-cellphone" id="Emergency1-cellphone-ariaLabel">Cell phone</label>
          <input id="Emergency1-cellphone" name="Emergency1-cellphone" type="tel" aria-labelledby="Emergency1-cellphone-ariaLabel" className="required" title="Cell phone. This is a required field"/>
        </div>

        <div className="input-section">
          <label htmlFor="Emergency2-name" id="Emergency2-name-ariaLabel">Emergency contact 2</label>
          <input id="Emergency2-name" name="Emergency2-name" type="text" aria-labelledby="Emergency2-name-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Emergency2-Relationshiptochild" id="Emergency2-Relationshiptochild-ariaLabel">Relationship to child</label>
          <input id="Emergency2-Relationshiptochild" name="Emergency2-Relationshiptochild" type="text" aria-labelledby="Emergency2-Relationshiptochild-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Emergency2-homephone" id="Emergency2-homephone-ariaLabel">Home phone</label>
          <input id="Emergency2-homephone" name="Emergency2-homephone" type="tel" aria-labelledby="Emergency2-homephone-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Emergency2-cellphone" id="Emergency2-cellphone-ariaLabel">Cell phone</label>
          <input id="Emergency2-cellphone" name="Emergency2-cellphone" type="tel" aria-labelledby="Emergency2-cellphone-ariaLabel"/>
        </div>

      </div>
    </fieldset>
  )
}

export default FormEmergency
