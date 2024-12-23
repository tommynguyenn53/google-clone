import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes} from "../reducer";

function Search({ hideButtons = false }) {

  const [{}, dispatch] = useStateValue()

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    if (input.trim() !== "") {
      navigate("/search"); // Navigate only when the input is not empty
    }

  };

  return (
    <form className="search" onSubmit={search}>
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MicIcon />
      </div>

        {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" variant="outlined">
                        Google Search
                    </Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>

            ) :(
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" variant="outlined">
                        Google Search
                    </Button>
                    <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
        )}


    </form>
  );
}

export default Search;
