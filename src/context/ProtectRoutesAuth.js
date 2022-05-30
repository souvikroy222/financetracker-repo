import React from "react";
import { userContext } from "./authContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const ProtectRoutesAuth = ({ children }) => {
  const { state } = useContext(userContext);
  if (state.user === null) {return <Navigate to="/login"/>;}

  return children;
};
