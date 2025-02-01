


// // // // MenuItem.tsx
// // // import React from 'react';
// // // import { Link, useLocation } from 'react-router-dom';
// // // import { MenuItemProps } from '../../types/index';

// // // export const MenuItem: React.FC<MenuItemProps> = ({
// // //   icon,
// // //   text,
// // //   link,
// // //   hasExpand,
// // //   isCollapsed = false
// // // }) => {
// // //   const location = useLocation();
  
// // //   return (
// // //     <Link 
// // //       to={link}
// // //       className={`menuItem ${location.pathname === link ? 'active' : ''}`}
// // //     >
// // //       <img src={`/${icon}`} alt={text} className="menuIcon" />
// // //       {!isCollapsed && (
// // //         <>
// // //           <span className="menuItemText">{text}</span>
// // //           {hasExpand && (
// // //             <div className="menuItemExpand">
// // //               <img
// // //                 src="/add.svg"
// // //                 alt="Expand"
// // //                 className="expandIcon"
// // //               />
// // //             </div>
// // //           )}
// // //         </>
// // //       )}
// // //     </Link>
// // //   );
// // // };
// // ///////////////addmenu
// // import React from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import { MenuItemProps } from './Types';

// // export const MenuItem: React.FC<MenuItemProps> = ({
// //   icon,
// //   text,
// //   link,
// //   hasExpand,
// //   isCollapsed = false,
// //   onExpandClick
// // }) => {
// //   const location = useLocation();
  
// //   const handleClick = (e: React.MouseEvent) => {
// //     if (hasExpand && onExpandClick) {
// //       e.preventDefault(); // منع الانتقال إلى الرابط
// //       onExpandClick({
// //         icon,
// //         text,
// //         link,
// //         hasExpand
// //       });
// //     }
// //   };
  
// //   return (
// //     <Link 
// //       to={link}
// //       className={`menuItem ${location.pathname === link ? 'active' : ''}`}
// //       onClick={handleClick}
// //     >
// //       <img 
// //         src={`/${icon}`} 
// //         alt={text} 
// //         className="menuIcon" 
// //         width={24}
// //         height={24}
// //       />
// //       {!isCollapsed && (
// //         <>
// //           <span className="menuItemText">{text}</span>
// //           {hasExpand && (
// //             <div 
// //               className="menuItemExpand"
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 handleClick(e);
// //               }}
// //             >
// //               <img
// //                 src="/add.svg"
// //                 alt="Expand"
// //                 className="expandIcon"
// //                 width={20}
// //                 height={20}
// //               />
// //             </div>
// //           )}
// //         </>
// //       )}
// //     </Link>
// //   );
// // };

// // export default MenuItem;


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { MenuItemProps } from './Types';

// export const MenuItem: React.FC<MenuItemProps> = ({
//   icon,
//   text,
//   link,
//   hasExpand,
//   isCollapsed = false,
//   isActive = false,
//   onExpandClick
// }) => {
//   const location = useLocation();
  
//   const handleClick = (e: React.MouseEvent) => {
//     if (hasExpand && onExpandClick) {
//       e.preventDefault();
//       onExpandClick({
//         icon,
//         text,
//         link,
//         hasExpand
//       });
//     }
//   };
  
//   const classes = [
//     'menuItem',
//     location.pathname === link ? 'active' : '',
//     isActive && hasExpand ? 'submenu-active' : ''
//   ].filter(Boolean).join(' ');
  
//   return (
//     <Link 
//       to={link}
//       className={classes}
//       onClick={handleClick}
//     >
//       <img 
//         src={`/${icon}`} 
//         alt={text} 
//         className="menuIcon" 
//         width={24}
//         height={24}
//       />
//       {!isCollapsed && (
//         <>
//           <span className="menuItemText">{text}</span>
//           {hasExpand && (
//             <div 
//               className="menuItemExpand"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleClick(e);
//               }}
//             >
//               <img
//                 src="/add.svg"
//                 alt="Expand"
//                 className="expandIcon"
//                 width={20}
//                 height={20}
//               />
//             </div>
//           )}
//         </>
//       )}
//     </Link>
//   );
// };

//menuitem
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItemProps } from './Types';

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  link,
  hasExpand,
  isCollapsed = false,
  isActive = false,
  onExpandClick
}) => {
  const location = useLocation();
  const isCurrentPath = location.pathname === link;
  
  const handleClick = (e: React.MouseEvent) => {
    if (hasExpand && onExpandClick) {
      e.preventDefault();
      onExpandClick({
        icon,
        text,
        link,
        hasExpand
      });
    }
  };
  
  // فقط العنصر الحالي سيكون active إذا لم يكن له submenu
  // أو العنصر الذي له submenu مفتوح
  const isActiveItem = hasExpand ? isActive : isCurrentPath;
  
  return (
    <Link 
      to={link}
      className={`menuItem ${isActiveItem ? 'active' : ''}`}
      onClick={handleClick}
    >
      <img 
        src={`/${icon}`} 
        alt={text} 
        className="menuIcon" 
        width={24}
        height={24}
      />
      {!isCollapsed && (
        <>
          <span className="menuItemText">{text}</span>
          {hasExpand && (
            <div 
              className="menuItemExpand"
            >
              <img
                src="/add.svg"
                alt="Expand"
                className="expandIcon"
                width={20}
                height={20}
              />
            </div>
          )}
        </>
      )}
    </Link>
  );
};