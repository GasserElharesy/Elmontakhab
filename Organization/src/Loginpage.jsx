import { useState } from "react";
import orgregpg from "./orgregpg";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents form submission
    // Here you can add your login logic
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset fields after logging in
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>

        <button onClick={orgregpg} type="register">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
