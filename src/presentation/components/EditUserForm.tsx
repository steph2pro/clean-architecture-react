// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// interface EditUserFormProps {
//   userId: number;
//   onClose: () => void;
// }

// const EditUserForm: React.FC<EditUserFormProps> = ({ userId, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     prenom: '',
//     email: ''
//   });

//   // Charger les données de l'utilisateur à modifier
//   useEffect(() => {
//     const fetchUser = async () => {
//       const response = await axios.get(`http://localhost:3000/users/${userId}`);
//       setFormData({
//         name: response.data.name,
//         prenom: response.data.prenom,
//         email: response.data.email
//       });
//     };

//     fetchUser();
//   }, [userId]);

//   // Gestion de la soumission du formulaire
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // Envoyer les modifications à l'API
//     await axios.put(`http://localhost:3000/users/${userId}`, formData);
//     onClose(); // Fermer le formulaire après la modification
//   };

//   // Gestion des changements dans le formulaire
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded shadow-lg w-96">
//         <h2 className="text-xl font-semibold mb-4">Modifier l'utilisateur</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-1">Nom</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1">Prénom</label>
//             <input
//               type="text"
//               name="prenom"
//               value={formData.prenom}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="flex justify-end space-x-4">
//             <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//               Enregistrer
//             </button>
//             <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>
//               Annuler
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import { User } from '../../data/models/User';
import { useUpdateUser } from '../hooks/useUpdateUser';

interface EditUserFormProps {
  user: User; // Utilisateur à modifier
  onClose: () => void; // Fonction pour fermer la modale après la modification
}

const EditUserForm: React.FC<EditUserFormProps> = ({ user, onClose }) => {
  // Ajouter `prenom` à l'état du formulaire
  const [formData, setFormData] = useState<Partial<User>>({
    name: '',
    prenom: '', // Initialiser `prenom`
    email: '',
  });

  const mutation = useUpdateUser();

  // Peupler les champs du formulaire avec les données utilisateur
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        prenom: user.prenom, // Récupérer le `prenom` de l'utilisateur
        email: user.email,
      });
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user.id) {
      mutation.mutate({ id: user.id, data: formData });
    }
  };

  // Afficher le message de succès ou d'erreur
  useEffect(() => {
    if (mutation.isSuccess) {
      setTimeout(() => {
        onClose(); // Fermer après succès
      }, 3000); // Attendre 3 secondes pour afficher le message
    }
  }, [mutation.isSuccess, onClose]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
      <h2 className="text-2xl font-bold mb-4">Modifier l'utilisateur</h2>
      <form onSubmit={handleSubmit}>
        {/* Champ pour le nom */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Champ pour le prénom */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            type="text"
            value={formData.prenom || ''}
            onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Champ pour l'email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email || ''}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Boutons d'action */}
        <div className="flex justify-end space-x-2">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md">
            Annuler
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            {mutation.status=='pending' ? 'En cours...' : 'Modifier'}
          </button>
        </div>
      </form>
      {/* Affichage du message de succès */}
      {mutation.isSuccess && (
        <p className="text-green-500 mt-4">Utilisateur modifié avec succès !</p>
      )}
      {/* Affichage du message d'erreur */}
      {mutation.isError && (
        <p className="text-red-500 mt-4">Erreur: {mutation.error.message}</p>
      )}
    </div>
  );
};

export default EditUserForm;

