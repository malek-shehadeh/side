// import React from 'react';
// import { Link } from 'react-router-dom';

// // نقل التعريف إلى submenuItems
// type SubMenuItem = {
//   text: string;
//   link: string;
//   icon?: string;
// };

// interface SubMenuProps {
//   parentItem: {
//     icon: string;
//     text: string;
//     link: string;
//   };
//   onClose: () => void;
// }

// export const SubMenu: React.FC<SubMenuProps> = ({ parentItem, onClose }) => {
//   const submenuItems: SubMenuItem[] = [
//     {
//       text: "قائمة 1",
//       link: `${parentItem.link}/1`,
//       icon: "dashboard.svg"
//     },
//     {
//       text: "قائمة 2",
//       link: `${parentItem.link}/2`,
//       icon: "users.svg"
//     },
//     {
//       text: "قائمة 3",
//       link: `${parentItem.link}/3`,
//       icon: "settings.svg"
//     }
//   ];

//   return (
//     <nav className="sideMenuSingle submenu" aria-label="Sub Navigation">
//       <div className="sideMenuHeader">
//         <div className="logoSection">
//           <div className="submenuTitle">
//             <img 
//               src={`/${parentItem.icon}`} 
//               alt="" 
//               className="menuIcon"
//               width={24}
//               height={24}
//             />
//             <span>{parentItem.text}</span>
//           </div>
//           <img
//             src="/arrow-left.svg"
//             alt="Back"
//             onClick={onClose}
//             className="collapseIcon"
//             role="button"
//             aria-label="Close Submenu"
//             width={28}
//             height={28}
//           />
//         </div>
//       </div>
//       <div className="mainMenu">
//         <div className="menuItems">
//           {submenuItems.map((item) => (
//             <Link 
//               key={item.text}
//               to={item.link}
//               className="menuItem"
//             >
//               {item.icon && (
//                 <img 
//                   src={`/${item.icon}`} 
//                   alt="" 
//                   className="menuIcon"
//                   width={24}
//                   height={24}
//                 />
//               )}
//               <span className="menuItemText">{item.text}</span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };


/////


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { SidebarItem } from '../data/sidebarData';

// interface SubMenuProps {
//   parentItem: SidebarItem;
//   onClose: () => void;
//   isCollapsed?: boolean;
// }

// export const SubMenu: React.FC<SubMenuProps> = ({ 
//   parentItem, 
//   onClose,
//   isCollapsed = false 
// }) => {
//   const filteredSubmenuItems = parentItem.submenuItems || [];

//   return (
//     <nav 
//       className={`sideMenuSingle submenu ${isCollapsed ? 'collapsed' : ''}`} 
//       aria-label="Sub Navigation"
//     >
//       <div className="sideMenuHeader">
//         <div className="logoSection">
//           <div className="submenuTitle">
//             <img
//               src={`/${parentItem.icon}`}
//               alt=""
//               className="menuIcon"
//               width={24}
//               height={24}
//             />
//             {!isCollapsed && <span>{parentItem.text}</span>}
//           </div>
//           <img
//             src="/arrow-left.svg"
//             alt="Back"
//             onClick={onClose}
//             className="collapseIcon"
//             role="button"
//             aria-label="Close Submenu"
//             width={28}
//             height={28}
//           />
//         </div>
//       </div>
//       <div className="mainMenu">
//         <div className="menuItems" role="menu">
//           {filteredSubmenuItems.map((item) => (
//             <Link
//               key={item.text}
//               to={item.link}
//               className="menuItem"
//               role="menuitem"
//             >
//               {item.icon && (
//                 <img
//                   src={`/${item.icon}`}
//                   alt=""
//                   className="menuIcon"
//                   width={24}
//                   height={24}
//                 />
//               )}
//               {!isCollapsed && (
//                 <span className="menuItemText">{item.text}</span>
//               )}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarItem } from './Types';

interface SubMenuProps {
  parentItem: SidebarItem;
  onClose: () => void;
}

export const SubMenu: React.FC<SubMenuProps> = ({ parentItem, onClose }) => {
  const submenuItems = parentItem.submenuItems || [];

  return (
    <nav className="sideMenuSingle submenu" aria-label="Sub Navigation">
      <div className="sideMenuHeader">
        <div className="logoSection">
          <div className="submenuTitle">
            <img
              src={`/${parentItem.icon}`}
              alt=""
              className="menuIcon"
              width={24}
              height={24}
            />
            <span>{parentItem.text}</span>
          </div>
          <img
            src="/src/assets/sidebar-left.svg"
            alt="Back"
            onClick={onClose}
            className="collapseIcon"
            role="button"
            aria-label="Close Submenu"
            width={28}
            height={28}
          />
        </div>
      </div>
      <div className="mainMenu">
        <div className="menuItems">
          {submenuItems.map((item) => (
            <Link
              key={item.text}
              to={item.link}
              className="menuItem"
            >
              {item.icon && (
                <img
                  src={`/${item.icon}`}
                  alt=""
                  className="menuIcon"
                  width={24}
                  height={24}
                />
              )}
              <span className="menuItemText">{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};