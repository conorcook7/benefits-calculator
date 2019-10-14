import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Dependent from "./Dependent";

const BenefitsForm = ({ currentEmployee, currentDependent, inputPerson, addEmployee, addDependent })  => (
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center py-4">
          <MDBCol md="6" className="">
            <form onSubmit={(e) => addEmployee(e)} >
              <p className="h4 text-center mb-4">Enter Employee Information</p>
              <label htmlFor="employeeFirstName" className="grey-text">
                Employee Full Name
              </label>
              <input
                type="text"
                name="name"
                value={currentEmployee.name}
                onChange={inputPerson}
                placeholder="John Smith"
                id="employeeFirstName"
                className="form-control"
              />
              <br />

              <label
                htmlFor="depFullName1"
                className="grey-text"
              >
                Dependent Full Name (Optional)
              </label>
              <div className="form-inline d-flex justify-content-between">
                <input
                  type="text"
                  value={currentDependent}
                  name="currentDependent"
                  onChange={inputPerson}
                  placeholder="Dependent Full Name"
                  id="depFullName1"
                  className="form-control"
                />
                <MDBBtn
                  color="info"
                  className=" depButton"
                  onClick={addDependent}
                  disabled={currentDependent ? false : true}
                >
                  Add Dependent
                </MDBBtn>
              </div>
                {
                  currentEmployee.dependents && currentEmployee.dependents.map((dependent, index) => (
                    <Dependent
                      key={index}
                      dependent={dependent}
                    />
                  ))}
              <br />

              <div className="text-center mt-4">
                <MDBBtn
                  color="primary"
                  type="submit"
                  className=" btn-block"
                  onClick={(e) => addEmployee(e)}
                  disabled={currentEmployee.name && !currentDependent ? false : true}
                >
                  Save Employee & Dependents
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  )
export default BenefitsForm;
