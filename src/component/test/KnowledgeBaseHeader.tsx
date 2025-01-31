import React from 'react';
import { KnowledgeBaseHeaderProps } from '../../types';
import '../../styles/Base.scss';

export const KnowledgeBaseHeader: React.FC<KnowledgeBaseHeaderProps> = () => {
  return (
      <div className="headerContent">
        <div className="headerTitle">
          {/* <img src="/public/Chart graph 2.svg" alt="" aria-hidden="true" /> */}
          <h1>Knowledge Base</h1>
        </div>
        <nav className="navigation">
          <a href="/" className="navigationItem">
            <img src="/public/home.svg" alt="" aria-hidden="true" />
            <span>Home</span>
          </a>
          <a href="/notifications" className="navigationItem">
            <img src="/public/Notification.svg" alt="" aria-hidden="true" />
            <span>Notifications</span>
          </a>
          <div className="navigationItem">
            <img src="/public/Group.svg" alt="" aria-hidden="true" />
            <span>English</span>
          </div>
          <div className="navigationItem">
  <div className="imageWrapper">
    <img src="/public/Oval.svg" alt="" aria-hidden="true" className="backgroundImage" />
    <img src="/public/Profile.svg" alt="" aria-hidden="true" className="profileImage" />
    
  </div>
  <span>UserNames</span>
  <img src="/public/Chart graph 5.svg" alt="" aria-hidden="true" />

</div>

        </nav>
      </div>
    
  );
};