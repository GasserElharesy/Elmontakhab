// ButtonComponent.js

import { useHistory } from "react-router-dom";

const ButtonComponent = () => {
  const history = useHistory();

  const handleClick = () => {
    // Redirect to the desired page
    history.push("/Loginpage");
  };

  return <button onClick={handleClick}>Go to New Page</button>;
};

export default ButtonComponent;
