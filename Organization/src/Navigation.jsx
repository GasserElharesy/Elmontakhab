import { NavLink, Routes, Route } from "react-router-dom";
import DonationForm from "./DonationForm";
import NotificationComponent from "./NotificationComponent";
import FulfilledPostsComponent from "./FulfilledPostsComponent";
import Home from "./Home";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
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
        <Route path="/fulfilled-posts" element={<FulfilledPostsComponent />} />
      </Routes>
    </div>
  );
};

export default Navigation;
