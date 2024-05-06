import "./style.css";
import Tags from "./Tags";

function RequestCard(prop) {
  return (
    <div className="request-card-container">
      <div className="select-box">
        <input type="checkbox" />
      </div>
      <div className="description">
        <h1>{prop.type}</h1>
        <p>{prop.description}</p>
      </div>
      <hr />
      <div className="tags">
        <Tags tags={prop.tags}/>
      </div>
    </div>
  );
}

export default RequestCard;
