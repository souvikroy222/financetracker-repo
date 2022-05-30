import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { useContext } from "react";
import { userContext } from "../context/authContext";

export const UseSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);
  const { dispatch } = useContext(userContext);

  const signUp = async (email, password, name) => {
    try {
      setisPending(true);
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const updatedData=await updateProfile(auth.currentUser, { displayName: name }).catch(
        (err) => console.log(err)
      );      
      const data = updatedData.user.providerData;
      console.log(updatedData);
      dispatch({ type: "USER_LOGIN", payload: data });
      setisPending(false);
    } catch (error) {
      setisPending(false);
      setError(error.message);
    }
  };

  return { signUp, error, isPending };
};
