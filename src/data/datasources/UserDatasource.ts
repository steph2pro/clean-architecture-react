// // import http from '../../services/Http';
// // import { User } from '../models/User';

// // export class UserDatasource {
// //   async getUsers(): Promise<User[]> {
// //     const response = await http.get('/users');
// //     return response.data;
// //   }
// //   async updateUser(userId: number, data: Partial<User>): Promise<void> {
// //     await http.put(`/users/${userId}`, data);
// //   }
  
// // }

// import axios from 'axios';
// import { User } from '../models/User';

// const API_URL = 'http://localhost:3000/users'; // URL de l'API `db.json`

// export const getUsers = async (): Promise<User[]> => {
//   const response = await axios.get<User[]>(API_URL);
//   return response.data;
// };

// export const updateUser = async (user: User): Promise<User> => {
//   const response = await axios.put(`${API_URL}/${user.id}`, user);
//   return response.data;
// };

import axios from 'axios';
import { User } from '../models/User';

const BASE_URL = 'http://localhost:3000/users'; // URL de ton API db.json

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const updateUser = async (id: number, updatedData: Partial<User>): Promise<User> => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
  return response.data;
};
export const deleteUser = async (id: number): Promise<void> => {  // Ajout de la méthode delete
  await axios.delete(`${BASE_URL}/${id}`);
};