const DonorDetailsComponent = () => {
  const fulfilledPosts = [
    {
      id: 1,
      donorName: "John Doe",
      donorType: "Teacher",
      postLocation: "New York",
      postType: "Teaching",
      postStatus: "Fulfilled",
      donationDate: "2022-01-01",
    },
    {
      id: 2,
      donorName: "Jane Smith",
      donorType: "Doctor",
      postLocation: "Los Angeles",
      postType: "Medical",
      postStatus: "Fulfilled",
      donationDate: "2022-02-01",
    },
  ];

  const handleDeletePost = (postId) => {
    // Implement logic to delete the post with the given ID
    console.log(`Deleting post with ID: ${postId}`);
  };

  const handleUpdatePost = (postId) => {
    // Implement logic to update the post with the given ID
    console.log(`Updating post with ID: ${postId}`);
  };

  return (
    <div>
      <h2>Donor Details for Fulfilled Posts</h2>
      <table>
        <thead>
          <tr>
            <th>Donor Name</th>
            <th>Donor Type</th>
            <th>Post Location</th>
            <th>Post Type</th>
            <th>Post Status</th>
            <th>Donation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fulfilledPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.donorName}</td>
              <td>{post.donorType}</td>
              <td>{post.postLocation}</td>
              <td>{post.postType}</td>
              <td>{post.postStatus}</td>
              <td>{post.donationDate}</td>
              <td>
                <button onClick={() => handleUpdatePost(post.id)}>
                  Update
                </button>
                <button onClick={() => handleDeletePost(post.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonorDetailsComponent;
