import React, { useContext, useState, useEffect } from "react";

import { auth } from "../Firebase";
// import { useLocation } from "react-router-dom";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  // const location = useLocation();
  const [currentUser, setCurrentUser] = useState("currentser");
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState();

  async function signup(email, password) {
    return await auth.createUserWithEmailAndPassword(email, password);
  }
  async function login(email, password) {
    return await auth.signInWithEmailAndPassword(email, password);
  }
  async function logout() {
    return await auth.signOut();
  }
  async function resetPassword(email) {
    return await auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    setState({
      currentUser,
      signup,
      login,
      logout,
      resetPassword,
    });
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // if (user !== null || user !== undefined) {
      //   location.push("/");
      // } else {
      //   location.push("/login");
      // }
      setLoading(false);
      setCurrentUser(user);
      setState((s) => {
        return { ...s, currentUser: user };
      });
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, signup, login, logout, resetPassword };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
