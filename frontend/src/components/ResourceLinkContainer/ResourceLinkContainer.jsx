import React from 'react';

const ResourceLinkContainer = ({ resourceLinks }) => {
  return (
    <div className="resource-link-container">
      {resourceLinks.map((link, index) => (
        <React.Fragment key={link.id}>
          <div className="resource-link">
            <div className="link-title">{link.name}</div>
            <a href={link.link} target="_blank" rel="noopener noreferrer" className="link-button">
              Link
            </a>
          </div>
          {index < resourceLinks.length - 1 && <div className="divider"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ResourceLinkContainer;
