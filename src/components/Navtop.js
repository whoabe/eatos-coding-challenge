import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
// import "bootstrap/dist/css/bootstrap.css";

const Navtop = ({ data }) => {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="mr-auto">
        <Nav.Link onClick={() => console.log("toggle sidebar")}>
          <i className="fas fa-bars"></i>
        </Nav.Link>
        <Nav.Link onClick={() => console.log("refresh page")}>
          <i className="fas fa-sync"></i>
        </Nav.Link>
        <Nav.Link onClick={() => console.log("close something")}>
          <i className="fas fa-times"></i>
        </Nav.Link>
        <Form inline>
          <FormControl type="text" placeholder="Search Dashboard" />
        </Form>
      </Nav>
      <Nav className="ml-auto">
        <span>{data.user.email}</span>
        <i className="fas fa-cog icon"></i>
        <i className="fas fa-globe icon"></i>
      </Nav>
    </Navbar>
  );
};

export default Navtop;
