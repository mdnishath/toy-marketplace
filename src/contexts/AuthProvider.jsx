import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../utils/firebase/firebase.config";
import { createContext } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Signup
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Google login
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  //login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Logout
  const logOut = () => {
    return signOut(auth);
  };
  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  //focus on auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createAccount,
    login,
    logOut,
    googleLogin,
    updateUser,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
