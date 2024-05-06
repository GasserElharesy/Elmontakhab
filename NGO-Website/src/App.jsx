import "./App.css";
import RequestCard from "./Pages/Donor/RequestBrowserPage/Components/RequestCard/RequestCard.jsx";

function App() {
  return (
    <>
      <RequestCard
        type="Winter clothes!"
        description="We want winter clothes or jackets that are made of wool"
        tags={{
          size: "large",
          color: "red",
          material: "cotton",
        }}
      />
    </>
  );
}

export default App;
