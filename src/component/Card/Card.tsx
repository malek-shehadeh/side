// // import React from 'react';
// // import { KnowledgeBaseCardProps } from './types';
// // import styles from '../../styles/Base.module.scss';

// // export const KnowledgeBaseCard: React.FC<KnowledgeBaseCardProps> = ({
// //   title,
// //   description,
// //   image,
// //   sections,
// //   articles
// // }) => {
// //   return (
// //     <article className={styles.knowledgeCard}>
// //       <img 
// //         src={image} 
// //         alt={title} 
// //         className={styles.knowledgeCardImage}
// //         loading="lazy"
// //       />
// //       <div className={styles.knowledgeCardContent}>
// //         <h3 className={styles.knowledgeCardTitle}>{title}</h3>
// //         <p className={styles.knowledgeCardDescription}>{description}</p>
// //         <div className={styles.knowledgeCardMetrics}>
// //           <div className={styles.knowledgeCardMetricsItem}>
// //             <img src="/folder.svg" alt="" aria-hidden="true" />
// //             <span>{sections} Sections</span>
// //           </div>
// //           <div className={styles.knowledgeCardMetricsItem}>
// //             <img src="/document.svg" alt="" aria-hidden="true" />
// //             <span>{articles} Articles</span>
// //           </div>
// //         </div>
// //       </div>
// //     </article>
// //   );
// // };




// ///ششش

// // import React from 'react';
// // import { KnowledgeBaseCardProps } from './types';
// // import '../../styles/Base.scss'; // استيراد الأنماط مباشرة

// // export const KnowledgeBaseCard: React.FC<KnowledgeBaseCardProps> = ({
// //   title,
// //   description,
// //   image,
// //   sections,
// //   articles,
// // }) => {
// //   return (
// //     <article className="knowledgeCard">
// //       <img
// //         src={image}
// //         alt={title}
// //         className="knowledgeCardImage"
// //         loading="lazy"
// //       />
// //       <div className="knowledgeCardContent">
// //         <h3 className="knowledgeCardTitle">{title}</h3>
// //         <p className="knowledgeCardDescription">{description}</p>
// //         <div className="knowledgeCardMetrics">
// //           <div className="knowledgeCardMetricsItem">
// //             <img src="/public/folder-2.svg" alt="" aria-hidden="true" />
// //             <span>{sections} Sections</span>
// //           </div>
// //           <div className="knowledgeCardMetricsItem">
// //             <img src="/public/note-text.svg" alt="" aria-hidden="true" />
// //             <span>{articles} Articles</span>
// //           </div>
// //         </div>
// //       </div>
// //     </article>
// //   );
// // };
// /////////كككك


// import React from 'react';
// import { KnowledgeBaseCardProps } from '../../types';
// import '../../styles/Base.scss';

// export const KnowledgeBaseCard: React.FC<KnowledgeBaseCardProps> = ({
//   title,
//   description,
//   image,
//   sections,
//   articles,
// }) => {
//   return (
//     <article className="knowledgeCard">
//       <img
//         src={image}
//         alt={title}
//         className="knowledgeCardImage"
//         loading="lazy"
//       />
//       <div className="knowledgeCardContent">
//         <h3 className="knowledgeCardTitle">{title}</h3>
//         <p className="knowledgeCardDescription">{description}</p>
//         <div className="knowledgeCardMetrics">
//           <div className="knowledgeCardMetricsItem">
//             <img src="/public/folder-2.svg" alt="" aria-hidden="true" />
//             <span>{sections} Sections</span>
//           </div>
//           <div className="knowledgeCardMetricsItem">
//             <img src="/public/note-text.svg" alt="" aria-hidden="true" />
//             <span>{articles} Articles</span>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };