import { useState } from "react";
import "./NotificationComponent.css"; // Import CSS file

const ChosenDonationComponent = () => {
  const [chosenPost, setChosenPost] = useState(null);

  const handleChoosePost = (post) => {
    setChosenPost(post);
    // Simulate receiving a notification when a donation post is chosen
    alert(`Donation post by ${post.donorName} has been chosen.`);
  };

  const donationPosts = [
    {
      id: 1,
      donorName: "John Doe",
      postType: "Clothing",
      postLocation: "New York",
    },
    {
      id: 2,
      donorName: "Jane Smith",
      postType: "Books",
      postLocation: "Los Angeles",
    },
  ];

  return (
    <div className="login-container">
      <h1 className="login-title" style={{ color: "#0CC" }}>Donation Posts</h1>
      <div className="login-content">
        <h2 className="login-subtitle" style={{ color: "#0CC" }}>Choose a Donation Post</h2>
        <table className="login-table">
          <thead>
            <tr>
              <th style={{ color: "#0CC" }}>Donor Name</th>
              <th style={{ color: "#0CC" }}>Post Type</th>
              <th style={{ color: "#0CC" }}>Post Location</th>
              <th style={{ color: "#0CC" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donationPosts.map((post) => (
              <tr key={post.id}>
                <td style={{ color: "#0CC" }}>{post.donorName}</td>
                <td style={{ color: "#0CC" }}>{post.postType}</td>
                <td style={{ color: "#0CC" }}>{post.postLocation}</td>
                <td>
                  <button className="login-btn" onClick={() => handleChoosePost(post)}>Choose Post</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {chosenPost && (
          <div className="chosen-post">
            <h2 className="login-subtitle" style={{ color: "#0CC" }}>Chosen Donation Post</h2>
            <p className="login-info" style={{ color: "#0CC" }}>
              <strong>Donor Name:</strong> {chosenPost.donorName}
            </p>
            <p className="login-info" style={{ color: "#0CC" }}>
              <strong>Post Type:</strong> {chosenPost.postType}
            </p>
            <p className="login-info" style={{ color: "#0CC" }}>
              <strong>Post Location:</strong> {chosenPost.postLocation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChosenDonationComponent;
