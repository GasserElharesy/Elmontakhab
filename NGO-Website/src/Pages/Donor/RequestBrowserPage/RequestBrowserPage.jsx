import React, { useState } from 'react';
import { Request } from "./Request";
import { TYPE_OF_REQUESTS } from "./Request";
import FilterBar from "./FilterBar";
import RequestCard from "./RequestCard";
function RequestBrowserPage() {
  const listOfRequests = [
    new Request(1, TYPE_OF_REQUESTS.food, "I need food", ["food"]),
    new Request(2, TYPE_OF_REQUESTS.clothing, "I need clothing for an adult", [
      "clothing",
      "adult",
      "large",
    ]),
    new Request(3, TYPE_OF_REQUESTS.clothing, "I need clothing for winter", [
      "clothing",
      "winter",
      "small",
      "child",
    ]),
    new Request(4, TYPE_OF_REQUESTS.school_supplies, "I need school supplies", [
      "school_supplies",
    ]),
    new Request(5, TYPE_OF_REQUESTS.blood_donation, "I need blood donation", [
      "blood_donation",
      "type_a",
    ]),
    new Request(6, TYPE_OF_REQUESTS.probono, "I need probono", ["medical"]),
  ];

  const [filteredRequests, setFilteredRequests] = useState(listOfRequests);

  const filterRequests = (type, tag) => {
    const newFilteredRequests = listOfRequests.filter((req) => {
      const matchesType = type === "" || req.type === type;
      const matchesTag = tag === "" || req.hasTag(tag);
      return matchesType && matchesTag;
    });
    setFilteredRequests(newFilteredRequests);
  };
  const handelOnClaim = (requestID) => {
    console.log(requestID);
    const request = listOfRequests.find(
      (request) => request.getId === requestID
    );
    request.claim();
    console.log(request.isClaimed);
  };

  return (
    <>
      <div>
        <FilterBar requests={listOfRequests} onFilterChange={filterRequests} />
      </div>
      <div className="request-browser-page-container">
        {filteredRequests.map((request) => (
          <RequestCard
            key={request.getId} // Important for React list rendering
            request={request}
            onClaim={() => handelOnClaim(request.getId)}
          />
        ))}
      </div>
    </>
  );
}

export default RequestBrowserPage;
