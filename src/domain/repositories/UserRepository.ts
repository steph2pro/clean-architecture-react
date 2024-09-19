

import  User  from '../../data/models/User';

export interface UserRepository {
  getUsers(): Promise<User[]>;
  updateUser(id: number, updatedData: Partial<User>): Promise<User>;
  deleteUser(id: number): Promise<void>; 
}
