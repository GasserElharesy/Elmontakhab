import { useState } from "react";

function RegistrationButton() {
  const [registrationStatus, setRegistrationStatus] = useState(false);

  const handleRegistration = () => {
    setRegistrationStatus(true);
  };

  return (
    <div>
      <button onClick={handleRegistration} style={{ width: "20px", height: "30px", fontSize: "14px" }}>Register</button>
      {registrationStatus && <p>Registration is successful!</p>}
    </div>
  );
}

export default RegistrationButton;
