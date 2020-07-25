import React from "react";
import Table from "react-bootstrap/Table";

const EmployeeReports = ({ employees }) => {
  if (employees) {
    const allEmployeeReports = employees.map((employee) => {
      return (
        <div className="report-sub-info" key={employee.id}>
          <div className="report-summary">
            <div className="employee-info">
              <span className="name">
                {employee.firstName} {employee.lastName}
              </span>
              <span className="id">{employee.id}</span>
            </div>
            <div className="total-card-sale">
              <span>
                <strong>Total Card Sale</strong>
              </span>
              <span className="amount">${employee.totalCardSale}</span>
            </div>
            <div className="total-cash-sale">
              <span>
                <strong>Total Cash Sale</strong>
              </span>
              <span className="amount">${employee.totalCashSale}</span>
            </div>
            <div className="total-tip">
              <span>
                <strong>Total Tip</strong>
              </span>
              <span className="amount">${employee.totalTip}</span>
            </div>
          </div>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Type</th>
                <th>QTY</th>
                <th>AMOUNT</th>
                <th>TIP</th>
              </tr>
            </thead>
            <tbody>
              {employee.payments.map((payment) => {
                return (
                  <tr key={payment.type}>
                    <td>{payment.type}</td>
                    <td>{payment.qty}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.tip}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="report-footer">
            <div className="total">
              <span className="footer-label">Total</span>
              <span className="footer-amt">${employee.total}</span>
            </div>
            <div className="cashDrop">
              <span className="footer-label">Cash Drop</span>
              <span className="footer-amt">${employee.cashDrop}</span>
            </div>
          </div>
          <hr className="hr-footer" />
        </div>
      );
    });
    return allEmployeeReports;
  } else {
    return (
      <div className="choose">
        <h1>Choose a Restaurant</h1>
      </div>
    );
  }
};

export default EmployeeReports;
