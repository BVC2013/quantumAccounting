import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, items, link, linkText = 'Learn More' }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {items && items.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {link && (
        <Link to={link} className="btn btn-primary" style={{ marginTop: '1rem' }}>
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
