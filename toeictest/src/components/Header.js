import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const linkIcon = <FontAwesomeIcon icon={faExternalLinkAlt} />;

export default function Header() {
  const { currentUser } = useAuth();
  let value = "";
  return (
    <Navbar className="bg-primary">
      <Navbar.Brand>
        Dashboard
        <Link to="/" style={{ color: "black" }}>
          {linkIcon}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/about" style={{ color: "black" }}>
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/writting-test" style={{ color: "black" }}>
              Writting
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/audio-test" style={{ color: "black" }}>
              Listening
            </Link>
          </Nav.Link>
        </Nav>
        <Navbar.Text>
          Signed in as:{" "}
          <a href="/">{currentUser ? currentUser.email : value}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
