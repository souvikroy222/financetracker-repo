import React, { useCallback } from "react";
import styles from "./Home.module.css";
import TransactionForm from "../components/TransactionForm";
import { UseCollection } from "../customhooks/UseCollection";
import { useEffect } from "react";
import { useContext } from "react";
import { userContext } from "../context/authContext";
import TransactionList from "../components/TransactionList";

const Home = () => {
  const { error, documents,fetchCollection } = UseCollection();


 
  

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Your Transaction List
        {error && <p>coul'd not fetch data</p>}
        {documents && <TransactionList documents={documents} />}
      </div>

      <div className={styles.sidebar}>
        <TransactionForm fetchCollection={fetchCollection}/>
      </div>
    </div>
  );
};

export default Home;
