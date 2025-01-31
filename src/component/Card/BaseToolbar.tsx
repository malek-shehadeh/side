
// // import React, { useState } from 'react';
// // import styles from '../../styles/Base.module.scss';

// // export const KnowledgeBaseToolbar: React.FC = () => {
// //   const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

// //   return (
// //     <div className={styles.toolsBar}>
// //       <div className={styles.viewToggle}>
// //         <button
// //           className={`${styles.viewToggleButton} ${viewType === 'grid' ? styles.active : ''}`}
// //           onClick={() => setViewType('grid')}
// //           aria-pressed={viewType === 'grid'}
// //         >
// //           <img src="/icons/grid.svg" alt="" aria-hidden="true" />
// //           <span>Card View</span>
// //         </button>
// //         <button
// //           className={`${styles.viewToggleButton} ${viewType === 'list' ? styles.active : ''}`}
// //           onClick={() => setViewType('list')}
// //           aria-pressed={viewType === 'list'}
// //         >
// //           <img src="/icons/list.svg" alt="" aria-hidden="true" />
// //           <span>List View</span>
// //         </button>
// //       </div>
      
// //       <div className={styles.searchContainer} role="search">
// //         <img src="/icons/search.svg" alt="" aria-hidden="true" />
// //         <input
// //           type="search"
// //           placeholder="Search"
// //           aria-label="Search knowledge base"
// //         />
// //       </div>

// //       <div className={styles.actionButtons}>
// //         <button className={styles.filterButton}>
// //           <img src="/icons/filter.svg" alt="" aria-hidden="true" />
// //           <span>Filter</span>
// //         </button>
// //         <button className={styles.addButton}>
// //           <img src="/icons/add.svg" alt="" aria-hidden="true" />
// //           <span>Add New</span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };


// ////ششش

// import React, { useState } from 'react';
// import '../../styles/Base.scss'; // استيراد الأنماط مباشرة

// export const KnowledgeBaseToolbar: React.FC = () => {
//   const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

//   return (
//     <div className="toolsBar">
//       <div className="viewToggle">
//         <button
//           className={`viewToggleButton ${viewType === 'grid' ? 'active' : ''}`}
//           onClick={() => setViewType('grid')}
//           aria-pressed={viewType === 'grid'}
//         >
//           <img src="/public/element-3.svg" alt="" aria-hidden="true" />
//           <span>Card View</span>
//         </button>
//         <button
//           className={`viewToggleButton ${viewType === 'list' ? 'active' : ''}`}
//           onClick={() => setViewType('list')}
//           aria-pressed={viewType === 'list'}
//         >
//           <img src="/public/row-vertical.svg" alt="" aria-hidden="true" />
//           <span>List View</span>
//         </button>
//       </div>
      
//       <div className="searchContainer" role="search">
//         <img src="/public/search-normal.1.svg" alt="" aria-hidden="true" />
//         <input
//           type="search"
//           placeholder="Search"
//           aria-label="Search knowledge base"
//         />
//       </div>

//       <div className="actionButtons">
//         <button className="filterButton">
//           <img src="/icons/filter.svg" alt="" aria-hidden="true" />
//           <span>Filter</span>
//         </button>
//         <button className="addButton">
//           <img src="/icons/add.svg" alt="" aria-hidden="true" />
//           <span>Add New</span>
//         </button>
//       </div>
//     </div>
//   );
// };
