import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RequestBrowserPage from "./RequestBrowserPage/RequestBrowserPage";
import ProBono from "./ProBono";
import LoginDonor from "./LoginDonor";
import DonationPickup from "./donationpickup"; // Import the DonationPickup component

function DonorDashboard() {
  const [showPage, setShowPage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordManagementOpen, setPasswordManagementOpen] = useState(false);
  const [organizationTableOpen, setOrganizationTableOpen] = useState(false);
  const navigate = useNavigate();
  const [organizationFilterCriteria, setOrganizationFilterCriteria] = useState({
    area: "",
    governorate: "",
    type: "",
  });
  const [organizationsData, setOrganizationsData] = useState([
    {
      id: 1,
      name: "Organization 1",
      area: "Area 1",
      governorate: "Governorate 1",
      type: "Type 1",
      contactdetails: "email1",
      address: "address1",
      location: "location1",
    },
    {
      id: 2,
      name: "Organization 2",
      area: "Area 2",
      governorate: "Governorate 2",
      type: "Type 2",
      contactdetails: "email2",
      address: "address2",
      location: "location2",
    },
    {
      id: 3,
      name: "Organization 3",
      area: "Area 3",
      governorate: "Governorate 3",
      type: "Type 3",
      contactdetails: "email3",
      address: "address3",
      location: "location3",
    },
  ]);

  const handleOrganizationFilterChange = (e) => {
    const { name, value } = e.target;
    setOrganizationFilterCriteria((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    setShowPage("logout");
  };

  const handlePasswordChange = () => {
    // Implement password change functionality
  };

  const HandleBrowseRequests = () => {
    setShowPage("requests");
    navigate("/donate");
  };

  const handleProBono = () => {
    setShowPage("probono");
  };

  const handleOrganizationReview = () => {
    setOrganizationTableOpen(true);
  };

  const handleDonationPickup = () => {
    setShowPage("donationpickup");
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
    <div>
      {showPage === null && (
        <div>
          <div className="navigation-container">
            <h1>Donor Dashboard</h1>
            {!sidebarOpen && (
              <button className="menu-button" onClick={toggleSidebar}>
                Menu
              </button>
            )}
          </div>
          {sidebarOpen && (
            <div className="tm-header">
              <h2>Menu</h2>
              <button onClick={closeSidebar}>✕</button>
              <ul className="tm-nav">
                <li className="tm-nav-item">
                  <button
                    className="tm-nav-link"
                    onClick={HandleBrowseRequests}
                  >
                    Browse Organizations request
                  </button>
                </li>
                <li className="tm-nav-item">
                  <button className="tm-nav-link" onClick={handleProBono}>
                    Apply for pro bono
                  </button>
                </li>
                <li className="tm-nav-item">
                  <button
                    className="tm-nav-link"
                    onClick={handleOrganizationReview}
                  >
                    Review Registered Organizations
                  </button>
                </li>
                <li className="tm-nav-item">
                  <button className="tm-nav-link" onClick={handleDonationPickup}>
                    Donation Pickup 
                  </button>
                </li>
                <li className="tm-nav-item">
                  <button
                    className="tm-nav-link"
                    onClick={handleLogout}
                  >
                    logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
      {organizationTableOpen && (
        <div className="table-container">
          <button onClick={() => setOrganizationTableOpen(false)}>
            Close Table
          </button>

          <div>
            <label htmlFor="area">Area:</label>
            <select
              id="area"
              name="area"
              value={organizationFilterCriteria.area}
              onChange={handleOrganizationFilterChange}
            >
              <option value="">All</option>
              <option value="Area 1">Area 1</option>
              <option value="Area 2">Area 2</option>
              <option value="Area 3">Area 3</option>
            </select>

            <label htmlFor="governorate">Governorate:</label>
            <select
              id="governorate"
              name="governorate"
              value={organizationFilterCriteria.governorate}
              onChange={handleOrganizationFilterChange}
            >
              <option value="">All</option>
              <option value="Governorate 1">Governorate 1</option>
              <option value="Governorate 2">Governorate 2</option>
              <option value="Governorate 3">Governorate 3</option>
            </select>

            <label htmlFor="type">Organization Type:</label>
            <select
              id="type"
              name="type"
              value={organizationFilterCriteria.type}
              onChange={handleOrganizationFilterChange}
            >
              <option value="">All</option>
              <option value="Type 1">Type 1</option>
              <option value="Type 2">Type 2</option>
              <option value="Type 3">Type 3</option>
            </select>
          </div>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Area</th>
                <th>Governorate</th>
                <th>Type</th>
                <th>Contact Details</th>
                <th>Address</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {organizationsData.map((organization) => (
                <tr key={organization.id}>
                  <td>{organization.name}</td>
                  <td>{organization.area}</td>
                  <td>{organization.governorate}</td>
                  <td>{organization.type}</td>
                  <td>{organization.contactdetails}</td>
                  <td>{organization.address}</td>
                  <td>{organization.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showPage === "requests" && (
        <RequestBrowserPage closeSidebar={closeSidebar} />
      )}
      {showPage === "probono" && <ProBono closeSidebar={closeSidebar} />}
      {showPage === "donationpickup" && (
        <DonationPickup closeSidebar={closeSidebar} />
      )}
        {showPage === "logout" && (
        <LoginDonor closeSidebar={closeSidebar} />
      )}
      {passwordManagementOpen && (
        <div>
          <h2>Password Management</h2>
          <button onClick={handlePasswordManagementToggle}>✕</button>
          <div>
            <label htmlFor="oldPassword">Old Password:</label>
            <input
              type={showOldPassword ? "text" : "password"}
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <button onClick={() => setShowOldPassword(!showOldPassword)}>
              👁
            </button>
          </div>
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={() => setShowNewPassword(!showNewPassword)}>
              👁
            </button>
          </div>
          <button onClick={handlePasswordChange}>Change Password</button>
        </div>
      )}
    </div>
  );
}

export default DonorDashboard;
