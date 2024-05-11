// import "./App.css";
import RequestBrowserPage from "./Pages/Donor/RequestBrowserPage/RequestBrowserPage.jsx";
import CheckoutPage from "./Pages/Donor/RequestBrowserPage/CheckoutPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [requests, setRequests] = useState([]);
  const handleCheckOut = (claimedRequests) => {
    setRequests(claimedRequests); // Update with the claimed requests array
  };
  console.log(requests);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/donate"
            element={
              <RequestBrowserPage onCheckOut={handleCheckOut} /> // Pass function
            }
          />
          <Route
            path="/checkout"
            element={<CheckoutPage claimedRequests={requests} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
