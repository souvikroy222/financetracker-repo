import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useContext } from "react";
import { userContext } from "../context/authContext";

export const UserLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);
  const { dispatch } = useContext(userContext);

  const signIn = async (email, password) => {
    signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        setisPending(true);
                // Signed in

        const data = userCredential.user.providerData;
        console.log(data);
        dispatch({ type: "USER_LOGIN", payload: data });

        setisPending(false);
        // ...
      })
      .catch((error) => {
        setisPending(false);
        setError(error.message);
        // ..
      });
  };

  return { signIn, error, isPending };
};
