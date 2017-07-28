import React from 'react'

import FormParent from './form/FormParent'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Teen Adventure Camp</h1>
        <h2>Registration Form</h2>
        <form action="#" method="post" name="teen-camp">
          <FormParent />

          <fieldset className="fieldset-child">
            <legend>Child</legend>
            <div className="row">
              <div className="four columns">
                <label for="Childs1fullname" id="Childs1fullname-ariaLabel">Childs (1) full name</label>
                <input id="Childs1fullname" name="Childs1fullname" type="text" aria-labelledby="Childs1fullname-ariaLabel" className="required" title="Childs (1) full name. This is a required field"/></div>
              <div className="four columns">
                <label for="Dateofbirth" id="Dateofbirth-ariaLabel">Date of birth</label>
                <input id="Dateofbirth" name="Dateofbirth" type="text" aria-labelledby="Dateofbirth-ariaLabel"/></div>
              <div className="four columns">
                <label for="Sex" id="Sex-ariaLabel">Sex</label>
                <input id="Sex" name="Sex" type="text" aria-labelledby="Sex-ariaLabel"/></div>
            </div>
            <div className="row">
              <div className="four columns">
                <label for="Ethnicity" id="Ethnicity-ariaLabel">Ethnicity</label>
                <input id="Ethnicity" name="Ethnicity" type="text" aria-labelledby="Ethnicity-ariaLabel"/></div>
              <div className="four columns">
                <label for="Medicalconditions" id="Medicalconditions-ariaLabel">Medical conditions</label>
                <textarea id="Medicalconditions" name="Medicalconditions" type="text" aria-labelledby="Medicalconditions-ariaLabel"/></div>
              <div className="four columns">
                <label for="Dietaryneeds" id="Dietaryneeds-ariaLabel">Dietary needs</label>
                <textarea id="Dietaryneeds" name="Dietaryneeds" type="text" aria-labelledby="Dietaryneeds-ariaLabel"/></div>
            </div>
            <div className="row">
              <div className="four columns">
                <label for="Allergies" id="Allergies-ariaLabel">Allergies</label>
                <input id="Allergies" name="Allergies" type="text" aria-labelledby="Allergies-ariaLabel"/></div>
              <div className="four columns">
                <label for="Otherneedtoknow" id="Otherneedtoknow-ariaLabel">Other 'need to know'</label>
                <input id="Otherneedtoknow" name="Otherneedtoknow" type="text" aria-labelledby="Otherneedtoknow-ariaLabel"/></div>
              <div className="four columns">
                <label for="GPname" id="GPname-ariaLabel">GP name</label>
                <input id="GPname" name="GPname" type="text" aria-labelledby="GPname-ariaLabel"/></div>
            </div>
            <div className="row">
              <div className="four columns">
                <label for="GPphone" id="GPphone-ariaLabel">GP phone</label>
                <input id="GPphone" name="GPphone" type="text" aria-labelledby="GPphone-ariaLabel"/></div>
            </div>
          </fieldset>

          <fieldset className="fieldset-emergency">
            <legend>Emergency</legend>
            <div className="row">
              <div className="four columns">
                <label for="Emergencycontact1" id="Emergencycontact1-ariaLabel">Emergency contact 1</label>
                <input id="Emergencycontact1" name="Emergencycontact1" type="text" aria-labelledby="Emergencycontact1-ariaLabel" className="required" title="Emergency contact 1. This is a required field"/></div>
              <div className="four columns">
                <label for="Relationshiptochild" id="Relationshiptochild-ariaLabel">Relationship to child</label>
                <input id="Relationshiptochild" name="Relationshiptochild" type="text" aria-labelledby="Relationshiptochild-ariaLabel"/></div>
              <div className="four columns">
                <label for="Homephone" id="Homephone-ariaLabel">Home phone</label>
                <input id="Homephone" name="Homephone" type="tel" aria-labelledby="Homephone-ariaLabel"/></div>
            </div>
            <div className="row">
              <div className="four columns">
                <label for="Cellphone" id="Cellphone-ariaLabel">Cell phone</label>
                <input id="Cellphone" name="Cellphone" type="text" aria-labelledby="Cellphone-ariaLabel" className="required" title="Cell phone. This is a required field"/></div>
              <div className="four columns">
                <label for="Emergencycontact2" id="Emergencycontact2-ariaLabel">Emergency contact 2</label>
                <input id="Emergencycontact2" name="Emergencycontact2" type="text" aria-labelledby="Emergencycontact2-ariaLabel"/></div>
              <div className="four columns">
                <label for="Relationshiptochild" id="Relationshiptochild-ariaLabel">Relationship to child</label>
                <input id="Relationshiptochild" name="Relationshiptochild" type="text" aria-labelledby="Relationshiptochild-ariaLabel"/></div>
            </div>
            <div className="row">
              <div className="four columns">
                <label for="Homephone" id="Homephone-ariaLabel">Home phone</label>
                <input id="Homephone" name="Homephone" type="text" aria-labelledby="Homephone-ariaLabel"/></div>
              <div className="four columns">
                <label for="Cellphone" id="Cellphone-ariaLabel">Cell phone</label>
                <input id="Cellphone" name="Cellphone" type="text" aria-labelledby="Cellphone-ariaLabel"/></div>
            </div>
          </fieldset>

          <div className="row">
            <input type="submit" value="Submit" className="submit"/>
          </div>

        </form>

      </div>
    )
  }
}
