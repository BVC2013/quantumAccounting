import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

// Component to render a single content card from DOCX-extracted content
const ContentCard = ({ card }) => {
  return (
    <div className="content-card">
      <h3>{card.title}</h3>
      {card.description && <p className="card-description">{card.description}</p>}
      
      {/* Render purpose/keyActivities list */}
      {(card.purpose || card.keyActivities) && (
        <div className="card-section">
          <h4>{card.purpose ? 'Purpose' : 'Key Activities'}</h4>
          <ul>
            {(card.purpose || card.keyActivities).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Render Why It Matters list */}
      {card.whyItMatters && (
        <div className="card-section">
          <h4>Why It Matters</h4>
          <ul>
            {card.whyItMatters.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Render Framework Reference if present */}
      {card.frameworkReference && (
        <div className="card-framework">
          <em>{card.frameworkReference}</em>
        </div>
      )}
    </div>
  );
};

// Main ServiceDetailPage component
const ServiceDetailPage = ({
  title,
  summary,
  cards = [],
  differentiator,
  relatedPages = [],
  backgroundImage = '',
}) => {
  return (
    <>
      <PageBanner 
        title={title} 
        subtitle=""
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            {/* Summary section */}
            {summary && (
              <div className="service-summary">
                <p>{summary}</p>
              </div>
            )}
            
            {/* Cards grid */}
            {cards.length > 0 && (
              <div className="content-cards-grid">
                {cards.map((card, index) => (
                  <ContentCard key={index} card={card} />
                ))}
              </div>
            )}
            
            {/* Differentiator section if present */}
            {differentiator && (
              <div className="differentiator-section">
                <h2>What Sets Us Apart</h2>
                <p>{differentiator}</p>
              </div>
            )}
            
            {/* Call to action */}
            <p style={{ marginTop: '2rem' }}>
              Ready to learn more? <Link to="/contact">Contact us</Link> today
              or <Link to="/book-meeting">schedule a consultation</Link>.
            </p>
          </div>
          <Sidebar relatedPages={relatedPages} />
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;
