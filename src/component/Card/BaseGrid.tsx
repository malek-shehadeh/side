// // import React from 'react';
// // import { KnowledgeBaseCard } from './Card';
// // import styles from '../../styles/Base.module.scss';

// // export const KnowledgeBaseGrid: React.FC = () => {
// //   return (
// //     <div className={styles.cardsGrid}>
// //       {Array.from({ length: 8 }).map((_, index) => (
// //         <KnowledgeBaseCard
// //           key={index}
// //           title="Collection Name"
// //           id={`card-${index}`} // Add unique ID

// //           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// //           image={`/images/collection-${index + 1}.jpg`}
// //           sections={12}
// //           articles={50}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// /////شششش

// import React from 'react';
// import { KnowledgeBaseCard } from './Card';
// import '../../styles/Base.scss'; // استيراد الأنماط مباشرة

// export const KnowledgeBaseGrid: React.FC = () => {
//   return (
//     <div className="cardsGrid">
//       {Array.from({ length: 8 }).map((_, index) => (
//         <KnowledgeBaseCard
//           key={index}
//           title="Collection Name"
//           id={`card-${index}`} // Add unique ID
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           image={`/images/collection-${index + 1}.jpg`}
//           sections={12}
//           articles={50}
//         />
//       ))}
//     </div>
//   );
// };
