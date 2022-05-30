import React, { useContext, useEffect, useState } from "react";
import { authReducer } from "../context/authContext";
import { UseFirestore } from "../customhooks/UseFirestore";
import { userContext } from "../context/authContext";

const TransactionForm = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const { state } = useContext(userContext);

  const { firestorestate, addDocuments } = UseFirestore();
  //const { document } = firestorestate;

  const userId = state.user[0].uid;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, value, userId);
    addDocuments(name, value, userId);
  };

  useEffect(() => {
    if (firestorestate.success === true) {
      setName("");
      setValue("");
    }
  }, [firestorestate.success]);

  return (
    <>
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name</span>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Transaction Amount</span>
          <input
            type="number"
            value={value}
            required
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
