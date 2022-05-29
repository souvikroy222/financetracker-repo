import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const UseSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setisPending(true);
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setisPending(false);
        // ...
      })
      .catch((error) => {
        setisPending(false);
        setError(error);
        // ..
      });
  };

  return { signUp, error, isPending };
};
