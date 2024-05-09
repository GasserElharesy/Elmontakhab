import { useState } from "react";
import { data } from "./data.js";
import Request from "./Request.jsx";

function RequestBrowserPage() {
  const [type, setType] = useState("ALL");
  const [selectedTag, setSelectedTag] = useState("");

  const getUniqueTagsByType = (type) => {
    const tags = data
      .filter((item) => type === "ALL" || item.type === type)
      .flatMap((obj) => obj.tags);
    return [...new Set(tags)]; // Return an array of unique tags
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
      {data
        .filter((item) => {
          if (type === "ALL") {
            return true;
          }
          return (
            item.type === type &&
            (!selectedTag || item.tags.includes(selectedTag))
          );
        })
        .map((item, index) => (
          <Request key={index} {...item} />
        ))}
    </>
  );
}

export default RequestBrowserPage;
