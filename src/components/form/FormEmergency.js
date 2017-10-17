import React from 'react'

const FormEmergency = () => {
  return (
    <fieldset className="fieldset-emergency">
      <legend>Emergency</legend>

      <div className="form-section-container">

        <div className="input-section">
          <label htmlFor="Emergencycontact1" id="Emergencycontact1-ariaLabel">Emergency contact 1</label>
          <input id="Emergencycontact1" name="Emergencycontact1" type="text" aria-labelledby="Emergencycontact1-ariaLabel" className="required" title="Emergency contact 1. This is a required field"/>
        </div>

        <div className="input-section">
          <label htmlFor="Relationshiptochild" id="Relationshiptochild-ariaLabel">Relationship to child</label>
          <input id="Relationshiptochild" name="Relationshiptochild" type="text" aria-labelledby="Relationshiptochild-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Homephone" id="Homephone-ariaLabel">Home phone</label>
          <input id="Homephone" name="Homephone" type="tel" aria-labelledby="Homephone-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Cellphone" id="Cellphone-ariaLabel">Cell phone</label>
          <input id="Cellphone" name="Cellphone" type="tel" aria-labelledby="Cellphone-ariaLabel" className="required" title="Cell phone. This is a required field"/>
        </div>

        <hr/>

        <div className="input-section">
          <label htmlFor="Emergencycontact2" id="Emergencycontact2-ariaLabel">Emergency contact 2</label>
          <input id="Emergencycontact2" name="Emergencycontact2" type="text" aria-labelledby="Emergencycontact2-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Relationshiptochild" id="Relationshiptochild-ariaLabel">Relationship to child</label>
          <input id="Relationshiptochild" name="Relationshiptochild" type="text" aria-labelledby="Relationshiptochild-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Homephone" id="Homephone-ariaLabel">Home phone</label>
          <input id="Homephone" name="Homephone" type="tel" aria-labelledby="Homephone-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Cellphone" id="Cellphone-ariaLabel">Cell phone</label>
          <input id="Cellphone" name="Cellphone" type="tel" aria-labelledby="Cellphone-ariaLabel"/>
        </div>

      </div>
    </fieldset>
  )
}

export default FormEmergency
