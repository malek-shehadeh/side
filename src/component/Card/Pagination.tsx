// // // import React from 'react';
// // // import { PaginationProps } from './types';
// // // import styles from '../../styles/Base.module.scss';

// // // export const Pagination: React.FC<PaginationProps> = ({
// // //     currentPage,
// // //     totalPages,
// // //     onPageChange,
// // //     itemsPerPage = 10, // ✅ Default to 10 if undefined
// // //     totalItems = 0 // ✅ Default to 0 if undefined
// // //   }) => {
// // //     return (
// // //       <nav className={styles.pagination} aria-label="Pagination">
// // //         <p className={styles.paginationInfo}>
// // //           Showing {(currentPage - 1) * (itemsPerPage ?? 1) + 1} - {Math.min(currentPage * (itemsPerPage ?? 1), totalItems)} of {totalItems}
// // //         </p>
// // //         <div className={styles.paginationControls}>
// // //           <button
// // //             className={styles.paginationButton}
// // //             onClick={() => onPageChange(currentPage - 1)}
// // //             disabled={currentPage === 1}
// // //             aria-label="Previous page"
// // //           >
// // //             <img src="/chevron-left.svg" alt="" aria-hidden="true" />
// // //           </button>
// // //           {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
// // //             <button
// // //               key={page}
// // //               className={`${styles.paginationButton} ${currentPage === page ? styles.active : ''}`}
// // //               onClick={() => onPageChange(page)}
// // //               aria-current={currentPage === page ? 'page' : undefined}
// // //             >
// // //               {page}
// // //             </button>
// // //           ))}
// // //           <button
// // //             className={styles.paginationButton}
// // //             onClick={() => onPageChange(currentPage + 1)}
// // //             disabled={currentPage === totalPages}
// // //             aria-label="Next page"
// // //           >
// // //             <img src="/chevron-right.svg" alt="" aria-hidden="true" />
// // //           </button>
// // //         </div>
// // //       </nav>
// // //     );
// // //   };
  


// // ///ششش

// // import { PaginationProps } from './types';
// // import React from 'react';
// // import '../../styles/Base.scss'; 

// // export const Pagination: React.FC<PaginationProps> = ({
// //   currentPage,
// //   totalPages,
// //   onPageChange,
// //   itemsPerPage = 10, // ✅ Default to 10 if undefined
// //   totalItems = 0 // ✅ Default to 0 if undefined
// // }) => {
// //   return (
// //     <nav className="pagination" aria-label="Pagination">
// //       <p className="paginationInfo">
// //         Showing {(currentPage - 1) * (itemsPerPage ?? 1) + 1} - {Math.min(currentPage * (itemsPerPage ?? 1), totalItems)} of {totalItems}
// //       </p>
// //       <div className="paginationControls">
// //         <button
// //           className="paginationButton"
// //           onClick={() => onPageChange(currentPage - 1)}
// //           disabled={currentPage === 1}
// //           aria-label="Previous page"
// //         >
// //           <img src="/chevron-left.svg" alt="" aria-hidden="true" />
// //         </button>
// //         {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
// //           <button
// //             key={page}
// //             className={`paginationButton ${currentPage === page ? 'active' : ''}`}
// //             onClick={() => onPageChange(page)}
// //             aria-current={currentPage === page ? 'page' : undefined}
// //           >
// //             {page}
// //           </button>
// //         ))}
// //         <button
// //           className="paginationButton"
// //           onClick={() => onPageChange(currentPage + 1)}
// //           disabled={currentPage === totalPages}
// //           aria-label="Next page"
// //         >
// //           <img src="/chevron-right.svg" alt="" aria-hidden="true" />
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // };
// /////ككك

// import React from 'react';
// import { PaginationProps } from '../../types';
// import '../../styles/Base.scss';

// export const Pagination: React.FC<PaginationProps> = ({
//   currentPage,
//   totalPages,
//   onPageChange,
//   itemsPerPage = 10,
//   totalItems = 0
// }) => {
//   return (
//     <nav className="pagination" aria-label="Pagination">
//       <p className="paginationInfo">
//         Showing {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
//       </p>
//       <div className="paginationControls">
//         <button
//           className="paginationButton"
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           aria-label="Previous page"
//         >
//           <img src="/chevron-left.svg" alt="" aria-hidden="true" />
//         </button>
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
//           <button
//             key={page}
//             className={`paginationButton ${currentPage === page ? 'active' : ''}`}
//             onClick={() => onPageChange(page)}
//             aria-current={currentPage === page ? 'page' : undefined}
//           >
//             {page}
//           </button>
//         ))}
//         <button
//           className="paginationButton"
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           aria-label="Next page"
//         >
//           <img src="/chevron-right.svg" alt="" aria-hidden="true" />
//         </button>
//       </div>
//     </nav>
//   );
// };