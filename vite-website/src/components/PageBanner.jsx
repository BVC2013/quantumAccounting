import { Link, useLocation } from 'react-router-dom';
import { PopupButton } from 'react-calendly';

const PageBanner = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  calendlyUrl = 'https://calendly.com/bshivakoti08/new-meeting-1' 
}) => {
  const location = useLocation();
  
  const bannerStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section className="page-banner" style={bannerStyle}>
      <div className="page-banner-overlay">
        <div className="container">
          <div className="page-banner-card" key={location.pathname}>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
            <div className="page-banner-buttons">
              <PopupButton
                url={calendlyUrl}
                rootElement={document.getElementById('root')}
                text="Schedule Consultation"
                className="btn btn-primary"
              />
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
