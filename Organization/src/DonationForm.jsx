import { useState } from "react";

const DonationForm = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    category: "",
    details: "",
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data for approval
    console.log("Submitting donation post:", formData);
    // Here you would typically send the formData to your backend API for processing

    // Reset form data after submission
    setFormData({
      category: "",
      details: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Donation Details</h2>
      <div>
        <label htmlFor="category">Item Category:</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          <option value="clothes">Clothes</option>
          <option value="food">Food</option>
          <option value="books">Books</option>
          <option value="electronics">Electronics</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="details">Details:</label>
        <textarea
          name="details"
          id="details"
          value={formData.details}
          onChange={handleChange}
          rows="4"
        ></textarea>
      </div>
      <button type="submit">Submit for Approval</button>
    </form>
  );
};

export default DonationForm;
