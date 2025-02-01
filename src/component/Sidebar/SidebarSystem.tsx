// // import { useState } from 'react';
// // import { SideMenu } from './SideMenu';
// // import { SubMenu } from './SubMenu';
// // import { SidebarItem } from './Types';

// // const SidebarSystem = () => {
// //   const [mainSidebarCollapsed, setMainSidebarCollapsed] = useState(false);
// //   const [showSubmenu, setShowSubmenu] = useState(false);
// //   const [activeSubmenuItem, setActiveSubmenuItem] = useState<SidebarItem | null>(null);
  
// //   const handleMainSidebarToggle = (collapsed: boolean): void => {
// //     setMainSidebarCollapsed(collapsed);
// //     if (collapsed) {
// //       setShowSubmenu(false);
// //     }
// //   };
  
// //   const handleMenuItemClick = (item: SidebarItem): void => {
// //     if (item.hasExpand) {
// //       setShowSubmenu(true);
// //       setActiveSubmenuItem(item);
// //       setMainSidebarCollapsed(true);
// //     }
// //   };
  
// //   const handleSubmenuClose = (): void => {
// //     setShowSubmenu(false);
// //     setMainSidebarCollapsed(false);
// //   };
  
// //   return (
// //     <div className={`sidebar-system ${mainSidebarCollapsed ? 'collapsed' : ''}`}>
// //       <SideMenu 
// //         onToggle={handleMainSidebarToggle}
// //         onMenuItemClick={handleMenuItemClick}
// //         isCollapsed={mainSidebarCollapsed}
// //       />
// //       {showSubmenu && activeSubmenuItem && (
// //         <SubMenu
// //           parentItem={activeSubmenuItem}
// //           onClose={handleSubmenuClose}
// //         />
// //       )}
// //     </div>
// //   );
// // };
// // SidebarSystem.tsx
// import { useState } from 'react';
// import { SideMenu } from './SideMenu';
// import { SubMenu } from './SubMenu';
// import { SidebarItem } from './Types';

// const SidebarSystem = () => {
//   const [mainSidebarCollapsed, setMainSidebarCollapsed] = useState(false);
//   const [showSubmenu, setShowSubmenu] = useState(false);
//   const [activeSubmenuItem, setActiveSubmenuItem] = useState<SidebarItem | null>(null);
  
//   const handleMainSidebarToggle = () => {
//     if (showSubmenu) {
//       // If submenu is open, close it and restore main sidebar
//       setShowSubmenu(false);
//       setActiveSubmenuItem(null);
//       setMainSidebarCollapsed(false);
//     } else {
//       // Toggle main sidebar normally
//       setMainSidebarCollapsed(!mainSidebarCollapsed);
//     }
//   };
  
//   const handleMenuItemClick = (item: SidebarItem) => {
//     if (item.hasExpand) {
//       setShowSubmenu(true);
//       setActiveSubmenuItem(item);
//       setMainSidebarCollapsed(true);
//     }
//   };
  
//   const handleSubmenuClose = () => {
//     setShowSubmenu(false);
//     setActiveSubmenuItem(null);
//     setMainSidebarCollapsed(false);
//   };

//   return (
//     <div className="sidebar-system">
//       <div style={{ display: showSubmenu ? 'none' : 'block' }}>
//         <SideMenu 
//           onToggle={handleMainSidebarToggle}
//           onMenuItemClick={handleMenuItemClick}
//           isCollapsed={mainSidebarCollapsed}
//         />
//       </div>
//       {showSubmenu && activeSubmenuItem && (
//         <SubMenu
//           parentItem={activeSubmenuItem}
//           onClose={handleSubmenuClose}
//         />
//       )}
//     </div>
//   );
// };

// export default SidebarSystem;


// // SidebarSystem.tsx
// import { useState, useEffect } from 'react';
// import { SideMenu } from './SideMenu';
// import { SubMenu } from './SubMenu';
// import { SidebarItem } from './Types';

// interface SidebarSystemProps {
//   onSidebarToggle: (collapsed: boolean) => void;
//   onSubmenuToggle: (show: boolean) => void;
// }

