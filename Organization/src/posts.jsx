import { useState } from 'react';
import './posts.css'; // Import the CSS file

function DonationManager() {
  // Hardcoded data for demonstration
  const [donations, setDonations] = useState([
    {
      id: 1,
      category: 'School Supplies',
      details: 'Books for school children',
      quantity: 50,
      postDate: '2024-05-10',
      fulfilled: false,
      approved: true,
      donor: null
    },
    {
      id: 2,
      category: 'Clothes',
      details: 'We need clothes for the homeless.',
      quantity: 20,
      postDate: '2024-05-09',
      fulfilled: true,
      approved: true,
      donor: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phoneNumber: '123-456-7890',
        address: '123 Main St, Anytown, USA'
      }
    },
    {
      id: 3,
      category: 'Food',
      details: 'Food for homeless shelter',
      quantity: 100,
      postDate: '2024-05-08',
      fulfilled: false,
      approved: false,
      donor: null
    }
  ]);

  const [selectedDonation, setSelectedDonation] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({
    id: null,
    category: '',
    details: '',
    quantity: 0,
    postDate: '',
    fulfilled: false,
    approved: false,
    donor: null
  });

  // Function to delete donation post
  const handleDeletePost = (donationId) => {
    // Delete the selected donation
    setDonations(donations.filter(donation => donation.id !== donationId));
    // Clear selected donation
    setSelectedDonation({});
  };

  // Function to handle updating a donation
  const handleUpdateDonation = () => {
    // Update the donation with the updated details
    const updatedDonations = donations.map(donation => {
      if (donation.id === updatedDetails.id) {
        return { ...updatedDetails };
      }
      return donation;
    });
    setDonations(updatedDonations);
    setUpdatedDetails({
      id: null,
      category: '',
      details: '',
      quantity: 0,
      postDate: '',
      fulfilled: false,
      approved: false,
      donor: null
    });
    setSelectedDonation({}); // Close the update form
  };

  return (
    <div className="donation-manager-container">
      <h2 className="donation-manager-title">Donation Manager</h2>
      <div className="donation-manager-content">
        {/* Donation posts list */}
        <div className="donation-posts">
          <h3 className="donation-posts-title">Donation Posts</h3>
          <ul className="donation-posts-list">
            {donations.map(donation => (
              <li key={donation.id} className="donation-post">
                <div className="donation-post-header">
                  <strong>Category:</strong> {donation.category} <br />
                  <strong>Details:</strong> {donation.details} <br />
                  <strong>Quantity:</strong> {donation.quantity} <br />
                  <strong>Post Date:</strong> {donation.postDate} <br />
                  <strong>Approved:</strong> {donation.approved ? "Yes" : "No"} <br />
                  {donation.fulfilled && (
                    <>
                      <strong>Fulfilled:</strong> Yes <br />
                      {donation.donor && (
                        <>
                          <strong>Donor:</strong> {donation.donor.name} <br />
                          <strong>Email:</strong> {donation.donor.email} <br />
                          <strong>Phone Number:</strong> {donation.donor.phoneNumber} <br />
                          <strong>Address:</strong> {donation.donor.address} <br />
                        </>
                      )}
                    </>
                  )}
                </div>
                <div className="donation-post-buttons">
                  {/* Button to update donation */}
                  <button onClick={() => setUpdatedDetails({...donation})} className="donation-btn">Edit</button>
                  {/* Delete button for all donations */}
                  <button onClick={() => handleDeletePost(donation.id)} className="donation-btn">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Selected donation post details or update form */}
        {selectedDonation.id !== undefined && (
          <div className="donation-update-form">
            <h3 className="donation-update-title">Update Donation</h3>
            <div className="donation-update-info">
              <input
                type="text"
                placeholder="Category"
                value={updatedDetails.category}
                onChange={(e) => setUpdatedDetails({ ...updatedDetails, category: e.target.value })}
                className="donation-update-input"
              />
              <textarea
                placeholder="Details"
                value={updatedDetails.details}
                onChange={(e) => setUpdatedDetails({ ...updatedDetails, details: e.target.value })}
                className="donation-update-input"
              />
              <input
                type="number"
                placeholder="Quantity"
                value={updatedDetails.quantity}
                onChange={(e) => setUpdatedDetails({ ...updatedDetails, quantity: parseInt(e.target.value) })}
                className="donation-update-input"
              />
              <input
                type="text"
                placeholder="Post Date"
                value={updatedDetails.postDate}
                onChange={(e) => setUpdatedDetails({ ...updatedDetails, postDate: e.target.value })}
                className="donation-update-input"
              />
              <select
                value={updatedDetails.approved}
                onChange={(e) => setUpdatedDetails({ ...updatedDetails, approved: e.target.value === "true" })}
                className="donation-update-input"
              >
                <option value={true}>Approved</option>
                <option value={false}>Not Approved</option>
              </select>
            </div>
            <div className="donation-update-buttons">
              <button onClick={handleUpdateDonation} className="donation-btn">Update</button>
              <button onClick={() => setSelectedDonation({})} className="donation-btn">Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DonationManager;
