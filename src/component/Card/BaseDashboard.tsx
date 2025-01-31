// // import React, { useState } from 'react';
// // import { KnowledgeBaseCard } from './Card';
// // import { SearchBar } from './Searchbar';
// // import { ViewToggle } from './ViewToggle';
// // import { Pagination } from './Pagination';
// // import styles from '../../styles/Base.module.scss';

// // export const KnowledgeBaseDashboard: React.FC = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [currentView, setCurrentView] = useState<'card' | 'list'>('card');
// //   const [currentPage, setCurrentPage] = useState(1);

// //   const mockData = Array.from({ length: 8 }, (_, i) => ({
// //     id: `kb-${i + 1}`,
// //     title: 'Collection Name',
// //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
// //     image: `/collection-${i + 1}.jpg`,
// //     sections: 12,
// //     articles: 50
// //   }));

// //   return (
// //     <div className={styles.knowledgeBaseDashboard}>
// //       <div className={styles.container}>
// //         <header className={styles.header}>
// //           <div className={styles.headerContent}>
// //             <div className={styles.headerTitle}>
// //               <img src="/knowledge-icon.svg" alt="" aria-hidden="true" />
// //               <h1>Knowledge Base</h1>
// //             </div>
// //             <nav className={styles.navigation}>
// //               <a href="/" className={styles.navigationItem}>
// //                 <img src="/home-icon.svg" alt="" aria-hidden="true" />
// //                 <span>Home</span>
// //               </a>
// //               <a href="/notifications" className={styles.navigationItem}>
// //                 <img src="/notification-icon.svg" alt="" aria-hidden="true" />
// //                 <span>Notifications</span>
// //               </a>
// //               <div className={styles.navigationItem}>
// //                 <img src="/language-icon.svg" alt="" aria-hidden="true" />
// //                 <span>English</span>
// //               </div>
// //               <div className={styles.navigationItem}>
// //                 <img src="/profile-icon.svg" alt="" aria-hidden="true" />
// //                 <span>User Name</span>
// //               </div>
// //             </nav>
// //           </div>
// //         </header>

// //         <div className={styles.toolsBar}>
// //           <ViewToggle 
// //   currentView={currentView} // ✅ Correct prop name
// //   onViewChange={setCurrentView}
// //           />
// //           <SearchBar 
// //             onSearch={setSearchTerm}
// //             placeholder="Search"
// //           />
// //           <div className={styles.actionButtons}>
// //             <button className={styles.filterButton}>
// //               <img src="/filter-icon.svg" alt="" aria-hidden="true" />
// //               <span>Filter</span>
// //             </button>
// //             <button className={styles.addButton}>
// //               <img src="/add-icon.svg" alt="" aria-hidden="true" />
// //               <span>Add New</span>
// //             </button>
// //           </div>
// //         </div>

// //         <div className={styles.cardsGrid} role="feed" aria-label="Knowledge base articles">
// //           {mockData.map(card => (
// //             <KnowledgeBaseCard key={card.id} {...card} />
// //           ))}
// //         </div>

// //         <Pagination
// //           currentPage={currentPage}
// //           totalPages={10}
// //           onPageChange={setCurrentPage}
// //           itemsPerPage={8}
// //           totalItems={80}
// //         />
// //       </div>
// //     </div>
// //   );
// // };




// // import React, { useState } from 'react';
// // import { KnowledgeBaseCard } from './Card';
// // import { SearchBar } from './Searchbar';
// // import { ViewToggle } from './ViewToggle';
// // import { Pagination } from './Pagination';
// // import styles from '../../styles/Base.module.scss';

// // export const KnowledgeBaseDashboard: React.FC = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [currentView, setCurrentView] = useState<'card' | 'list'>('card');
// //   const [currentPage, setCurrentPage] = useState(1);

// //   const mockData = Array.from({ length: 8 }, (_, i) => ({
// //     id: `kb-${i + 1}`,
// //     title: 'Collection Name',
// //     description:
// //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
// //     image: `/collection-${i + 1}.jpg`,
// //     sections: 12,
// //     articles: 50,
// //   }));

// //   // Filter mock data based on the search term
// //   const filteredData = mockData.filter((card) =>
// //     card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     card.description.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className={styles.knowledgeBaseDashboard}>
// //       <div className={styles.container}>
// //         <header className={styles.header}>
// //           <div className={styles.headerContent}>
// //             <div className={styles.headerTitle}>
// //               <img src="/knowledge-icon.svg" alt="" aria-hidden="true" />
// //               <h1>Knowledge Base</h1>
// //             </div>
// //             <nav className={styles.navigation}>
// //               <a href="/" className={styles.navigationItem}>
// //                 <img src="/home-icon.svg" alt="" aria-hidden="true" />
// //                 <span>Home</span>
// //               </a>
// //               <a href="/notifications" className={styles.navigationItem}>
// //                 <img src="/notification-icon.svg" alt="" aria-hidden="true" />
// //                 <span>Notifications</span>
// //               </a>
// //               <div className={styles.navigationItem}>
// //                 <img src="/language-icon.svg" alt="" aria-hidden="true" />
// //                 <span>English</span>
// //               </div>
// //               <div className={styles.navigationItem}>
// //                 <img src="/profile-icon.svg" alt="" aria-hidden="true" />
// //                 <span>User Name</span>
// //               </div>
// //             </nav>
// //           </div>
// //         </header>

