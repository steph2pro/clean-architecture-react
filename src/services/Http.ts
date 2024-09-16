// Importation de la bibliothèque axios
import axios from 'axios';

// Création d'une instance d'Axios avec une configuration spécifique
const Http = axios.create({
  baseURL: 'http://localhost:3000', // URL de base pour toutes les requêtes (l'API JSON Server)
  headers: {
    'Content-Type': 'application/json', // Les requêtes enverront et recevront des données JSON
  },
});

// Exportation de l'instance Http pour qu'elle soit utilisable ailleurs dans l'application
export default Http;
