import { useState } from "react";
import DonorDashboard from "./DonationDashboard";
import  MapComponent from "./map"
const ProBono = () => {
  const [userType, setUserType] = useState("");
  const [showPage, setShowPage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [teachingDetails, setTeachingDetails] = useState({
    subjects: "",
    classes: "",
  });
  const [doctorDetails, setDoctorDetails] = useState({
    clinicLocation: "",
    clinicAddress: "",
    clinicArea: "",
    clinicGovernorate: "",
    speciality: "",
    proBonoCases: 0,
  });
  const [formOpen, setFormOpen] = useState(false);
  const [filter, setFilter] = useState({
    subject: "",
    area: "",
    governorate: "",
    speciality: "",
    organizationName: "",
  });
  const [showTeachingPosts, setShowTeachingPosts] = useState(false);
  const [showMedicalPosts, setShowMedicalPosts] = useState(false);
  const [teachingPosts, setTeachingPosts] = useState([
    {
      subject: "Mathematics",
      area: "Downtown",
      governorate: "Cairo",
      students: 30,
      address: "123 Street, Downtown, Cairo",
      fulfilled: false,
    },
    {
      subject: "Science",
      area: "Maadi",
      governorate: "Cairo",
      students: 25,
      address: "456 Street, Maadi, Cairo",
      fulfilled: false,
    },
    // Add more hardcoded teaching posts as needed
  ]);

  const [medicalPosts, setMedicalPosts] = useState([
    {
      patientName: "John Doe",
      age: 45,
      gender: "Male",
      weight: "75 kg",
      address: "789 Avenue, Maadi, Cairo",
      organizationName: "Maadi Hospital",
      speciality: "Cardiology",
      description: "Heart condition, needs urgent surgery",
      fulfilled: false,
    },
    {
      patientName: "Jane Smith",
      age: 30,
      gender: "Female",
      weight: "60 kg",
      address: "101 Central Street, Downtown, Cairo",
      organizationName: "Downtown Hospital",
      speciality: "Orthopedics",
      description: "Fractured leg, needs plaster",
      fulfilled: false,
    },
    // Add more hardcoded medical posts as needed
  ]);

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setSidebarOpen(true); // Open sidebar when user selects a type
  };

  const handleTeachingDetailsChange = ({ target: { name, value } }) => {
    setTeachingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDoctorDetailsChange = ({ target: { name, value } }) => {
    setDoctorDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleForm = () => {
    setFormOpen((prev) => !prev);
    setSidebarOpen((prev) => !prev); // Toggle sidebar
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormOpen(false); // Close form
    setSidebarOpen(true); // Reopen sidebar
  };

  const goBack = () => {
    setShowPage("done"); // Set Go Back clicked to true
    setSidebarOpen(false); // Close sidebar
    setShowTeachingPosts(false); // Close teaching posts
    setShowMedicalPosts(false); // Close medical posts
  };

  const fulfillPost = (index, type) => {
    let updatedPosts = [];
    if (type === "teaching") {
      updatedPosts = [...teachingPosts];
      updatedPosts[index].fulfilled = true;
      setTeachingPosts(updatedPosts);
    } else if (type === "medical") {
      updatedPosts = [...medicalPosts];
      updatedPosts[index].fulfilled = true;
      setMedicalPosts(updatedPosts);
    }
  };

  const filterTeachingPosts = () => {
    return teachingPosts.filter((post) => {
      return (
        post.subject.includes(filter.subject) &&
        post.area.includes(filter.area) &&
        post.governorate.includes(filter.governorate)
      );
    });
  };

  const filterMedicalPosts = () => {
    return medicalPosts.filter((post) => {
      return (
        post.speciality.includes(filter.speciality) &&
        post.organizationName.includes(filter.organizationName) &&
        post.address.includes(filter.area) &&
        post.address.includes(filter.governorate)
      );
    });
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const styles = {
    container: {
      padding: "20px",
      textAlign: "center",
      marginLeft: sidebarOpen ? "250px" : "0",
    },
    title: {
      marginLeft: sidebarOpen ? "250px" : "0",
    },
    form: {
      padding: "20px",
    },
    input: {
      margin: "5px",
    },
    button: {
      margin: "5px",
    },
    postContainer: {
      padding: "20px",
    },
    postItem: {
      border: "1px solid black",
      padding: "10px",
      marginBottom: "10px",
    },
    sidebar: {
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      width: "250px",
      backgroundColor: "#f0f0f0",
      padding: "20px",
    },
  };

  return (
    <div>
      {/* Main Content */}
      {showPage !== "done" && (
        <div style={styles.container}>
          <h1 style={styles.title}>Welcome to ProBono</h1>
          <div>
            {userType ? (
              <div>
                <p>You are logged in as a {userType}.</p>
              </div>
            ) : (
              <div>
                <p>Select User Type:</p>
                <select value={userType} onChange={handleUserTypeChange}>
                  <option value="">Select User Type</option>
                  <option value="teacher">Teacher</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Form for teacher */}
      {formOpen && showPage !== "done" && userType === "teacher" && (
        <div style={styles.form}>
          <form onSubmit={handleFormSubmit}>
            <label>
              Subjects:
              <input
                type="text"
                name="subjects"
                value={teachingDetails.subjects}
                onChange={handleTeachingDetailsChange}
                required
                style={styles.input}
              />
            </label>
            <br />
            <label>
              Classes:
              <input
                type="number"
                name="classes"
                value={teachingDetails.classes}
                onChange={handleTeachingDetailsChange}
                required
                style={styles.input}
              />
            </label>
            <br />
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      )}

      {/* Render Teaching Posts */}
      {showTeachingPosts && (
        <div style={styles.postContainer}>
          <h3>Filter</h3>
          <input
            type="text"
            placeholder="Filter by Subject"
            value={filter.subject}
            onChange={(e) =>
              setFilter({ ...filter, subject: e.target.value })
            }
            style={styles.input}
          />
          <br />
          <input
            type="text"
            placeholder="Filter by Area"
            value={filter.area}
            onChange={(e) => setFilter({ ...filter, area: e.target.value })}
            style={styles.input}
          />
          <br />
          <input
            type="text"
            placeholder="Filter by Governorate"
            value={filter.governorate}
            onChange={(e) =>
              setFilter({ ...filter, governorate: e.target.value })
            }
            style={styles.input}
          />
          <br />
          <h3>Teaching Posts</h3>
          {filterTeachingPosts().map((post, index) => (
            <div
              key={index}
              style={styles.postItem}
            >
              <p>Subject: {post.subject}</p>
              <p>Area: {post.area}</p>
              <p>Governorate: {post.governorate}</p>
              <p>Number of Students: {post.students}</p>
              <p>Address: {post.address}</p>
              <button onClick={() => fulfillPost(index, "teaching")}>
                {post.fulfilled ? "Fulfilled 😊" : "Fulfill"}
              </button>
            </div>
          ))}
          <button onClick={() => setShowTeachingPosts(false)}>Back to Sidebar</button>
        </div>
      )}

      {/* Render Medical Posts */}
      {showMedicalPosts && (
        <div style={styles.postContainer}>
          <h3>Filter</h3>
          <input
            type="text"
            placeholder="Filter by Speciality"
            value={filter.speciality}
            onChange={(e) =>
              setFilter({ ...filter, speciality: e.target.value })
            }
            style={styles.input}
          />
          <br />
          <input
            type="text"
            placeholder="Filter by Organization Name"
            value={filter.organizationName}
            onChange={(e) =>
              setFilter({ ...filter, organizationName: e.target.value })
            }
            style={styles.input}
          />
          <br />
          <input
            type="text"
            placeholder="Filter by Area"
            value={filter.area}
            onChange={(e) => setFilter({ ...filter, area: e.target.value })}
            style={styles.input}
          />
          <br />
          <input
            type="text"
            placeholder="Filter by Governorate"
            value={filter.governorate}
            onChange={(e) =>
              setFilter({ ...filter, governorate: e.target.value })
            }
            style={styles.input}
          />
          <br />
          <h3>Medical Posts</h3>
          {filterMedicalPosts().map((post, index) => (
            <div
              key={index}
              style={styles.postItem}
            >
              <p>Patient Name: {post.patientName}</p>
              <p>Age: {post.age}</p>
              <p>Gender: {post.gender}</p>
              <p>Weight: {post.weight}</p>
              <p>Address: {post.address}</p>
              <p>Organization Name: {post.organizationName}</p>
              <p>Speciality: {post.speciality}</p>
              <p>Case Description: {post.description}</p>
              <button onClick={() => fulfillPost(index, "medical")}>
                {post.fulfilled ? "Fulfilled 😊" : "Fulfill"}
              </button>
            </div>
          ))}
          <button onClick={() => { setShowMedicalPosts(false); setSidebarOpen(true); }}>Back to Sidebar</button>
        </div>
      )}

      {/* Sidebar */}
      {sidebarOpen && !showTeachingPosts && !showMedicalPosts && (
        <div
          style={styles.sidebar}
        >
          <h2>Navigation</h2>
          {userType && (
            <div>
              {userType === "teacher" && (
                <>
                  <button onClick={toggleForm}>Specify Teaching Details</button>
                  <br />
                  <button onClick={() => setShowTeachingPosts(true)}>View Teaching Posts</button>
                </>
              )}
              {userType === "doctor" && (
                <>
                  <button onClick={toggleForm}>Clinic Location Specification</button>
                  <br />
                  <button onClick={() => { setShowMedicalPosts(true); setSidebarOpen(false); }}>View Medical Posts</button>
                </>
              )}
              <br />
              <button onClick={goBack}>Back to Donor Dashboard</button>
            </div>
          )}
        </div>
      )}

      {/* Render Doctor Form */}
      {formOpen && userType === "doctor" && (
        <div style={styles.form}>
          <h3>Doctor Details</h3>
          <form onSubmit={handleFormSubmit}>
            <label>
              Clinic Location:
              <MapComponent/>
              
            </label>
            <br />
            <label>
              Clinic Address:
              <input
                type="text"
                name="clinicAddress"
                value={doctorDetails.clinicAddress}
                onChange={handleDoctorDetailsChange}
                required
                style={styles.input}
              />
            </label>
            <br />
            
            <br />
            <label>
              Clinic Governorate:
              <input
                type="text"
                name="clinicGovernorate"
                value={doctorDetails.clinicGovernorate}
                onChange={handleDoctorDetailsChange}
                required
                style={styles.input}
              />
            </label>
            <br />
            <label>
              Speciality:
              <input
                type="text"
                name="speciality"
                value={doctorDetails.speciality}
                onChange={handleDoctorDetailsChange}
                required
                style={styles.input}
              />
            </label>
            <br />
            <label>
              Number of Pro Bono Cases:
              <input
                type="number"
                name="proBonoCases"
                value={doctorDetails.proBonoCases}
                onChange={handleDoctorDetailsChange}
                required
                style={styles.input}
              />
            </label>
            <br />
            <button type="submit" style={styles.button}>Submit</button>
          </form>
          <button onClick={() => { setFormOpen(false); setSidebarOpen(true); }}>Back to Sidebar</button>
        </div>
      )}

      {/* Redirect when Go Back is clicked */}
      {showPage === "done" && <DonorDashboard closeSidebar={handleSidebarClose} />}
    </div>
  );
};

export default ProBono;
