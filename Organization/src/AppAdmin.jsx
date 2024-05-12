import { useState } from "react";
import LoginAdmin from "./LoginAdmin"; // Corrected import
import AdminDashboard from "./AdminDashboard";
// Import CSS file

function AppAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here (e.g., API call, authentication)
    // For simplicity, I'll just set isLoggedIn to true if username and password are correct
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        <LoginAdmin onLogin={handleLogin} />
      )}
    </div>
  );
}

export default AppAdmin;
