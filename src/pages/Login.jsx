import React from "react";
import { NavBar } from "../pages";
import {
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from "../config";
import "../styles/login.css";
import { useEffect } from "react";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const [firstname, lastname, email, password] = elements;
    console.log(firstname.value, lastname.value, email.value, password.value);
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider);
  };

  const logout = (e) => {
    e.preventDefault();
    auth.signOut()
  };

  // get redirect result
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        // set the user
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // checks auth state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setSignedIn(true);
        const { displayName, email, uid, photoURL } = user
        setUser({ displayName, email, uid, photoURL });
        console.log(user);
        // ...
      } else {
        // User is signed out
        setUser(null)
      }
    });
  }, []);

  return (
    <div className="login">
      <NavBar />
      <div className="inner-container">
        {user ? (
          <div className="sign-in">
            <div className="user-img">
              <img src={user.photoURL} alt="" />
            </div>
            <div className="user-data">
              <h3 className="user-name">{user.displayName}</h3>
              <p className="user-email">{user.email}</p>
              <button className="sign-up-btn" onClick={logout}>Log out</button>
            </div>
          </div>
        ) : (
          <div className="sign-up">
            <button className="sign-up-btn" onClick={signIn}>
              Sign Up with Google
            </button>
          </div>
        )}
        {/* <form action="" className="form" onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" required />

          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />

          <label htmlFor="pwd">Password</label>
          <input type="password" name="password" required />

          <label htmlFor="re-pwd">Confirm Password</label>
          <input type="password" name="password" required />

          <button type="submit" className="btn">
            Sign Up
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Login;
