import React, { useState, useEffect, useCallback } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { UseFirestore } from "./UseFirestore";

export const UseCollection = () => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const fetchCollection = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'transactions'));
      let results = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        results.push({ ...doc.data(), id: doc.id });
        console.log(doc.id, " => ", doc.data());
        setError(false);

        setDocuments(results);
      });
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return { error, documents, fetchCollection };
};
