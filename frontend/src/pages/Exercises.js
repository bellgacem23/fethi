import React, { useRef } from 'react';
import './Style.css'; // Importation du fichier CSS

const Exercices = () => {
  // Liste des niveaux
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

  const years = ['2021-2022', '2022-2023', '2023-2024'];

  // Références pour chaque niveau
  const sectionsRefs = useRef({});
  levels.forEach((level) => {
    sectionsRefs.current[level.id] = React.createRef();
  });

  // Fonction pour faire défiler jusqu'à la section choisie
  const scrollToSection = (id) => {
    sectionsRefs.current[id].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Section latérale */}
      <aside className="w-1/4 p-4 bg-blue-600 text-white shadow-md">
        <h2 className="text-2xl font-bold ">Niveau d'étude</h2>
        <ul className="space-y-1">
          {levels.map((level) => (
            <li key={level.id}>
              <button
                className="w-full text-left p-3 bg-blue-500 rounded-md shadow-lg hover:bg-blue-400 transition-colors duration-300"
                onClick={() => scrollToSection(level.id)}
              >
                {level.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Contenu principal */}
      <main className="w-3/4 p-8">
        <h1 className="text-4xl font-extrabold mb-8 text-blue-700">Exercices</h1>

        <div className="space-y-12">
          {levels.map((level) => (
            <div
              key={level.id}
              id={level.id}
              ref={sectionsRefs.current[level.id]}
              className="border border-gray-200 rounded-lg shadow-lg p-6 bg-white"
            >
              <h3 className="text-3xl font-semibold mb-6 text-gray-800">{level.label} Exercices</h3>
              <p className="text-gray-600 mb-8">
                Explorez les séries d'exercices pour {level.label} pour les différentes années universitaires.
              </p>

              {/* Séries d'exercices par année grid grid-cols-1 md:grid-cols-3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {years.map((year) => (
                  <div key={year} className="mb-6">
                    <h4 className="text-2xl font-bold mb-4 text-blue-600">{year}</h4>
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((series) => (
                        <a
                          key={series}
                          href={`/exercises/${level.id}/${year}/serie-${series}`}
                          className="block p-4 border border-gray-200 rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition transform hover:-translate-y-1 hover:shadow-lg"
                        >
                          <h5 className="text-lg font-semibold text-gray-700">Série {series}</h5>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Exercices;
