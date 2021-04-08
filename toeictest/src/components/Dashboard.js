import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  console.log("currentUser from Dashboard : ", currentUser);
  //   console.log(currentUser);
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
          {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link> */}
        </Card.Body>
        {/* {typeof currentUser !== undefined ? <CardBodyTruc /> : "c'est faux "} */}
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </React.Fragment>
  );
}

// function CardBodyTruc() {
//   return (
//     <Card.Body>
//       <h2 className="text-center mb-4">Profile</h2>
//       <Link to="/login">Log in </Link>
//     </Card.Body>
//   );
// }
