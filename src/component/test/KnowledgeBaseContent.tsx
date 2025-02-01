// import React from 'react';
// import { KnowledgeBaseCardProps, ViewToggleProps, DashboardSearchBarProps } from '../../types';
// import '../../styles/Base.scss';

// export const SearchBar: React.FC<DashboardSearchBarProps> = ({
//   onSearch,
//   placeholder = 'Search'
// }) => (
//   <div className="searchContainer" role="search">
//     <img src="/public/search-normal.1.svg" alt="" aria-hidden="true" />
//     <label htmlFor="search-input" className="visually-hidden">Search knowledge base</label>
//     <input
//       id="search-input"
//       type="search"
//       className="searchInput"
//       placeholder={placeholder}
//       onChange={(e) => onSearch(e.target.value)}
//     />
//   </div>
// );

// export const ViewToggle: React.FC<ViewToggleProps> = ({
//   currentView,
//   onViewChange
// }) => (
//   <div className="viewToggle">
//     <button
//       className={`viewToggleButton ${currentView === 'card' ? 'active' : ''}`}
//       onClick={() => onViewChange('card')}
//       aria-pressed={currentView === 'card'}
//     >
//       <img src="/public/element-3.svg" alt="" aria-hidden="true" />
//       <span>Card View</span>
//     </button>
//     <button
//       className={`viewToggleButton ${currentView === 'list' ? 'active' : ''}`}
//       onClick={() => onViewChange('list')}
//       aria-pressed={currentView === 'list'}
//     >
//       <img src="/public/row-vertical.svg" alt="" aria-hidden="true" />
//       <span>List View</span>
//     </button>
//   </div>
// );

// export const SearchToolbar: React.FC<ViewToggleProps & { onSearch: (query: string) => void }> = (props) => (

//   <div className="toolsBar" role="toolbar" aria-label="Content view options">
//     <ViewToggle currentView={props.currentView} onViewChange={props.onViewChange} />
//     <SearchBar onSearch={props.onSearch} />
//     <div className="actionButtons">
//       <button className="filterButton">
//         <img src="/public/filter.svg" alt="" aria-hidden="true" />
//         <span>Filter</span>
//       </button>
//       <button className="addButton">
//         <img src="/public/add.svg" alt="" aria-hidden="true" />
//         <span>Add New</span>
//       </button>
//     </div>
   
//   </div>
// );

// interface ContentProps {
//   data: KnowledgeBaseCardProps[];
//   currentView: 'card' | 'list';
//   currentPage: number;
//   onPageChange: (page: number) => void;
// }

// export const KnowledgeBaseContent: React.FC<ContentProps> = ({
//   data,
//   currentView,
//   currentPage,
//   onPageChange
// }) => {
//   const itemsPerPage = 10;
//   const totalItems = data.length;

//   return (
//     <>
//       <div className="cardsGrid" role="feed" aria-label="Knowledge base articles">
//         {data.map((card) => (
//           <article key={card.id} className="knowledgeCard">
//             <img src={card.image} alt={card.title} className="knowledgeCardImage" loading="lazy" />
//             <div className="knowledgeCardContent">
//               <h3 className="knowledgeCardTitle">{card.title}</h3>
//               <p className="knowledgeCardDescription">{card.description}</p>
//               <div className="knowledgeCardMetrics">
//                 <div className="knowledgeCardMetricsItem">
//                   <img src="/public/folder-2.svg" alt="" aria-hidden="true" />
//                   <span>{card.sections} Sections</span>
//                 </div>
//                 <div className="knowledgeCardMetricsItem">
//                   <img src="/public/note-text.svg" alt="" aria-hidden="true" />
//                   <span>{card.articles} Articles</span>
//                 </div>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//       <nav className="pagination" aria-label="Pagination">
//         <p className="paginationInfo">
//           Showing {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
//         </p>
//         <div className="paginationControls">
//           <button
//             className="paginationButton"
//             onClick={() => onPageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             aria-label="Previous page"
//           >
//             <img src="/chevron-left.svg" alt="" aria-hidden="true" />
//           </button>
//           {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, i) => i + 1).map(page => (
//             <button
//               key={page}
//               className={`paginationButton ${currentPage === page ? 'active' : ''}`}
//               onClick={() => onPageChange(page)}
//               aria-current={currentPage === page ? 'page' : undefined}
//             >
//               {page}
//             </button>
//           ))}
//           <button
//             className="paginationButton"
//             onClick={() => onPageChange(currentPage + 1)}
//             disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
//             aria-label="Next page"
//           >
//             <img src="/chevron-right.svg" alt="" aria-hidden="true" />
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };



