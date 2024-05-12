import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import RegistrationForm from "./RegistrationForm";
function LoginDonor({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPage, setShowPage] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here if needed
    onLogin();
  };

  const handleRegister = () => {
    // Add logic to navigate to the registration page or any other action
    setShowPage("requests");
  };

  return (
    <div className="container">
      <h1 className="heading">Welcome, Donor!</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-container">
          <input
            type="text"
            id="username"
            placeholder=" "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
          <label htmlFor="username" className="label">
            Username
          </label>
        </div>
        {showPage === "requests" && <RegistrationForm />}
        <div className="input-container">
          <input
            type="password"
            id="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <button onClick={handleRegister} className="register-button">
        Register
      </button>
    </div>
  );
}

// Add prop types validation
LoginDonor.propTypes = {
  onLogin: PropTypes.func.isRequired, // onLogin should be a function and required
};

export default LoginDonor;
