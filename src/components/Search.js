// Import necessary libraries and components
import React, { useState } from "react"; // React and useState hook
import "./Search.css"; // Importing the CSS for styling the Search component
import SearchIcon from "@mui/icons-material/Search"; // Search icon from Material UI
import MicIcon from "@mui/icons-material/Mic"; // Microphone icon from Material UI
import { Button } from "@mui/material"; // Button component from Material UI
import { useNavigate } from "react-router-dom"; // Hook to navigate to different routes
import { useStateValue } from "../StateProvider"; // Custom hook for state management using context API
import { actionTypes } from "../reducer"; // Import action types to update the global state

// Search component that displays a search bar and handles search logic
function Search({ hideButtons = false }) {
  // Destructuring state and dispatch from the context API (StateProvider)
  const [{}, dispatch] = useStateValue();

  // Local state to hold the search input value
  const [input, setInput] = useState("");

  // Hook to navigate programmatically to a new route
  const navigate = useNavigate();

  // Function to handle search action
  const search = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)

    // Dispatch action to set the search term in the global state
    dispatch({
      type: actionTypes.SET_SEARCH_TERM, // Action type to update the search term
      term: input // Passing the input value as the search term
    });

    // Navigate to the search results page only if the input is not empty
    if (input.trim() !== "") {
      navigate("/search"); // Navigate to the '/search' route
    }
  };

  return (
    // Form to handle search submission
    <form className="search" onSubmit={search}>
      <div className="search__input">
        {/* Search icon displayed inside the input box */}
        <SearchIcon className="search__inputIcon" />

        {/* Input field for user to type the search term */}
        <input
          value={input} // Binding the input field to the 'input' state
          onChange={(e) => {
            setInput(e.target.value); // Update the 'input' state when the user types
          }}
        />

        {/* Microphone icon (potentially for voice search, not functional here) */}
        <MicIcon />
      </div>

      {/* Conditional rendering for the buttons section */}
      {!hideButtons ? (
        // Buttons displayed when hideButtons is false
        <div className="search__buttons">
          <Button type="submit" variant="outlined">
            Google Search {/* Google Search button */}
          </Button>
          <Button variant="outlined">
            I'm Feeling Lucky {/* "I'm Feeling Lucky" button */}
          </Button>
        </div>
      ) : (
        // Buttons hidden or styled differently when hideButtons is true
        <div className="search__buttons">
          <Button className="search__buttonsHidden" type="submit" variant="outlined">
            Google Search {/* Google Search button */}
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky {/* "I'm Feeling Lucky" button */}
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search; // Exporting the Search component for use in other parts of the app
