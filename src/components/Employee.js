import React from "react";
import { MDBListGroupItem, MDBBtn } from "mdbreact";
import Dependent from "./Dependent";

const Employee = ({ employee, deleteEmployee, id })  => (
  <MDBListGroupItem>
    <div className="d-flex flex-row" >
      <div className="col d-flex justify-content-start pt-1 ">Employee: {employee.name}</div>
      <div className="col d-flex justify-content-end"><MDBBtn color="danger" onClick={() => deleteEmployee(id)}>Delete Employee</MDBBtn></div>
    </div>
    {
      employee.dependents && employee.dependents.map((dependent, index) => (
        <Dependent
          key={index}
          dependent={dependent}
         />
     ))}
  </MDBListGroupItem>
)
export default Employee
