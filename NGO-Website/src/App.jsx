// import "./App.css";
import RequestBrowserPage from "./Pages/Donor/RequestBrowserPage/RequestBrowserPage.jsx";
import CheckoutPage from "./Pages/Donor/RequestBrowserPage/CheckoutPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [requests, setRequests] = useState([]);
  console.log(requests);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/donate"
            element={
              <RequestBrowserPage
                onCheckOut={(r) => setRequests((requests) => [...requests, ...r])}
              />
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
