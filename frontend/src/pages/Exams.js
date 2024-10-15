import React, { useRef } from 'react';
import './Style.css';

const Exams = () => {
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
    { id: '3eme-cycle-ing', label: '3eme Cycle Ingénieur' },
  ];

  const sectionsRefs = useRef({});

  levels.forEach((level) => {
    sectionsRefs.current[level.id] = React.createRef();
  });

  const scrollToSection = (id) => {
    sectionsRefs.current[id].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex">
      {/* Aside section */}
      <aside className="w-1/4 p-4 bg-gray-100 border-r border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Select a level:</h2>
        <ul className="space-y-2">
          {levels.map((level) => (
            <li key={level.id}>
              <button
                className="w-full text-left p-2 bg-blue-400 text-white rounded hover:bg-blue-600 transition duration-300"
                onClick={() => scrollToSection(level.id)}
              >
                {level.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="w-3/4 p-4">
        <h1 className="text-3xl font-bold mb-6">Exams</h1>

        <div className="space-y-12">
          {levels.map((level) => (
            <div
              key={level.id}
              id={level.id}
              ref={sectionsRefs.current[level.id]}
              className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white"
            >
              <h3 className="text-2xl font-semibold mb-4">{level.label} Documents</h3>
              <p className="text-gray-700">Here you can find the exam documents for {level.label}.</p>
              {/* Add documents or links here */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Exams;
