import "./App.css";

import "./App.css";
import { useState } from "react";

function App() {
  const [role, setRole] = useState(""); // To store the role selected by the user

  const handleLogin = () => {
    // Here you would normally send a request to the backend
    // But since there's no backend, we'll just console.log for demonstration
    console.log(`Logged in as ${role}`);
    // Redirect to a different page or change the state to indicate successful login
  };

  return (
    <div className="login-page">
      <h2>Login as:</h2>
      <div>
        <button onClick={() => setRole("Donor")}>Donor</button>
        <button onClick={() => setRole("Organization")}>Organization</button>
      </div>
      {role && (
        <div>
          <p>You are logging in as a {role}. Is this correct?</p>
          <button onClick={handleLogin}>Yes, log in</button>
        </div>
      )}
    </div>
  );
}

export default App;
