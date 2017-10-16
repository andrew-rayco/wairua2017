import React from 'react'

const FormChild = (props) => {
  return (
    <fieldset className="fieldset-child">
      <legend>Child {(props.totalChildren > 1)
          ? props.childNum
          : null}</legend>

      <div className="form-section-container">

        <div className="input-section">
          <label htmlFor="Childs1fullname" id="Childs1fullname-ariaLabel">Child {(props.totalChildren > 1)
            ? props.childNum
            : null}
            full name</label>
            <input id="Childs1fullname" name="Childs1fullname" type="text" aria-labelledby="Childs1fullname-ariaLabel" className="required" title="Childs (1) full name. This is a required field"/>
        </div>

        <div className="input-section">
          <label htmlFor="Dateofbirth" id="Dateofbirth-ariaLabel">Date of birth</label>
          <input id="Dateofbirth" name="Dateofbirth" type="date" aria-labelledby="Dateofbirth-ariaLabel"/>
        </div>

        <div className="input-section">
          <label>Gender</label>
          <div className="radio">
            <div className="radio-option">
              <label className="radio-label" htmlFor="Sex-female">Female</label>
              <input id="Sex-female" name="sex" type="radio" aria-labelledby="Sex-ariaLabel-female" value="Female"/>
            </div>
            <div className="radio-option">
              <label className="radio-label" htmlFor="Sex-male">Male</label>
              <input id="Sex-male" name="sex" type="radio" aria-labelledby="Sex-ariaLabel-male" value="Male"/>
            </div>
          </div>
        </div>

        <div className="input-section">
          <label htmlFor="Ethnicity" id="Ethnicity-ariaLabel">Ethnicity</label>
          <input id="Ethnicity" name="Ethnicity" type="text" aria-labelledby="Ethnicity-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Medicalconditions" id="Medicalconditions-ariaLabel">Medical conditions</label>
          <textarea id="Medicalconditions" name="Medicalconditions" type="text" aria-labelledby="Medicalconditions-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Dietaryneeds" id="Dietaryneeds-ariaLabel">Dietary needs</label>
          <textarea id="Dietaryneeds" name="Dietaryneeds" type="text" aria-labelledby="Dietaryneeds-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Allergies" id="Allergies-ariaLabel">Allergies</label>
          <input id="Allergies" name="Allergies" type="text" aria-labelledby="Allergies-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="Otherneedtoknow" id="Otherneedtoknow-ariaLabel">Other 'need to know'</label>
          <textarea id="Otherneedtoknow" name="Otherneedtoknow" type="text" aria-labelledby="Otherneedtoknow-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="GPname" id="GPname-ariaLabel">GP name {(props.totalChildren > 1)
            ? '(if different from above)'
            : null}</label>
            <input id="GPname" name="GPname" type="text" aria-labelledby="GPname-ariaLabel"/>
        </div>

        <div className="input-section">
          <label htmlFor="GPphone" id="GPphone-ariaLabel">GP phone</label>
          <input id="GPphone" name="GPphone" type="tel" aria-labelledby="GPphone-ariaLabel"/>
        </div>
      </div>

    </fieldset>
  )
}

export default FormChild