// const SidebarSystem: React.FC<SidebarSystemProps> = ({
//   onSidebarToggle,
//   onSubmenuToggle
// }) => {
//   const [mainSidebarCollapsed, setMainSidebarCollapsed] = useState(false);
//   const [activeSubmenuItem, setActiveSubmenuItem] = useState<SidebarItem | null>(null);
  
//   const handleMainSidebarToggle = () => {
//     const newState = !mainSidebarCollapsed;
//     setMainSidebarCollapsed(newState);
//     onSidebarToggle(newState);
//     if (!newState && activeSubmenuItem) {
//       setActiveSubmenuItem(null);
//       onSubmenuToggle(false);
//     }
//   };
  
//   const handleMenuItemClick = (item: SidebarItem) => {
//     if (item.hasExpand) {
//       setActiveSubmenuItem(item);
//       onSubmenuToggle(true);
//       requestAnimationFrame(() => {
//         setMainSidebarCollapsed(true);
//         onSidebarToggle(true);
//       });
//     }
//   };
  
//   const handleSubmenuClose = () => {
//     onSubmenuToggle(false);
//     setActiveSubmenuItem(null);
//     requestAnimationFrame(() => {
//       setMainSidebarCollapsed(false);
//       onSidebarToggle(false);
//     });
//   };

//   return (
//     <div className="sidebar-system">
//       <SideMenu 
//         onToggle={handleMainSidebarToggle}
//         onMenuItemClick={handleMenuItemClick}
//         isCollapsed={mainSidebarCollapsed}
//         style={{ 
//           transition: 'opacity 0.3s ease',
//           opacity: activeSubmenuItem ? 0 : 1,
//           pointerEvents: activeSubmenuItem ? 'none' : 'auto',
//           position: 'fixed'
//         }}
//       />
//       {activeSubmenuItem && (
//         <SubMenu
//           parentItem={activeSubmenuItem}
//           onClose={handleSubmenuClose}
//         />
//       )}
//     </div>
//   );
// };

// export default SidebarSystem;
//////////


// SidebarSystem.tsx
import { useState } from 'react';
import { SideMenu } from './SideMenu';
import { SubMenu } from './SubMenu';
import { SidebarItem } from './Types';

interface SidebarSystemProps {
  onSidebarToggle: (collapsed: boolean) => void;
  onSubmenuToggle: (show: boolean) => void;
}

const SidebarSystem: React.FC<SidebarSystemProps> = ({
  onSidebarToggle,
  onSubmenuToggle
}) => {
  const [mainSidebarCollapsed, setMainSidebarCollapsed] = useState(false);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState<SidebarItem | null>(null);
  
  const handleMainSidebarToggle = () => {
    const newState = !mainSidebarCollapsed;
    setMainSidebarCollapsed(newState);
    onSidebarToggle(newState);
    if (!newState && activeSubmenuItem) {
      setActiveSubmenuItem(null);
      onSubmenuToggle(false);
    }
  };
  
  const handleMenuItemClick = (item: SidebarItem) => {
    if (item.hasExpand) {
      setActiveSubmenuItem(item);
      onSubmenuToggle(true);
      requestAnimationFrame(() => {
        setMainSidebarCollapsed(true);
        onSidebarToggle(true);
      });
    }
  };
  
  const handleSubmenuClose = () => {
    onSubmenuToggle(false);
    setActiveSubmenuItem(null);
    // لا نغير حالة mainSidebarCollapsed هنا لإبقاء السايدبار الرئيسي مغلقاً
    requestAnimationFrame(() => {
      // نتأكد من أن السايدبار الرئيسي يبقى مغلقاً
      setMainSidebarCollapsed(true);
      onSidebarToggle(true);
    });
  };

  return (
    <div className="sidebar-system">
      <SideMenu 
        onToggle={handleMainSidebarToggle}
        onMenuItemClick={handleMenuItemClick}
        isCollapsed={mainSidebarCollapsed}
        style={{ 
          transition: 'opacity 0.3s ease',
          opacity: activeSubmenuItem ? 0 : 1,
          pointerEvents: activeSubmenuItem ? 'none' : 'auto',
          position: 'fixed'
        }}
      />
      {activeSubmenuItem && (
        <SubMenu
          parentItem={activeSubmenuItem}
          onClose={handleSubmenuClose}
        />
      )}
    </div>
  );
};

export default SidebarSystem;