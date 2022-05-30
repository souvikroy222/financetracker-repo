import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { userContext } from "../context/authContext";
import { UseLogout } from "../customhooks/UseLogout";

const NavBar = () => {
  const { logout, isPending, error } = UseLogout();
  const { state } = useContext(userContext);

  console.log(state);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">myMoney</Link>
        </li>
        {state.user === null ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        ) : (
          <li>
            <span>{`Hi✌ ${state.user[0].displayName}`}</span>
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
