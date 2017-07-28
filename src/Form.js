import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super(),
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Teen Adventure Camp</h1>
        <h2>Registration Form</h2>
        <form action="#" method="post" name="teen-camp">
          <fieldset className="fieldset-parent">
            <div className="row">
              <div className="four columns">
                <label for="ParentCaregivername" id="ParentCaregivername-ariaLabel">Parent / Caregiver name</label>
                <input id="ParentCaregivername" name="ParentCaregivername" type="text" aria-labelledby="ParentCaregivername-ariaLabel" className="required" title="Parent / Caregiver name. This is a required field"/>
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
          <fieldset className="fieldset-child">
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
            <div className="twelve columns">
              <input type="submit" value="Submit"/>
            </div>
          </div>

        </form>

      </div>
    )
  }
}
