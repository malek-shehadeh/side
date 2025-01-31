// // import React, { useState } from 'react';
// // import styles from '../../styles/Base.module.scss';
// // import { KnowledgeBaseHeader } from './Header';
// // import { SearchToolbar } from './SearchToolbar';
// // import { KnowledgeBaseCard } from './Card';
// // import { Pagination } from './Pagination';

// // const mockData = [
// //   {
// //     id: 1,
// //     image: "https://cdn.builder.io/...",  // Changed from imageSrc to image
// //     title: "Collection Name",
// //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// //     sections: 12, // Fixed key
// //     articles: 50  // Fixed key
// //   },
// //   // Repeat for all 8 cards with appropriate image sources
// // ];

// // export const KnowledgeBase: React.FC = () => {
// //   const [currentView, setCurrentView] = useState<'card' | 'list'>('card');
// //   const [currentPage, setCurrentPage] = useState(1);

// //   return (
// //     <main className={styles.knowledgeBaseDashboard}>
// //       <div className={styles.container}>
// //         <div className={styles.content}>
// //           <KnowledgeBaseHeader userName="User Names" />
// //           <div className={styles.dashboardStats} aria-hidden="true" />
// //           <SearchToolbar
// //             onSearch={(query) => console.log(query)}
// //             currentView={currentView}
// //             onViewChange={setCurrentView}
// //           />
// //           <div className={styles.cardsGrid} role="region" aria-label="Knowledge base collections">
// //             {mockData.map((item) => (
// //               <KnowledgeBaseCard
// //                 key={item.id}
// //                 id={item.id} // Ensure 'id' is passed

// //                 image={item.image}
// //                 title={item.title}
// //                 description={item.description}
// //                 sections={item.sections} // Fixed
// //                 articles={item.articles} // Fixed
// //               />
// //             ))}
// //           </div>
// //           <Pagination
// //             currentPage={currentPage}
// //             totalPages={5}
// //             onPageChange={setCurrentPage}
// //             itemsPerPage={10}  // Add actual value
// //   totalItems={50}    // Add actual value
// //           />
// //         </div>
// //       </div>
// //     </main>
// //   );
// // };



// import React, { useState } from 'react';
// import '../../styles/Base.scss'; // تأكد أن هذا الملف يحتوي على كل الأنماط المطلوبة
// import { KnowledgeBaseHeader } from './Header';
// import { SearchToolbar } from './SearchToolbar';
// import { KnowledgeBaseCard } from './Card';
// import { Pagination } from './Pagination';

// const mockData = [
//   {
//     id: 1,
//     image: "/src/assets/Knowledge Base Thumbnil.png", // Changed from imageSrc to image
//     title: "Collection Name",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     sections: 12, // Fixed key
//     articles: 50 // Fixed key
//   },
//   // Repeat for all 8 cards with appropriate image sources
// ];

// export const KnowledgeBase: React.FC = () => {
//   const [currentView, setCurrentView] = useState<'card' | 'list'>('card');
//   const [currentPage, setCurrentPage] = useState(1);

//   return (
//     <main className="knowledgeBaseDashboard">
//       <div className="container">
//         <div className="content">
//           <KnowledgeBaseHeader userName="User Names" />
//           <div className="dashboardStats" aria-hidden="true" />
//           <SearchToolbar
//             onSearch={(query) => console.log(query)}
//             currentView={currentView}
//             onViewChange={setCurrentView}
//           />
//           <div
//             className="cardsGrid"
//             role="region"
//             aria-label="Knowledge base collections"
//           >
//             {mockData.map((item) => (
//               <KnowledgeBaseCard
//                 key={item.id}
//                 id={item.id} // Ensure 'id' is passed
//                 image={item.image}
//                 title={item.title}
//                 description={item.description}
//                 sections={item.sections} // Fixed
//                 articles={item.articles} // Fixed
//               />
//             ))}
//           </div>
//           <Pagination
//             currentPage={currentPage}
//             totalPages={5}
//             onPageChange={setCurrentPage}
//             itemsPerPage={10} // Add actual value
//             totalItems={50} // Add actual value
//           />
//         </div>
//       </div>
//     </main>
//   );
// };
