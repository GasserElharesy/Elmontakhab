import { useState } from "react";
import DonationForm from "./DonationForm";
import NotificationComponent from "./NotificationComponent";
import FulfilledPostsComponent from "./FulfilledPostsComponent";
import Home from "./Home";
import "./Navigation.css"; // Import CSS file
import Posts from "./posts"; // Correct import for Posts component

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage navigation visibility

  const renderPage = () => {
    switch (currentPage) {
      case "donationForm":
        return <DonationForm />;

      case "view my posts": // Adjusted case to "view my posts"
        return <Posts />; // Corrected reference to the Posts component

      case "notifications":
        return <NotificationComponent />;
      case "fulfilledPosts":
        return <FulfilledPostsComponent />;
      case "home":
      default:
        return <Home />;
    }
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsNavOpen(false); // Close navigation after selecting a page
  };

  const handleLogout = () => {
    // Clear any stored user data or tokens
    localStorage.removeItem("userData");
    localStorage.removeItem("token");

    // Redirect the user to the login page
    window.location.href = "/login";

    alert("Logged out!");
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle navigation visibility
  };

  return (
    <div className="navigation-container">
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>{" "}
      {/* Toggle icon */}
      {isNavOpen && ( // Render navigation if isNavOpen is true
        <nav>
          <ul>
            <li>
              <button onClick={() => handleNavigation("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => handleNavigation("view my posts")}>
                View My Posts {/* Changed label to match the case */}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("donationForm")}>
                Request Donation
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("notifications")}>
                Receive Notifications
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("fulfilledPosts")}>
                View Fulfilled Posts
              </button>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
      {renderPage()}
    </div>
  );
};

export default Navigation;
