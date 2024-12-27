// Importing necessary libraries and components
import React from 'react'; // React library to build the component
import './SearchPage.css'; // Importing CSS file for styling
import { useStateValue } from "../StateProvider"; // Importing the custom hook for state management (context API)
import Search from "../components/Search"; // Importing Search component for the search bar
import Response from "../response"; // Importing mock response data (currently commented out)
import { Link } from "react-router-dom"; // Link component for navigation between pages
import SearchIcon from "@mui/icons-material/Search"; // Search icon from Material UI
import DescriptionIcon from "@mui/icons-material/Description"; // Description icon for 'News' option
import ImageIcon from "@mui/icons-material/Image"; // Image icon for 'Images' option
import LocalOfferIcon from "@mui/icons-material/LocalOffer"; // Shopping icon for 'Shopping' option
import RoomIcon from "@mui/icons-material/Room"; // Maps icon for 'Maps' option
import MoreVertIcon from "@mui/icons-material/MoreVert"; // More icon for 'More' option
import useGoogleSearch from "../useGoogleSearch"; // Custom hook to fetch Google search results

// SearchPage component to display the search results based on the query
function SearchPage() {
    // Using useStateValue to get the current search term (default is 'tesla') and dispatch method
    const [{ term = 'tesla' }, dispatch] = useStateValue();

    // Fetching the search data using the custom hook (useGoogleSearch) with the search term
    const { data } = useGoogleSearch(term);

    console.log(data); // Log the fetched data for debugging

    return (
        <div className="searchPage">
            {/* Header section */}
            <div className="searchPage__header">
                {/* Google logo wrapped inside a Link to go back to the home page */}
                <Link to="/">
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt=""
                    />
                </Link>

                {/* Header body section containing the search bar and navigation options */}
                <div className="searchPage__headerBody">
                    {/* Search component with hideButtons prop to only show the input */}
                    <Search hideButtons />

                    {/* Options for search categories (All, News, Images, etc.) */}
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            {/* Link to All results */}
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            {/* Link to News results */}
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            {/* Link to Images results */}
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            {/* Link to Shopping results */}
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            {/* Link to Maps results */}
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            {/* Link to More options */}
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        {/* Options for settings and tools */}
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* If a search term exists, show the search results */}
            {term && (
                <div className="searchPage__results">
                    {/* Displaying the result count and search time */}
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results (
                        {data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {/* Mapping through the search results and displaying each item */}
                    {data?.items?.map((item, index) => (
                        <div className="searchPage__result" key={index}>
                            {/* Each search result is wrapped in a link */}
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {/* If there is an image associated with the result, show it */}
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className="searchPage__resultImage"
                                        src={item.pagemap.cse_image[0].src}
                                        alt={item.title}
                                    />
                                )}
                                {/* Display the result title */}
                                <h3 className="searchPage__resultTitle">{item.title}</h3>
                            </a>
                            {/* Display the result snippet and the display link */}
                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                            <p className="searchPage__resultLink">{item.displayLink}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchPage;
