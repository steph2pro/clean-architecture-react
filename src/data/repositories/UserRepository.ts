// // Importation du modèle User
// import { User } from '../models/User';

// // Importation de l'instance Http pour faire les requêtes HTTP
// import Http from '../../services/Http';

// // Fonction pour récupérer la liste des utilisateurs depuis l'API
// export const getUsers = async (): Promise<User[]> => {
//   // Effectue une requête GET pour obtenir les utilisateurs
//   const response = await Http.get<User[]>('/users');
//   // Retourne les données reçues
//   return response.data;
// };


// import { User } from '../models/User';
// import { UserDatasource } from '../datasources/UserDatasource';

// export class UserRepository {
//   private datasource: UserDatasource;

//   constructor() {
//     this.datasource = new UserDatasource();
//   }

//   async getAllUsers(): Promise<User[]> {
//     return await this.datasource.getUsers();
//   }
// }
// import { getUsers, updateUser } from '../datasources/UserDatasource';
// import { User } from '../models/User';

// export class UserRepository {
//   async getUsers(): Promise<User[]> {
//     return await getUsers();
//   }

//   async updateUser(id: number, updatedData: Partial<User>): Promise<User> {
//     return await updateUser(id, updatedData);
//   }
// }
import { getUsers, updateUser,deleteUser } from '../datasources/UserDatasource';
import { User } from '../models/User';

export class UserRepository {
  async getUsers(): Promise<User[]> {
    return await getUsers();
  }

  async updateUser(id: number, updatedData: Partial<User>): Promise<User> {
    return await updateUser(id, updatedData);
  }
  async deleteUser(id: number): Promise<void> {  // Utilisation de la méthode delete
    await deleteUser(id);
  }
}
