import { Request } from "./Request/Request";
import { TYPE_OF_REQUESTS } from "./Request/Request"
function RequestBrowserPage() {

  const listOfRequests = [
    new Request(TYPE_OF_REQUESTS.food, "I need food", ["food"]),
    new Request(TYPE_OF_REQUESTS.clothing, "I need clothing", ["clothing"]),
    new Request(TYPE_OF_REQUESTS.clothing, "I need clothing for winter", ["clothing"]),
    new Request(TYPE_OF_REQUESTS.school_supplies, "I need school supplies", ["school_supplies"]),
    new Request(TYPE_OF_REQUESTS.blood_donation, "I need blood donation", ["blood_donation"]),
    new Request(TYPE_OF_REQUESTS.probono, "I need probono", ["probono"]),
  ];

  const filteredRequests = listOfRequests.filter(Request => Request.hasTag("clothing"));
  console.log(filteredRequests);

  return (
    <div>
      <h1>Request Browser Page</h1>
    </div>
  );
}

export default RequestBrowserPage;
