// src/GenderPicker.jsx
import { useState } from "react";
import PropTypes from "prop-types";

export default function GenderPicker({ onSelect }) {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedGender(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div>
      <label htmlFor="gender">Select Gender:</label>
      <select id="gender" value={selectedGender} onChange={handleGenderChange}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

GenderPicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
