

// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// // import { SideMenu } from './component/Sidebar/SideMenu'
// // import { KnowledgeBaseDashboard } from './component/Card/BaseDashboard';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <div className="flex">
// //         <SideMenu />
// //         <main className="flex-1">
// //           <Routes>
// //             <Route path="/" element={<Navigate to="/" />} />
// //             <Route path="/knowledge-base" element={<KnowledgeBaseDashboard />} />
// //             {/* <Route path="/users" element={<UserManagement />} /> */}
// //             {/* <Route path="/workflow" element={<WorkflowManagement />} />  */}
// //           </Routes>
// //         </main>
// //       </div>
// //     </BrowserRouter>
// //   )
// // }

// // export default App



// // src/App.tsx
// import { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { SideMenu } from './component/Sidebar/SideMenu';
// import { KnowledgeBaseDashboard } from './component/Card/BaseDashboard';
// import '../src/styles/Layout.scss';

// function App() {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   const handleSidebarToggle = (collapsed: boolean) => {
//     setIsSidebarCollapsed(collapsed);
//   };

//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <SideMenu onToggle={handleSidebarToggle} />
//         <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''}`}>
//           <Routes>
//             <Route path="/" element={<Navigate to="/knowledge-base" />} />
//             <Route path="/knowledgebase" element={<KnowledgeBaseDashboard />} />
//             {/* Add other routes here */}
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



// // src/App.tsx
// import { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { SideMenu } from './component/Sidebar/SideMenu';
// import KnowledgeBaseLayout from './component/test/KnowledgeBaseLayout';
// import '../src/styles/Layout.scss';

// function App() {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <SideMenu onToggle={setIsSidebarCollapsed} />
//         <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''}`}>
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



// // src/App.tsx
// import { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { SideMenu } from './component/Sidebar/SideMenu';
// import KnowledgeBaseLayout from './component/test/KnowledgeBaseLayout';
// import '../src/styles/Layout.scss';

// function App() {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   const handleSidebarToggle = (collapsed: boolean) => {
//     setIsSidebarCollapsed(collapsed);
//   };

//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <SideMenu onToggle={handleSidebarToggle} />
//         <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''}`}>
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


// src/App.tsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SideMenu } from './component/Sidebar/SideMenu';
import KnowledgeBaseLayout from './component/test/KnowledgeBaseLayout';
import '../src/styles/Layout.scss';
import "./index.css"
function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed: boolean) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <SideMenu onToggle={handleSidebarToggle} />
        <main className={`mainContent ${isSidebarCollapsed ? 'expanded' : ''}`}>
          <Routes>
            <Route path="/" element={<Navigate to="/knowledge-base" />} />
            <Route 
              path="/knowledge-base" 
              element={<KnowledgeBaseLayout isSidebarCollapsed={isSidebarCollapsed} />} 
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;

