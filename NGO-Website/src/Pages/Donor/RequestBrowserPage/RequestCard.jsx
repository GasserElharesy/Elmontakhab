import { useState } from "react";

function RequestCard({ request }) {
  const [claimStatus, setClaimStatus] = useState(false);
  const handelClaim = () => {
    setClaimStatus(!claimStatus);
  };
  return (
    <>
      <div className="request-card-container">
        <h3>{request.type}</h3>
        <h3>Quantity: {request.quantity}</h3>
        <p>{request.description}</p>
        <ul>
          {request.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <label className="claim-label">
          {claimStatus ? <h2>Claimed!</h2> : <h2>Not claimed!</h2>}
        </label>
        <button id="claim-button" onClick={() => handelClaim()}>
          Claim!
        </button>
      </div>
    </>
  );
}

export default RequestCard;
