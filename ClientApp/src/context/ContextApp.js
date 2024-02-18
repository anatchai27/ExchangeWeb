import React, { createContext, useReducer } from "react";
const contextApp = createContext();
export const ContextApp = (props) => {
  const [stateAppContext, dispatchAppContext] = useReducer();
  return (
    <>
      <contextApp.Provider value={(stateAppContext, dispatchAppContext)}>
        {props.children}
      </contextApp.Provider>
    </>
  );
};
