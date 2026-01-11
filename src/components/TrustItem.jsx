const TrustItem = ({ title, description }) => {
  return (
    <div className="trust-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TrustItem;
