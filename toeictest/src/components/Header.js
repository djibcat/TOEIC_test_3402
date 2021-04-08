import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const linkIcon = <FontAwesomeIcon icon={faExternalLinkAlt} />;

export default function Header() {
  const { currentUser } = useAuth();
  console.log("from header", currentUser);
  let value = "Log in";
  return (
    <Navbar className="bg-primary">
      <Navbar.Brand>
        Dashboard
        <Link to="/" style={{ color: "black"}}>
          {linkIcon}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as:{" "}
          <a href="#login">{currentUser ? currentUser.email : value}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
