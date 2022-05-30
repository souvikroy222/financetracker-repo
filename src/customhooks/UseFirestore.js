import { db } from "../firebase/config";
import React, { useReducer, useState } from "react";
import { collection, addDoc,updateDoc, serverTimestamp } from "firebase/firestore";

const initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return {
        ...state,
        isPending: true,
        success:false
      };
    case "IS_SUCCESS":
      return {
        ...state,
        success:true,
        document: action.payload,
      };
    case "IS_FAILED":
      return {
        ...state,
        error: action.payload,
        success:false
      };
    default:
      return state;
  }
};

export const UseFirestore = () => {
  const [firestorestate, dispatch] = useReducer(firestoreReducer, initialState);
  //const [isCancelled, setisCancelled] = useState(false);

  //add documents
  const addDocuments = async (name, value,userId) => {
    try {
      dispatch({ type: "IS_PENDING" });
      const docRef = await addDoc(collection(db, "transactions"), {
        transactionAmount: name,
        transactionValue: value, 
        userID:userId       
      });
      const updatedDoc =await updateDoc(docRef, {
        timestamp: serverTimestamp()
    });
      dispatch({ type: "IS_SUCCESS", payload: updatedDoc });
      console.log("Document written with ID: ", docRef);
    } catch (error) {
      console.error("Error adding document: ", error);
      dispatch({ type: "IS_FAILED", payload: "Error adding document" });
    }
  };

  //delete documents
  /*const deleteDocuments = async (name, value) => {
    try {
      const docRef = await addDoc(collection(db, "transactions"), {
        transactionAmount: name,
        transactionValue: value,
      });
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };*/

  return { addDocuments,firestorestate };
};