// //         <div className={styles.toolsBar}>
// //           <ViewToggle 
// //             currentView={currentView} // ✅ Correct prop name
// //             onViewChange={setCurrentView}
// //           />
// //           <SearchBar 
// //             onSearch={setSearchTerm}
// //             placeholder="Search"
// //           />
// //           <div className={styles.actionButtons}>
// //             <button className={styles.filterButton}>
// //               <img src="/filter-icon.svg" alt="" aria-hidden="true" />
// //               <span>Filter</span>
// //             </button>
// //             <button className={styles.addButton}>
// //               <img src="/add-icon.svg" alt="" aria-hidden="true" />
// //               <span>Add New</span>
// //             </button>
// //           </div>
// //         </div>

// //         <div className={styles.cardsGrid} role="feed" aria-label="Knowledge base articles">
// //           {filteredData.map((card) => (
// //             <KnowledgeBaseCard key={card.id} {...card} />
// //           ))}
// //         </div>

// //         <Pagination
// //           currentPage={currentPage}
// //           totalPages={10}
// //           onPageChange={setCurrentPage}
// //           itemsPerPage={8}
// //           totalItems={80}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// /////ششش

// // import React, { useState } from 'react';
// // import { KnowledgeBaseCard } from './Card';
// // import { SearchBar } from './Searchbar';
// // import { ViewToggle } from './ViewToggle';
// // import { Pagination } from './Pagination';
// // import '../../styles/Base.scss'; // استيراد الأنماط مباشرة

// // export const KnowledgeBaseDashboard: React.FC = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [currentView, setCurrentView] = useState<'card' | 'list'>('card');
// //   const [currentPage, setCurrentPage] = useState(1);

// //   const mockData = Array.from({ length: 8 }, (_, i) => ({
// //     id: `kb-${i + 1}`,
// //     title: 'Collection Name',
// //     description:
// //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
// //     image: `/collection-${i + 1}.jpg`,
// //     // image: "/src/assets/Knowledge Base Thumbnil.png",
// //     sections: 12,
// //     articles: 50,
// //   }));

// //   // Filter mock data based on the search term
// //   const filteredData = mockData.filter((card) =>
// //     card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     card.description.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="knowledgeBaseDashboard">
// //       <div className="container">
// //         <header className="header">
// //           <div className="headerContent">
// //             <div className="headerTitle">
// //               <img src="/public/Chart graph 2.svg" alt="" aria-hidden="true" />
// //               <h1>Knowledge Base</h1>
// //             </div>
// //             <nav className="navigation">
// //               <a href="/" className="navigationItem">
// //                 <img src="/public/home.svg" alt="" aria-hidden="true" />
// //                 <span>Home</span>
// //               </a>
// //               <a href="/notifications" className="navigationItem">
// //                 <img src="/public/Notification.svg" alt="" aria-hidden="true" />
// //                 <span>Notifications</span>
// //               </a>
// //               <a href="/notifications" className="navigationItem">
// //                 <img src="/public/Group.svg" alt="" aria-hidden="true" />
// //                 <span>English</span>
// //                 </a>
// //                               <div className="navigationItem">
// //                 <img src="/profile-icon.svg" alt="" aria-hidden="true" />
// //                 <span>User Name</span>
// //               </div>
// //             </nav>
// //           </div>
// //         </header>

// //         <div className="toolsBar">
// //           <ViewToggle 
// //             currentView={currentView}
// //             onViewChange={setCurrentView}
// //           />
// //           <SearchBar 
// //             onSearch={setSearchTerm}
// //             placeholder="Search"
// //           />
// //           <div className="actionButtons">
// //             <button className="filterButton">
// //               <img src="/public/filter.svg" alt="" aria-hidden="true" />
// //               <span>Filter</span>
// //             </button>
// //             <button className="addButton">
// //               <img src="/public/add.svg" alt="" aria-hidden="true" />
// //               <span>Add New</span>
// //             </button>
// //           </div>
// //         </div>

// //         <div className="cardsGrid" role="feed" aria-label="Knowledge base articles">
// //           {filteredData.map((card) => (
// //             <KnowledgeBaseCard key={card.id} {...card} />
// //           ))}
// //         </div>

// //         <Pagination
// //           currentPage={currentPage}
// //           totalPages={10}
// //           onPageChange={setCurrentPage}
// //           itemsPerPage={8}
// //           totalItems={80}
// //         />
// //       </div>
// //     </div>
// //   );
// // };



// ///////ككك

// import React, { useState } from 'react';
// import { KnowledgeBaseCard } from './Card';
// import { KnowledgeBaseHeader } from './Header';
// import { SearchToolbar } from './SearchToolbar';
// import { Pagination } from './Pagination';
// import '../../styles/Base.scss';

// export const KnowledgeBaseDashboard: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentView, setCurrentView] = useState<'card' | 'list'>('card');
//   const [currentPage, setCurrentPage] = useState(1);

//   const mockData = Array.from({ length: 8 }, (_, i) => ({
//     id: `kb-${i + 1}`,
//     title: 'Collection Name',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     image: `/collection-${i + 1}.jpg`,
//     sections: 12,
//     articles: 50,
//   }));

//   const filteredData = mockData.filter((card) =>
//     card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     card.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="knowledgeBaseDashboard">
//       <div className="container">
//         <KnowledgeBaseHeader userName="User Name" />
//         <SearchToolbar
//           currentView={currentView}
//           onViewChange={setCurrentView}
//           onSearch={setSearchTerm}
//         />
//         <div className="cardsGrid" role="feed" aria-label="Knowledge base articles">
//           {filteredData.map((card) => (
//             <KnowledgeBaseCard key={card.id} {...card} />
//           ))}
//         </div>
//         <Pagination
//           currentPage={currentPage}
//           totalPages={Math.ceil(filteredData.length / 10)}
//           onPageChange={setCurrentPage}
//           itemsPerPage={10}
//           totalItems={filteredData.length}
//         />
//       </div>
//     </div>
//   );
// };