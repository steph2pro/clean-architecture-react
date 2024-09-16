
// // Importation de useQuery de React Query pour gérer les requêtes et le cache
// import { useQuery } from '@tanstack/react-query';

// // Importation du cas d'utilisation GetUsersUseCase
// import { GetUsersUseCase } from '../../domain/usecases/GetUsersUseCase';

// // Importation de l'implémentation concrète du repository
// import { getUsers } from '../../data/repositories/UserRepository';
// // Définition de la queryKey
// const USERS_QUERY_KEY = ['users'];
// // Création d'une instance du cas d'utilisation en passant l'implémentation du repository
// const getUsersUseCase = new GetUsersUseCase({ getUsers });

// // Hook personnalisé pour utiliser React Query et récupérer les utilisateurs
// export const useUsers = () => {
//   // Utilisation de useQuery pour gérer la requête de récupération des utilisateurs
//   return useQuery({
//     queryKey: USERS_QUERY_KEY,
//     queryFn: () => getUsersUseCase.execute(),
//   });
// };
// import { useQuery } from '@tanstack/react-query';
// import { GetUsersUseCase } from '../../domain/usecases/GetUsersUseCase';
// import { User } from '../../data/models/User';

// const getUsersUseCase = new GetUsersUseCase();

// export const useUsers = () => {
//   return useQuery<User[], Error>({
//       queryKey: ['users'],
//       queryFn: () => getUsersUseCase.execute()
//   });
// };
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { UserRepository } from '../../data/repositories/UserRepository';
import { User } from '../../data/models/User';

const userRepository = new UserRepository();

// Hook pour récupérer la liste des utilisateurs
export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],  // Clé unique pour la requête
    queryFn: () => userRepository.getUsers(), // Fonction pour récupérer les utilisateurs
  });
};

// Hook pour mettre à jour un utilisateur
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<
    User,  // Le type de la réponse en cas de succès
    Error, // Le type de l'erreur
    { id: number, data: Partial<User> } // Les données passées à la mutation
  >(
    // Fonction de mise à jour d'un utilisateur
    // (updatedData: { id: number; data: Partial<User> }) => 
    //   userRepository.updateUser(updatedData.id, updatedData.data), 
    {
      mutationFn:(updatedData: { id: number; data: Partial<User> }) => userRepository.updateUser(updatedData.id, updatedData.data),
      onSuccess: () => {
        // Invalide la requête des utilisateurs pour actualiser la liste après la modification
        queryClient.invalidateQueries({ queryKey: ['users'] });
      },
    }
  );
};









