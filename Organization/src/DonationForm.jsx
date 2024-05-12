import  { useState } from "react";
import "./DonationForm.css"; // Import CSS file

const DonationForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    itemName: "",
    itemDescription: "",
    quantity: 1,
    expiryDate: "",
    contactInfo: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    console.log(formData);
    // Reset the form after submission
    setFormData({
      category: "",
      itemName: "",
      itemDescription: "",
      quantity: 1,
      date: "",
      contactInfo: ""
    });
  };

  return (
    <div className="form-container">
      <h2>Create Donation Post for Organizations</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a category</option>
            <option value="clothes">Clothes</option>
            <option value="toys">Toys</option>
            <option value="food">Food</option>
            <option value="medical supplies">Medical Supplies</option>
            <option value="school supplies">School Supplies</option>
            <option value="blood donations">Blood Donations</option>
          </select>
        </div>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Item Description:</label>
          <textarea
            name="itemDescription"
            value={formData.itemDescription}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            min="1"
            required
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contact Info:</label>
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Donation Post</button>
      </form>
    </div>
  );
};

export default DonationForm;
