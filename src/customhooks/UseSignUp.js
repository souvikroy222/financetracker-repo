import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useContext } from "react";
import { userContext } from "../context/authContext";

export const UseSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);
  const {dispatch}=useContext(userContext)

  const signUp = async (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setisPending(true);
        // Signed in

        const data = userCredential.user.providerData;
        data[0].displayName = name;

        console.log(data);
        dispatch({type:'USER_LOGIN',payload:data})
        
        setisPending(false);
        // ...
      })
      .catch((error) => {
        setisPending(false);
        setError(error.message);
        // ..
      });
  };

  return { signUp, error, isPending };
};
