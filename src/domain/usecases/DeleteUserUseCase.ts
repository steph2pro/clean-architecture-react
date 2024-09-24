
import { useMutation } from '@tanstack/react-query';
import  UserRepositoryImpl  from '../../data/repositories/UserRepositoryImpl';
import { useNotification } from '../../services/useNotification';

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
