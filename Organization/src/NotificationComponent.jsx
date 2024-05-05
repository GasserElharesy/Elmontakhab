import { useState } from "react";

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
    <div>
      <h2>Donation Posts</h2>
      <table>
        <thead>
          <tr>
            <th>Donor Name</th>
            <th>Post Type</th>
            <th>Post Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donationPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.donorName}</td>
              <td>{post.postType}</td>
              <td>{post.postLocation}</td>
              <td>
                <button onClick={() => handleChoosePost(post)}>
                  Choose Post
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {chosenPost && (
        <div>
          <h3>Chosen Donation Post</h3>
          <p>
            <strong>Donor Name:</strong> {chosenPost.donorName}
          </p>
          <p>
            <strong>Post Type:</strong> {chosenPost.postType}
          </p>
          <p>
            <strong>Post Location:</strong> {chosenPost.postLocation}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChosenDonationComponent;
