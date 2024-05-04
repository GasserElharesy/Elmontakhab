import "./style.css";
import { Link } from "react-router-dom";

function Login(props) {
  const handleLogin = () => {
    const writtenUser = document.getElementById("username").value;
    const writtenPass = document.getElementById("password").value;

    if (writtenUser === props.username && writtenPass === props.password) {
      if (checkIfDonor(writtenUser)) {
        console.log("Welcome donor: " + writtenUser);
        <Link to="/Pages/Donor/HomePage.jsx"></Link>;
      }
      if (checkIfOrganization(writtenUser)) {
        console.log("Welcome org: " + writtenUser);
        <Link to="/Pages/Organization/HomePage.jsx"></Link>;
      }
    } else {
      // TODO: Show error message.
      console.log("Incorrect username or password");
    }
  };

  const handleRegister = () => {
    // TODO: Send to register page.
    <Link to="/Pages/Register/Register.jsx"></Link>;
  };
  return (
    <>
      <div className="login-container">
        <form action="">
          <h1>Login</h1>
          <div className="login-input">
            <input id="username" type="text" placeholder="Username" />
            <input id="password" type="password" placeholder="Password" />
          </div>
          <div className="login-buttons">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
            <button className="login-button">Register</button>
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    </>
  );
}

function checkIfOrganization(username) {
  return username.includes(".org");
}

function checkIfDonor(username) {
  return username.includes(".com");
}

function checkIfValidAccount(username) {
  return (
    (checkIfOrganization(username) || checkIfDonor(username)) &&
    username.includes("@")
  );
}

export default Login;
