// // import React from 'react';
// // import styles from '../../Base.module.css';
// // import { SearchBarProps, ViewToggleProps } from './types';

// // export const SearchToolbar: React.FC<SearchBarProps & ViewToggleProps> = ({
// //   onSearch,
// //   currentView,
// //   onViewChange
// // }) => {
// //   return (
// //     <div className={styles.toolsBar} role="toolbar" aria-label="Content view options">
// //       <div className={styles.viewToggle}>
// //         <button
// //           className={`${styles.viewButton} ${currentView === 'card' ? styles.active : ''}`}
// //           onClick={() => onViewChange('card')}
// //           aria-pressed={currentView === 'card'}
// //         >
// //           <div className={styles.cardViewIcon} aria-hidden="true" />
// //           <span>Card View</span>
// //         </button>
// //         <button
// //           className={`${styles.viewButton} ${currentView === 'list' ? styles.active : ''}`}
// //           onClick={() => onViewChange('list')}
// //           aria-pressed={currentView === 'list'}
// //         >
// //           <div className={styles.listViewIcon} aria-hidden="true" />
// //           <span>List View</span>
// //         </button>
// //       </div>
// //       <div className={styles.searchContainer} role="search">
// //         <div className={styles.searchIcon} aria-hidden="true" />
// //         <input
// //           type="search"
// //           className={styles.searchInput}
// //           placeholder="Search"
// //           onChange={(e) => onSearch(e.target.value)}
// //           aria-label="Search knowledge base"
// //         />
// //       </div>
// //       <div className={styles.actionButtons}>
// //         <button className={styles.filterButton}>
// //           <div className={styles.filterIcon} aria-hidden="true" />
// //           <span>Filter</span>
// //         </button>
// //         <button className={styles.addButton}>
// //           <div className={styles.addIcon} aria-hidden="true" />
// //           <span>Add New</span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };


// ///ششش

// // import React from 'react';
// // import '../../styles/Base.scss';
// // import { ToolbarProps } from '../../types';

// // export const SearchToolbar: React.FC<ToolbarProps> = ({
// //   onSearch,
// //   currentView,
// //   onViewChange,
// // }) => {
// //   return (
// //     <div className="toolsBar" role="toolbar" aria-label="Content view options">
// //       <div className="viewToggle">
// //         <button
// //           className={`viewButton ${currentView === 'card' ? 'active' : ''}`}
// //           onClick={() => onViewChange('card')}
// //           aria-pressed={currentView === 'card'}
// //         >
// //           <div className="cardViewIcon" aria-hidden="true" />
// //           <span>Card View</span>
// //         </button>
// //         <button
// //           className={`viewButton ${currentView === 'list' ? 'active' : ''}`}
// //           onClick={() => onViewChange('list')}
// //           aria-pressed={currentView === 'list'}
// //         >
// //           <div className="listViewIcon" aria-hidden="true" />
// //           <span>List View</span>
// //         </button>
// //       </div>
// //       <div className="searchContainer" role="search">
// //         <div className="searchIcon" aria-hidden="true" />
// //         <input
// //           type="search"
// //           className="searchInput"
// //           placeholder="Search"
// //           onChange={(e) => onSearch(e.target.value)}
// //           aria-label="Search knowledge base"
// //         />
// //       </div>
// //       <div className="actionButtons">
// //         <button className="filterButton">
// //           <div className="filterIcon" aria-hidden="true" />
// //           <span>Filter</span>
// //         </button>
// //         <button className="addButton">
// //           <div className="addIcon" aria-hidden="true" />
// //           <span>Add New</span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };


// ////كك
// import React from 'react';
// import { ToolbarProps } from '../../types';
// import { ViewToggle } from './ViewToggle';
// import { SearchBar } from './Searchbar';
// import '../../styles/Base.scss';

// export const SearchToolbar: React.FC<ToolbarProps> = ({
//   onSearch,
//   currentView,
//   onViewChange,
// }) => {
//   return (
//     <div className="toolsBar" role="toolbar" aria-label="Content view options">
//       <ViewToggle currentView={currentView} onViewChange={onViewChange} />
//       <SearchBar onSearch={onSearch} placeholder="Search" />
//       <div className="actionButtons">
//         <button className="filterButton">
//           <img src="/public/filter.svg" alt="" aria-hidden="true" />
//           <span>Filter</span>
//         </button>
//         <button className="addButton">
//           <img src="/public/add.svg" alt="" aria-hidden="true" />
//           <span>Add New</span>
//         </button>
//       </div>
//     </div>
//   );
// };