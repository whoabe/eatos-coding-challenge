import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const EmployeeDropDownMenu = ({ employees, toggleEmployeeCheck }) => {
  if (employees) {
    return (
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => toggleEmployeeCheck(employees)}>
          All
          <input type="checkbox" id="rev1" name="rev1" value="rev1" />
        </Dropdown.Item>
        {employees.map((employee) => {
          return (
            <Dropdown.Item
              onClick={() => toggleEmployeeCheck([employee])}
              key={employee.id}
            >
              {employee.firstName} {employee.lastName}
              <input
                type="checkbox"
                id={employee.id}
                name={employee.id}
                value={employee.id}
              />
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    );
  } else return <Dropdown.Menu></Dropdown.Menu>;
};
export default EmployeeDropDownMenu;
