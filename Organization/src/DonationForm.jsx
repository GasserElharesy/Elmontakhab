

import { useState } from "react";

const DonationForm = () => {
  // State for form inputs
  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [expiryDate, setExpiryDate] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend or handle it as needed
    console.log("Form submitted:", { category, itemName, itemDescription, quantity, expiryDate });
    // Clear form fields after submission
    setCategory("");
    setItemName("");
    setItemDescription("");
    setQuantity(1);
    setExpiryDate("");
  };

  return (
    <div>
      <h2>Create Donation Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select category</option>
            <option value="Clothes">Clothes</option>
            <option value="Toys">Toys</option>
            <option value="Food">Food</option>
            <option value="Medical Supplies">Medical Supplies</option>
            <option value="School Supplies">School Supplies</option>
            <option value="Blood Donations">Blood Donations</option>
          </select>
        </div>
        <div>
          <label>Item Name:</label>
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </div>
        <div>
          <label>Item Description:</label>
          <textarea value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DonationForm;
