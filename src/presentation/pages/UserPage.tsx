// src/presentation/pages/UserPage.tsx
import React, { useState } from 'react';
import UserList from '../components/UserList';
import AddUserModal from '../components/AddUserModal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {Http} from '../../services/Http';
import  User  from '../../data/models/User';
import AddUser from './addUser';
import { Modal } from "../components/modal"; 
const USERS_QUERY_KEY = ['users'];

const UserPage: React.FC = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false); // État pour gérer l'ouverture de la modale
  const [successMessage, setSuccessMessage] = useState(''); // État pour le message de succès général
  const [errorMessage, setErrorMessage] = useState(''); // État pour le message d'erreur
  const queryClient = useQueryClient();
//
const [isModalOpen, setIsModalOpen] = useState(false);

    // Fonction pour ouvrir et fermer la modale
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
  // Utilisation de useMutation pour gérer l'ajout d'un utilisateur
  const mutation = useMutation({
    mutationFn: (newUser: Omit<User, 'id'>) => Http.post('/users', newUser), // On omet 'id' lors de la création
    onSuccess: () => {
      // Invalider les données mises en cache pour 'users'
      queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
      setSuccessMessage('Utilisateur ajouté avec succès !'); // Définir le message de succès
      setTimeout(() => setSuccessMessage(''), 3000); // Effacer le message après 3 secondes
    },
    onError: (error) => {
      setErrorMessage('Erreur lors de l\'ajout de l\'utilisateur');
      setTimeout(() => setErrorMessage(''), 3000);
      console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
    },
  });

  // Fonction pour gérer l'ajout d'un utilisateur
  const handleAddUser = async (user: Omit<User, 'id'>): Promise<void> => {
    await mutation.mutateAsync(user); // Utilisation de mutateAsync pour gérer les promesses
  };

  // Fonction pour afficher le message de succès/erreur après suppression
  const handleDeleteSuccess = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000); // Efface le message après 3 secondes
  };

  const handleDeleteError = (message: string) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(''), 3000); // Efface le message après 3 secondes
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gestion des utilisateurs</h1>
      <button
        onClick={toggleModal}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md"
      >
        Ajouter un utilisateur
      </button>
      
      {successMessage && (
        <div className="mb-4 p-2 bg-green-200 text-green-800 rounded-md">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 p-2 bg-red-200 text-red-800 rounded-md">
          {errorMessage}
        </div>
      )}
{/* 
        onDeleteSuccess={handleDeleteSuccess} // Passe la fonction de succès à UserList
        onDeleteError={handleDeleteError}    // Passe la fonction d'erreur à UserList */}
      <UserList/>
      
      {isModalOpen && (
        <Modal onClick={toggleModal} isBig={true}>

        <AddUser
          // onClose={() => setIsModalOpen(false)}
          // onAddUser={handleAddUser}
        />
        </Modal>
      )}
    </div>
  );
};

export default UserPage;
