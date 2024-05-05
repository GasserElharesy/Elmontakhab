import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import "./Navigation.css";
import Home from "./Home";

import DonationForm from "./DonationForm";
import NotificationComponent from "./NotificationComponent";
import FulfilledPostsComponent from "./FulfilledPostsComponent";

const Navigation = () => {
  return (
    <Router>
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
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DonationForm" element={<DonationForm />} />
          <Route path="/notifications" element={<NotificationComponent />} />
          <Route
            path="/fulfilled-posts"
            element={<FulfilledPostsComponent />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
