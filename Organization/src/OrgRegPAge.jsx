import { useState } from "react";
import "./OrgRegPage.css"; // Import CSS file
import MapComponent from "./map";
import Login from "./Login";
// GenderPicker component for selecting gender

const GenderPicker = () => {
  const [gender, setGender] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <select value={gender} onChange={handleGenderChange}>
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  );
};

// FileUpload component for uploading documents
const FileUpload = () => {
  const handleFileChange = (e) => {
    // Here you can handle the file change, for example, you can upload it or process it.
    // For now, we just log it.
    console.log("File uploaded:", e.target.files[0]);
  };

  return <input type="file" onChange={handleFileChange} />;
};

const OrgRegPg = () => {
  const [showPage, setShowPage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    contactNumber: "",
    organizationName: "",
    organizationAddress: "",
    organizationArea: "",
    organizationGovernate: "",
  });
  const redirectToLogin = () => {
    //file
    setShowPage("done");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the formData to your backend API for processing
    // Reset form data after submission
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      password: "",
      contactNumber: "",
      organizationName: "",
      organizationAddress: "",
      organizationArea: "",
      organizationGovernate: "",
    });
  };

  return (
    <div className="container">
      <h2 className="heading">Organization Registration</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <GenderPicker />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="organizationName">Organization Name:</label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="organizationAddress">Organization Address:</label>
          <MapComponent />
        </div>
        <div>
          <label htmlFor="organizationArea">Organization Area:</label>
          <input
            type="text"
            id="organizationArea"
            name="organizationArea"
            value={formData.organizationArea}
            onChange={handleChange}
          />
        </div>
        {showPage === "done" && <Login />}
        <div>
          <label htmlFor="organizationGovernate">Organization Governate:</label>
          <input
            type="text"
            id="organizationGovernate"
            name="organizationGovernate"
            value={formData.organizationGovernate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="organizationDocuments">Organization Documents:</label>
          <FileUpload />
        </div>
        <button type="submit">Submit</button>
      </form>
      <br />
      <button onClick={redirectToLogin}>Back to Login</button>{" "}
    </div>
  );
};

export default OrgRegPg;
