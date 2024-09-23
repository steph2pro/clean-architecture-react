
import  User  from '../models/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import UserNetworkService from '../datasources/network/UserNetworkService';

export default class UserRepositoryImpl implements UserRepository {

  dataSource:UserNetworkService
  constructor(dataSource: UserNetworkService) {
      this.dataSource = dataSource;
  }

  async getUsers(): Promise<User[]> {
    return await this.dataSource.getUsers();
  }

  async updateUser(id: number, updatedData: Partial<User>): Promise<User> {
    return await this.dataSource.updateUser(id, updatedData);
  }
  async deleteUser(id: number): Promise<void> {  // Utilisation de la méthode delete
    await this.dataSource.deleteUser(id);
  }
   // Méthode pour ajouter un utilisateur
   async createUser(newUser: Partial<User>): Promise<User> {
    return await this.dataSource.createUser(newUser);
  }
}
