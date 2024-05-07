import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donationPosts: [
        { id: 1, title: "Donation 1", description: "Description of Donation 1", amount: 100 },
        { id: 2, title: "Donation 2", description: "Description of Donation 2", amount: 200 },
        { id: 3, title: "Donation 3", description: "Description of Donation 3", amount: 300 }
      ],
      postId: '',
      updatedTitle: '',
      updatedDescription: '',
      updatedAmount: ''
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleUpdate = () => {
    const { postId, updatedTitle, updatedDescription, updatedAmount } = this.state;
    // Find the index of the post to update
    const index = this.state.donationPosts.findIndex(post => post.id === parseInt(postId));
    if (index !== -1) {
      // Update the post
      const updatedPosts = [...this.state.donationPosts];
      updatedPosts[index] = {
        ...updatedPosts[index],
        title: updatedTitle || updatedPosts[index].title,
        description: updatedDescription || updatedPosts[index].description,
        amount: updatedAmount || updatedPosts[index].amount
      };
      // Update state with the new array of posts
      this.setState({ donationPosts: updatedPosts });
      // Clear input fields
      this.setState({ postId: '', updatedTitle: '', updatedDescription: '', updatedAmount: '' });
    } else {
      console.error('Post not found');
    }
  };

  handleDelete = postId => {
    // Filter out the post to be deleted
    const updatedPosts = this.state.donationPosts.filter(post => post.id !== postId);
    // Update state with the new array of posts
    this.setState({ donationPosts: updatedPosts });
  };

  render() {
    return (
      <div>
        <h1>Donation Posts Management</h1>
        <h2>View Donation Posts</h2>
        <ul>
          {this.state.donationPosts.map(post => (
            <li key={post.id}>
              {post.title} - {post.description} - ${post.amount}
              <button onClick={() => this.handleDelete(post.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <h2>Update Donation Post</h2>
        <input type="text" name="postId" placeholder="Post ID" value={this.state.postId} onChange={this.handleInputChange} />
        <input type="text" name="updatedTitle" placeholder="Updated Title" value={this.state.updatedTitle} onChange={this.handleInputChange} />
        <input type="text" name="updatedDescription" placeholder="Updated Description" value={this.state.updatedDescription} onChange={this.handleInputChange} />
        <input type="number" name="updatedAmount" placeholder="Updated Amount" value={this.state.updatedAmount} onChange={this.handleInputChange} />
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}

export default Posts;
