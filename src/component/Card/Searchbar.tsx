// // // import React from 'react';
// // // import { SearchBarProps } from './types';
// // // import styles from '../../styles/Base.module.scss';

// // // export const SearchBar: React.FC<SearchBarProps> = ({
// // //   onSearch,
// // //   placeholder = 'Search'
// // // }) => {
// // //   return (
// // //     <div className={styles.searchContainer} role="search">
// // //       <img src="/search-icon.svg" alt="" aria-hidden="true" />
// // //       <label htmlFor="search-input" className="visually-hidden">
// // //         Search knowledge base
// // //       </label>
// // //       <input
// // //         id="search-input"
// // //         type="search"
// // //         placeholder={placeholder}
// // //         onChange={(e) => onSearch(e.target.value)}
// // //       />
// // //     </div>
// // //   );
// // // };


// // ///شش

// // import React from 'react';
// // import '../../styles/Base.scss';
// // import { DashboardSearchBarProps } from '../../types/index';

// // export const SearchBar: React.FC<DashboardSearchBarProps> = ({
// //   onSearch,
// //   placeholder = 'Search',
// // }) => {
// //   return (
// //     <div className="searchContainer" role="search">
// //       <img src="/public/search-normal.1.svg" alt="" aria-hidden="true" />
// //       <label htmlFor="search-input" className="visually-hidden">
// //         Search knowledge base
// //       </label>
// //       <input
// //         id="search-input"
// //         type="search"
// //         className="searchInput"
// //         placeholder={placeholder}
// //         onChange={(e) => onSearch(e.target.value)}
// //       />
// //     </div>
// //   );
// // };


// ////ككك


// import React from 'react';
// import { DashboardSearchBarProps } from '../../types';
// import '../../styles/Base.scss';

// export const SearchBar: React.FC<DashboardSearchBarProps> = ({
//   onSearch,
//   placeholder = 'Search'
// }) => {
//   return (
//     <div className="searchContainer" role="search">
//       <img src="/public/search-normal.1.svg" alt="" aria-hidden="true" />
//       <label htmlFor="search-input" className="visually-hidden">
//         Search knowledge base
//       </label>
//       <input
//         id="search-input"
//         type="search"
//         className="searchInput"
//         placeholder={placeholder}
//         onChange={(e) => onSearch(e.target.value)}
//       />
//     </div>
//   );
// };