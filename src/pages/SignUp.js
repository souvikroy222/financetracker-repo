import React from "react";
import styles from "./Signup.module.css";
import { useState } from "react";
import  {UseSignUp}  from "../customhooks/UseSignUp";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");  
  const {signUp}=UseSignUp()

  const handleChange = (e) => {
    e.preventDefault();
    signUp(email,password)
  };

  return (
    <form className={styles.login__form} onSubmit={handleChange}>
      <h2>Create Account</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
      </label>
      <button className="btn">Create Account</button>
    </form>
  );
};

export default SignUp;
