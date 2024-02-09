import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav>TO DO LIST</nav>
      <Navbar
        style={{
          backgroundColor: "#8D91C7",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        }}
      >
        <Container>
          <Nav className="me-auto">
            <Link
              style={{
                marginLeft: "545px",
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{ color: "white", textDecoration: "none", padding: "5px" }}
              to="/about"
            >
              About
            </Link>
            <Link
              style={{ color: "white", textDecoration: "none", padding: "5px" }}
              to="/contact"
            >
              Contact
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
