

import { useMutation } from '@tanstack/react-query';
import  UserRepositoryImpl  from '../../data/repositories/UserRepositoryImpl';
import { useNotification } from '../../services/useNotification';
import User from '../../data/models/User';

export const addUserUseCase= (repository : UserRepositoryImpl) =>{
  const notify=useNotification();
  return useMutation({
    mutationFn: async (newUser: Partial<User>)=>{
      return await repository.createUser(newUser);
    },
    onSuccess: () => {
      notify.success("utilisateur ajouter avec success!");
  },
  onError: () => {
      notify.error("une erreur c'est produit");
  },

  })
}
