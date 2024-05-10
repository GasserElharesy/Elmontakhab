import React, { useState } from 'react';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import './App.css'; // Import CSS file

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;


import React, { useState } from 'react';
import './App.css'; // Import CSS file

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here if needed
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome, Admin!</h1>
        <form onSubmit={handleSubmit} className="login-form" style={{ textAlign: 'center', marginTop: '50px' }}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              style={{ fontSize: '16px', padding: '10px', borderRadius: '5px', marginBottom: '20px' }} // Adjusted styling
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              style={{ fontSize: '16px', padding: '10px', borderRadius: '5px', marginBottom: '20px' }} // Adjusted styling
            />
          </div>
          <button type="submit" className="button" style={{ fontSize: '16px', padding: '10px 20px', borderRadius: '5px' }}>Login</button> {/* Adjusted button styling */}
        </form>
      </div>
    </div>
  );
}

export default Login;



import React, { useState } from 'react';

import './App.css'; // Import CSS file

function AdminDashboard() {
 
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [organizationTableOpen, setOrganizationTableOpen] = useState(false);
  const [donorTableOpen, setDonorTableOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [organizationFilterCriteria, setOrganizationFilterCriteria] = useState({
    area: '',
    governorate: '',
    type: ''
  }); 
  const [donorFilterCriteria, setDonorFilterCriteria] = useState({
    type: ''
  }); 
  const [deletedOrganizations, setDeletedOrganizations] = useState([]);
  const [deletedDonors, setDeletedDonors] = useState([]);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordManagementOpen, setPasswordManagementOpen] = useState(false); // New state

  // Sample hardcoded organizations data
  const [organizationsData, setOrganizationsData] = useState([
    { id: 1, name: "Organization 1", area: "Area 1", governorate: "Governorate 1", type: "Type 1", contactdetails: "email1", address: "address1", location: "location1" },
    { id: 2, name: "Organization 2", area: "Area 2", governorate: "Governorate 2", type: "Type 2", contactdetails: "email2", address: "address2", location: "location2" },
    { id: 3, name: "Organization 3", area: "Area 3", governorate: "Governorate 3", type: "Type 3", contactdetails: "email3", address: "address3", location: "location3" },
    // Add more organizations as needed
  ]);

  // Sample hardcoded donors data
  const [donorsData, setDonorsData] = useState([
    { id: 1, name: "Donor 1", type: "Doctor", proBonoType: "", contactdetails: "email1", address: "address1", location: "location1" },
    { id: 2, name: "Donor 2", type: "Teacher", proBonoType: "Pro Bono", contactdetails: "email2", address: "address2", location: "location2" },
    // Add more donors as needed
  ]);

  const handleLogout = () => {
    // Implement logout functionality
    // Redirect user to login page
    window.location.href = '/Login';
  };

  const handlePasswordChange = () => {
    // Redirect to Login page upon password change
    window.location.href = '/Login';
  };

  const handleviewOrganization = () => {
    setOrganizationTableOpen(true);
    setDonorTableOpen(false);
  };

  const handleViewDonors = () => {
    setDonorTableOpen(true);
    setOrganizationTableOpen(false);
  };

  const handleOrganizationReview = () => {
    // Implement organization review functionality
  };

  const handleDonorReview = () => {
    // Implement donor review functionality
  };

  const handleOrganizationRequest = () => {
    // Implement organization request management
  };

  const handleDonorRequest = () => {
    // Implement donor request management
  };

  const handleCloseOrganizationTable = () => {
    setOrganizationTableOpen(false);
  };

  const handleCloseDonorTable = () => {
    setDonorTableOpen(false);
  };

  const handleOrganizationSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleOrganizationFilterChange = (e) => {
    const { name, value } = e.target;
    setOrganizationFilterCriteria(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDonorSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleDonorFilterChange = (e) => {
    const { name, value } = e.target;
    setDonorFilterCriteria(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDeleteOrganization = (id) => {
    const deletedOrg = organizationsData.find(org => org.id === id);
    setDeletedOrganizations([...deletedOrganizations, deletedOrg]);
    setOrganizationsData(organizationsData.filter(org => org.id !== id));
  };

  const handleDeleteDonor = (id) => {
    const deletedDonor = donorsData.find(donor => donor.id === id);
    setDeletedDonors([...deletedDonors, deletedDonor]);
    setDonorsData(donorsData.filter(donor => donor.id !== id));
  };

  const handleUndoDeleteOrganization = (id) => {
    const restoredOrg = deletedOrganizations.find(org => org.id === id);
    setOrganizationsData([...organizationsData, restoredOrg]);
    setDeletedOrganizations(deletedOrganizations.filter(org => org.id !== id));
  };

  const handleUndoDeleteDonor = (id) => {
    const restoredDonor = deletedDonors.find(donor => donor.id === id);
    setDonorsData([...donorsData, restoredDonor]);
    setDeletedDonors(deletedDonors.filter(donor => donor.id !== id));
  };

  const handleToggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const handleToggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handlePasswordManagementToggle = () => {
    setPasswordManagementOpen(!passwordManagementOpen);
  };

  return (
    <div className="admin-dashboard">
      <div className="navbar">
        <h1>Admin Dashboard</h1>
        {!sidebarOpen && <button onClick={toggleSidebar} className="button">Menu</button>}
      </div>
      
      {sidebarOpen && (
        <div className="sidebar">
          <h2>Menu</h2>
          <button onClick={closeSidebar} className="close-button">✕</button>
          <ul>
            <li><button onClick={handleviewOrganization} className="button">View Organizations List</button></li>
            <li><button onClick={handleViewDonors} className="button">View Donors List</button></li>
            <li><button onClick={handleOrganizationReview} className="button">Review Organization Submissions</button></li>
            <li><button onClick={handleDonorReview} className="button">Review Donor Submissions</button></li>
            <li><button onClick={handleOrganizationRequest} className="button">Manage Organization Requests</button></li>
            <li><button onClick={handleDonorRequest} className="button">Manage Donor Requests</button></li>
            <li><button onClick={handlePasswordManagementToggle} className="button">Password Management</button></li>
            <li><button onClick={handleLogout} className="button">Logout</button></li>
          </ul>
        </div>
      )}

      {organizationTableOpen && (
        <div className="table-container">
          <button onClick={handleCloseOrganizationTable} className="button">Close Table</button>
          <input type="text" placeholder="Search by name" onChange={handleOrganizationSearchChange} className="search-input" />
          
          <div className="filter-container">
            <label htmlFor="area">Area:</label>
            <select id="area" name="area" value={organizationFilterCriteria.area} onChange={handleOrganizationFilterChange}>
              <option value="">All</option>
              <option value="Area 1">Area 1</option>
              <option value="Area 2">Area 2</option>
              <option value="Area 3">Area 3</option>
            </select>

            <label htmlFor="governorate">Governorate:</label>
            <select id="governorate" name="governorate" value={organizationFilterCriteria.governorate} onChange={handleOrganizationFilterChange}>
              <option value="">All</option>
              <option value="Governorate 1">Governorate 1</option>
              <option value="Governorate 2">Governorate 2</option>
              <option value="Governorate 3">Governorate 3</option>
            </select>

            <label htmlFor="type">Organization Type:</label>
            <select id="type" name="type" value={organizationFilterCriteria.type} onChange={handleOrganizationFilterChange}>
              <option value="">All</option>
              <option value="Type 1">Type 1</option>
              <option value="Type 2">Type 2</option>
              <option value="Type 3">Type 3</option>
            </select>
          </div>
          
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Area</th>
                <th>Governorate</th>
                <th>Type</th>
                <th>Contact Details</th>
                <th>Address</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {organizationsData.map((organization, index) => (
                <tr key={index}>
                  <td>{organization.name}</td>
                  <td>{organization.area}</td>
                  <td>{organization.governorate}</td>
                  <td>{organization.type}</td>
                  <td>{organization.contactdetails}</td>
                  <td>{organization.address}</td>
                  <td>{organization.location}</td>
                  <td>
                    <button onClick={() => handleDeleteOrganization(organization.id)}>Delete</button>
                    <button onClick={() => handleUndoDeleteOrganization(organization.id)}>Undo</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {donorTableOpen && (
        <div className="table-container">
          <button onClick={handleCloseDonorTable} className="button">Close Table</button>
          <input type="text" placeholder="Search by name" onChange={handleDonorSearchChange} className="search-input" />
          
          <div className="filter-container">
            <label htmlFor="type">Donor Type:</label>
            <select id="type" name="type" value={donorFilterCriteria.type} onChange={handleDonorFilterChange}>
              <option value="">All</option>
              <option value="Doctor">Doctor</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Pro Bono Type</th>
                <th>Contact Details</th>
                <th>Address</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {donorsData.map((donor, index) => (
                <tr key={index}>
                  <td>{donor.name}</td>
                  <td>{donor.type}</td>
                  <td>{donor.proBonoType || 'N/A'}</td>
                  <td>{donor.contactdetails}</td>
                  <td>{donor.address}</td>
                  <td>{donor.location}</td>
                  <td>
                    <button onClick={() => handleDeleteDonor(donor.id)}>Delete</button>
                    <button onClick={() => handleUndoDeleteDonor(donor.id)}>Undo</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {passwordManagementOpen && (
        <div className="password-management">
          <h2>Password Management</h2>
          <button onClick={handlePasswordManagementToggle} className="close-button">✕</button>
          <div>
            <label htmlFor="oldPassword">Old Password:</label>
            <input
              type={showOldPassword ? "text" : "password"}
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <button onClick={handleToggleOldPasswordVisibility}>👁️</button>
          </div>
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleToggleNewPasswordVisibility}>👁️</button>
          </div>
          <button onClick={handlePasswordChange}>Change Password</button>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
