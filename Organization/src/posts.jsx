import React, { useState } from "react";
import "./posts.css"; // Import the CSS file

function DonationManagement() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      category: "School Supplies",
      description: "Books for school children",
      postDate: "2024-05-10",
      quantity: 100,
      fulfilled: false,
      approved: true,
      donor: null,
    },
    {
      id: 2,
      category: "Clothes",
      description: "We need clothes for the homeless.",
      postDate: "2024-05-09",
      quantity: 50,
      fulfilled: true,
      approved: true,
      donor: {
        name: "John Doe",
        email: "johndoe@example.com",
        phoneNumber: "123-456-7890",
        address: "123 Main St, Anytown, USA",
      },
    },
    {
      id: 3,
      category: "Books",
      description: "Educational books for ages 10-15",
      postDate: "2024-05-08",
      quantity: 75,
      fulfilled: false,
      approved: true,
      donor: null,
    },
  ]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedPost, setEditedPost] = useState({});

  const handleUpdatePost = (id, data) => {
    setPosts(
      posts.map((post) => (post.id === id ? { ...post, ...data } : post))
    );
    setEditMode(false);
    setSelectedPost(null);
    setEditedPost({});
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleEditClick = (post) => {
    setSelectedPost(post);
    setEditedPost({ ...post }); // Copy the post data to editedPost
    setEditMode(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setEditedPost({ ...editedPost, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdatePost(selectedPost.id, editedPost);
  };

  return (
    <div className="container">
      <h2 className="heading">Donation Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          {selectedPost === post && editMode ? (
            <form onSubmit={handleSubmit} className="form">
              <label>
                Post Date:
                <input
                  type="date"
                  name="postDate"
                  value={editedPost.postDate || ""}
                  onChange={handleFormChange}
                  className="input"
                />
              </label>
              <label>
                Category:
                <input
                  type="text"
                  name="category"
                  value={editedPost.category || ""}
                  onChange={handleFormChange}
                  className="input"
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={editedPost.description || ""}
                  onChange={handleFormChange}
                  className="input"
                />
              </label>
              <label>
                Quantity:
                <input
                  type="number"
                  name="quantity"
                  value={editedPost.quantity || ""}
                  onChange={handleFormChange}
                  className="input"
                />
              </label>
              <label>
                Fulfilled:
                <input
                  type="checkbox"
                  name="fulfilled"
                  checked={editedPost.fulfilled || false}
                  onChange={handleCheckboxChange}
                />
              </label>
              <label>
                Approved:
                <input
                  type="checkbox"
                  name="approved"
                  checked={editedPost.approved || false}
                  onChange={handleCheckboxChange}
                />
              </label>
              <button type="submit" className="login-button">
                Save Changes
              </button>
            </form>
          ) : (
            <React.Fragment>
              <h3>{post.category}</h3>
              <p>Description: {post.description}</p>
              <p>Post Date: {post.postDate}</p>
              <p>Quantity: {post.quantity}</p>
              <p>Fulfilled: {post.fulfilled ? "Yes" : "No"}</p>
              <p>Approved: {post.approved ? "Yes" : "No"}</p>
              <button onClick={() => handleEditClick(post)}>Edit</button>
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
              {post.donor && (
                <div className="donor-details">
                  <h4>Donor Details</h4>
                  <p>Name: {post.donor.name}</p>
                  <p>Email: {post.donor.email}</p>
                  <p>Phone Number: {post.donor.phoneNumber}</p>
                  <p>Address: {post.donor.address}</p>
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      ))}
    </div>
  );
}

export default DonationManagement;
