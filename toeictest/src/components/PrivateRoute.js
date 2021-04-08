import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route {...rest}>
      {currentUser === undefined && <p>Chargement</p>}
      {currentUser === null && <Redirect to="/login" />}
      {currentUser && <Component data={currentUser} />}
    </Route>
  );
}
