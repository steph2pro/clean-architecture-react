// // Importation du modèle User
// import { User } from '../../data/models/User';

// // Définition de l'interface UserRepository
// export interface UserRepository {
//   // Méthode pour récupérer les utilisateurs
//   getUsers(): Promise<User[]>;
//   // updateUser(userId: number, data: Partial<User>): Promise<void>;
//   updateUser(userId: number, data: Partial<User>): Promise<void>;
// }

import { User } from '../../data/models/User';

export interface IUserRepository {
  getUsers(): Promise<User[]>;
  updateUser(id: number, updatedData: Partial<User>): Promise<User>;
  deleteUser(id: number): Promise<void>; 
}
