import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Navigate to the current location, effectively staying in the same page
    navigate(".", { replace: true });
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>This is your home page content.</p>
      <button onClick={handleHomeClick}>Stay Here</button>
    </div>
  );
};

export default Home;
