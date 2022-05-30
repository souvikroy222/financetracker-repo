import React, { useState } from "react";
import { UseFirestore } from "../customhooks/UseFirestore";

const TransactionForm = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const { docId, addDocuments } = UseFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, value);
    addDocuments(name, value);
  };

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
