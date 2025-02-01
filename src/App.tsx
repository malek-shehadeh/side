

// // // // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// // // // import { SideMenu } from './component/Sidebar/SideMenu'
// // // // import { KnowledgeBaseDashboard } from './component/Card/BaseDashboard';

// // // // function App() {
// // // //   return (
// // // //     <BrowserRouter>
// // // //       <div className="flex">
// // // //         <SideMenu />
// // // //         <main className="flex-1">
// // // //           <Routes>
// // // //             <Route path="/" element={<Navigate to="/" />} />
// // // //             <Route path="/knowledge-base" element={<KnowledgeBaseDashboard />} />
// // // //             {/* <Route path="/users" element={<UserManagement />} /> */}
// // // //             {/* <Route path="/workflow" element={<WorkflowManagement />} />  */}
// // // //           </Routes>
// // // //         </main>
// // // //       </div>
// // // //     </BrowserRouter>
// // // //   )
// // // // }

// // // // export default App



// // // // src/App.tsx
// // // import { useState } from 'react';
// // // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // // import { SideMenu } from './component/Sidebar/SideMenu';
// // // import { KnowledgeBaseDashboard } from './component/Card/BaseDashboard';
// // // import '../src/styles/Layout.scss';

// // // function App() {
// // //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

// // //   const handleSidebarToggle = (collapsed: boolean) => {
// // //     setIsSidebarCollapsed(collapsed);
// // //   };

// // //   return (
// // //     <BrowserRouter>
// // //       <div className="app-container">
// // //         <SideMenu onToggle={handleSidebarToggle} />
// // //         <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''}`}>
// // //           <Routes>
// // //             <Route path="/" element={<Navigate to="/knowledge-base" />} />
// // //             <Route path="/knowledgebase" element={<KnowledgeBaseDashboard />} />
// // //             {/* Add other routes here */}
// // //           </Routes>
// // //         </main>
// // //       </div>
// // //     </BrowserRouter>
// // //   );
// // // }

// // // export default App;



// // // // src/App.tsx
// // // import { useState } from 'react';
// // // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // // import { SideMenu } from './component/Sidebar/SideMenu';
// // // import KnowledgeBaseLayout from './component/test/KnowledgeBaseLayout';
// // // import '../src/styles/Layout.scss';

// // // function App() {
// // //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

// // //   return (
// // //     <BrowserRouter>
// // //       <div className="app-container">
// // //         <SideMenu onToggle={setIsSidebarCollapsed} />
// // //         <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''}`}>
// // //           <Routes>
// // //             <Route path="/" element={<Navigate to="/knowledge-base" />} />
// // //             <Route path="/knowledge-base" element={<KnowledgeBaseLayout />} />
// // //           </Routes>
// // //         </main>
// // //       </div>
// // //     </BrowserRouter>
// // //   );
// // // }

// // // export default App;



// // // // src/App.tsx
// // // import { useState } from 'react';
// // // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // // import { SideMenu } from './component/Sidebar/SideMenu';
// // // import KnowledgeBaseLayout from './component/test/KnowledgeBaseLayout';
// // // import '../src/styles/Layout.scss';
// // // import "./index.css"


// // // function App() {
// // //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

// // //   const handleSidebarToggle = (collapsed: boolean) => {
// // //     setIsSidebarCollapsed(collapsed);
// // //   };

// // //   return (
// // //     <BrowserRouter>
// // //       <div className="app-container">
// // //         <SideMenu onToggle={handleSidebarToggle} />
// // //         <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''}`}>
// // //           <Routes>
// // //             <Route path="/" element={<Navigate to="/knowledge-base" />} />
// // //             <Route path="/knowledge-base" element={<KnowledgeBaseLayout />} />
// // //           </Routes>
// // //         </main>
// // //       </div>
// // //     </BrowserRouter>
// // //   );
// // // }

// // // export default App;


// // // // src/App.tsx
// // // import { useState } from 'react';
// // // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // // import { SideMenu } from './component/Sidebar/SideMenu';
// // // import KnowledgeBaseLayout from './component/test/KnowledgeBaseLayout';
// // // import '../src/styles/Layout.scss';
// // // import "./index.css"
// // // function App() {
// // //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

// // //   const handleSidebarToggle = (collapsed: boolean) => {
// // //     setIsSidebarCollapsed(collapsed);
// // //   };

// // //   return (
// // //     <BrowserRouter>
// // //       <div className="app-container">
// // //         <SideMenu onToggle={handleSidebarToggle} />
// // //         <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''}`}>
// // //           <Routes>
// // //             <Route path="/" element={<Navigate to="/knowledge-base" />} />
// // //             <Route 
// // //               path="/knowledge-base" 
// // //               element={<KnowledgeBaseLayout isSidebarCollapsed={isSidebarCollapsed} />} 
// // //             />
// // //           </Routes>
// // //         </main>
// // //       </div>
// // //     </BrowserRouter>
// // //   );
// // // }
// // // export default App;


