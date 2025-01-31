// // // import React, { useState } from 'react';
// // // import { SideMenu } from '../Sidebar/SideMenu';
// // // import { KnowledgeBaseDashboard } from './BaseDashboard';
// // // import styles from '../../styles/BaseLayout.module.scss';

// // // const KnowledgeBaseLayout: React.FC = () => {
// // //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

// // //   const handleSidebarToggle = (collapsed: boolean) => {
// // //     setIsSidebarCollapsed(collapsed);
// // //   };

// // //   return (
// // //     <div className={styles.layout}>
// // //       <SideMenu onToggle={handleSidebarToggle} />
// // //       <main className={`${styles.mainContent} ${isSidebarCollapsed ? styles.expanded : ''}`}>
// // //         <KnowledgeBaseDashboard />
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default KnowledgeBaseLayout;



// // import React, { useState } from 'react';
// // import { SideMenu } from '../Sidebar/SideMenu';
// // import { KnowledgeBaseDashboard } from './BaseDashboard';
// // import styles from '../../styles/BaseLayout.module.scss';

// // const KnowledgeBaseLayout: React.FC = () => {
// //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

// //   const handleSidebarToggle = (collapsed: boolean) => {
// //     setIsSidebarCollapsed(collapsed);
// //   };

// //   return (
// //     <div className={styles.layout}>
// //       <SideMenu onToggle={handleSidebarToggle} />
// //       <main className={`${styles.mainContent} ${isSidebarCollapsed ? styles.expanded : ''}`}>
// //         <KnowledgeBaseDashboard />
// //       </main>
// //     </div>
// //   );
// // };

// // export default KnowledgeBaseLayout;



// ///شششش


// import React, { useState } from 'react';
// import { SideMenu } from '../Sidebar/SideMenu';
// import { KnowledgeBaseDashboard } from './BaseDashboard';
// import '../../styles/BaseLayout.scss'; // استيراد الأنماط مباشرة

// const KnowledgeBaseLayout: React.FC = () => {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   const handleSidebarToggle = (collapsed: boolean) => {
//     setIsSidebarCollapsed(collapsed);
//   };

//   return (
//     <div className="layout">
//       <SideMenu onToggle={handleSidebarToggle} />
//       <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''}`}>
//         <KnowledgeBaseDashboard />
//       </main>
//     </div>
//   );
// };

// export default KnowledgeBaseLayout;
