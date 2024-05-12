import { useState } from "react";
import "./NotificationComponent.css"; // Import CSS file

const ChosenDonationComponent = () => {
  const [chosenPost, setChosenPost] = useState(null);
  const [deliveryConfirmed, setDeliveryConfirmed] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    contact: ""
  });

  const handleChoosePost = (post) => {
    setChosenPost(post);
    // Simulate receiving a notification when a donation post is chosen
    alert(`Donation post by ${post.donorName} has been chosen.`);
  };

  const handleCoordinateDelivery = () => {
    // Placeholder function for coordinating delivery
    console.log(`Coordinate delivery for donation post by ${chosenPost.donorName} confirmed.`);
    console.log("Delivery details:", deliveryDetails);
    // Here you can implement the actual coordination logic
    setDeliveryConfirmed(true); // Confirm delivery
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDeliveryDetails({ ...deliveryDetails, [name]: value });
  };

  // Your provided donation post
  const donationPost = {
    id: 1,
    category: "School Supplies",
    description: "Books for school children",
    postDate: "2024-05-10",
    quantity: 100,
    fulfilled: false,
    approved: true,
    donor: null 
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Donation Posts</h1>
      <div className="login-content">
        <h2 className="login-subtitle">Choose a Donation Post</h2>
        <table className="login-table">
          <thead>
            <tr>
              <th>Donor Name</th>
              <th>Post Type</th>
              <th>Post Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr key={donationPost.id}>
              <td>Unknown</td> {/* Display "Unknown" instead of donor name */}
              <td>{donationPost.category}</td>
              <td>Unknown</td> {/* Display "Unknown" instead of location */}
              <td>
                <button className="login-btn" onClick={() => handleChoosePost(donationPost)}>Choose Post</button>
              </td>
            </tr>
          </tbody>
        </table>
        {chosenPost && (
          <div className="coordinate-delivery-box">
            <h2 className="login-subtitle">Donation Details</h2>
            <p className="login-info">
              <strong>Category:</strong> {chosenPost.category}
            </p>
            <p className="login-info">
              <strong>Description:</strong> {chosenPost.description}
            </p>
            <p className="login-info">
              <strong>Post Date:</strong> {chosenPost.postDate}
            </p>
            <p className="login-info">
              <strong>Quantity:</strong> {chosenPost.quantity}
            </p>
            <h2 className="login-subtitle">Coordinate Delivery</h2>
            <p className="login-info">
              <strong>Donor Name:</strong> {chosenPost.donorName || "Unknown"}
            </p>
            <p className="login-info">
              <strong>Post Type:</strong> {chosenPost.category}
            </p>
            <p className="login-info">
              <strong>Post Location:</strong> {chosenPost.postLocation || "Unknown"}
            </p>
            <div className="delivery-details">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={deliveryDetails.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Delivery Address"
                value={deliveryDetails.address}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={deliveryDetails.contact}
                onChange={handleInputChange}
              />
            </div>
            <button className="login-btn" onClick={handleCoordinateDelivery} disabled={deliveryConfirmed}>
              {deliveryConfirmed ? "Delivery Confirmed" : "Confirm Delivery"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChosenDonationComponent;
