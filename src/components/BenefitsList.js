import React from "react";
import BenefitsForm from "./BenefitsForm";
import Employee from "./Employee";
import { MDBListGroup, MDBContainer, MDBBtn } from "mdbreact";

class BenefitsList extends React.Component{

  state = {
    employees: [],
    currentEmployee: {
      name: "",
      startsWithA: false,
      dependents: [],
      cost: 0,
      dependentsWithA: 0
    },
    totalCost: 0,
    totalDependents: 0,
    currentDependent: ""
  };

  inputPerson = (e) => {
    const { currentDependent, currentEmployee } = this.state;
    let currentPerson = e.target.name === "name" ? currentEmployee : currentDependent;
    if(e.target.name === "name"){
      currentPerson[e.target.name] = e.target.value;
      this.setState({currentEmployee: currentPerson});
    }else{
      currentPerson = e.target.value;
      this.setState({currentDependent: currentPerson});
    }
  };

  deleteEmployee = (id) => {
    const { employees, totalCost, totalDependents } = this.state;
    let newEmployees = employees;
    let removedEmployee = employees.splice(id, 1);
    let newTotalCost = totalCost-removedEmployee[0].cost;
    let newTotalDependents = totalDependents-removedEmployee[0].dependents.length;
    this.setState({ employees: newEmployees, totalCost: newTotalCost, totalDependents: newTotalDependents });
  };

  addEmployee = (e) => {
    e.preventDefault();
    const { employees, currentEmployee, totalCost, totalDependents } = this.state;
    let employeeList = employees;
    currentEmployee.startsWithA = currentEmployee.name.charAt(0) === 'a' || currentEmployee.name.charAt(0) === 'A' ? true : false;

    let newTotalDependents = totalDependents + currentEmployee.dependents.length;

    let employeeCost = currentEmployee.startsWithA ? 900 : 1000;
    let dependentsCost = ((currentEmployee.dependents.length - currentEmployee.dependentsWithA)*500)+(currentEmployee.dependentsWithA*450);
    currentEmployee.cost = employeeCost+dependentsCost;
    let newTotalCost = totalCost+currentEmployee.cost;

    employeeList.unshift(currentEmployee);

    let resetForm = {
      name: "",
      startsWithA: false,
      dependents: [],
      cost: 0,
      dependentsWithA: 0
    }
    this.setState({employees: employeeList, currentEmployee: resetForm, totalCost: newTotalCost, totalDependents: newTotalDependents});
  };

  addDependent = () =>{
    const { currentEmployee, currentDependent } = this.state;
    let currentEmployeeVar = currentEmployee;
    currentEmployeeVar.dependents.unshift(currentDependent);
    let dependentsWithA = currentEmployee.dependentsWithA;
    dependentsWithA += currentDependent.charAt(0) === 'a' || currentDependent.charAt(0) === 'A' ? 1 : 0;
    currentEmployeeVar.dependentsWithA = dependentsWithA;
    this.setState({ currentEmployeeVar: currentEmployee, currentDependent: '' });
  }

  render(){
    const { currentEmployee, currentDependent, employees, totalCost, totalDependents } = this.state;
    return(
      <div>
        <div>
          <BenefitsForm
            addEmployee={this.addEmployee}
            addDependent={(newDependent) => this.addDependent(newDependent)}
            currentDependent={currentDependent}
            currentEmployee={currentEmployee}
            inputPerson={this.inputPerson}
            />

          <div className="m-2">
            <MDBContainer className="d-flex justify-content-center py-4">
              <MDBListGroup style={{ width: "40rem" }}>
              <div className="pb-2">
                Current List of Employees:
              </div>
                {employees.map((employee, index) => (
                  <Employee
                    key={index}
                    employee={employee}
                    id={index}
                    deleteEmployee={(id) => this.deleteEmployee(id)}
                    />
                ))}
              </MDBListGroup>
            </MDBContainer>
          </div>
        </div>

        <MDBContainer className="my-5">
            <div>Total Employees: {employees.length}</div>
            <div>Total Dependents: {totalDependents}</div>
            <div>Deductions Per Period: ${parseFloat(Math.round((totalCost/26) * 100) / 100).toFixed(2)}</div>
            <div>Total Yearly Cost: ${totalCost}</div>
        </MDBContainer>
        <MDBBtn className="mb-5" color="danger" onClick={() => this.setState({ employees: [] , totalCost: 0})}>Remove all employees...</MDBBtn>
      </div>
    );
  }
}
export default BenefitsList;
