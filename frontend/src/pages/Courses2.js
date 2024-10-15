import React, { useState, useRef } from 'react';
import './Style.css';

const Courses = () => {
  const [documents, setDocuments] = useState({
    '1er-licence-math': ['Algebra I', 'Calculus I', 'Discrete Math', 'Probability', 'Linear Algebra', 'Number Theory', 'Set Theory', 'Complex Numbers', 'Geometry', 'Mathematical Logic'],
    '2eme-licence-math': ['Real Analysis', 'Abstract Algebra', 'Multivariable Calculus', 'Differential Equations', 'Graph Theory', 'Topology', 'Optimization', 'Linear Algebra II', 'Numerical Analysis', 'Mathematical Statistics'],
    '3eme-licence-math': ['Measure Theory', 'Functional Analysis', 'Complex Analysis', 'Galois Theory', 'Combinatorics', 'Partial Differential Equations', 'Homological Algebra', 'Set Theory II', 'Riemann Surfaces', 'Algebraic Topology'],
    '1er-master-ds': ['Machine Learning', 'Big Data', 'Neural Networks', 'Deep Learning', 'Reinforcement Learning', 'Statistical Learning', 'Bayesian Inference', 'Data Visualization', 'Time Series Analysis', 'Natural Language Processing'],
    '2eme-master-ds': ['Advanced Machine Learning', 'Quantum Computing', 'Graphical Models', 'Data Mining', 'Artificial Intelligence', 'Data Ethics', 'Blockchain', 'Advanced Data Visualization', 'Big Data Processing', 'IoT Analytics'],
    '1er-prepa': ['General Mathematics I', 'Physics I', 'Chemistry I', 'Mechanics', 'Electromagnetism', 'Optics', 'Algebraic Structures', 'Vectors and Matrices', 'Mathematical Methods', 'Computer Science Basics'],
    '2eme-prepa': ['General Mathematics II', 'Physics II', 'Chemistry II', 'Thermodynamics', 'Fluid Dynamics', 'Quantum Physics', 'Real Analysis II', 'Numerical Methods', 'Probability Theory', 'Linear Algebra III'],
    '1er-cycle-ing': ['Engineering Mathematics', 'Statistics for Engineers', 'Operations Research', 'Control Systems', 'Optimization Techniques', 'Numerical Methods for Engineers', 'Fluid Mechanics', 'Thermodynamics II', 'Strength of Materials', 'Electrical Circuits'],
    '2eme-cycle-ing': ['Advanced Control Systems', 'Signal Processing', 'Machine Learning for Engineers', 'Robotics', 'Finite Element Analysis', 'Structural Analysis', 'Heat Transfer', 'Digital Image Processing', 'Embedded Systems', 'Automated Systems'],
    '3eme-cycle-ing': ['Advanced Robotics', 'Artificial Intelligence in Engineering', 'Data Science for Engineers', 'Smart Systems', 'Advanced Thermodynamics', 'Advanced Structural Analysis', 'Renewable Energy Systems', 'Computational Fluid Dynamics', 'Quantum Engineering', 'Cyber-Physical Systems'],
  });

  const [editing, setEditing] = useState(null);
  const [newName, setNewName] = useState('');

  const levels = [
    { id: '1er-licence-math', label: '1er Licence Math' },
    { id: '2eme-licence-math', label: '2eme Licence Math' },
    { id: '3eme-licence-math', label: '3eme Licence Math' },
    { id: '1er-master-ds', label: '1er Master DataScience' },
    { id: '2eme-master-ds', label: '2eme Master DataScience' },
    { id: '1er-prepa', label: '1er Prépa' },
    { id: '2eme-prepa', label: '2eme Prépa' },
    { id: '1er-cycle-ing', label: '1er Cycle Ingénieur' },
    { id: '2eme-cycle-ing', label: '2eme Cycle Ingénieur' },
    { id: '3eme-cycle-ing', label: '3eme Cycle Ingénieur' }
  ];

  const sectionsRefs = useRef({});
  levels.forEach((level) => {
    sectionsRefs.current[level.id] = React.createRef();
  });

  const scrollToSection = (id) => {
    sectionsRefs.current[id].current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRename = (levelId, index) => {
    const newDocuments = [...documents[levelId]];
    newDocuments[index] = newName;
    setDocuments({
      ...documents,
      [levelId]: newDocuments,
    });
    setNewName('');
    setEditing(null);
  };

  const handleDelete = (levelId, index) => {
    const newDocuments = documents[levelId].filter((_, i) => i !== index);
    setDocuments({
      ...documents,
      [levelId]: newDocuments,
    });
  };

  return (
    <div className="flex">
      {/* Aside section */}
      <aside className="w-1/4 p-4 bg-gray-50 border-r border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Select a level:</h2>
        <ul className="space-y-2">
          {levels.map((level) => (
            <li key={level.id}>
              <button
                className="w-full text-left p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                onClick={() => scrollToSection(level.id)}
              >
                {level.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="w-3/4 p-6">
        <h1 className="text-3xl font-bold mb-6">Courses</h1>

        <div className="space-y-12">
          {levels.map((level) => (
            <div
              key={level.id}
              id={level.id}
              ref={sectionsRefs.current[level.id]}
              className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4">{level.label} Documents</h3>
              <p className="text-gray-600 mb-4">Explore the course documents for {level.label}.</p>
              <ul className="grid grid-cols-2 gap-4">
                {documents[level.id]?.map((doc, index) => (
                  <li key={index} className="p-4 bg-gray-100 rounded-lg hover:bg-blue-100 transition duration-300">
                    <div className="flex justify-between items-center">
                      <a href="#" className="text-blue-600 hover:underline">{doc}</a>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(level.id, index)}
                      >
                        Delete
                      </button>
                      {editing === index ? (
                        <input
                          type="text"
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                          onBlur={() => handleRename(level.id, index)}
                          autoFocus
                        />
                      ) : (
                        <button
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => setEditing(index)}
                        >
                          Rename
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
