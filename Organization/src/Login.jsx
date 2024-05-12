import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Import CSS file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
  ];

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      navigate("/Navigation"); // Redirect to Navigation upon successful login
    } else {
      alert("Invalid username or password!");
    }
  };

  const handleRegister = () => {
    navigate("/register"); // Navigate to register page
  };

  return (
    <div className="container">
      <h2 className="heading">Login Page</h2>
      <div className="form">
        <div className="input-container">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
          <label className="label">Username</label>
        </div>
        <div className="input-container">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
          <label className="label">Password</label>
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
        <p className="register-text"> <span onClick={handleRegister} className="register-link">Register</span></p>
      </div>
    </div>
  );
};

export default Login;