import React, { useState } from 'react';
import { KnowledgeBaseCardProps, ViewToggleProps, DashboardSearchBarProps } from '../../types';
import AddCollectionModal from './AddCollectionModal'; // Assuming the path is correct
import '../../styles/Base.scss';
import "../../styles/AddNewCollection.scss"

export const SearchBar: React.FC<DashboardSearchBarProps> = ({
  onSearch,
  placeholder = 'Search'
}) => (
  <div className="searchContainer" role="search">
    <img src="/public/search-normal.1.svg" alt="" aria-hidden="true" />
    <label htmlFor="search-input" className="visually-hidden">Search knowledge base</label>
    <input
      id="search-input"
      type="search"
      className="searchInput"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

export const ViewToggle: React.FC<ViewToggleProps> = ({
  currentView,
  onViewChange
}) => (
  <div className="viewToggle">
    <button
      className={`viewToggleButton ${currentView === 'card' ? 'active' : ''}`}
      onClick={() => onViewChange('card')}
      aria-pressed={currentView === 'card'}
    >
      <img src="/public/element-3.svg" alt="" aria-hidden="true" />
      <span>Card View</span>
    </button>
    <button
      className={`viewToggleButton ${currentView === 'list' ? 'active' : ''}`}
      onClick={() => onViewChange('list')}
      aria-pressed={currentView === 'list'}
    >
      <img src="/public/row-vertical.svg" alt="" aria-hidden="true" />
      <span>List View</span>
    </button>
  </div>
);

export const SearchToolbar: React.FC<ViewToggleProps & { onSearch: (query: string) => void }> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="toolsBar" role="toolbar" aria-label="Content view options">
      <ViewToggle currentView={props.currentView} onViewChange={props.onViewChange} />
      <SearchBar onSearch={props.onSearch} />
      <div className="actionButtons">
        <button className="filterButton">
          <img src="/public/filter.svg" alt="" aria-hidden="true" />
          <span>Filter</span>
        </button>
        <button className="addButton" onClick={() => setIsModalOpen(true)}>
          <img src="/public/add.svg" alt="" aria-hidden="true" />
          <span>Add New</span>
        </button>
      </div>
      <AddCollectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

interface ContentProps {
  data: KnowledgeBaseCardProps[];
  currentView: 'card' | 'list';
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const KnowledgeBaseContent: React.FC<ContentProps> = ({
  data,
  currentView,
  currentPage,
  onPageChange
}) => {
  const itemsPerPage = 10;
  const totalItems = data.length;

  return (
    <>
      <div className="cardsGrid" role="feed" aria-label="Knowledge base articles">
        {data.map((card) => (
          <article key={card.id} className="knowledgeCard">
            <img src={card.image} alt={card.title} className="knowledgeCardImage" loading="lazy" />
            <div className="knowledgeCardContent">
              <h3 className="knowledgeCardTitle">{card.title}</h3>
              <p className="knowledgeCardDescription">{card.description}</p>
              <div className="knowledgeCardMetrics">
                <div className="knowledgeCardMetricsItem">
                  <img src="/public/folder-2.svg" alt="" aria-hidden="true" />
                  <span>{card.sections} Sections</span>
                </div>
                <div className="knowledgeCardMetricsItem">
                  <img src="/public/note-text.svg" alt="" aria-hidden="true" />
                  <span>{card.articles} Articles</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <nav className="pagination" aria-label="Pagination">
        <p className="paginationInfo">
          Showing {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
        </p>
        <div className="paginationControls">
          <button
            className="paginationButton"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <img src="/chevron-left.svg" alt="" aria-hidden="true" />
          </button>
          {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`paginationButton ${currentPage === page ? 'active' : ''}`}
              onClick={() => onPageChange(page)}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
          <button
            className="paginationButton"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
            aria-label="Next page"
          >
            <img src="/chevron-right.svg" alt="" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </>
  );
};