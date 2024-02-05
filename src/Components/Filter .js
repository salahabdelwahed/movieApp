import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import "../CSS/Filter.css";
import { Link } from "react-router-dom";
const Filter = ({ setValueTitle, setValueRang, valueRang }) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
          </Nav>
        </Container>
        <Container>
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2 myClass"
            onChange={(event) => setValueTitle(event.target.value)}
          />
          <label className="labRang">Rate:</label>
          <input
            className="inpRang"
            type="range"
            step={0.5}
            id="vol"
            name="vol"
            min="0"
            max="10"
            onChange={(e) => setValueRang(e.target.value)}
          />
          <label className="labRang"></label>
        </Container>
      </Navbar>
    </>
  );
};

export default Filter;
