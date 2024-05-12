import { useState } from "react";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [governate, setGovernate] = useState("");
  const [userType, setUserType] = useState("");
  const [documents, setDocuments] = useState(null);

  const handleFileChange = (event) => {
    setDocuments(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can use all the form data to send to your backend or do any other logic
    const formData = {
      firstName,
      lastName,
      gender,
      email,
      contactNumber,
      password,
      address,
      area,
      governate,
      userType,
      documents,
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact Number"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <textarea
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Area"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />
      <input
        type="text"
        placeholder="Governate"
        value={governate}
        onChange={(e) => setGovernate(e.target.value)}
      />
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="">Select User Type</option>
        <option value="regular">Regular</option>
        <option value="teacher">Teacher</option>
        <option value="doctor">Doctor</option>
      </select>
      {/* Conditionally render file upload input if userType is either teacher or doctor */}
      {(userType === "teacher" || userType === "doctor") && (
        <input type="file" onChange={handleFileChange} />
      )}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
