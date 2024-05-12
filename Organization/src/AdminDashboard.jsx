import { useState } from "react";
import styled from "styled-components";

const AdminNavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(180deg, #0cc, #09a);
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AdminMenuButton = styled.button`
  background: linear-gradient(135deg, #0cc, #09a);
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, #09a, #0cc);
  }
`;

const AdminTMHeader = styled.div`
  background: linear-gradient(180deg, #09a, #0cc);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 400px;
  overflow-y: visible;
  padding: 20px;
`;

const AdminTMNav = styled.ul`
  margin-bottom: 100px;
`;

const AdminTMNavItem = styled.li`
  list-style: none;
  margin-bottom: 15px;
`;

const AdminTMNavLink = styled.button`
  color: #fff;
  background-color: transparent;
  height: 40px;
  width: 100%;
  max-width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 10px;
  border: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid white;
  }
`;

const AdminTableContainer = styled.div`
  position: fixed;
  top: 70px;
  left: 400px;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: linear-gradient(180deg, #f9f9f9, #e5e5e5);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto;
  animation: admin-slideIn 0.5s ease;

  @keyframes admin-slideIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
      left: 50%;
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
      left: 50%;
    }
  }
`;

const AdminMainContent = styled.div`
  margin-top: 50px;
`;

const AdminPasswordContainer = styled.div`
  position: fixed;
  top: 70px;
  left: 400px;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: linear-gradient(180deg, #f9f9f9, #e5e5e5);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto;
  animation: admin-slideIn 0.5s ease;

  @keyframes admin-slideIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
      left: 50%;
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
      left: 50%;
    }
  }
`;

const AdminPasswordHeader = styled.h2`
  margin-bottom: 20px;
`;

const AdminPasswordInputContainer = styled.div`
  margin-bottom: 20px;
`;

const AdminPasswordInputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const AdminPasswordInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AdminPasswordVisibilityButton = styled.button`
  margin-left: 10px;
`;

const AdminPasswordChangeButton = styled.button`
  background: linear-gradient(135deg, #0cc, #09a);
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, #09a, #0cc);
  }
`;

const AdminApplicantTableContainer = styled.div`
  position: fixed;
  top: 70px;
  left: 400px;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: linear-gradient(180deg, #f9f9f9, #e5e5e5);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto;
  animation: admin-slideIn 0.5s ease;

  @keyframes admin-slideIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
      left: 50%;
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
      left: 50%;
    }
  }
`;

const AdminApplicantTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const AdminApplicantActionButton = styled.button`
  background: linear-gradient(135deg, #0cc, #09a);
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, #09a, #0cc);
  }
`;

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [organizationTableOpen, setOrganizationTableOpen] = useState(false);
  const [donorTableOpen, setDonorTableOpen] = useState(false);
  const [organizationApplicantsTableOpen, setOrganizationApplicantsTableOpen] = useState(false);
  const [donorApplicantsTableOpen, setDonorApplicantsTableOpen] = useState(false);
  const [organizationFilterCriteria, setOrganizationFilterCriteria] = useState({
    area: "",
    governorate: "",
    type: "",
  });
  const [donorFilterCriteria, setDonorFilterCriteria] = useState({
    type: "",
  });
  const [deletedOrganizations, setDeletedOrganizations] = useState([]);
  const [deletedDonors, setDeletedDonors] = useState([]);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordManagementOpen, setPasswordManagementOpen] = useState(false);
  const [organizationApplicantsData, setOrganizationApplicantsData] = useState([
    {
      id: 1,
      name: "Organization Applicant 1",
      area: "Area 1",
      governorate: "Governorate 1",
      type: "Type 1",
      contactdetails: "email1",
      address: "address1",
      location: "location1",
    },
    {
      id: 2,
      name: "Organization Applicant 2",
      area: "Area 2",
      governorate: "Governorate 2",
      type: "Type 2",
      contactdetails: "email2",
      address: "address2",
      location: "location2",
    },
  ]);
  const [donorApplicantsData, setDonorApplicantsData] = useState([
    {
      id: 1,
      name: "Donor Applicant 1",
      type: "Doctor",
      proBonoType: "",
      contactdetails: "email1",
      address: "address1",
      location: "location1",
    },
    {
      id: 2,
      name: "Donor Applicant 2",
      type: "Teacher",
      proBonoType: "Pro Bono",
      contactdetails: "email2",
      address: "address2",
      location: "location2",
    },
  ]);

  const handleLogout = () => {
    window.location.href = "/Login.js";
  };

  const handlePasswordChange = () => {
    window.location.href = "/Login.js";
  };

  const handleViewOrganization = () => {
    setOrganizationTableOpen(true);
    setDonorTableOpen(false);
    setOrganizationApplicantsTableOpen(false);
    setDonorApplicantsTableOpen(false);
  };

  const handleViewDonors = () => {
    setDonorTableOpen(true);
    setOrganizationTableOpen(false);
    setOrganizationApplicantsTableOpen(false);
    setDonorApplicantsTableOpen(false);
  };

  const handleOrganizationReview = (id, action) => {
    if (action === "accept") {
      // Accept organization applicant
      console.log("Accepted organization applicant with ID:", id);
    } else if (action === "reject") {
      // Reject organization applicant
      console.log("Rejected organization applicant with ID:", id);
    }
  };

  const handleDonorReview = (id, action) => {
    if (action === "accept") {
      // Accept donor applicant
      console.log("Accepted donor applicant with ID:", id);
    } else if (action === "reject") {
      // Reject donor applicant
      console.log("Rejected donor applicant with ID:", id);
    }
  };

  const handleCloseOrganizationTable = () => {
    setOrganizationTableOpen(false);
  };

  const handleCloseDonorTable = () => {
    setDonorTableOpen(false);
  };

  const handleCloseOrganizationApplicantsTable = () => {
    setOrganizationApplicantsTableOpen(false);
  };

  const handleCloseDonorApplicantsTable = () => {
    setDonorApplicantsTableOpen(false);
  };

  const handleOrganizationFilterChange = (e) => {
    const { name, value } = e.target;
    setOrganizationFilterCriteria((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDonorFilterChange = (e) => {
    const { name, value } = e.target;
    setDonorFilterCriteria((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDeleteOrganization = (id) => {
    const deletedOrg = organizationApplicantsData.find((org) => org.id === id);
    setDeletedOrganizations([...deletedOrganizations, deletedOrg]);
    setOrganizationApplicantsData(organizationApplicantsData.filter((org) => org.id !== id));
  };

  const handleDeleteDonor = (id) => {
    const deletedDonor = donorApplicantsData.find((donor) => donor.id === id);
    setDeletedDonors([...deletedDonors, deletedDonor]);
    setDonorApplicantsData(donorApplicantsData.filter((donor) => donor.id !== id));
  };

  const handleUndoDeleteOrganization = (id) => {
    const restoredOrg = deletedOrganizations.find((org) => org.id === id);
    setOrganizationApplicantsData([...organizationApplicantsData, restoredOrg]);
    setDeletedOrganizations(deletedOrganizations.filter((org) => org.id !== id));
  };

  const handleUndoDeleteDonor = (id) => {
    const restoredDonor = deletedDonors.find((donor) => donor.id === id);
    setDonorApplicantsData([...donorApplicantsData, restoredDonor]);
    setDeletedDonors(deletedDonors.filter((donor) => donor.id !== id));
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
    <div>
      <AdminNavigationContainer>
        <h1>Admin Dashboard</h1>
        {!sidebarOpen && (
          <AdminMenuButton onClick={toggleSidebar}>
            Menu
          </AdminMenuButton>
        )}
      </AdminNavigationContainer>

      {sidebarOpen && (
        <AdminTMHeader>
          <h2>Menu</h2>
          <button onClick={closeSidebar}>✕</button>
          <AdminTMNav>
            <AdminTMNavItem>
              <AdminTMNavLink onClick={handleViewOrganization}>
                View Organizations List
              </AdminTMNavLink>
            </AdminTMNavItem>
            <AdminTMNavItem>
              <AdminTMNavLink onClick={handleViewDonors}>
                View Donors List
              </AdminTMNavLink>
            </AdminTMNavItem>
            <AdminTMNavItem>
              <AdminTMNavLink onClick={() => setOrganizationApplicantsTableOpen(true)}>
                View Organization Applicants
              </AdminTMNavLink>
            </AdminTMNavItem>
            <AdminTMNavItem>
            <AdminTMNavLink onClick={() => setDonorApplicantsTableOpen(true)}>
  View Donor Applicants
</AdminTMNavLink>
</AdminTMNavItem>
<AdminTMNavItem>
  <AdminTMNavLink onClick={handlePasswordManagementToggle}>
    Change Password
  </AdminTMNavLink>
</AdminTMNavItem>
<AdminTMNavItem>
  <AdminTMNavLink onClick={handleLogout}>
    Logout
  </AdminTMNavLink>
</AdminTMNavItem>
</AdminTMNav>
</AdminTMHeader>
      )}

      {organizationTableOpen && (
        <AdminTableContainer>
          <button onClick={handleCloseOrganizationTable}>Close Table</button>

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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {organizationApplicantsData.map((organization, index) => (
                <tr key={index}>
                  <td>{organization.name}</td>
                  <td>{organization.area}</td>
                  <td>{organization.governorate}</td>
                  <td>{organization.type}</td>
                  <td>{organization.contactdetails}</td>
                  <td>{organization.address}</td>
                  <td>{organization.location}</td>
                  <td>
                    <AdminApplicantActionButton onClick={() => handleOrganizationReview(organization.id, "accept")}>Accept</AdminApplicantActionButton>
                    <AdminApplicantActionButton onClick={() => handleOrganizationReview(organization.id, "reject")}>Reject</AdminApplicantActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminTableContainer>
      )}

      {donorTableOpen && (
        <AdminTableContainer>
          <button onClick={handleCloseDonorTable}>Close Table</button>

          <div>
            <label htmlFor="type">Donor Type:</label>
            <select
              id="type"
              name="type"
              value={donorFilterCriteria.type}
              onChange={handleDonorFilterChange}
            >
              <option value="">All</option>
              <option value="Doctor">Doctor</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>

          <table>
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
              {donorApplicantsData.map((donor, index) => (
                <tr key={index}>
                  <td>{donor.name}</td>
                  <td>{donor.type}</td>
                  <td>{donor.proBonoType || "N/A"}</td>
                  <td>{donor.contactdetails}</td>
                  <td>{donor.address}</td>
                  <td>{donor.location}</td>
                  <td>
                    <AdminApplicantActionButton onClick={() => handleDonorReview(donor.id, "accept")}>Accept</AdminApplicantActionButton>
                    <AdminApplicantActionButton onClick={() => handleDonorReview(donor.id, "reject")}>Reject</AdminApplicantActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminTableContainer>
      )}

      {organizationApplicantsTableOpen && (
        <AdminApplicantTableContainer>
          <button onClick={handleCloseOrganizationApplicantsTable}>Close Table</button>

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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {organizationApplicantsData.map((organization, index) => (
                <tr key={index}>
                  <td>{organization.name}</td>
                  <td>{organization.area}</td>
                  <td>{organization.governorate}</td>
                  <td>{organization.type}</td>
                  <td>{organization.contactdetails}</td>
                  <td>{organization.address}</td>
                  <td>{organization.location}</td>
                  <td>
                    <AdminApplicantActionButton onClick={() => handleOrganizationReview(organization.id, "accept")}>Accept</AdminApplicantActionButton>
                    <AdminApplicantActionButton onClick={() => handleOrganizationReview(organization.id, "reject")}>Reject</AdminApplicantActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminApplicantTableContainer>
      )}

      {donorApplicantsTableOpen && (
        <AdminApplicantTableContainer>
          <button onClick={handleCloseDonorApplicantsTable}>Close Table</button>

          <table>
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
              {donorApplicantsData.map((donor, index) => (
                <tr key={index}>
                  <td>{donor.name}</td>
                  <td>{donor.type}</td>
                  <td>{donor.proBonoType || "N/A"}</td>
                  <td>{donor.contactdetails}</td>
                  <td>{donor.address}</td>
                  <td>{donor.location}</td>
                  <td>
                    <AdminApplicantActionButton onClick={() => handleDonorReview(donor.id, "accept")}>Accept</AdminApplicantActionButton>
                    <AdminApplicantActionButton onClick={() => handleDonorReview(donor.id, "reject")}>Reject</AdminApplicantActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminApplicantTableContainer>
      )}

      {passwordManagementOpen && (
        <AdminPasswordContainer>
          <button onClick={handlePasswordManagementToggle}>Close</button>
          <AdminPasswordHeader>Change Password</AdminPasswordHeader>
          <AdminPasswordInputContainer>
            <AdminPasswordInputLabel htmlFor="old-password">Old Password:</AdminPasswordInputLabel>
            <AdminPasswordInput
              type={showOldPassword ? "text" : "password"}
              id="old-password"
              name="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <AdminPasswordVisibilityButton onClick={handleToggleOldPasswordVisibility}>
              {showOldPassword ? "Hide" : "Show"}
            </AdminPasswordVisibilityButton>
          </AdminPasswordInputContainer>
          <AdminPasswordInputContainer>
            <AdminPasswordInputLabel htmlFor="new-password">New Password:</AdminPasswordInputLabel>
            <AdminPasswordInput
              type={showNewPassword ? "text" : "password"}
              id="new-password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <AdminPasswordVisibilityButton onClick={handleToggleNewPasswordVisibility}>
              {showNewPassword ? "Hide" : "Show"}
            </AdminPasswordVisibilityButton>
          </AdminPasswordInputContainer>
          <AdminPasswordChangeButton onClick={handlePasswordChange}>Change Password</AdminPasswordChangeButton>
        </AdminPasswordContainer>
      )}

      <AdminMainContent>
        <h2></h2>
        
      </AdminMainContent>
    </div>
  );
}

export default AdminDashboard;
