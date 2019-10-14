import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

const BenefitsHeading = () => (
  <div>
    <header className="App-header">
      <div>Benefits Calculator</div>
    </header>
    <MDBContainer>
      <MDBRow className="my-5 col-md-8 offset-md-2">
        <MDBCol className="" sm="12" md={{ size: 10, offset: 1 }}>
          This is a simple application to get a quote for how much your cost will be to give your employees
          benefits. A portion of these costs are deducted from your employees paycheck, so this application
          handles that deduction.
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-3">
        <MDBCol>
          Here is the cost breakdown:
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="text-left d-flex justify-content-center" sm="12" md={{ size: 8, offset: 2 }}>
          <ul>
            <li className="pb-1">The cost of benefits is $1000/year for each employee</li>
            <li className="pb-1">Each dependent (children and possibly spouses) incurs a cost of
                $500/year</li>
            <li className="pb-1">Anyone whose name starts with ‘A’ gets a 10% discount, employee or
                dependent</li>
          </ul>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-3">
        <MDBCol>
          Here are the givens:
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="text-left d-flex justify-content-center" sm="12" md={{ size: 8, offset: 2 }}>
          <ul>
            <li className="pb-1">All employees are paid $2000 per paycheck before deductions</li>
            <li className="pb-1">There are 26 paychecks in a year</li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
)
export default BenefitsHeading;
