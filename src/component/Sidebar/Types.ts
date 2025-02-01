


// // // Types.ts
// // export interface SidebarItem {
// //   icon: string;
// //   text: string;
// //   link: string;
// //   hasExpand?: boolean;
// // }

// // export interface MenuItemProps extends SidebarItem {
// //   isCollapsed?: boolean;
// // }

// // export interface SearchBarProps {
// //   placeholder?: string;
// //   isCollapsed?: boolean;
// //   onSearch?: (term: string) => void;

// // }



// // ////adddmenu
// // export interface SidebarItem {
// //   icon: string;
// //   text: string;
// //   link: string;
// //   hasExpand?: boolean;
// // }

// // export interface MenuItemProps extends SidebarItem {
// //   isCollapsed?: boolean;
// //   onExpandClick?: (item: SidebarItem) => void;
// // }

// // export interface SideMenuProps {
// //   onToggle: () => void;  // تغيير هنا: لا نحتاج لتمرير collapsed كمعامل
// //   onMenuItemClick: (item: SidebarItem) => void;
// //   isCollapsed: boolean;
// // }

// // export interface SidebarSearchBarProps {
// //   placeholder?: string;
// //   isCollapsed?: boolean;
// //   onSearch: (term: string) => void;
// // }

// ///////////////////


// // // Types.ts
// // export interface SidebarItem {
// //   icon: string;
// //   text: string;
// //   link: string;
// //   hasExpand?: boolean;
// // }

// // export interface MenuItemProps extends SidebarItem {
// //   isCollapsed?: boolean;
// //   onExpandClick?: (item: SidebarItem) => void;
// //   isActive?: boolean;  // إضافة خاصية جديدة

// // }

// // export interface SideMenuProps {
// //   onToggle: (collapsed: boolean) => void;  // تعديل هنا
// //   onMenuItemClick: (item: SidebarItem) => void;
// //   isCollapsed: boolean;  // إضافة هذه الخاصية
// //   // onToggle: () => void;

// // }

// // export interface SidebarSearchBarProps {
// //   placeholder?: string;
// //   isCollapsed?: boolean;
// //   onSearch: (term: string) => void;
// // }


// // تعريف النوع الأساسي للعنصر القائمة
// export interface BaseMenuItem {
//   text: string;
//   link: string;
//   icon: string;
//   hasExpand?: boolean;
//   submenuItems?: Array<{
//     text: string;
//     link: string;
//     icon?: string;
//   }>;
// }

// // تعريف عنصر القائمة الفرعية
// export interface SubMenuItem extends BaseMenuItem {
//   hasExpand?: boolean;
// }

// // تعريف عنصر القائمة الرئيسية
// export interface SidebarItem extends BaseMenuItem {
//   submenuItems?: SubMenuItem[];
// }

// // تعريف خصائص مكون MenuItem
// export interface MenuItemProps extends BaseMenuItem {
//   isCollapsed?: boolean;
//   isActive?: boolean;
//   onExpandClick?: (item: SidebarItem) => void;
//   submenuItems?: SubMenuItem[];
// }

// export interface SideMenuProps {
//   onToggle: (collapsed: boolean) => void;
//   onMenuItemClick: (item: SidebarItem) => void;
//   isCollapsed: boolean;
// }

// export interface SidebarSearchBarProps {
//   placeholder?: string;
//   isCollapsed?: boolean;
//   onSearch: (term: string) => void;
// }


////شششششش


// تعريف النوع الأساسي للعنصر القائمة
export interface BaseMenuItem {
  text: string;
  link: string;
  icon: string;
  hasExpand?: boolean;
}

// تعريف عنصر القائمة الفرعية
export interface SubMenuItem extends BaseMenuItem {
  hasExpand?: boolean;
}

// تعريف عنصر القائمة الرئيسية
export interface SidebarItem extends BaseMenuItem {
  submenuItems?: SubMenuItem[];
}

// تعريف خصائص مكون MenuItem
export interface MenuItemProps extends BaseMenuItem {
  isCollapsed?: boolean;
  isActive?: boolean;
  onExpandClick?: (item: SidebarItem) => void;
  submenuItems?: SubMenuItem[];
}

export interface SideMenuProps {
  onToggle: (collapsed: boolean) => void;
  onMenuItemClick: (item: SidebarItem) => void;
  isCollapsed: boolean;
}

export interface SidebarSearchBarProps {
  placeholder?: string;
  isCollapsed?: boolean;
  onSearch: (term: string) => void;
}