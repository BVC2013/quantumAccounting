import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Breadcrumb from './Breadcrumb';

const PageBanner = ({ 
  title, 
  backgroundImage, 
  hubspotUrl = 'https://meetings.hubspot.com/quantum-accounting' // Replace with your actual HubSpot meeting link
}) => {
  const location = useLocation();
  
  const bannerStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  // Load HubSpot meetings embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script on unmount if needed
      const existingScript = document.querySelector('script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleScheduleClick = () => {
    // Open HubSpot meeting scheduler in a popup window (70% of screen size)
    const width = Math.round(window.screen.width * 0.7);
    const height = Math.round(window.screen.height * 0.75);
    const left = Math.round((window.screen.width - width) / 2);
    const top = Math.round((window.screen.height - height) / 2);
    
    window.open(
      hubspotUrl,
      'HubSpot Meeting Scheduler',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no`
    );
  };

  return (
    <>
      <section className="page-banner" style={bannerStyle}>
        <div className="page-banner-overlay">
          <div className="container">
            <div className="page-banner-card" key={location.pathname}>
              <h1>{title}</h1>
              <div className="page-banner-buttons">
                <button
                  onClick={handleScheduleClick}
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
    </>
  );
};

export default PageBanner;
