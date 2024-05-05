import { useState } from "react";

function RegistrationButton() {
  const [registrationStatus, setRegistrationStatus] = useState(false);

  const handleRegistration = () => {
    setRegistrationStatus(true);
  };

  return (
    <div>
      <button onClick={handleRegistration}>Register</button>
      {registrationStatus && <p>Registration is successful!</p>}
    </div>
  );
}

export default RegistrationButton;
