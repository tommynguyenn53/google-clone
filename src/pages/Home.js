// Importing necessary libraries and components
import React from 'react'; // React library to build the component
import './Home.css'; // Importing CSS file for styling
import { Link } from 'react-router-dom'; // Link component for navigation between pages
import AppsIcon from '@mui/icons-material/Apps'; // Importing AppsIcon from Material UI
import { Avatar } from "@mui/material"; // Importing Avatar component from Material UI
import Search from "../components/Search"; // Importing Search component to be used in the Home page

// Home component is the main entry point of the home page of the application.
function Home() {
    return (
        <div className="home"> {/* The main container of the home page */}
            
            {/* Header section with links and icons */}
            <div className="home__header">
                {/* Left part of the header with links to About and Store pages */}
                <div className="home__headerLeft">
                    <Link to="/about">About</Link> {/* Link to the About page */}
                    <Link to="/store">Store</Link> {/* Link to the Store page */}
                </div>

                {/* Right part of the header with links to Gmail, Images, and some icons */}
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link> {/* Link to the Gmail page */}
                    <Link to="/images">Images</Link> {/* Link to the Images page */}
                    <AppsIcon /> {/* Apps Icon to represent Google Apps */}
                    <Avatar /> {/* Avatar icon for user profile */}
                </div>
            </div>

            {/* Main body section with Google logo and search input */}
            <div className="home__body">
                {/* Google logo at the center of the page */}
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />

                {/* Input container that includes the Search component */}
                <div className="home__inputContainer">
                    <Search hideButtons /> {/* Search component, hiding buttons as per prop */}
                </div>
            </div>

        </div>
    )
}

// Exporting the Home component to be used in other parts of the application
export default Home;
