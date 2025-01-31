export interface KnowledgeBaseCardProps {
    id: string | number; // Make optional if needed
    title: string;
    description: string;
    image: string;
    sections: number;
    articles: number;
  }
  
  export interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
    placeholder?: string;
  }
  
  export interface ViewToggleProps {
    currentView: 'card' | 'list'; // Ensures only these two values
    onViewChange: (view: 'card' | 'list') => void;
  }

  


  
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    itemsPerPage?: number;
    totalItems?: number;
  }

  // Add props interface for the header component
export interface KnowledgeBaseHeaderprops {
    userName: string;
  }