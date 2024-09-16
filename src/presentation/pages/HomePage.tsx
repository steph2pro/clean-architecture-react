// src/presentation/pages/HomePage.tsx
import React from 'react';
import UserPage from './UserPage';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Bienvenue sur la page principale</h1>
      <UserPage />
    </div>
  );
};

export default HomePage;
