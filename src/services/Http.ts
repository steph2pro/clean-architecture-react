import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Création d'une instance d'Axios avec une configuration spécifique
const instance = axios.create({
  baseURL: "http://localhost:3000", // URL de base pour toutes les requêtes
  headers: {
    'Content-Type': 'application/json', // Les requêtes enverront et recevront des données JSON
  },
});

type HTTPRequestConfig = AxiosRequestConfig;

// Fonction API qui expose les méthodes HTTP
const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: HTTPRequestConfig = {}) => {
      return axios.get<T>(url, config);
    },
    delete: <T>(url: string, config: HTTPRequestConfig = {}) => {
      return axios.delete<T>(url, config);
    },
    put: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
      return axios.put<T>(url, body, config);
    },
    patch: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
      return axios.patch<T>(url, body, config);
    },
    post: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
      return axios.post<T>(url, body, config);
    },
  };
};

// Exportation de l'API
export const Http = api(instance);
