import React, { useState, useEffect } from 'react';
import { FaFileUpload, FaPlus, FaEdit, FaTrash, FaArrowUp } from 'react-icons/fa';

const DashboardPage = ({ profileImage, onUpdateProfileImage, onUpdateCredentials }) => {
  const [newProfileImage, setNewProfileImage] = useState(null);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  const [isTopVisible, setIsTopVisible] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [documentType, setDocumentType] = useState('Courses');
  const [studyLevel, setStudyLevel] = useState('1er-licence-math');
  const [academicYear, setAcademicYear] = useState('2023-2024');
  const [newFileName, setNewFileName] = useState('');
  const [oldFileName, setOldFileName] = useState(''); // État pour le nom de l'ancien fichier
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null); // État pour le fichier téléchargé

  useEffect(() => {
    const handleScroll = () => {
      setIsTopVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleProfileImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSaveProfileImage = async () => {
    if (newProfileImage) {
      const formData = new FormData();
      formData.append('profileImage', newProfileImage);
  
      try {
        const response = await fetch('/api/profile/update-image', {
          method: 'PUT',
          body: formData,
        });
  
        if (response.ok) {
          onUpdateProfileImage(newProfileImage);
        }
      } catch (error) {
        console.error('Error updating profile image:', error);
      }
    }
  };
  
  const handleSaveCredentials = async () => {
    if (newEmail && newPassword) {
      try {
        const response = await fetch('/api/profile/update-credentials', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newEmail, newPassword }),
        });
  
        if (response.ok) {
          onUpdateCredentials(newEmail, newPassword);
        }
      } catch (error) {
        console.error('Error updating credentials:', error);
      }
    }
  };

  const openModal = (action) => {
    setModalAction(action);
    setNewFileName('');
    setOldFileName(''); // Réinitialiser le nom de l'ancien fichier pour le renommage
    setSelectedDocument(null);
    setUploadedFile(null); // Réinitialiser le fichier téléchargé
  };
  
  const closeModal = () => {
    setModalAction(null);
  };

  const handleRename = () => {
    if (oldFileName.trim() && newFileName.trim()) {
      // Simuler la vérification du document
      const documentExists = true; // Remplacer par une vérification réelle
      if (documentExists) {
        console.log(`Renaming ${oldFileName} to ${newFileName}`);
        closeModal();
      } else {
        alert("Document not found");
      }
    } else {
      console.error('Please enter both old and new document names.');
    }
  };

  const handleDelete = () => {
    if (newFileName.trim()) {
      // Simuler la vérification du document
      const documentExists = true; // Remplacer par une vérification réelle
      if (documentExists) {
        console.log(`Deleting ${newFileName}`);
        closeModal();
      } else {
        alert("File not found");
      }
    } else {
      console.error('Please enter the file name to delete.');
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleUploadDocument = async () => {
    if (uploadedFile) {
      const formData = new FormData();
      formData.append('document', uploadedFile);
      formData.append('documentType', documentType);
      formData.append('studyLevel', studyLevel);
      formData.append('academicYear', academicYear);
      formData.append('fileName', newFileName);

      try {
        const response = await fetch('/api/documents/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Document uploaded successfully');
          closeModal(); // Fermer le modal après un upload réussi
        }
      } catch (error) {
        console.error('Error uploading document:', error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Dashboard</h1>
      
      {/* Manage Documents Section */}
      <div className="bg-gray-50 shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Manage Documents</h2>
        <ul className="list-none space-y-4">
          <li>
            <button onClick={() => openModal('Add')} className="flex items-center text-blue-600 hover:underline text-lg">
              <FaPlus className="mr-2" /> Add Document
            </button>
          </li>
          <li>
            <button onClick={() => openModal('Rename')} className="flex items-center text-blue-600 hover:underline text-lg">
              <FaEdit className="mr-2" /> Rename Document
            </button>
          </li>
          <li>
            <button onClick={() => openModal('Delete')} className="flex items-center text-blue-600 hover:underline text-lg">
              <FaTrash className="mr-2" /> Delete Document
            </button>
          </li>
        </ul>
      </div>

{/* Document Management Modal */}
{modalAction && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <h3 className="text-2xl font-semibold mb-4">{modalAction} Document</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {modalAction === 'Add' && (
          <>
            {/* Upload File Input */}
            <div>
              <label className="block text-gray-700 mb-2">Upload Document</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx"
                onChange={handleFileChange}
                className="border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Document Name</label>
              <input
                type="text"
                placeholder="Enter document name"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            {/* Radio buttons for document type */}
            <div>
              <label className="block text-gray-700 mb-2">Nature of Document</label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="documentType"
                    value="Courses"
                    checked={documentType === 'Courses'}
                    onChange={() => setDocumentType('Courses')}
                    className="mr-2"
                  /> Courses
                </label>
                <label>
                  <input
                    type="radio"
                    name="documentType"
                    value="Exercises"
                    checked={documentType === 'Exercises'}
                    onChange={() => setDocumentType('Exercises')}
                    className="mr-2"
                  /> Exercises
                </label>
                <label>
                  <input
                    type="radio"
                    name="documentType"
                    value="Exams"
                    checked={documentType === 'Exams'}
                    onChange={() => setDocumentType('Exams')}
                    className="mr-2"
                  /> Exams
                </label>
              </div>
            </div>
            {/* Dropdown for study level */}
            <div>
              <label className="block text-gray-700 mb-2">Study Level</label>
              <select
                value={studyLevel}
                onChange={(e) => setStudyLevel(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="1er-licence-math">1er Licence Math</option>
                <option value="2eme-licence-math">2eme Licence Math</option>
                <option value="3eme-licence-math">3eme Licence Math</option>
                <option value="1er-master-ds">1er Master DataScience</option>
                <option value="2eme-master-ds">2eme Master DataScience</option>
                <option value="1er-prepa">1er Prépa</option>
                <option value="2eme-prepa">2eme Prépa</option>
                <option value="1er-cycle-ing">1er Cycle d'ingénieurs</option>
                <option value="2eme-cycle-ing">2eme Cycle d'ingénieurs</option>
                <option value="3eme-cycle-ing">3eme Cycle d'ingénieurs</option>
                {/* Add more study levels as needed */}
              </select>
            </div>
            {/* Dropdown for academic year */}
            <div>
              <label className="block text-gray-700 mb-2">Academic Year</label>
              <select
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="2023-2024">2023-2024</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2021-2022">2021-2022</option>
                {/* Add more years as needed */}
              </select>
            </div>
          </>
        )}

        {modalAction === 'Rename' && (
          <>
            <div>
              <label className="block text-gray-700 mb-2">Old Document Name</label>
              <input
                type="text"
                placeholder="Enter old document name"
                value={oldFileName}
                onChange={(e) => setOldFileName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">New Document Name</label>
              <input
                type="text"
                placeholder="Enter new document name"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            {/* Document data (for identification) */}

            {/* Radio buttons for document type */}
            <div>
              <label className="block text-gray-700 mb-2">Nature of Document</label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="documentType"
                    value="Courses"
                    checked={documentType === 'Courses'}
                    onChange={() => setDocumentType('Courses')}
                    className="mr-2"
                  /> Courses
                </label>
                <label>
                  <input
                    type="radio"
                    name="documentType"
                    value="Exercises"
                    checked={documentType === 'Exercises'}
                    onChange={() => setDocumentType('Exercises')}
                    className="mr-2"
                  /> Exercises
                </label>
                <label>
                  <input
                    type="radio"
                    name="documentType"
                    value="Exams"
                    checked={documentType === 'Exams'}
                    onChange={() => setDocumentType('Exams')}
                    className="mr-2"
                  /> Exams
                </label>
              </div>
            </div>

            {/* Dropdown for study level */}
            <div>
              <label className="block text-gray-700 mb-2">Study Level</label>
              <select
                value={studyLevel}
                onChange={(e) => setStudyLevel(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="1er-licence-math">1er Licence Math</option>
                <option value="2eme-licence-math">2eme Licence Math</option>
                <option value="3eme-licence-math">3eme Licence Math</option>
                <option value="1er-master-ds">1er Master DataScience</option>
                <option value="2eme-master-ds">2eme Master DataScience</option>
                <option value="1er-prepa">1er Prépa</option>
                <option value="2eme-prepa">2eme Prépa</option>
                <option value="1er-cycle-ing">1er Cycle d'ingénieurs</option>
                <option value="2eme-cycle-ing">2eme Cycle d'ingénieurs</option>
                <option value="3eme-cycle-ing">3eme Cycle d'ingénieurs</option>
                {/* Add more study levels as needed */}
              </select>
            </div>

            {/* Dropdown for academic year */}
            <div>
              <label className="block text-gray-700 mb-2">Academic Year</label>
              <select
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="2023-2024">2023-2024</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2021-2022">2021-2022</option>
                {/* Add more years as needed */}
              </select>
            </div>
          </>
        )}

        {modalAction === 'Delete' && (
          <>
            <div>
              <label className="block text-gray-700 mb-2">File Name</label>
              <input
                type="text"
                placeholder="Enter file name to delete"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            {/* Document data (for identification) */}
            {/* Radio buttons for document type */}
            <div>
              <label className="block text-gray-700 mb-2">Nature of Document</label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="documentType"
                    value="Courses"
                    checked={documentType === 'Courses'}
                    onChange={() => setDocumentType('Courses')}
                    className="mr-2"
                  /> Courses
                </label>
                <label>
                  <input
                    type="radio"
                    name="documentType"
                    value="Exercises"
                    checked={documentType === 'Exercises'}
                    onChange={() => setDocumentType('Exercises')}
                    className="mr-2"
                  /> Exercises
                </label>
                <label>
                  <input
                    type="radio"
                    name="documentType"
                    value="Exams"
                    checked={documentType === 'Exams'}
                    onChange={() => setDocumentType('Exams')}
                    className="mr-2"
                  /> Exams
                </label>
              </div>
            </div>

            {/* Dropdown for study level */}
            <div>
              <label className="block text-gray-700 mb-2">Study Level</label>
              <select
                value={studyLevel}
                onChange={(e) => setStudyLevel(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="1er-licence-math">1er Licence Math</option>
                <option value="2eme-licence-math">2eme Licence Math</option>
                <option value="3eme-licence-math">3eme Licence Math</option>
                <option value="1er-master-ds">1er Master DataScience</option>
                <option value="2eme-master-ds">2eme Master DataScience</option>
                <option value="1er-prepa">1er Prépa</option>
                <option value="2eme-prepa">2eme Prépa</option>
                <option value="1er-cycle-ing">1er Cycle d'ingénieurs</option>
                <option value="2eme-cycle-ing">2eme Cycle d'ingénieurs</option>
                <option value="3eme-cycle-ing">3eme Cycle d'ingénieurs</option>
                {/* Add more study levels as needed */}
              </select>
            </div>

            {/* Dropdown for academic year */}
            <div>
              <label className="block text-gray-700 mb-2">Academic Year</label>
              <select
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="2023-2024">2023-2024</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2021-2022">2021-2022</option>
                {/* Add more years as needed */}
              </select>
            </div>
          </>
        )}

        {/* Action buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-gray-300 text-gray-700 p-2 rounded-lg"
            onClick={closeModal}
          >
            Cancel
          </button>
          {modalAction === 'Add' && (
            <button
              type="button"
              className="bg-blue-600 text-white p-2 rounded-lg"
              onClick={handleUploadDocument}
            >
              Upload Document
            </button>
          )}
          {modalAction === 'Rename' && (
            <button
              type="button"
              className="bg-blue-600 text-white p-2 rounded-lg"
              onClick={handleRename}
            >
              Rename Document
            </button>
          )}
          {modalAction === 'Delete' && (
            <button
              type="button"
              className="bg-red-600 text-white p-2 rounded-lg"
              onClick={handleDelete}
            >
              Delete Document
            </button>
          )}
        </div>
      </form>
    </div>
  </div>
)}

      {/* Update Profile Picture Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Update Profile Picture</h2>
        <div className="flex items-center mb-6">
          <img
            src={newProfileImage || profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover mr-6"
          />
          <input 
            type="file" 
            accept="image/*"
            onChange={handleProfileImageChange} 
            className="border border-gray-300 p-2 rounded-md" 
          />
          <label htmlFor="profile-image-upload" className="cursor-pointer text-blue-600 hover:underline ml-2">
            Choose Image
          </label>
          <button 
            onClick={handleSaveProfileImage} 
            className="ml-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-200 ease-in-out"
          >
            <FaFileUpload className="inline-block mr-2" /> Update Profile Picture
          </button>
        </div>
      </div>

      {/* Update Credentials Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Update Credentials</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">New Email</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <button
            onClick={handleSaveCredentials}
            className="bg-blue-600 text-white p-2 rounded-lg"
          >
            Save Credentials
          </button>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      {isTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default DashboardPage;
