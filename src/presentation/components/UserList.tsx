
// import React, { useState } from 'react';
// import { useUsers } from '../hooks/useUsers';
// import EditUserForm from './EditUserForm';
// import { User } from '../../data/models/User';

// const UserList: React.FC = () => {
//   const { data: users, isLoading, error } = useUsers();
//   const [editingUser, setEditingUser] = useState<User | null>(null);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Liste des utilisateurs</h1>
//       <ul className="space-y-2">
//         {users?.map((user) => (
//           <li key={user.id} className="p-4 bg-gray-100 rounded shadow-md flex justify-between items-center">
//             <div>
//               <h2 className="text-xl font-semibold">{user.name} {user.prenom}</h2>
//               <p className="text-gray-600">{user.email}</p>
//             </div>
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//               onClick={() => setEditingUser(user)}
//             >
//               Modifier
//             </button>
//           </li>
//         ))}
//       </ul>
//       {editingUser && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
//           <EditUserForm user={editingUser} onClose={() => setEditingUser(null)} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserList;

// import { useUsers } from '../hooks/useUsers'; // Import des hooks
// import { useUpdateUser } from '../hooks/useUpdateUser'; // Import des hooks
// import {  useDeleteUser } from '../hooks/useDeleteUser'; // Import des hooks
// import { User } from '../../data/models/User';

// interface UserListProps {
//   onDeleteSuccess: (message: string) => void; // Prop pour gérer le succès de suppression
//   onDeleteError: (message: string) => void;   // Prop pour gérer l'erreur de suppression
// }

// const UserList: React.FC<UserListProps> = ({ onDeleteSuccess, onDeleteError }) => {
//   const { data: users, isLoading, isError } = useUsers();
//   const deleteUserMutation = useDeleteUser(); // Hook pour supprimer un utilisateur
//   const updateUserMutation = useUpdateUser(); // Hook pour mettre à jour un utilisateur

//   if (isLoading) return <div>Chargement des utilisateurs...</div>;
//   if (isError) return <div>Une erreur est survenue.</div>;

//   const handleDelete = (id: number) => {
//     if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
//       deleteUserMutation.mutate(id, {
//         onSuccess: () => onDeleteSuccess('Utilisateur supprimé avec succès !'),
//         onError: () => onDeleteError('Erreur lors de la suppression de l\'utilisateur'),
//       });
//     }
//   };

//   return (
//     <div className="p-4">
//     <ul>
//       {users?.map((user: User) => (
//         <li key={user.id} className="flex justify-between items-center">
//           <span>{user.name}</span>
//           {/* Bouton de mise à jour */}
//           <button
//             className="text-blue-500"
//             onClick={() => updateUserMutation.mutate({ id: user.id, data: { name: user.name } })}>
//             Modifier
//           </button>
//           {/* Bouton de suppression */}
//           <button
//             className="text-red-500"
//             onClick={() => handleDelete(user.id)}>
//             Supprimer
//           </button>
//         </li>
//       ))}
//     </ul>
//     {editingUser && (
//               <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
//                 <EditUserForm user={editingUser} onClose={() => setEditingUser(null)} />
//               </div>
//             )}
//     </div>
//   );
// };

// export default UserList;
// src/presentation/components/UserList.tsx
import React, { useState } from 'react';
import { useUsers } from '../hooks/useUsers'; // Import des hooks
// import { useUpdateUser } from '../hooks/useUpdateUser'; // Import des hooks
import {  useDeleteUser } from '../hooks/useDeleteUser'; // Import des hooks
import EditUserForm from './EditUserForm';
import { User } from '../../data/models/User';

interface UserListProps {
  onDeleteSuccess: (message: string) => void; // Prop pour gérer le succès de suppression
  onDeleteError: (message: string) => void;   // Prop pour gérer l'erreur de suppression
}


const UserList: React.FC<UserListProps> = ({onDeleteSuccess, onDeleteError }) => {
  const { data: users, isLoading, error } = useUsers();
  const deleteUser = useDeleteUser();
  const deleteUserMutation = useDeleteUser(); // Utiliser le hook pour supprimer un utilisateur
  const [editingUser, setEditingUser] = useState<User | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleDelete = (id: number) => {
        if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
          deleteUserMutation.mutate(id, {
            onSuccess: () => onDeleteSuccess('Utilisateur supprimé avec succès !'),
            onError: () => onDeleteError('Erreur lors de la suppression de l\'utilisateur'),
          });
        }
      };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des utilisateurs</h1>
      <ul className="space-y-2">
        {users?.map((user) => (
          <li key={user.id} className="p-4 bg-gray-100 rounded shadow-md flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{user.name} {user.prenom}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="flex space-x-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setEditingUser(user)} // Ouvre la modale de modification
              >
                Modifier
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDelete(user.id)} // Gère la suppression de l'utilisateur
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editingUser && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <EditUserForm
            user={editingUser}
            onClose={() => setEditingUser(null)} // Ferme la modale après modification
          />
        </div>
      )}
    </div>
  );
};

export default UserList;
