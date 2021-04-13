import React, { useContext, useState, useEffect } from "react";

import { auth } from "../Firebase";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
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
