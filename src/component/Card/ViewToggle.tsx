// // // import React from 'react';
// // // import { ViewToggleProps } from './types';
// // // import styles from '../../styles/Base.module.scss';

// // // export const ViewToggle: React.FC<ViewToggleProps> = ({
// // //   currentView,
// // //   onViewChange
// // // }) => {
// // //   return (
// // //     <div className={styles.viewToggle}>
// // //       <button
// // //         className={`${styles.viewToggleButton} ${currentView === 'card' ? styles.active : ''}`}
// // //         onClick={() => onViewChange('card')}
// // //         aria-pressed={currentView === 'card'}
// // //       >
// // //         <img src="/grid-icon.svg" alt="" aria-hidden="true" />
// // //         <span>Card View</span>
// // //       </button>
// // //       <button
// // //         className={`${styles.viewToggleButton} ${currentView === 'list' ? styles.active : ''}`}
// // //         onClick={() => onViewChange('list')}
// // //         aria-pressed={currentView === 'list'}
// // //       >
// // //         <img src="/list-icon.svg" alt="" aria-hidden="true" />
// // //         <span>List View</span>
// // //       </button>
// // //     </div>
// // //   );
// // // };


// // ///ششش

// // import React from 'react';
// // import '../../styles/Base.scss';
// // import { ViewToggleProps } from '../../types/index';

// // export const ViewToggle: React.FC<ViewToggleProps> = ({
// //   currentView,
// //   onViewChange
// // }) => {
// //   return (
// //     <div className="viewToggle">
// //       <button
// //         className={`viewToggleButton ${currentView === 'card' ? 'active' : ''}`}
// //         onClick={() => onViewChange('card')}
// //         aria-pressed={currentView === 'card'}
// //       >
// //         <img src="/public/element-3.svg" alt="" aria-hidden="true" />
// //         <span>Card View</span>
// //       </button>
// //       <button
// //         className={`viewToggleButton ${currentView === 'list' ? 'active' : ''}`}
// //         onClick={() => onViewChange('list')}
// //         aria-pressed={currentView === 'list'}
// //       >
// //         <img src="/public/row-vertical.svg" alt="" aria-hidden="true" />
// //         <span>List View</span>
// //       </button>
// //     </div>
// //   );
// // };
// /////كك


// import React from 'react';
// import { ViewToggleProps } from '../../types';
// import '../../styles/Base.scss';

// export const ViewToggle: React.FC<ViewToggleProps> = ({
//   currentView,
//   onViewChange
// }) => {
//   return (
//     <div className="viewToggle">
//       <button
//         className={`viewToggleButton ${currentView === 'card' ? 'active' : ''}`}
//         onClick={() => onViewChange('card')}
//         aria-pressed={currentView === 'card'}
//       >
//         <img src="/public/element-3.svg" alt="" aria-hidden="true" />
//         <span>Card View</span>
//       </button>
//       <button
//         className={`viewToggleButton ${currentView === 'list' ? 'active' : ''}`}
//         onClick={() => onViewChange('list')}
//         aria-pressed={currentView === 'list'}
//       >
//         <img src="/public/row-vertical.svg" alt="" aria-hidden="true" />
//         <span>List View</span>
//       </button>
//     </div>
//   );
// };