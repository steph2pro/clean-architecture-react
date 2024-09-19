
import React, { useState, useMemo } from 'react';
import { useTable, Column } from 'react-table';
import { useUsers } from '../hooks/useUsers'; 
// import { useDeleteUser } from '../hooks/useDeleteUser';
import  User  from '../../data/models/User';
// import EditUserForm from './EditUserForm';
import FilterUsers from './FilterUsers'; // Import du composant FilterUsers

// interface UserListProps {
//   onDeleteSuccess: (message: string) => void;
//   onDeleteError: (message: string) => void;
// }
// { onDeleteSuccess, onDeleteError }
const UserList: React.FC = () => {
  const { data: users, error } = useUsers();
  // const deleteUserMutation = useDeleteUser();
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  // Gestion du filtre
  const handleFilter = (criteria: string, value: string) => {
    const filtered = users?.filter(user => {
      const fieldValue = user[criteria as keyof User];
      
      // Vérifier si fieldValue est défini avant d'appeler .toString()
      return fieldValue && fieldValue.toString().toLowerCase().includes(value.toLowerCase());
    });
    setFilteredUsers(filtered || []);
  };
  

  // Si on n'a pas encore appliqué de filtre, afficher tous les utilisateurs
  const displayedUsers = filteredUsers.length ? filteredUsers : users || [];

  // const handleDelete = (id: number) => {
  //   if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
  //     deleteUserMutation.mutate(id, {
  //       onSuccess: () => onDeleteSuccess('Utilisateur supprimé avec succès !'),
  //       onError: () => onDeleteError('Erreur lors de la suppression de l\'utilisateur'),
  //     });
  //   }
  // };

  // Définir les colonnes pour react-table
  const columns: Column<User>[] = useMemo(() =>  [
    {
      Header: 'Nom',
      accessor: 'name',
    },
    {
      Header: 'Prénom',
      accessor: 'prenom',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Ville',
      accessor: 'ville',
    },
    {
      Header: 'Actions',
      Cell: ({ row }: any) => (
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setEditingUser(row.original)}
          >
            Modifier
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            // onClick={() => handleDelete(row.original.id)}
          >
            Supprimer
          </button>
        </div>
      ),
    },
  ], []);

  // Convertir les utilisateurs en tableau utilisable par react-table
  const data = useMemo(() => displayedUsers, [displayedUsers]);

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  // if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des utilisateurs</h1>

      {/* Intégration du composant de filtre */}
      <FilterUsers onFilter={handleFilter} />

      <table {...getTableProps()} className="table-auto w-full bg-white shadow-md rounded border-collapse">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="p-2 text-left border">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-t">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="p-2 border">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* {editingUser && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <EditUserForm user={editingUser} onClose={() => setEditingUser(null)} />
        </div>
      )} */}
    </div>
  );
};

export default UserList;
