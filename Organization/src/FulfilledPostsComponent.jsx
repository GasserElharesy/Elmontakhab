import { useState } from "react";
import "./FulfilledPostsComponent.css";

export default function FulfilledPostsComponent() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      donorName: "John Doe",
      donorType: "Teacher",
      postLocation: "New York",
      postType: "Teaching",
      postStatus: "Fulfilled",
      donationDate: "2022-01-01",
      donorContact: "john.doe@example.com",
    },
    {
      id: 2,
      donorName: "Jane Smith",
      donorType: "Doctor",
      postLocation: "Los Angeles",
      postType: "Medical",
      postStatus: "Fulfilled",
      donationDate: "2022-02-01",
      donorContact: "jane.smith@example.com",
    },
  ]);

  const handleDeletePost = (postId) => {
    // Filter out the post with the given ID
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Fulfilled Posts</h1>
      <div className="login-content">
        <table className="login-table">
          <thead>
            <tr>
              <th>Post ID</th>
              <th>Donor Name</th>
              <th>Donor Type</th>
              <th>Post Location</th>
              <th>Post Type</th>
              <th>Post Status</th>
              <th>Donation Date</th>
              <th>Donor Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.donorName}</td>
                <td>{post.donorType}</td>
                <td>{post.postLocation}</td>
                <td>{post.postType}</td>
                <td>{post.postStatus}</td>
                <td>{post.donationDate}</td>
                <td>{post.donorContact}</td>
                <td>
                  <button className="login-btn" onClick={() => handleDeletePost(post.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
