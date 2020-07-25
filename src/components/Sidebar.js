import React from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import poslab from "../assets/poslab.PNG";

const Sidebar = ({ data }) => {
  if (data) {
    const employees = [];
    data.restaurants.forEach((restaurant) => {
      restaurant.employees.forEach((employee) => {
        employees.push(employee);
      });
    });

    return (
      <ProSidebar breakPoint="md">
        <SidebarHeader>
          <div
            style={{
              padding: "1.5rem 1.5rem",
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <img
                src={poslab}
                alt="poslab logo"
                style={{ width: "2rem", height: "2rem" }}
              />
            </div>
            <span style={{ fontWeight: "bold", fontSize: ".875rem" }}>
              POSLab
            </span>
            <span
              style={{
                fontSize: ".625rem",
              }}
            >
              {data.user.firstName} {data.user.lastName}
            </span>
          </div>
        </SidebarHeader>
        <Menu>
          <MenuItem>Home</MenuItem>
          <SubMenu title="Restaurant">
            {data.restaurants.map((restaurant, index) => (
              <MenuItem key={index}>{restaurant.name}</MenuItem>
            ))}
          </SubMenu>
          <SubMenu title="Sales">
            <MenuItem>Sale 1</MenuItem>
            <MenuItem>Sale 2</MenuItem>
          </SubMenu>
          <SubMenu title="Menus">
            <MenuItem>Menu 1</MenuItem>
            <MenuItem>Menu 2</MenuItem>
          </SubMenu>
          <SubMenu title="Employees">
            {employees.map((employee) => (
              <MenuItem key={employee.id}>
                {employee.firstName} {employee.lastName}
              </MenuItem>
            ))}
          </SubMenu>

          <SubMenu title="Customers">
            <MenuItem>Customer 1</MenuItem>
            <MenuItem>Customer 2</MenuItem>
          </SubMenu>
          <SubMenu title="Reports">
            <SubMenu title="Sale"></SubMenu>
            <SubMenu title="Labor">
              <MenuItem onClick={() => console.log("Loads Employee Reports")}>
                Employee
              </MenuItem>
              <MenuItem>Role</MenuItem>
              <MenuItem>Cashout</MenuItem>
              <MenuItem>ADP Payroll</MenuItem>
              <MenuItem>Payroll</MenuItem>
            </SubMenu>
            <SubMenu title="Comp"></SubMenu>
            <SubMenu title="Products"></SubMenu>
            <SubMenu title="Operating"></SubMenu>
          </SubMenu>
          <MenuItem>Online Storefront</MenuItem>
        </Menu>
        <SidebarFooter>
          <Menu>
            <SubMenu title="Account Settings">
              <MenuItem>Setting 1</MenuItem>
              <MenuItem>Setting 2</MenuItem>
            </SubMenu>
            <MenuItem>Feedback</MenuItem>
            <MenuItem>Sign Out</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    );
  } else {
    return null;
  }
};

export default Sidebar;
