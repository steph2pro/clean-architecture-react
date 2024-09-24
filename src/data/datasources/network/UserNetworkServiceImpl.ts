import { Http } from '../../../services/Http';
import  User  from '../../models/User';
import UserNetworkService from './UserNetworkService';




export default class UserNetworkServiceImpl implements UserNetworkService {

    apiUrl = '/users'; // Chemin de l'API, l'URL de base est déjà définie dans Http.ts
     async getUsers() : Promise<User[]>  {
        const response = await Http.get<User[]>(this.apiUrl); // Utilisation de Http.get
        return response.data;
      };
       async updateUser (id: number, updatedData: Partial<User>): Promise<User> {
        const response = await Http.put<User>(`${this.apiUrl}/${id}`, updatedData); // Utilisation de Http.put
        return response.data;
      };
      
        async deleteUser  (id: number): Promise<void>  {
        await Http.delete(`${this.apiUrl}/${id}`); // Utilisation de Http.delete
      };
       // Méthode pour ajouter un utilisateur
      async createUser(newUser: Partial<User>): Promise<User> {
        const response = await Http.post<User>(this.apiUrl, newUser); // Utilisation de Http.post
        return response.data;
      }

}





// const API_URL = '/users'; // Chemin de l'API, l'URL de base est déjà définie dans Http.ts

// export const getUsers = async (): Promise<User[]> => {
//   const response = await Http.get<User[]>(API_URL); // Utilisation de Http.get
//   return response.data;
// };

// export const updateUser = async (id: number, updatedData: Partial<User>): Promise<User> => {
//   const response = await Http.put<User>(`${API_URL}/${id}`, updatedData); // Utilisation de Http.put
//   return response.data;
// };

// export const deleteUser = async (id: number): Promise<void> => {
//   await Http.delete(`${API_URL}/${id}`); // Utilisation de Http.delete
// };