import React from "react";
import styles from "./Home.module.css";
import TransactionForm from "../components/TransactionForm";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Your Transaction List</div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
};

export default Home;
