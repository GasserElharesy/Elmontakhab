import React, { useState, useEffect } from "react";

function CheckoutPage({ claimedRequests }) { // Receive claimed requests as prop
  const [checkoutStatus, setCheckoutStatus] = useState("PENDING");

  // ... useEffect logic to potentially change checkoutStatus ...


  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {claimedRequests.length === 0 ? (
        <p>No claimed requests to display.</p>
      ) : (
        <ul className="checkout-list">
          {claimedRequests.map((request, index) => (
            <li key={index}>
              <div className="request-details">
                {/* Display type, description, tags, etc. */}
                <h2>{request.type}</h2>
                <p>{request.description}</p>
                <ul>
                  {request.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="status">Status: {checkoutStatus}</div>
              <div className="map-container">
                {/* Integrate your map component here */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CheckoutPage;
