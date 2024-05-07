function RequestCard({ request, onClaim }) {
  return (
    <>
      <div className="request-card-container">
        <h3>{request.type}</h3>
        <p>{request.description}</p>
        <ul>
          {request.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>

        <button id="claim-button"onClick={() => onClaim()}>Claim?</button>
      </div>
    </>
  );
}

export default RequestCard;
