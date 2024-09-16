import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserRepository } from '../../data/repositories/UserRepository.ts';
import { User } from '../../data/models/User';

const userRepository = new UserRepository();

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, { id: number; data: Partial<User> }>({
    mutationFn: ({ id, data }) => userRepository.updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      console.error('Erreur lors de la mise à jour de l’utilisateur:', error);
    },
  });
};

