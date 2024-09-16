// src/presentation/hooks/useDeleteUser.ts

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeleteUserUseCase } from '../../domain/usecases/DeleteUserUseCase';
import { UserRepository } from '../../data/repositories/UserRepository';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const userRepository = new UserRepository();
  const deleteUserUseCase = new DeleteUserUseCase(userRepository);

  return useMutation( {
    mutationFn:(id: number) => deleteUserUseCase.execute(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
