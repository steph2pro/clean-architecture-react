import  User  from '../../models/User';

export default interface  UserNetworkService{
  getUsers(): Promise<User[]>;
  updateUser(id: number, updatedData: Partial<User>): Promise<User>;
  deleteUser(id: number): Promise<void>; 
   // Méthode pour créer un utilisateur
   createUser(newUser: Partial<User>): Promise<User>;
}