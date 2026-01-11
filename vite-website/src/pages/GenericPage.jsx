import { Link } from 'react-router-dom';
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
            {sections.map((section, index) => (
              <div key={index}>
                {section.title && <h2>{section.title}</h2>}
                {section.content && <p>{section.content}</p>}
                {section.items && (
                  <ul>
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
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
