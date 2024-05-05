import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

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
      navigate("/Navigation"); // Use navigate instead of history.push
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>{" "}
      {/* Use navigate here as well */}
    </div>
  );
};

export default Login;
