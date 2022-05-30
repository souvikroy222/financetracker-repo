import React, { useContext, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { userContext } from "../context/authContext";

export const UseLogout = () => {  
  const [isPending, setisPending] = useState(false);
  const [error, setError] = useState(null);

  const {dispatch}=useContext(userContext)
  const auth = getAuth();

  const logout = async() => {
    setisPending(true);
    signOut(auth)
      .then(() => {
        setisPending(false);
        dispatch({type:'USER_LOGOUT'})
        // Sign-out successful.
      })
      .catch((error) => {
        setError(error.message);
        // An error happened.
      });
  };

  return { logout,isPending,error };
};
