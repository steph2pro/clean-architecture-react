// Importation des bibliothèques nécessaires
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Pour la gestion du routage
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Pour React Query
import './index.css'; // Importation des styles globaux
import HomePage from './presentation/pages/HomePage'; // Importation de la page principale

// Création d'une instance de QueryClient pour gérer les requêtes et le cache
const queryClient = new QueryClient();

// Configuration de l'application React
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Fournit le QueryClient à l'ensemble de l'application */}
    <QueryClientProvider client={queryClient}>
      {/* Configuration du routeur pour gérer les routes de l'application */}
      <Router>
        <Routes>
          {/* Route pour la page principale */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
