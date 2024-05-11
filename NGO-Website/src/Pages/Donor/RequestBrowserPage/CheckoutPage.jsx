import React, { useState, useEffect } from "react";

function CheckoutPage({ claimedRequests }) {
  // Receive claimed requests as prop
  const [checkoutStatus, setCheckoutStatus] = useState("PENDING");

  // ... useEffect logic to potentially change checkoutStatus ...

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      {claimedRequests.length === 0 ? (
        <p>No claimed requests to display.</p>
      ) : (
        <ul className="checkout-list">
          {claimedRequests.map((request, index) => {
            const { type, description, tags, quantity, location } = request;

            return (
              <li key={index}>
                <div className="request-details">
                  <h2>{type}</h2>
                  <p>{description}</p>
                  <ul>
                    {tags.map((tag, tagIndex) => (
                      <li key={tagIndex}>{tag}</li>
                    ))}
                  </ul>
                  <p>Quantity: {quantity}</p>
                  <p>Location: {location}</p>
                </div>
                <div className="status">Status: {checkoutStatus}</div>
                <div className="map-container">
                  {/* Integrate your map component here using 'location' */}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CheckoutPage;
