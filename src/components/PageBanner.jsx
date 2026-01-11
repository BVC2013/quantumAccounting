import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Breadcrumb from './Breadcrumb';

const PageBanner = ({ 
  title, 
  backgroundImage, 
  hubspotUrl = 'https://meetings-na3.hubspot.com/nischal'
}) => {
  const location = useLocation();
  const [showScheduler, setShowScheduler] = useState(false);
  
  const bannerStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <>
      <section className="page-banner" style={bannerStyle}>
        <div className="page-banner-overlay">
          <div className="container">
            <div className="page-banner-card" key={location.pathname}>
              <h1>{title}</h1>
              <div className="page-banner-buttons">
                <button
                  onClick={() => setShowScheduler(true)}
                  className="btn btn-primary"
                >
                  Schedule Consultation
                </button>
                <Link to="/services" className="btn btn-secondary">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Breadcrumb currentTitle={title} />

      {/* HubSpot Scheduler Modal */}
      {showScheduler && (
        <div 
          className="scheduler-modal-overlay"
          onClick={() => setShowScheduler(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <div 
            className="scheduler-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              width: '90%',
              maxWidth: '550px',
              height: '85vh',
              maxHeight: '700px',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setShowScheduler(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                fontSize: '18px',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ×
            </button>
            <iframe
              src={`${hubspotUrl}?embed=true`}
              title="Schedule a Meeting"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PageBanner;
