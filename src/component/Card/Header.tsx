// // import React from 'react';
// // import styles from '../../styles/Base.module.scss';

// // export const KnowledgeBaseHeader: React.FC = () => {
// //   return (
// //     <header className={styles.header}>
// //       <div className={styles.headerContent}>
// //         <div className={styles.headerTitle}>
// //           <img src="/icons/knowledge.svg" alt="" aria-hidden="true" />
// //           <h1>Knowledge Base</h1>
// //         </div>
// //         <nav className={styles.navigation} aria-label="Secondary navigation">
// //           <a href="/" className={styles.navigationItem}>
// //             <img src="/icons/home.svg" alt="" aria-hidden="true" />
// //             <span>Home</span>
// //           </a>
// //           <a href="/notifications" className={styles.navigationItem}>
// //             <img src="/icons/notification.svg" alt="" aria-hidden="true" />
// //             <span>Notifications</span>
// //           </a>
// //           <button className={styles.navigationItem}>
// //             <img src="/icons/language.svg" alt="" aria-hidden="true" />
// //             <span>English</span>
// //           </button>
// //           <button className={styles.navigationItem}>
// //             <img src="/icons/profile.svg" alt="" aria-hidden="true" />
// //             <span>User Name</span>
// //           </button>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };


// // import React from 'react';
// // import styles from '../../styles/Base.module.scss';

// // interface KnowledgeBaseHeaderProps {
// //   userName: string;
// // }

// // export const KnowledgeBaseHeader: React.FC<KnowledgeBaseHeaderProps> = ({ userName }) => {
// //   return (
// //     <header className={styles.header}>
// //       <div className={styles.headerContent}>
// //         <div className={styles.headerTitle}>
// //           <img src="/icons/knowledge.svg" alt="" aria-hidden="true" />
// //           <h1>Knowledge Base</h1>
// //         </div>
// //         <nav className={styles.navigation} aria-label="Secondary navigation">
// //           <a href="/" className={styles.navigationItem}>
// //             <img src="/icons/home.svg" alt="" aria-hidden="true" />
// //             <span>Home</span>
// //           </a>
// //           <a href="/notifications" className={styles.navigationItem}>
// //             <img src="/icons/notification.svg" alt="" aria-hidden="true" />
// //             <span>Notifications</span>
// //           </a>
// //           <button className={styles.navigationItem}>
// //             <img src="/icons/language.svg" alt="" aria-hidden="true" />
// //             <span>English</span>
// //           </button>
// //           <button className={styles.navigationItem}>
// //             <img src="/icons/profile.svg" alt="" aria-hidden="true" />
// //             <span>{userName}</span>  {/* Updated to use prop */}
// //           </button>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };


// ///ششش

// // import React from 'react';
// // import '../../styles/Base.scss'; // استيراد ملف الأنماط فقط

// // interface KnowledgeBaseHeaderProps {
// //   userName: string;
// // }

// // export const KnowledgeBaseHeader: React.FC<KnowledgeBaseHeaderProps> = ({ userName }) => {
// //   return (
// //     <header className="header">
// //       <div className="headerContent">
// //         <div className="headerTitle">
// //           <img src="/icons/knowledge.svg" alt="" aria-hidden="true" />
// //           <h1>Knowledge Base</h1>
// //         </div>
// //         <nav className="navigation" aria-label="Secondary navigation">
// //           <a href="/" className="navigationItem">
// //             <img src="/icons/home.svg" alt="" aria-hidden="true" />
// //             <span>Home</span>
// //           </a>
// //           <a href="/notifications" className="navigationItem">
// //             <img src="/icons/notification.svg" alt="" aria-hidden="true" />
// //             <span>Notifications</span>
// //           </a>
// //           <button className="navigationItem">
// //             <img src="/icons/language.svg" alt="" aria-hidden="true" />
// //             <span>English</span>
// //           </button>
// //           <button className="navigationItem">
// //             <img src="/icons/profile.svg" alt="" aria-hidden="true" />
// //             <span>{userName}</span>
// //           </button>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };


// /////ككك

// import React from 'react';
// import { KnowledgeBaseHeaderProps } from '../../types';
// import '../../styles/Base.scss';

// export const KnowledgeBaseHeader: React.FC<KnowledgeBaseHeaderProps> = ({ userName }) => {
//   return (
//     <header className="header">
//       <div className="headerContent">
//         <div className="headerTitle">
//           <img src="/public/Chart graph 2.svg" alt="" aria-hidden="true" />
//           <h1>Knowledge Base</h1>
//         </div>
//         <nav className="navigation">
//           <a href="/" className="navigationItem">
//             <img src="/public/home.svg" alt="" aria-hidden="true" />
//             <span>Home</span>
//           </a>
//           <a href="/notifications" className="navigationItem">
//             <img src="/public/Notification.svg" alt="" aria-hidden="true" />
//             <span>Notifications</span>
//           </a>
//           <div className="navigationItem">
//             <img src="/public/Group.svg" alt="" aria-hidden="true" />
//             <span>English</span>
//           </div>
//           <div className="navigationItem">
//             <img src="/profile-icon.svg" alt="" aria-hidden="true" />
//             <span>{userName}</span>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };