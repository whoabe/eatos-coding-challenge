import React, { useState, useCallback } from "react";
import Navtop from "../Navtop";
import Dropdown from "react-bootstrap/Dropdown";
import EmployeeReports from "./EmployeeReports";
import EmployeeDropDownMenu from "./EmployeeDropDownMenu";

const Reports = ({ data }) => {
  const [reportRestaurant, setReportRestaurant] = useState(null);
  const [reportEmployees, setReportEmployees] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const toggleEmployeeCheck = useCallback(
    (employee) => {
      setSelectedEmployee(employee);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedEmployee]
  );
  if (data) {
    return (
      <div className="report">
        <Navtop data={data} />
        <div className="header">
          <div>
            <span className="directory-name">
              Reports <strong>- Cashout</strong>
            </span>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {reportRestaurant ? reportRestaurant.name : "Choose Restaurant"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {data.restaurants.map((restaurant) => (
                  <Dropdown.Item
                    key={restaurant.id}
                    onClick={() => {
                      setReportRestaurant(restaurant);
                      setReportEmployees(restaurant.employees);
                      setSelectedEmployee(restaurant.employees);
                    }}
                  >
                    {restaurant.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <hr className="report-header" />
        <section className="report-info">
          <div className="selector">
            <div className="selector-buttons">
              <div>EMPLOYEE</div>
              <div>ROLE</div>
              <div>CASHOUT</div>
              <div>ADP PAYROLL</div>
              <div>PAYROLL</div>
            </div>
            <hr />
          </div>
          <div className="report-dropdowns">
            <div>
              <input type="date" id="calendar" />
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Employee
              </Dropdown.Toggle>
              {reportEmployees ? (
                <EmployeeDropDownMenu
                  employees={reportEmployees}
                  toggleEmployeeCheck={toggleEmployeeCheck}
                />
              ) : null}
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Revenue Center
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  Revenue Center 1
                  <input type="checkbox" id="rev1" name="rev1" value="rev1" />
                </Dropdown.Item>
                <Dropdown.Item>
                  Revenue Center 2
                  <input type="checkbox" id="rev2" name="rev2" value="rev2" />
                </Dropdown.Item>
                <Dropdown.Item>
                  Revenue Center 3
                  <input type="checkbox" id="rev3" name="rev3" value="rev3" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Tipout
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Tipout</Dropdown.Item>
                <Dropdown.Item>No Tipout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Export
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another</Dropdown.Item>
                <Dropdown.Item>Something</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/*  */}
          <EmployeeReports employees={selectedEmployee} />
          <div className="report-table">{/* <SortableTable /> */}</div>
        </section>
        {/*  */}
      </div>
    );
  } else {
    return null;
  }
};

export default Reports;
