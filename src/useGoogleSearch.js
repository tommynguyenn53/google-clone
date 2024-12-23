import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "4115a1cf010a24a21";

const UseGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (term) {
      fetchData();
    }
  }, [term]);

  return { data };
};

export default UseGoogleSearch;