// // // src/App.tsx
// // import { useState } from 'react';
// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // import { SideMenu } from './component/Sidebar/SideMenu';
// // import KnowledgeBaseLayout from './component/test/KnowledgeBaseLayout';
// // import '../src/styles/Layout.scss';
// // import "./index.css"


// // function App() {
// //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

// //   const handleSidebarToggle = (collapsed: boolean) => {
// //     setIsSidebarCollapsed(collapsed);
// //   };

// //   return (
// //     <BrowserRouter>
// //       <div className="app-container">
// //         <SideMenu onToggle={handleSidebarToggle} />
// //         <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''}`}>
// //           <Routes>
// //             <Route path="/" element={<Navigate to="/knowledge-base" />} />
// //             <Route path="/knowledge-base" element={<KnowledgeBaseLayout />} />
// //           </Routes>
// //         </main>
// //       </div>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;


// // ///add sub 
// // import { useState } from 'react';
// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // import { SideMenu } from './component/Sidebar/SideMenu';
// // import { SubMenu } from './component/Sidebar/SubMenu';
// // import KnowledgeBaseLayout from './component/test/KnowledgeBaseLayout';
// // import { SidebarItem } from './types';
// // import '../src/styles/Layout.scss';
// // import "./index.css"

// // function App() {
// //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
// //   const [activeSubmenu, setActiveSubmenu] = useState<SidebarItem | null>(null);

// //   const handleSidebarToggle = (collapsed: boolean) => {
// //     setIsSidebarCollapsed(collapsed);
// //   };

// //   const handleMenuItemClick = (item: SidebarItem) => {
// //     if (item.hasExpand) {
// //       setIsSidebarCollapsed(true);
// //       setActiveSubmenu(item);
// //     }
// //   };

// //   const handleSubmenuClose = () => {
// //     setIsSidebarCollapsed(false);
// //     setActiveSubmenu(null);
// //   };

// //   return (
// //     <BrowserRouter>
// //       <div className="app-container">
// //         <SideMenu 
// //           onToggle={handleSidebarToggle} 
// //           onMenuItemClick={handleMenuItemClick}
// //         />
// //         {activeSubmenu && (
// //           <SubMenu
// //             parentItem={activeSubmenu}
// //             onClose={handleSubmenuClose}
// //           />
// //         )}
// //         <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''} ${activeSubmenu ? 'with-submenu' : ''}`}>
// //           <Routes>
// //             <Route path="/" element={<Navigate to="/knowledge-base" />} />
// //             <Route path="/knowledge-base" element={<KnowledgeBaseLayout />} />
// //           </Routes>
// //         </main>
// //       </div>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// ///add sub 
// import { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { SideMenu } from './component/Sidebar/SideMenu';
// import { SubMenu } from './component/Sidebar/SubMenu';
// import KnowledgeBaseLayout from './component/test/KnowledgeBaseLayout';
// import { SidebarItem } from './types';
// import '../src/styles/Layout.scss';
// import "./index.css"

// function App() {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState<SidebarItem | null>(null);

//   const handleSidebarToggle = (collapsed: boolean) => {
//     setIsSidebarCollapsed(collapsed);
//   };

//   const handleMenuItemClick = (item: SidebarItem) => {
//     if (item.hasExpand) {
//       setIsSidebarCollapsed(true);
//       setActiveSubmenu(item);
//     }
//   };

//   const handleSubmenuClose = () => {
//     setIsSidebarCollapsed(false);
//     setActiveSubmenu(null);
//   };

//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <SideMenu 
//           onToggle={handleSidebarToggle} 
//           onMenuItemClick={handleMenuItemClick}
//         />
//         {activeSubmenu && (
//           <SubMenu
//             parentItem={activeSubmenu}
//             onClose={handleSubmenuClose}
//           />
//         )}
//         <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''} ${activeSubmenu ? 'with-submenu' : ''}`}>
//           <Routes>
//             <Route path="/" element={<Navigate to="/knowledge-base" />} />
//             <Route path="/knowledge-base" element={<KnowledgeBaseLayout />} />
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

//////////////////////////ششششش

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SidebarSystem from './component/Sidebar/SidebarSystem';
import KnowledgeBaseLayout from './component/test/KnowledgeBaseLayout';
import '../src/styles/Layout.scss';
import "./index.css"

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleSidebarToggle = (collapsed: boolean) => {
    setIsSidebarCollapsed(collapsed);
  };

  const handleSubmenuToggle = (show: boolean) => {
    setShowSubmenu(show);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <SidebarSystem 
          onSidebarToggle={handleSidebarToggle}
          onSubmenuToggle={handleSubmenuToggle}
        />
        <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''} ${showSubmenu ? 'with-submenu' : ''}`}>
          <Routes>
            <Route path="/" element={<Navigate to="/knowledge-base" />} />
            <Route path="/knowledge-base" element={<KnowledgeBaseLayout />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;