import { useState } from "react";
import PropTypes from "prop-types";
import DonationDashboard from "./DonationDashboard";

const DonationPickup = ({ closeSidebar }) => {
  const [pickupVehicle, setPickupVehicle] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [ETA, setETA] = useState("");
  const [showPage, setShowPage] = useState(null);

  const handlePickupVehicleChange = (e) => {
    setPickupVehicle(e.target.value);
  };

  const handlePickupTimeChange = (e) => {
    setPickupTime(e.target.value);
  };

  const handleViewETA = () => {
    // Calculate and set the ETA
    // For demonstration purposes, let's set it to a fixed value
    setETA("ETA: 2 hours");
  };

  const handleConfirmPickup = () => {
    // Implement functionality to confirm the pickup
    setShowPage("done");
  };

  const handleCancel = () => {
    // Cancel pickup, go back to DonationDashboard
    setShowPage("done");
  };

  return (
    <div>
      {showPage !== "done" && ( // Conditional rendering
        <div className="donation-pickup-container">
          <div className="donation-pickup-sidebar">
            <h3>Donation Pickup</h3>
            <button onClick={handleCancel}>✕</button> {/* Cancel button */}
            <div className="pickup-details">
              <label htmlFor="pickup-vehicle">Choose Pickup Vehicle:</label>
              <select
                id="pickup-vehicle"
                value={pickupVehicle}
                onChange={handlePickupVehicleChange}
              >
                <option value="">Select</option>
                <option value="truck">Truck</option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
              <button onClick={handleViewETA}>View ETA</button>
              {ETA && <p>{ETA}</p>}
              <label htmlFor="pickup-time">Pickup Time:</label>
              <input
                type="datetime-local"
                id="pickup-time"
                value={pickupTime}
                onChange={handlePickupTimeChange}
              />
              <button onClick={handleConfirmPickup}>Confirm Pickup</button>
            </div>
          </div>
        </div>
      )}
      {showPage === "done" && <DonationDashboard closeSidebar={closeSidebar} />}
    </div>
  );
};

DonationPickup.propTypes = {
  closeSidebar: PropTypes.func.isRequired,
};

export default DonationPickup;
