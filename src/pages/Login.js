import React, { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { UserLogin } from "../customhooks/UserLogin";
import { userContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, isPending, error } = UserLogin();
  
  

  const {
    state: { user },
  } = useContext(userContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    signIn(email, password);
    console.log(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <form className={styles.login__form} onSubmit={handleChange}>
      <h2>login</h2>
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
      <button className="btn">Login</button>
    </form>
  );
};

export default Login;
