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
            full name
            <input id="Childs1fullname" name="Childs1fullname" type="text" aria-labelledby="Childs1fullname-ariaLabel" className="required" title="Childs (1) full name. This is a required field"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Dateofbirth" id="Dateofbirth-ariaLabel">Date of birth
            <input id="Dateofbirth" name="Dateofbirth" type="date" aria-labelledby="Dateofbirth-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label>Gender
            <label className="radio-label" htmlFor="Sex-female">Female
              <input id="Sex-female" name="sex" type="radio" aria-labelledby="Sex-ariaLabel-female" value="Female"/>
            </label>

            <label className="radio-label" htmlFor="Sex-male">Male
              <input id="Sex-male" name="sex" type="radio" aria-labelledby="Sex-ariaLabel-male" value="Male"/>
            </label>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Ethnicity" id="Ethnicity-ariaLabel">Ethnicity
            <input id="Ethnicity" name="Ethnicity" type="text" aria-labelledby="Ethnicity-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Medicalconditions" id="Medicalconditions-ariaLabel">Medical conditions
            <textarea id="Medicalconditions" name="Medicalconditions" type="text" aria-labelledby="Medicalconditions-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Dietaryneeds" id="Dietaryneeds-ariaLabel">Dietary needs
            <textarea id="Dietaryneeds" name="Dietaryneeds" type="text" aria-labelledby="Dietaryneeds-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Allergies" id="Allergies-ariaLabel">Allergies
            <input id="Allergies" name="Allergies" type="text" aria-labelledby="Allergies-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Otherneedtoknow" id="Otherneedtoknow-ariaLabel">Other 'need to know'
            <textarea id="Otherneedtoknow" name="Otherneedtoknow" type="text" aria-labelledby="Otherneedtoknow-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="GPname" id="GPname-ariaLabel">GP name {(props.totalChildren > 1)
              ? '(if different from above)'
              : null}
            <input id="GPname" name="GPname" type="text" aria-labelledby="GPname-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="GPphone" id="GPphone-ariaLabel">GP phone
            <input id="GPphone" name="GPphone" type="tel" aria-labelledby="GPphone-ariaLabel"/>
          </label>
        </div>
      </div>

    </fieldset>
  )
}

export default FormChild
