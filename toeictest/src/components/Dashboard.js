import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("failed to logout");
    }
  }
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Name : </strong>
          {currentUser.name}
          <strong>Email : </strong>
          {currentUser.email}

        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </React.Fragment>
  );
}

