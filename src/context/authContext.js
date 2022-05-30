import { createContext, useReducer } from "react";

export const userContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { user: action.payload };
    case "USER_LOGOUT":
      localStorage.removeItem("user");
      return { user: null };
    default:
      return state;
  }
};

const localstorageUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: localstorageUser });

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
