// Importation des bibliothèques nécessaires
import React from 'react';
import ReactDOM from 'react-dom/client';
import {  RouterProvider } from 'react-router-dom'; // Pour la gestion du routage
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Pour React Query
import './index.css'; // Importation des styles globaux
import router from './presentation/utils/router';
import 'react-toastify/dist/ReactToastify.css'; // Importer les styles
import { ToastContainer } from 'react-toastify';

// Création d'une instance de QueryClient pour gérer les requêtes et le cache
const queryClient = new QueryClient();

// Configuration de l'application React
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Fournit le QueryClient à l'ensemble de l'application */}
    <QueryClientProvider client={queryClient}>
      {/* Configuration du routeur pour gérer les routes de l'application */}
      <RouterProvider router={router}/>
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);
