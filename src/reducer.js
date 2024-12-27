// The initial state of the application, which defines the default values for the state.
// In this case, the `term` property is initialized to `null`.
export const initialState = {
  term: null,
};

// Action types define the types of actions that can be dispatched to the reducer.
// This ensures consistency and avoids typos in action names.
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM", // Action type for setting the search term
};

// The reducer function updates the application state based on the dispatched action.
// It takes the current state and an action as arguments and returns the new state.
const reducer = (state, action) => {
  // Logs the action for debugging purposes. This helps developers understand
  // what action is being dispatched and what data it contains.
  console.log(action);

  // Determines how the state should be updated based on the action type.
  switch (action.type) {
    // Handles the `SET_SEARCH_TERM` action type.
    // Updates the `term` property in the state with the value provided in `action.term`.
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state, // Copies the existing state to avoid overwriting other properties.
        term: action.term, // Updates the `term` property with the new value.
      };

    // A default case that returns the current state unchanged.
    // This ensures the reducer always returns a valid state, even if the action type is unrecognized.
    default:
      return state;
  }
};

// Exports the reducer function as the default export.
// This allows it to be imported and used in other parts of the application.
export default reducer;
