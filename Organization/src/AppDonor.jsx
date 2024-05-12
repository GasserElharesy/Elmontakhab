import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginDonor from "./LoginDonor";
import Donordashboard from "./DonationDashboard";
import RequestBrowserPage from "./RequestBrowserPage/RequestBrowserPage";
import CheckoutPage from "./RequestBrowserPage/CheckoutPage";

function AppDonor() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [requests, setRequests] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleCheckOut = (claimedRequests) => {
    setRequests(claimedRequests);
    console.log(claimedRequests);
  };

  return (
    <Router>
         <Routes>
            <Route
            exact
            path="/"
    element=  {<div className="App">
        {isLoggedIn ? (
          <Donordashboard onLogout={handleLogout} />
        ) : (
          <LoginDonor onLogin={handleLogin} />
        )}
      </div>}
      />
     
        <Route
          exact
          path="/donate"
          element={<RequestBrowserPage onCheckOut={handleCheckOut} />}
        />
        <Route
          exact
          path="/checkout"
          element={<CheckoutPage claimedRequests={requests} />}
        />
      </Routes>
    </Router>
  );
}

export default AppDonor;
