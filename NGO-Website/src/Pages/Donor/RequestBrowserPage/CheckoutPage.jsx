import React, { useState, useEffect } from "react";

function CheckoutPage({ claimedRequests }) {
  // Receive claimed requests as prop
  const [checkoutStatus, setCheckoutStatus] = useState("PENDING");

  const [selectedDates, setSelectedDates] = useState({}); // Store selected dates for each request
  const [ETAs, setETAs] = useState({}); // Store ETA for each request

  const [confirmedRequests, setConfirmedRequests] = useState({}); // Track confirmed requests

  const handleConfirmDropoff = (requestId) => {
    // TODO: Implement your confirmation logic here
    // e.g., send the selected date and time to the backend,
    // update the checkoutStatus, etc.

    setConfirmedRequests((prevConfirmed) => ({
      ...prevConfirmed,
      [requestId]: true,
    }));

    console.log(
      `Drop-off confirmed for request ID ${requestId} on ${selectedDates[requestId]}`
    );
  };

  const handleRescheduleDropoff = (requestId) => {
    // TODO: Implement your reschedule logic here
    setConfirmedRequests((prevConfirmed) => ({
      ...prevConfirmed,
      [requestId]: false,
    }));
  };

  useEffect(() => {
    // ... Your existing useEffect logic to potentially change checkoutStatus ...

    // Logic to fetch/calculate ETA based on location and potentially other factors
    // (You'll need to replace this comment with your actual ETA calculation logic)
    // For example:
    claimedRequests.forEach((request) => {
      if (request.type !== "BLOOD_DONATION" && request.type !== "VOLUNTEER") {
        // Only for deliveries
        setETAs((prevETAs) => ({
          ...prevETAs,
          [request.id]: "Calculating...", // Initial ETA, replace with your logic
        }));

        // Replace with your actual ETA calculation logic (e.g., using a distance API)
        setTimeout(() => {
          setETAs((prevETAs) => ({
            ...prevETAs,
            [request.id]: "Approx. 30 mins", // Replace with calculated ETA
          }));
        }, 1000); // Simulating ETA calculation delay
      }
    });
  }, [claimedRequests]); // Update ETAs when claimedRequests change

  const handleDateChange = (requestId, date) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [requestId]: date,
    }));
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      {claimedRequests.length === 0 ? (
        <p className="checkout-empty">No claimed requests to display.</p>
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
                </div>
                <div className="status">Status: {checkoutStatus}</div>
                <div className="map-container">
                  {/* Integrate your map component here using 'location' */}
                </div>
                {request.type === "BLOOD_DONATION" ||
                request.type === "VOLUNTEER" ? (
                  <p>Please head to this location.</p>
                ) : (
                  <p>The delivery personnel will arrive at this location.</p>
                )}
                {request.type !== "BLOOD_DONATION" &&
                  request.type !== "VOLUNTEER" && (
                    <div className="dropoff-scheduling">
                      {confirmedRequests[request.id] ? (
                        // If confirmed, show date and reschedule button
                        <div>
                          <p>
                            Drop-off scheduled for: {selectedDates[request.id]}
                            <br />
                            Estimated Time of Arrival:{""}
                            {ETAs[request.id] || "N/A"}
                          </p>
                          <button
                            className="confirm-button"
                            onClick={() => handleRescheduleDropoff(request.id)}
                          >
                            Reschedule Drop-off
                          </button>
                        </div>
                      ) : (
                        // If not confirmed, show scheduling inputs
                        <>
                          <label htmlFor={`dropoff-date-${request.id}`}>
                            Schedule Drop-off:
                          </label>
                          <input
                            type="date"
                            id={`dropoff-date-${request.id}`}
                            value={selectedDates[request.id] || ""}
                            onChange={(e) =>
                              handleDateChange(request.id, e.target.value)
                            }
                          />
                          <p>
                            Estimated Time of Arrival:{" "}
                            {ETAs[request.id] || "N/A"}
                          </p>
                          <button
                            className="confirm-button"
                            onClick={() => handleConfirmDropoff(request.id)}
                          >
                            Confirm Drop-off
                          </button>
                        </>
                      )}
                    </div>
                  )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CheckoutPage;
