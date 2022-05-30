import React, { useContext, useEffect } from "react";
import styles from "./Signup.module.css";
import { useState } from "react";
import { UseSignUp } from "../customhooks/UseSignUp";
import { userContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signUp, isPending, error } = UseSignUp();
  
  const {
    state: { user },
  } = useContext(userContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    signUp(email, password, displayName);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

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

      {!isPending && <button className="btn">Create Account</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUp;
