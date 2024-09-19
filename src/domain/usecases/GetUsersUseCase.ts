
import User from '../../data/models/User';
import  UserRepositoryImpl  from '../../data/repositories/UserRepositoryImpl';

import {  useQuery } from '@tanstack/react-query';


export const getUsersUseCase= (repository : UserRepositoryImpl) =>{
  return  useQuery<User[], Error>({
        queryKey: ['users'],  // Clé unique pour la requête
        queryFn: async () => repository.getUsers(), // Fonction pour récupérer les utilisateurs
      });
  
  // useMutation({
  //   mutationFn: async ()=>{
  //     return await repository.getUsers();
  //   }
  // })
}
