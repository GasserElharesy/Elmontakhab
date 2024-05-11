import { useState } from "react";
import { data } from "./data.js";
import Request from "./Request.jsx";
import { useNavigate } from "react-router-dom";

function RequestBrowserPage(props) {
  const [type, setType] = useState("ALL");
  const [selectedTag, setSelectedTag] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // New search term state

  const navigate = useNavigate();

  const getUniqueTagsByType = (type) => {
    const tags = data
      .filter((item) => type === "ALL" || item.type === type)
      .flatMap((obj) => obj.tags);
    return [...new Set(tags)]; // Return an array of unique tags
  };

  const [claimedRequests, setClaimedRequests] = useState([]); // Array to store claimed requests

  const handleClaim = (request) => {
    setClaimedRequests([...claimedRequests, request]);
  };

  const handleDonate = () => {
    console.log("Donating claimed requests:", claimedRequests);
    setClaimedRequests([]); // Clear claimed requests after donation
    props.onCheckOut(claimedRequests);
    navigate("/checkout"); // Redirect to the checkout page
  };

  const allTags = getUniqueTagsByType(type); // Get tags based on currently selected type

  return (
    <>
      <label htmlFor="type-select">TYPE: </label>
      <select
        name=""
        id="type-select"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="ALL">-- Select Type --</option>
        <option value="MEDICAL_SUPPLIES">MEDICAL_SUPPLIES</option>
        <option value="FOOD">FOOD</option>
        <option value="SCHOOL_SUPPLIES">SCHOOL_SUPPLIES</option>
        <option value="PROBONO">PROBONO</option>
        <option value="CLOTHING">CLOTHING</option>
        <option value="BLOOD_DONATION">BLOOD_DONATION</option>
      </select>
      <label htmlFor="tag-select">TAG: </label>
      <select
        name=""
        id="tag-select"
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">-- Select a Tag --</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <button onClick={handleDonate}>Donate Claimed</button>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {data
        .filter((item) => {
          const matchesType = type === "ALL" || item.type === type;
          const matchesTag = !selectedTag || item.tags.includes(selectedTag);
          const matchesSearch =
            !searchTerm ||
            item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());

          return matchesType && matchesTag && matchesSearch;
        })
        .map((item, index) => (
          <Request key={index} {...item} onClaim={() => handleClaim(item)} />
        ))}
    </>
  );
}

export default RequestBrowserPage;
