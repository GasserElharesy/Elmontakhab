import { useState } from "react";
import "./style.css";

function Request(props) {
  const [claimStatus, setClaimStatus] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleOnClaim = () => {
    setClaimStatus(!claimStatus);
    props.onClaim(quantity); // Call the function passed from the parent
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10)); // Update the quantity
  };

  return (
    <>
      <div className="request-container">
        <h2 className="request-type">{props.type}</h2>
        <p className="request-description">{props.description}</p>
        <ul className="request-tags">
          {props.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <div className="request-claim-section">
          <button onClick={handleOnClaim}>
            {claimStatus ? "Claimed!" : "Claim"}
          </button>
          {(props.type === 'VOLUNTEER' || props.type === 'BLOOD_DONATION')? <></> : <select
            name=""
            id=""
            value={quantity}
            onChange={handleQuantityChange}
          >
            <option value={1}>Quantity x1</option>
            <option value={2}>Quantity x2</option>
            <option value={3}>Quantity x3</option>
            <option value={4}>Quantity x4</option>
            <option value={5}>Quantity x5</option>
            <option value={6}>Quantity x6</option>
          </select>}
        </div>
      </div>
    </>
  );
}

export default Request;
