import React, { useState } from 'react';

interface FilterUsersProps {
  onFilter: (criteria: string, value: string) => void; // Fonction à appeler pour appliquer le filtre
}

const FilterUsers: React.FC<FilterUsersProps> = ({ onFilter }) => {
  const [criteria, setCriteria] = useState('name'); // Critère de filtre
  const [value, setValue] = useState(''); // Valeur de filtre

  const handleFilter = () => {
    onFilter(criteria, value); // Appelle la fonction onFilter avec le critère et la valeur
  };

  return (
    <div className="mb-4 flex items-center space-x-4">
      <select
        value={criteria}
        onChange={(e) => setCriteria(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="name">Nom</option>
        <option value="prenom">Prénom</option>
        <option value="email">Email</option>
        <option value="ville">Ville</option>
      </select>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Entrez la valeur"
        className="p-2 border rounded"
      />

      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Filtrer
      </button>
    </div>
  );
};

export default FilterUsers;
