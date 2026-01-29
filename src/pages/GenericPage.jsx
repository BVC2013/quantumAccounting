import { Link, useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

// Generic page component that can be customized with props
const GenericPage = ({
  title,
  description,
  sections = [],
  relatedPages = [],
  showSidebar = true,
  backgroundImage = '',
}) => {
  const navigate = useNavigate();

  return (
    <>
      <PageBanner 
        title={title} 
        subtitle={description}
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className={showSidebar ? 'two-column' : ''}>
          <div>
            <div className="section-cards-grid">
              {sections.map((section, index) => {
                const hasLink = section.link;
                const CardWrapper = hasLink ? 'div' : 'div';
                
                return (
                  <div 
                    key={index} 
                    className={`section-card ${hasLink ? 'section-card-clickable' : ''}`}
                    onClick={hasLink ? () => navigate(section.link) : undefined}
                    role={hasLink ? 'button' : undefined}
                    tabIndex={hasLink ? 0 : undefined}
                    onKeyDown={hasLink ? (e) => e.key === 'Enter' && navigate(section.link) : undefined}
                  >
                    {section.title && <h2>{section.title}</h2>}
                    {section.content && <p>{section.content}</p>}
                    {section.items && (
                      <ul>
                        {section.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {hasLink && (
                      <span className="section-card-link">
                        Learn more <span className="arrow">→</span>
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <p style={{ marginTop: '2rem' }}>
              Ready to learn more? <Link to="/contact">Contact us</Link> today
              or <Link to="/book-meeting">schedule a consultation</Link>.
            </p>
          </div>
          {showSidebar && <Sidebar relatedPages={relatedPages} />}
        </div>
      </div>
    </>
  );
};

export default GenericPage;
