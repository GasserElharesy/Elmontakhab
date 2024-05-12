import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

function LoginAdmin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here if needed
    onLogin();
  };

  return (
    <div className="container">
      <h1 className="heading">Welcome, Admin!</h1>
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
    </div>
  );
}

// Add prop types validation
LoginAdmin.propTypes = {
  onLogin: PropTypes.func.isRequired, // onLogin should be a function and required
};

export default LoginAdmin;
