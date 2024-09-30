import React, { useState } from 'react';
import { Camera, Sun, Moon, Github } from 'lucide-react';

const ContributorBox = ({ name, imageUrl, darkMode }) => (
  <div className="flex flex-col items-center mb-4">
    <div className={`w-full aspect-square ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg flex items-center justify-center overflow-hidden`}>
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      ) : (
        <Camera className={darkMode ? 'text-gray-500' : 'text-gray-400'} size={48} />
      )}
    </div>
    <input
      type="text"
      placeholder="Your Name"
      value={name}
      readOnly
      className={`mt-2 w-full px-3 py-2 text-sm ${darkMode ? 'text-gray-200 bg-gray-800' : 'text-gray-700 bg-white'} placeholder-gray-400 border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
    />
  </div>
);

const ContributorGrid = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Example data - replace with your own or fetch from an API
  const contributors = [
     { name: "Kavi Varsha", imageUrl: "public\images\kavivarsha.png" },
    // Add more contributors here
    ...Array(49).fill({ name: "", imageUrl: "" }) // Fill the rest with empty boxes
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-4 py-8 relative">
        <div className="absolute top-4 right-4 flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <a href="https://github.com/your-repo-url" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <Github size={24} />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-center mb-8">Git Collaboration Project</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {contributors.map((contributor, index) => (
            <ContributorBox key={index} {...contributor} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributorGrid;
