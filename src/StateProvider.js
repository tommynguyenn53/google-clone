import React, { createContext, useReducer, useContext } from 'react';

// Create the context
export const StateContext = createContext();

// StateProvider component
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Hook to use the context
export const useStateValue = () => useContext(StateContext);
