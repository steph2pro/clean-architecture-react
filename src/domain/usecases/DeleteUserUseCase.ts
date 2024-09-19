// src/domain/usecases/DeleteUserUseCase.ts

import { useMutation } from '@tanstack/react-query';
import  UserRepositoryImpl  from '../../data/repositories/UserRepositoryImpl';
import { useNotification } from '../../services/useNotification';

// export class DeleteUserUseCase {
//   private userRepository: IUserRepository;

//   constructor(userRepository: IUserRepository) {
//     this.userRepository = userRepository;
//   }

//   async execute(id: number): Promise<void> {
//     return await this.userRepository.deleteUser(id);
//   }
// }
export const deleteUserUseCase= (repository : UserRepositoryImpl) =>{
  const notify=useNotification();
  return useMutation({
    mutationFn: async (id: number)=>{
      return await repository.deleteUser(id);
    },
    onSuccess: () => {
      notify.success("suprimer avec success!");
  },
  onError: () => {
      notify.error("une erreur c'est produit");
  },

  })
}
