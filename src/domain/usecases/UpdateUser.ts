
import  UserRepositoryImpl  from '../../data/repositories/UserRepositoryImpl';
import  User from '../../data/models/User';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// export class UpdateUser {
//   private userRepository: IUserRepository;

//   constructor(userRepository: IUserRepository) {
//     this.userRepository = userRepository;
//   }

//   async execute(id: number, updatedData: Partial<User>): Promise<User> {
//     return await this.userRepository.updateUser(id, updatedData);
//   }
// }

export const updateUser= (repository : UserRepositoryImpl) =>{
  const queryClient = useQueryClient();

  return useMutation<User, Error, { id: number; data: Partial<User> }>({
    mutationFn: ({ id, data }) => repository.updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      console.error('Erreur lors de la mise à jour de l’utilisateur:', error);
    },
  });
}