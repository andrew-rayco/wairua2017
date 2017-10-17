import React from 'react'

const FormChild = (props) => {
  let childNum = props.childNum
  return (
    <fieldset className="fieldset-child">
      <legend>Child {(props.totalChildren > 1)
          ? props.childNum
          : null}</legend>

      <div className="form-section-container">

        <div className="input-section">
          <label htmlFor={'child' + childNum + '-fullname'} id="Childs1fullname-ariaLabel">Child  {(props.totalChildren > 1)
              ? props.childNum + ' '
              : null}
            full name
            <input id="fullname" name={'child' + childNum + '-fullname'} type="text" aria-labelledby="fullname-ariaLabel" className="required" title="Childs (1) full name. This is a required field"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Dateofbirth" id="Dateofbirth">Date of birth
            <input id="Dateofbirth" name={'child' + childNum + '-dateOfBirth'} type="date" aria-labelledby="Dateofbirth-ariaLabel"/>
          </label>
        </div>

        <div className="input-section radio">
          <label>Gender
            <label className="radio-label" htmlFor="Sex-female">Female
              <input id="Sex-female" name={'child' + childNum + '-sex'} type="radio" aria-labelledby="Sex-ariaLabel-female" value="Female"/>
            </label>

            <label className="radio-label" htmlFor="Sex-male">Male
              <input id="Sex-male" name={'child' + childNum + '-sex'} type="radio" aria-labelledby="Sex-ariaLabel-male" value="Male"/>
            </label>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Ethnicity" id="Ethnicity-ariaLabel">Ethnicity
            <input id="Ethnicity" name={'child' + childNum + '-ethnicity'} type="text" aria-labelledby="Ethnicity-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Medicalconditions" id="Medicalconditions-ariaLabel">Medical conditions
            <textarea id="Medicalconditions" name={'child' + childNum + '-medicalConditions'} type="text" aria-labelledby="Medicalconditions-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Dietaryneeds" id="Dietaryneeds-ariaLabel">Dietary needs
            <textarea id="Dietaryneeds" name={'child' + childNum + '-dietaryNeeds'} type="text" aria-labelledby="Dietaryneeds-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Allergies" id="Allergies-ariaLabel">Allergies
            <input id="Allergies" name={'child' + childNum + '-allergies'} type="text" aria-labelledby="Allergies-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="Otherneedtoknow" id="Otherneedtoknow-ariaLabel">Other 'need to know'
            <textarea id="Otherneedtoknow" name={'child' + childNum + '-otherNeedToKnow'} type="text" aria-labelledby="Otherneedtoknow-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="GPname" id="GPname-ariaLabel">GP name {(props.totalChildren > 1)
              ? '(if different from above)'
              : null}
            <input id="GPname" name={'child' + childNum + '-gpName'} type="text" aria-labelledby="GPname-ariaLabel"/>
          </label>
        </div>

        <div className="input-section">
          <label htmlFor="GPphone" id="GPphone-ariaLabel">GP phone
            <input id="GPphone" name={'child' + childNum + '-gpPhone'} type="tel" aria-labelledby="GPphone-ariaLabel"/>
          </label>
        </div>
      </div>

    </fieldset>
  )
}

export default FormChild
