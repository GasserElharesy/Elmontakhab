import { useState } from "react";
import App from "./App";
import AppAdmin from "./AppAdmin.jsx";
import AppDonor from "./AppDonor.jsx";
function App1() {
  const [userType, setUserType] = useState(null);

  const continueAs = (userType) => {
    // Set the userType in state
    setUserType(userType);
  };

  const renderUserTypeComponent = () => {
    switch (userType) {
      case "admin":
        return <AppAdmin />; // Return the component itself, not the function call
      case "organization":
        return <App />; // Return the component itself, not the function call
      case "donor" :
        return <AppDonor />; // Return the component itself, not the function call
      default:
        return null; // Render nothing if userType is not set
    }
  };

  return (
    <div>
      {userType ? (
        // If userType is set, render the corresponding component
        renderUserTypeComponent()
      ) : (
        // If userType is not set, show the welcome message and buttons
        <div>
          <h1>Welcome to our platform!</h1>
          <div>
            <button onClick={() => continueAs("admin")}>
              Continue as an Admin
            </button>
            <button onClick={() => continueAs("donor")}>
              Continue as a Donor
            </button>
            <button onClick={() => continueAs("organization")}>
              Continue as an Organization
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App1;
