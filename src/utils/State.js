import React, { useReducer, useContext } from 'react';

export const initialState = {
    city: "",
    country: "DK",
}
  
export const reducer = (state, action) => {
    switch (action.type) {
        case "updateCity":            
            state.city = action.city;
            state.country = action.country;
            return {...state};
        default:
        return initialState;
    }
}
  
export const AppContext = React.createContext([initialState, action => {}]);
  
export const StateProvider = ({ reducer, initialState, children }) =>{
    const contextValue = useReducer(reducer, initialState);
  
    return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    );
};
  
export const useReduxState = () => {
    const contextValue = useContext(AppContext);
    return contextValue;
};