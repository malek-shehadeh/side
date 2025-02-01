

// import React from 'react';
// import { X, Upload } from 'lucide-react';
// import '../../styles/AddNewCollection.scss';

// export const AddNewCollection: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//   return (
//     <div className="popup-overlay" onClick={onClose}>
//       <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//         <div className="collection-form">
//           <div className="collection-form__header">
//             <div className="collection-form__header-left">
//               <div className="collection-form__header-left-icon">
//                 <div className="icon-placeholder">
//                   <img src="/public/archive.svg" alt="Icon" className="collection-icon" />
//                 </div>
//               </div>
//               <div className="collection-form__header-left-text">
//                 <h2>Add New Collection</h2>
//                 <p>Knowledge Base / Create New Collection</p>
//               </div>
//             </div>
//             <button type="button" className="collection-form__header-close" onClick={onClose}>
//               <X size={24} />
//             </button>
//           </div>

//           <form className="collection-form__form">
//             <div className="collection-form__form-group">
//               <label>
//                 Collection Name <span className="required">•</span>
//               </label>
//               <input type="text" placeholder="Arena" />
//             </div>

//             <div className="collection-form__form-group">
//               <label>
//                 Description <span className="required">•</span>
//               </label>
//               <textarea placeholder="Description" />
//             </div>

//             <div className="collection-form__form-row">
//               <div className="collection-form__form-group">
//                 <label>
//                   Tags <span className="required">•</span>
//                 </label>
//                 <input type="text" placeholder="Placeholder" />
//               </div>

//               <div className="collection-form__form-group">
//                 <label>
//                   Access Level <span className="required">•</span>
//                 </label>
//                 <select>
//                   <option value="">Placeholder</option>
//                   <option value="public">Public</option>
//                   <option value="private">Private</option>
//                 </select>
//               </div>
//             </div>

//             <div className="collection-form__form-upload">
//               <Upload className="upload-icon" size={24} />
//               <div className="upload-text">
//                 <span>Click here</span> to upload your Collection Thumbnail or drag and drop.
//               </div>
//               <p className="upload-hint">Supported Formats: SVG, JPG, PNG (10mb each)</p>
//               <input type="file" accept=".svg,.jpg,.jpeg,.png" id="file-upload" />
//             </div>

//             <div className="collection-form__form-actions">
//               <button type="button" className="create-btn">Create Now</button>
//               <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };


import React from "react";
import "../../styles/AddNewCollection.scss";

interface NewCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewCollectionModal: React.FC<NewCollectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div className="header-content">
            <img src="/public/archive.svg" alt="New Collection" />
            <div className="title-container">
              <h2>
                Add <span className="newCollection">New Collection</span>
              </h2>
              <p>Knowledge Base / Create New Collection</p>
            </div>
          </div>
          <button className="close-button" onClick={onClose}>
            <img src="/public/close-circle.svg" alt="Close" />
          </button>
        </div>
        <div className="collectionName">
          <span className="margin">
            Collection Name <img src="/public/info-circle1.svg" alt="text" />
          </span>
          <div className="inputArena">
            <button className="button-with-icon">
              <img src="/public/text.svg" alt="icon" className="button-icon" />
              Arena
              <img src="/public/info-circle.svg" alt="icon" className="button-icon2" />
            </button>
          </div>
        </div>
        <div className="Description">
          <span className="margin">
            Description <img src="/public/info-circle1.svg"  alt="text" />
          </span>
          <div className="DescriptionInput">
            <span className="DescriptionText">Description</span>
            <button className="DescriptionForm"></button>
          </div>
        </div>
        <div className="mainTow">
          <span className="margin2">
            Tag <img src="/public/info-circle1.svg"  alt="text" />
          </span>
          <span className="acces2">
            Access Level* <img src="/public/info-circle1.svg"  alt="text" />
          </span>
          <div className="towInput">
            <button className="buttonTow">
              <img src="/public/category-2.svg" alt="category" className="button-icon" />
              placeholder
            </button>
            <div className="div2">
              <button className="buttonTow2">
                <div>
                  <img src="/public/setting-4.svg" alt="category" className="button-icon" />
                  placeholder
                </div>
                <img src="/public/arrow-down.svg" alt="arrow" className="button-icon3" />
              </button>
            </div>
          </div>
          <div className="upload">
            <div className="upload2">
              <div className="upload3">
                <img src="/public/document-upload.svg" alt="document" />
                <p className="text1">
                  <span className="click-here ">Click here</span> to upload your
                  Collection Thumbnail or drag and drop.
                </p>
                <p className="text2">
                  Supported Format: SVG, JPG, PNG (10mb each)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The lastBorder button inside modal-content */}
        <div className="lastBorder">
          <button>
            <img src="/public/add.svg" alt="add" />
            Create Now
          </button>
          <p className="cancel">Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default NewCollectionModal;