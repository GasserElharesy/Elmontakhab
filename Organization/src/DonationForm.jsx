import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import DonationForm from "./DonationForm";
import NotificationComponent from "./NotificationComponent";
import FulfilledPostsComponent from "./FulfilledPostsComponent";

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logic to handle logout, such as clearing session, state, etc.
    // For now, let's just navigate to the login page.
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/DonationForm">Request Donation</NavLink>
          </li>
          <li>
            <NavLink to="/notifications">Receive Notifications</NavLink>
          </li>
          <li>
            <NavLink to="/fulfilled-posts">View Fulfilled Posts</NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<NavigationMenu />} />
        <Route path="/DonationForm" element={<DonationForm />} /> {/* Render DonationForm component here */}
        <Route path="/notifications" element={<NotificationComponent />} />
        <Route path="/fulfilled-posts" element={<FulfilledPostsComponent />} />
      </Routes>
    </div>
  );
};

const NavigationMenu = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Redirect to the navigation menu
    navigate("/");
  };

  return (
    <div>
      <h1>Navigation Menu</h1>
      <ul>
        <li>
          <button onClick={handleHomeClick}>Home</button>
        </li>
        {/* Add other menu items as needed */}
      </ul>
    </div>
  );
};

export default Navigation;
