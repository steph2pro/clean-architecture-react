
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { UserRepository } from '../../data/repositories/UserRepositoryImpl';
// import { User } from '../../data/models/User';

// const userRepository = new UserRepository();

// // Hook pour récupérer la liste des utilisateurs
// export const useUsers = () => {
//   return useQuery<User[], Error>({
//     queryKey: ['users'],  // Clé unique pour la requête
//     queryFn: () => userRepository.getUsers(), // Fonction pour récupérer les utilisateurs
//   });
// };

// hooks/useGetUsers.js
// hooks/useGetUsers.js
import { getUsersUseCase } from '../../domain/usecases/getUsersUseCase';
import UserRepositoryImpl from '../../data/repositories/UserRepositoryImpl';
import UserNetworkServiceImpl from '../../data/datasources/network/UserNetworkServiceImpl'; // Assurez-vous que ce chemin est correct

const userNetworkService = new UserNetworkServiceImpl(); // Créez une instance de UserNetworkService
const userRepository = new UserRepositoryImpl(userNetworkService); // Passez-la à UserRepositoryImpl

export const useUsers = () => {
  return getUsersUseCase(userRepository);
};

