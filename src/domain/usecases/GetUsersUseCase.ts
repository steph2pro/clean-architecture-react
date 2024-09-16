// // Importation de l'interface du repository UserRepository
// import { UserRepository } from '../repositories/UserRepository';

// // Importation du modèle User
// import { User } from '../../data/models/User';

// // Classe qui représente le cas d'utilisation de récupération des utilisateurs
// export class GetUsersUseCase {
//   // Le repository est passé en paramètre lors de l'instanciation
//   constructor(private userRepository: UserRepository) {}

//   // Méthode pour exécuter le cas d'utilisation
//   execute(): Promise<User[]> {
//     // Appelle la méthode getUsers du repository
//     return this.userRepository.getUsers();
//   }
// }

import { UserRepository } from '../../data/repositories/UserRepository';
import { User } from '../../data/models/User';

export class GetUsersUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(): Promise<User[]> {
    return await this.userRepository.getUsers();
  }
}
